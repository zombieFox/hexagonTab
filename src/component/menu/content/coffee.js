import { state } from '../../state';
import { data } from '../../data';
import { form } from '../../form';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { grid } from '../../grid';
import { modal } from '../../modal';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { ControlModul_helperText, ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from '../../control';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

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
          iconName: 'coffee',
          iconPosition: 'left',
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
