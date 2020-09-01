import { node } from './node.js';
import { icon } from './icon.js';

const button = {};

button.render = function({ text = 'Button', srOnly = false, iconName = false, block = false, size = false, style = [], title = false, classList = [], func = false } = {}) {
  const button = node('button|class:button,tabindex:1,type:button');

  if (text) {
    const buttonText = node('span:' + text + '|class:button-text');
    if (srOnly) {
      buttonText.classList.add('sr-only');
    };
    button.appendChild(buttonText);
  };

  if (iconName) {
    button.appendChild(icon.render(iconName));
  };

  if (block) {
    button.classList.add('button-block');
  };

  switch (size) {
    case 'small':
      button.classList.add('button-small');
      break;

    case 'large':
      button.classList.add('button-large');
      break;
  };

  if (style.length > 0) {
    style.forEach((item, i) => {
      switch (item) {
        case 'link':
          button.classList.add('button-link');
          break;

        case 'line':
          button.classList.add('button-line');
          break;

        case 'ring':
          button.classList.add('button-ring');
          break;
      };
    });
  };

  if (title) {
    button.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      button.classList.add(item);
    });
  };

  if (func) {
    button.addEventListener('click', function(event) {
      func();
    });
  };

  return button;
};

export { button };
