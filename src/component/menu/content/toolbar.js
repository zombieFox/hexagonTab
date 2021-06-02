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
import { ControlModul_helperText, ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_radioGrid, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from '../../control';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const menuContentToolbar = {};

menuContentToolbar.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Style'));

  const toolbarStyle = new ControlModule_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-style-Bar', labelText: 'Bar', value: 'bar' },
      { id: 'toolbar-style-transparent', labelText: 'Transparent', value: 'transparent' }
    ],
    groupName: 'toolbar-style',
    path: 'toolbar.style',
    action: () => {
      toolbar.render.class();
      toolbar.bar.clear();
      toolbar.bar.render();
      toolbar.bar.active();
      toolbar.render.style.update();
      data.save();
    }
  });

  const toolbarStyleHelper = new ControlModul_helperText({
    text: ['Use the Bar style if the Toolbar is not visible with your Background.']
  });

  menuContentItem.appendChild(menu.render.component.item.form([
    toolbarStyle.inline(),
    toolbarStyleHelper.wrap()
  ]));

  return menuContentItem;
};

menuContentToolbar.position = function() {
  const menuContentItem = node('div|id:menu-content-item-position,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Position'));

  const toolbarPosition = new ControlModule_radioGrid({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-position-top-left', labelText: 'Top left', value: 'top-left', position: 1 },
      { id: 'toolbar-position-top-right', labelText: 'Top right', value: 'top-right', position: 2 },
      { id: 'toolbar-position-bottom-left', labelText: 'Bottom left', value: 'bottom-left', position: 3 },
      { id: 'toolbar-position-bottom-right', labelText: 'Bottom right', value: 'bottom-right', position: 4 }
    ],
    label: 'Toolbar position',
    groupName: 'toolbar-position',
    path: 'toolbar.position',
    gridSize: '2x2',
    action: () => {
      toolbar.render.class();
      toolbar.bar.clear();
      toolbar.bar.render();
      toolbar.bar.active();
      toolbar.render.style.update();
      data.save();
    }
  });

  const toolbarPositionHelper = new ControlModul_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  menuContentItem.appendChild(menu.render.component.item.form([
    toolbarPosition.grid(),
    toolbarPositionHelper.wrap()
  ]));

  return menuContentItem;
};

export { menuContentToolbar }
