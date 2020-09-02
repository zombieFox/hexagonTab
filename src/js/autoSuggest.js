import { state } from './state';
import { bookmark, currentBookmarkForm } from './bookmark';
import { fontawesome } from './fontawesome';
import { node } from './utilities/node.js';
import { Button } from './utilities/button.js';
import { ifValidString } from './utilities/ifValidString.js';
import { trimString } from './utilities/trimString.js';

let timer = null;

let currentInputOptions = {};

let autoSuggestActive = false;

const autoSuggest = {}

autoSuggest.current = null;

autoSuggest.mod = {};

autoSuggest.mod.open = function() {
  state.get.current().autoSuggest = true;
};

autoSuggest.mod.close = function() {
  state.get.current().autoSuggest = false;
};

autoSuggest.mod.suggestItems = function() {
  var searchTerm = trimString(currentInputOptions.input.value).toLowerCase();

  var suggestType = {
    fontawesomeIcon: function() {
      if (ifValidString(searchTerm)) {

        return fontawesome.filter(function(item) {
          let match = false;

          if (item.name.toLowerCase().includes(searchTerm) || item.label.toLowerCase().includes(searchTerm)) {
            match = true;
          };

          item.search.forEach((item, i) => {
            if (item.toLowerCase().includes(searchTerm)) {
              match = true;
            };
          });

          item.styles.forEach((item, i) => {
            if (item.toLowerCase().includes(searchTerm)) {
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

  return suggestType[currentInputOptions.type]();
};

autoSuggest.bind = {};

autoSuggest.bind.input = function({ input = false, anchorElement = false, type = false, postFocus = false } = {}) {
  currentInputOptions = arguments[0];

  if (input) {
    input.addEventListener('focus', function() {
      if (!autoSuggestActive) {
        clearTimeout(timer);
        timer = setTimeout(autoSuggest.render.delay, 300);
      };
    });

    input.addEventListener('input', function() {
      clearTimeout(timer);
      timer = setTimeout(autoSuggest.render.delay, 300);
    });
  };
};

autoSuggest.bind.navigation = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(autoSuggest.current) && !path.includes(currentInputOptions.input)) {
      autoSuggest.close();
    };
  },
  add: function() {
    window.addEventListener('click', autoSuggest.bind.navigation.check, false);
    window.addEventListener('keydown', autoSuggest.render.navigateResults, false);
  },
  remove: function() {
    window.removeEventListener('click', autoSuggest.bind.navigation.check, false);
    window.removeEventListener('keydown', autoSuggest.render.navigateResults, false);
  }
};

autoSuggest.bind.close = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(autoSuggest.current) && !path.includes(currentInputOptions.input)) {
      autoSuggest.close();
    };
  },
  add: function() {
    window.addEventListener('mouseup', autoSuggest.bind.close.check);
  },
  remove: function() {
    window.removeEventListener('mouseup', autoSuggest.bind.close.check);
  }
};

autoSuggest.render = {};

autoSuggest.render.delay = function() {
  autoSuggest.mod.open();
  autoSuggest.render.open();
};

autoSuggest.render.open = function() {
  const suggestItems = autoSuggest.mod.suggestItems();

  let autoSuggestElement;

  if (suggestItems.length > 0) {

    if (autoSuggest.current) {
      autoSuggestElement = autoSuggest.current;
      while (autoSuggestElement.lastChild) {
        autoSuggestElement.removeChild(autoSuggestElement.lastChild);
      };
    } else {
      autoSuggestElement = node('div|class:auto-suggest');
    };

    let autoSuggestList = node('ul|class:auto-suggest-list list-unstyled');

    autoSuggestElement.appendChild(autoSuggestList);

    const box = {
      left: currentInputOptions.input.getBoundingClientRect().left,
      top: currentInputOptions.input.getBoundingClientRect().bottom + window.scrollY,
      width: currentInputOptions.input.getBoundingClientRect().width
    };
    if (currentInputOptions.anchorElement) {
      box.width = currentInputOptions.anchorElement.getBoundingClientRect().width;
      box.left = currentInputOptions.anchorElement.getBoundingClientRect().left;
    };

    autoSuggestElement.style.setProperty('--auto-suggest-top', box.top);
    autoSuggestElement.style.setProperty('--auto-suggest-left', box.left);
    autoSuggestElement.style.setProperty('--auto-suggest-width', box.width);

    autoSuggest.bind.close.add();
    autoSuggest.bind.navigation.add();

    autoSuggestElement.close = () => {
      if (autoSuggestElement.classList.contains('is-opaque')) {
        autoSuggestElement.classList.remove('is-opaque');
        autoSuggestElement.classList.add('is-transparent');
      } else {
        autoSuggestElement.remove();
      };
      autoSuggest.bind.close.remove();
      autoSuggest.bind.navigation.remove();
    };

    autoSuggestElement.addEventListener('transitionend', function(event) {
      if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
        this.remove();
      };
    });

    autoSuggest.render.populateList(autoSuggestList, suggestItems);

    document.querySelector('body').appendChild(autoSuggestElement);

    getComputedStyle(autoSuggestElement).opacity;

    autoSuggestElement.classList.remove('is-transparent');
    autoSuggestElement.classList.add('is-opaque');

    autoSuggest.current = autoSuggestElement;

  } else {

    if (autoSuggest.current) {
      autoSuggest.close();
    };

  };
};

autoSuggest.render.populateList = function(target, results) {
  var listType = {
    fontawesomeIcon: function() {

      results.forEach((item, i) => {
        let li = node('li|class:auto-suggest-list-item');

        let resultItem = new Button({
          text: false,
          style: ['link', 'ring'],
          classList: ['auto-suggest-item'],
          func: () => {
            currentBookmarkForm.updateIcon(item);
            autoSuggest.close();
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
        target.appendChild(li);
      });

    }
  };

  listType[currentInputOptions.type]();
};

autoSuggest.render.navigateResults = function(event) {
  let elementToFocus = null;

  let focusIndex = null;

  const allSuggestItems = document.querySelectorAll('.auto-suggest-item');

  const columnCount = getComputedStyle(document.querySelector('.auto-suggest-list')).getPropertyValue('grid-template-columns').split(' ').length;

  const findInput = function() {
    if (event.target.classList.contains('auto-suggest-input')) {
      currentInputOptions.input = event.target;
    };
  };

  const findFocus = function() {
    for (var i = 0; i < allSuggestItems.length; i++) {
      if (allSuggestItems[i] == document.activeElement) {
        focusIndex = i;
      };
    };
  };

  const keyEvents = function() {
    // up
    if (event.keyCode == 38) {
      event.preventDefault();
      if (focusIndex == null) {
        elementToFocus = allSuggestItems[allSuggestItems.length - 1];
      } else {
        if (focusIndex >= columnCount && focusIndex <= allSuggestItems.length - 1) {
          elementToFocus = allSuggestItems[focusIndex - columnCount];
        } else {
          elementToFocus = currentInputOptions.input;
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
          elementToFocus = currentInputOptions.input;
        };
      };
    };
    // right
    if (event.keyCode == 39 && document.activeElement != currentInputOptions.input) {
      event.preventDefault();
      if (focusIndex == null) {
        elementToFocus = allSuggestItems[0];
      } else {
        if (focusIndex >= 0 && focusIndex < allSuggestItems.length - 1) {
          elementToFocus = allSuggestItems[focusIndex + 1];
        } else {
          elementToFocus = currentInputOptions.input;
        };
      };
    };
    // left
    if (event.keyCode == 37 && document.activeElement != currentInputOptions.input) {
      event.preventDefault();
      if (focusIndex == null) {
        elementToFocus = allSuggestItems[allSuggestItems.length - 1];
      } else {
        if (focusIndex > 0 && focusIndex <= allSuggestItems.length - 1) {
          elementToFocus = allSuggestItems[focusIndex - 1];
        } else {
          elementToFocus = currentInputOptions.input;
        };
      };
    };
    // tab
    if (!event.shiftKey && event.keyCode == 9 && document.activeElement == currentInputOptions.input) {
      event.preventDefault();
      elementToFocus = allSuggestItems[0];
    };
    if (!event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[allSuggestItems.length - 1]) {
      event.preventDefault();
      elementToFocus = currentInputOptions.postFocus;
      render.close();
    };
    // shift tab
    if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
      event.preventDefault();
      elementToFocus = currentInputOptions.input;
    };
    if (event.shiftKey && event.keyCode == 9 && document.activeElement == currentInputOptions.input) {
      render.close();
    };
  };

  findInput();

  findFocus();

  keyEvents();

  if (elementToFocus) {
    elementToFocus.focus();
  };
};

autoSuggest.render.close = function() {
  if (autoSuggest.current) {
    autoSuggest.current.close();
    autoSuggest.current = null;
  };
};

autoSuggest.open = function() {
  autoSuggest.mod.open();
  autoSuggest.render.open();
};

autoSuggest.close = function() {
  autoSuggest.mod.close();
  autoSuggest.render.close();
};

autoSuggest.init = function() {
  autoSuggest.close();
};

export { autoSuggest };
