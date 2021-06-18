import { state } from '../../../state';
import { data } from '../../../data';
import { bookmark } from '../../../bookmark';
import { theme } from '../../../theme';
import { toolbar } from '../../../toolbar';
import { grid } from '../../../grid';
import { version } from '../../../version';
import { menu } from '../../../menu';
import { icon } from '../../../icon';
import { logo } from '../../../logo';
import { link } from '../../../link';

import * as form from '../../../form';

import { Button } from '../../../button';
import { Collapse } from '../../../collapse';

import { Control_helperText } from '../../../control/helperText';
import { Control_inputButton } from '../../../control/inputButton';
import { Control_groupText } from '../../../control/groupText';
import { Control_radio } from '../../../control/radio';
import { Control_radioGrid } from '../../../control/radioGrid';
import { Control_checkbox } from '../../../control/checkbox';
import { Control_slider } from '../../../control/slider';
import { Control_slimSlider } from '../../../control/slimSlider';
import { Control_colorMixer } from '../../../control/colorMixer';
import { Control_color } from '../../../control/color';
import { Control_text } from '../../../control/text';

import { node } from '../../../../utility/node';
import { complexNode } from '../../../../utility/complexNode';

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
      form.wrap({
        children: [
          link.render({
            text: 'Buy me a coffee',
            href: 'https://www.buymeacoffee.com/zombieFox',
            iconName: 'coffee',
            iconPosition: 'left',
            linkButton: true,
            style: ['line'],
            classList: ['button-line', 'button-large', 'px-4', 'py-3']
          })
        ]
      })
    ])
  );

  return menuContentItem;
};

export { menuContentCoffee }
