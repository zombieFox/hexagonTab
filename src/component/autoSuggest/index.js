import './index.css';

import { state } from '../state';
import { bookmark, currentBookmarkForm } from '../bookmark';
import { fontawesome } from '../fontawesome';

import { Button } from '../button';
import { ControlModule_text } from '../control';

import { ifValidString } from '../../utility/ifValidString';
import { trimString } from '../../utility/trimString';
import { node } from '../../utility/node';

const Suggest = function({ input = false, widthElement = false, type = false, postFocus = false, action = false } = {}) {
  this.suggestPanel = false;

  this.input = input;

  this.timer = false;

  this.open = () => {
    state.get.current().autoSuggest = true;
    this.render.open();
  };

  this.close = () => {
    state.get.current().autoSuggest = false;
    this.render.close();
  };

  this.searchTerm = () => {
    return trimString(this.input.value).toLowerCase();
  };

  this.suggestItems = () => {
    const suggestType = {
      fontawesomeIcon: (string) => {
        if (ifValidString(string)) {

          return fontawesome.filter((item) => {
            let match = false;

            if (item.name.toLowerCase().includes(string) || item.label.toLowerCase().includes(string)) {
              match = true;
            };

            item.search.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              };
            });

            item.styles.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              };
            });

            return match;
          });

        } else {
          return fontawesome;
        };
      }
    };

    return suggestType[type](this.searchTerm());
  };

  this.bind = {};

  this.bind.input = () => {
    this.input.addEventListener('focus', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.render.delay, 300);
    });

    this.input.addEventListener('input', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.render.delay, 300);
    });
  };

  this.bind.navigation = {
    check: (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(this.suggestPanel) && !path.includes(input)) {
        this.close();
      };
    },
    add: () => {
      window.addEventListener('click', this.bind.navigation.check, false);
      window.addEventListener('keydown', this.render.navigateResults, false);
    },
    remove: () => {
      window.removeEventListener('click', this.bind.navigation.check, false);
      window.removeEventListener('keydown', this.render.navigateResults, false);
    }
  };

  this.bind.close = {
    check: (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(this.suggestPanel) && !path.includes(input)) {
        this.close();
      };
    },
    add: () => {
      window.addEventListener('mouseup', this.bind.close.check);
    },
    remove: () => {
      window.removeEventListener('mouseup', this.bind.close.check);
    }
  };

  this.render = {};

  this.render.delay = () => {
    this.open();
  };

  this.render.open = () => {
    let suggestElement;

    const results = this.suggestItems();

    if (results.length > 0) {

      // define the current suggest panel
      if (this.suggestPanel) {
        suggestElement = this.suggestPanel;
        while (this.suggestPanel.lastChild) {
          this.suggestPanel.removeChild(this.suggestPanel.lastChild);
        };
      } else {
        suggestElement = node('div|class:auto-suggest');
        this.suggestPanel = suggestElement;
      };

      // make list
      let suggestList = node('ul|class:auto-suggest-list list-unstyled');
      suggestElement.appendChild(suggestList);

      // position and width
      const box = {
        left: input.getBoundingClientRect().left,
        top: input.getBoundingClientRect().bottom + window.scrollY,
        width: input.getBoundingClientRect().width
      };
      if (widthElement) {
        box.width = widthElement.getBoundingClientRect().width;
        box.left = widthElement.getBoundingClientRect().left;
      };

      suggestElement.style.setProperty('--auto-suggest-top', box.top);
      suggestElement.style.setProperty('--auto-suggest-left', box.left);
      suggestElement.style.setProperty('--auto-suggest-width', box.width);

      this.bind.close.add();
      this.bind.navigation.add();

      suggestElement.close = () => {
        if (suggestElement.classList.contains('is-opaque')) {
          suggestElement.classList.remove('is-opaque');
          suggestElement.classList.add('is-transparent');
        } else {
          suggestElement.remove();
        };
        this.bind.close.remove();
        this.bind.navigation.remove();
      };

      suggestElement.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
          this.remove();
        };
      });

      this.render.populateList(suggestList, results);

      document.querySelector('body').appendChild(suggestElement);

      getComputedStyle(suggestElement).opacity;

      suggestElement.classList.remove('is-transparent');
      suggestElement.classList.add('is-opaque');

      autoSuggest.current = suggestElement;

    } else {

      if (this.suggestPanel) {
        this.suggestPanel.close();
      };

    };
  };

  this.render.close = () => {
    if (this.suggestPanel) {
      this.suggestPanel.close();
      this.suggestPanel = null;
    };
  };

  this.render.populateList = (suggestList, results) => {
    const listType = {
      fontawesomeIcon: () => {
        const successAction = (item) => {
          currentBookmarkForm.updateIcon(item);
          this.close();
          if (postFocus) {
            postFocus.focus();
          };
          if (action) {
            action();
          }
        };

        results.forEach((item, i) => {
          let li = node('li|class:auto-suggest-list-item');

          let resultItem = new Button({
            text: false,
            style: ['link', 'ring'],
            classList: ['auto-suggest-item'],
            func: () => {
              successAction(item);
            }
          });

          let icon = node('span|class:auto-suggest-icon fa-' + item.name);
          if (item.styles.includes('solid')) {
            icon.classList.add('fas');
          } else if (item.styles.includes('brands')) {
            icon.classList.add('fab');
          };

          let text = node('span:' + item.label + '|class:auto-suggest-icon-text');

          resultItem.button.appendChild(icon);
          resultItem.button.appendChild(text);

          li.appendChild(resultItem.button);
          suggestList.appendChild(li);
        });
      }
    };

    listType[type]();
  };

  this.render.navigateResults = (event) => {
    let elementToFocus = null;

    let focusIndex = null;

    const allSuggestItems = this.suggestPanel.querySelectorAll('.auto-suggest-item');

    const columnCount = getComputedStyle(this.suggestPanel.querySelector('.auto-suggest-list')).getPropertyValue('grid-template-columns').split(' ').length;

    const findFocus = () => {
      for (var i = 0; i < allSuggestItems.length; i++) {
        if (allSuggestItems[i] == document.activeElement) {
          focusIndex = i;
        };
      };
    };

    const keyEvents = () => {
      // up
      if (event.keyCode == 38) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex >= columnCount && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - columnCount];
          } else {
            elementToFocus = input;
          };
        };
      };
      // down
      if (event.keyCode == 40) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex < allSuggestItems.length - columnCount) {
            elementToFocus = allSuggestItems[focusIndex + columnCount];
          } else {
            elementToFocus = input;
          };
        };
      };
      // right
      if (event.keyCode == 39 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex >= 0 && focusIndex < allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex + 1];
          } else {
            elementToFocus = input;
          };
        };
      };
      // left
      if (event.keyCode == 37 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex > 0 && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - 1];
          } else {
            elementToFocus = input;
          };
        };
      };
      // tab
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        event.preventDefault();
        elementToFocus = allSuggestItems[0];
      };
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[allSuggestItems.length - 1]) {
        event.preventDefault();
        elementToFocus = postFocus;
        this.close();
      };
      // shift tab
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
        event.preventDefault();
        elementToFocus = input;
      };
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        this.close();
      };
    };

    findFocus();

    keyEvents();

    if (elementToFocus) {
      elementToFocus.focus();
    };
  };

  this.bind.input();
};

const autoSuggest = {};

autoSuggest.close = function() {
  const allSuggest = document.querySelectorAll('.auto-suggest');

  if (allSuggest.length > 0) {
    allSuggest.forEach((item, i) => {
      item.close();
    });

    state.get.current().autoSuggest = false;
  };
};

autoSuggest.init = function() {
  state.get.current().autoSuggest = false;
};

export { Suggest, autoSuggest };
