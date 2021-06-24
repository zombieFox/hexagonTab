import { menu } from '../menu';

import { Button } from '../button';

import { node } from '../../utility/node';

import './index.css';

const MenuClose = function() {

  this.element = {
    close: node('div|class:menu-close')
  };

  this.button = new Button({
    text: 'Close settings menu',
    srOnly: true,
    style: ['link'],
    iconName: 'cross',
    classList: ['menu-close-button'],
    func: function() {
      menu.close();
    }
  });

  this.assemble = () => {

    this.element.close.appendChild(this.button.button);

  };

  this.close = () => {

    this.assemble();

    return this.element.close;

  };

};

export { MenuClose };
