import './index.css';

import { icon } from '../icon';
import { form } from '../form';

import { node } from '../../utility/node';

const Button = function({ text = 'Button', srOnly = false, iconName = false, block = false, size = false, style = [], title = false, classList = [], func = false } = {}) {
  this.button = node('button|class:button,tabindex:1,type:button');

  if (text) {
    const buttonText = node('span:' + text + '|class:button-text');

    if (srOnly) {
      buttonText.classList.add('sr-only');
    };

    this.button.appendChild(buttonText);
  };

  if (iconName) {
    this.button.appendChild(icon.render(iconName));
  };

  if (block) {
    this.button.classList.add('button-block');
  };

  switch (size) {
    case 'small':
      this.button.classList.add('button-small');
      break;

    case 'large':
      this.button.classList.add('button-large');
      break;
  };

  if (style.length > 0) {
    style.forEach((item, i) => {
      switch (item) {
        case 'link':
          this.button.classList.add('button-link');
          break;

        case 'line':
          this.button.classList.add('button-line');
          break;

        case 'ring':
          this.button.classList.add('button-ring');
          break;
      };
    });
  };

  if (title) {
    this.button.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (func) {
    this.button.addEventListener('click', function(event) {
      func();
    });
  };

  this.disable = () => {
    this.button.disabled = true;
  };

  this.enable = () => {
    this.button.disabled = false;
  };

  this.deactive = () => {
    this.button.classList.remove('active');
  };

  this.active = () => {
    this.button.classList.add('active');
  };

  this.wrap = () => {
    return form.render.wrap([
      this.button
    ])
  };
};

export { Button };
