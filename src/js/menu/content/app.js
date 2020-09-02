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
