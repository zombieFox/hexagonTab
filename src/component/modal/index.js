import { state } from '../state';
import { autoSuggest } from '../autoSuggest';
import { pageLock } from '../pageLock';

import { Button } from '../button';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';

import './index.css';

const maxHeadingLength = 50;

let previousModal = null;

const modal = {}

modal.mod = {};

modal.mod.open = function() {
  state.get.current().modal = true;
};

modal.mod.close = function() {
  state.get.current().modal = false;
};

modal.bind = {};

modal.bind.close = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(previousModal) && !path.includes(autoSuggest.current)) {
      modal.close();
    };
  },
  add: function() {
    window.addEventListener('mouseup', modal.bind.close.check);
  },
  remove: function() {
    window.removeEventListener('mouseup', modal.bind.close.check);
  }
};

modal.bind.focus = {
  loop: function(event) {
    const allElements = document.querySelector('.modal').querySelectorAll('[tabindex]');

    const firstElement = allElements[0];

    const lastElement = allElements[allElements.length - 1];

    if (event.keyCode == 9 && event.shiftKey) {

      if (document.activeElement === firstElement) {
        lastElement.focus();

        event.preventDefault();
      }

    } else if (event.keyCode == 9) {

      if (document.activeElement === lastElement) {
        firstElement.focus();

        event.preventDefault();
      }

    };
  },
  add: function() {
    window.addEventListener('keydown', modal.bind.focus.loop);
  },
  remove: function() {
    window.removeEventListener('keydown', modal.bind.focus.loop);
  }
};

modal.render = {};

modal.render.toggle = function(options) {
  if (state.get.current().modal) {
    render.open(options);
  } else {
    render.close();
  };
};

modal.render.close = function() {
  var allModal = document.querySelectorAll('.modal');
  if (allModal[0]) {
    for (var i = 0; i < allModal.length; i++) {
      allModal[i].close();
    };
  };
  previousModal = null;
};

modal.render.open = function({ heading = 'Heading', content = 'Body', successAction = false, cancelAction = false, dismissAction = false, actionText = 'OK', cancelText = 'Cancel', size = 'medium', width = false, maxHeight = false, overscroll = false } = {}) {

  if (previousModal != null) {
    modal.render.close();
  };

  modal.bind.focus.add();

  modal.bind.close.add();

  var modalElement = node('div|class:modal');

  var modalShade = node('div|class:modal-shade');

  if (overscroll) {
    modalElement.classList.add('modal-overscroll');
  };

  if (maxHeight) {
    modalElement.classList.add('modal-max-height');
  };

  var modalContentWrapper = node('div|class:modal-content-wrapper');

  var modalContent = node('div|class:modal-content');

  if (width && typeof width == 'number') {

    modalElement.setAttribute('style', '--modal-size: ' + width + 'em;');

  } else {

    switch (size) {
      case 'small':
        modalElement.setAttribute('style', '--modal-size: var(--modal-small);');
        break;

      case 'medium':
        modalElement.setAttribute('style', '--modal-size: var(--modal-medium);');
        break;

      case 'large':
        modalElement.setAttribute('style', '--modal-size: var(--modal-large);');
        break;
    };

  };

  modalElement.close = () => {
    if (modalShade.classList.contains('is-opaque')) {
      modalShade.classList.remove('is-opaque');
      modalShade.classList.add('is-transparent');
    } else {
      modalShade.remove();
    };

    if (modalElement.classList.contains('is-opaque')) {
      modalElement.classList.remove('is-opaque');
      modalElement.classList.add('is-transparent');
    } else {
      modalElement.remove();
    };

    modal.bind.focus.remove();

    modal.bind.close.remove();

    if (dismissAction) {
      dismissAction();
    };
  };

  const modalBody = node('div|class:modal-body');

  const modalControls = node('div|class:modal-controls form-group');

  const modalAction = new Button({
    text: actionText,
    style: ['line'],
    iconName: false,
    block: true,
    classList: ['modal-button'],
    func: () => {
      if (successAction) {
        successAction();
      };
      modal.close();
    }
  });

  const modalCancel = new Button({
    text: cancelText,
    style: ['line'],
    iconName: false,
    block: true,
    classList: ['modal-button'],
    func: () => {
      if (cancelAction) {
        cancelAction();
      };
      modal.close();
    }
  });

  modalControls.appendChild(modalCancel.button);

  modalControls.appendChild(modalAction.button);

  let modalHeading = null;

  let headingText = null;

  if (heading && isValidString(heading)) {
    if (heading.length > maxHeadingLength) {
      heading = heading.substring(0, maxHeadingLength).replace(/\s+$/, '') + '...';
    };

    modalHeading = node('div|class:modal-heading');

    headingText = complexNode({
      tag: 'h1',
      text: heading,
      attr: [{
        key: 'tabindex',
        value: 1
      }, {
        key: 'class',
        value: 'modal-heading-text'
      }]
    });

    modalHeading.appendChild(headingText);

    modalContent.appendChild(modalHeading);
  };

  if (content) {
    if (typeof content == 'string') {
      const container = node('div|class:modal-container,tabindex:1');

      const para = complexNode({
        tag: 'p',
        text: content
      });

      container.appendChild(para);

      modalBody.appendChild(container);
    } else {
      modalBody.appendChild(content);
    };
  };

  modalContent.appendChild(modalBody);

  modalContentWrapper.appendChild(modalContent);

  modalElement.appendChild(modalContentWrapper);

  modalElement.appendChild(modalControls);

  modalElement.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
      this.remove();
    };
  });

  modalShade.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
      this.remove();
    };
  });

  previousModal = modalElement;

  const body = document.querySelector('body');

  body.appendChild(modalShade);

  getComputedStyle(modalShade).opacity;

  modalShade.classList.remove('is-transparent');

  modalShade.classList.add('is-opaque');

  body.appendChild(modalElement);

  getComputedStyle(modalElement).opacity;

  modalElement.classList.remove('is-transparent');

  modalElement.classList.add('is-opaque');

  if (heading) {
    headingText.focus(this);
  } else if (content) {
    container.focus(this);
  };
};

modal.open = function(options) {
  modal.mod.open();
  modal.render.open(options);
  pageLock.render();
};

modal.close = function() {
  modal.mod.close();
  modal.render.close();
  pageLock.render();
};

modal.init = function() {
  modal.close();
};

export { modal };
