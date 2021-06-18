import { state } from '../state';
import { pageLock } from '../pageLock';

import { Button } from '../button';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

export const Modal = function({
  heading = false,
  content = false,
  successText = 'OK',
  successAction = false,
  cancelText = 'Cancel',
  cancelAction = false,
  dismissAction = false,
  size = 'medium',
  width = false,
  maxHeight = false,
  overscroll = false,
  maxHeadingLength = 50
} = {}) {

  this.element = {
    modal: node('div|class:modal'),
    heading: node('div|class:modal-heading'),
    content: {
      wrapper: node('div|class:modal-content-wrapper'),
      content: node('div|class:modal-content')
    },
    control: node('div|class:modal-control')
  };

  this.shade = new Shade();

  this.open = () => {

    const body = document.querySelector('body');

    this.element.modal.classList.add('is-transparent');

    this.element.modal.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.modal).opacity == 0) {

        body.removeChild(this.element.modal);

      };

    });

    this.shade.open();

    this.style();

    this.assemble();

    body.appendChild(this.element.modal);

    getComputedStyle(this.element.modal).opacity;

    this.element.modal.classList.remove('is-transparent');

    this.element.modal.classList.add('is-opaque');

    this.bind.add();

    this.focus.add();

  };

  this.close = () => {

    this.element.modal.classList.remove('is-opaque');

    this.element.modal.classList.add('is-transparent');

    this.bind.remove();

    this.focus.remove();

    this.shade.close();

    if (dismissAction) {
      dismissAction();
    };

  };

  this.bind = {
    add: () => {

      window.addEventListener('mouseup', this.clickOut);

      window.addEventListener('keydown', this.esc);

    },
    remove: () => {

      window.removeEventListener('mouseup', this.clickOut);

      window.removeEventListener('keydown', this.esc);

    }
  };

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    const suggest = document.querySelector('.suggest');

    if (!path.includes(this.element.modal) && !path.includes(suggest)) {
      this.close();
    };

  };

  this.esc = (event) => {

    if ((event.keyCode == 27)) {

      event.preventDefault();

      this.close();

    };

  };

  this.style = () => {
    if (typeof width === 'number') {

      this.element.modal.style.setProperty('--modal-width', width);

    } else {

      switch (width) {
        case 'small':
          this.element.modal.style.setProperty('--modal-width', 30);
          break;

        default:
        case 'medium':
          this.element.modal.style.setProperty('--modal-width', 50);
          break;

        case 'large':
          this.element.modal.style.setProperty('--modal-width', 70);
          break;

      };

    };
  };

  this.focus = {
    loop: (event) => {

      const allFocusElement = document.querySelector('.modal').querySelectorAll('[tabindex]');

      const firstElement = allFocusElement[0];

      const lastElement = allFocusElement[allFocusElement.length - 1];

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
    add: () => { window.addEventListener('keydown', this.focus.loop); },
    remove: () => { window.removeEventListener('keydown', this.focus.loop); }
  };

  this.successButton = new Button({
    text: successText,
    block: false,
    style: ['line'],
    classList: ['modal-control-button'],
    func: () => {

      if (successAction) {
        successAction();
      };

      this.close();

    }
  });

  this.cancelButton = new Button({
    text: cancelText,
    block: false,
    style: ['line'],
    classList: ['modal-control-button'],
    func: () => {

      if (cancelAction) {
        cancelAction();
      };

      this.close();

    }
  });

  this.assemble = () => {

    if (heading && isValidString(heading)) {

      let headingString = heading;

      if (headingString.length > maxHeadingLength) {
        headingString = trimString(headingString.substring(0, maxHeadingLength)) + '...';
      };

      this.element.heading.appendChild(complexNode({
        tag: 'h1',
        text: headingString,
        attr: [{
          key: 'tabindex',
          value: 1
        }, {
          key: 'class',
          value: 'modal-heading-text'
        }]
      }));

      this.element.content.content.appendChild(this.element.heading);

    };

    if (content) {
      if (typeof content == 'string') {

        const para = complexNode({ tag: 'p', text: content });

        this.element.content.content.appendChild(para);

      } else {

        this.element.content.content.appendChild(content);

      };
    };

    this.element.content.wrapper.appendChild(this.element.content.content);

    this.element.modal.appendChild(this.element.content.wrapper);

    this.element.control.appendChild(this.cancelButton.button);

    this.element.control.appendChild(this.successButton.button);

    this.element.modal.appendChild(this.element.control);

    if (overscroll) {
      this.element.modal.classList.add('modal-overscroll');
    };

    if (maxHeight) {
      this.element.modal.classList.add('modal-max-height');
    };

  };

};
