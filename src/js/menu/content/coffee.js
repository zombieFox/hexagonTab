import { state } from '../../state.js';
import { data } from '../../data.js';
import { grid } from '../../grid.js';
import { menu } from '../../menu.js';
import { theme } from '../../theme.js';
import { bookmark } from '../../bookmark.js';
import { modal } from '../../modal.js';
import { version } from '../../version.js';
import { node } from '../../utilities/node.js';
import { complexNode } from '../../utilities/complexNode.js';
import { icon } from '../../utilities/icon.js';
import { logo } from '../../utilities/logo.js';
import { form } from '../../utilities/form.js';
import { Button } from '../../utilities/button.js';
import { link } from '../../utilities/link.js';
import { ControlModule_text, ControlModule_inputButton, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color } from '../../control.js';

const menuContentCoffee = {};

menuContentCoffee.fuel = function() {
  const menuContentItem = node('div|class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Coffee for fuel'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      complexNode({
        tag: 'p',
        text: data.saveName + ' is free, appreciation is welcome in the form of coffee!'
      }),
      node('hr'),
      form.render.wrap([
        link.render({
          text: 'Buy me a coffee',
          href: 'https://www.buymeacoffee.com/zombieFox',
          image: 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg',
          linkButton: true,
          style: ['line'],
          classList: ['button-line', 'button-large', 'px-4', 'py-3']
        })
      ])
    ])
  );

  return menuContentItem;
};

export { menuContentCoffee }
