import { state } from './state.js';
import { autoSuggest } from './autoSuggest.js';
import { node } from './utilities/node.js';
import { Button } from './utilities/button.js';
import { complexNode } from './utilities/complexNode.js';

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

modal.render.open = function({ heading = 'Heading', content = 'Body', successAction = false, cancelAction = false, dismissAction = false, actionText = 'OK', cancelText = 'Cancel', size = 'medium', width = false } = {}) {

  if (previousModal != null) {
    modal.render.close();
  };

  modal.bind.focus.add();
  modal.bind.close.add();

  var modalElement = node('div|class:modal');
  var modalWrapper = node('div|class:modal-wrapper');
  if (width && typeof width == 'number') {
    modalElement.setAttribute('style', '--modal-size: ' + width + 'em;');
  } else if (size == 'small') {
    modalElement.setAttribute('style', '--modal-size: var(--modal-small);');
  } else if (size == 'medium') {
    modalElement.setAttribute('style', '--modal-size: var(--modal-medium);');
  } else if (size == 'large') {
    modalElement.setAttribute('style', '--modal-size: var(--modal-large);');
  };

  modalElement.close = () => {
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

  const modalBodySpacer = node('div|class:modal-body-spacer');

  const modalControls = node('div|class:modal-controls form-group');

  const modalAction = new Button({
    text: actionText,
    iconName: false,
    block: true,
    style: ['line'],
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
    iconName: false,
    block: true,
    style: ['line'],
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

  if (heading) {
    if (heading.length > maxHeadingLength) {
      heading = heading.substring(0, maxHeadingLength).replace(/\s+$/, '') + '...';
    };
    var modalHeading = complexNode({
      tag: 'h1',
      text: heading,
      attr: [{
        key: 'class',
        value: 'modal-heading'
      }, {
        key: 'tabindex',
        value: 1
      }]
    });
    modalBodySpacer.appendChild(modalHeading);
  };

  if (content) {
    if (typeof content == 'string') {
      var container = node('div|class:modal-container,tabindex:1');
      var para = complexNode({
        tag: 'p',
        text: content
      });
      container.appendChild(para);
      modalBodySpacer.appendChild(container);
    } else {
      modalBodySpacer.appendChild(content);
    };
  };

  modalBody.appendChild(modalBodySpacer);
  modalWrapper.appendChild(modalBody);
  modalWrapper.appendChild(modalControls);
  modalElement.appendChild(modalWrapper);

  modalElement.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
      this.remove();
    };
  });

  previousModal = modalElement;

  document.querySelector('body').appendChild(modalElement);

  getComputedStyle(modalElement).opacity;

  modalElement.classList.remove('is-transparent');
  modalElement.classList.add('is-opaque');

  if (heading) {
    modalHeading.focus(this);
  } else if (content) {
    container.focus(this);
  };
};

modal.open = function(options) {
  modal.mod.open();
  modal.render.open(options);
};

modal.close = function() {
  modal.mod.close();
  modal.render.close();
};

modal.init = function() {
  modal.close();
};

export { modal };
