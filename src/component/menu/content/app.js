import { state } from '../../state';
import { data } from '../../data';
import { form } from '../../form';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { toolbar } from '../../toolbar';
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

const menuContentApp = {};

menuContentApp.splash = function() {
  const menuContentItem = node('div|class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header(data.saveName));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      node('div|class:version', [
        logo.render(),
        node('div|class:version-details', [
          node('p:Version ' + version.number + '|class:version-number mb-0'),
          node('p:' + version.name + '|class:version-name small')
        ])
      ]),
      node('hr'),
      complexNode({
        tag: 'p',
        text: 'Project repository on ',
        node: [link.render({
          text: 'GitHub.',
          href: 'https://github.com/zombieFox/' + data.saveName,
          openNew: true
        })]
      }),
      node('hr'),
      complexNode({
        tag: 'p',
        text: 'For feedback and support, submit an ',
        node: [link.render({
          text: 'Issue.',
          href: 'https://github.com/zombieFox/' + data.saveName + '/issues',
          openNew: true
        })]
      })
    ])
  );

  return menuContentItem;
};

export { menuContentApp }
