import { state } from '../../../state';
import { data } from '../../../data';
import { form } from '../../../form';
import { bookmark } from '../../../bookmark';
import { theme } from '../../../theme';
import { toolbar } from '../../../toolbar';
import { grid } from '../../../grid';
import { modal } from '../../../modal';
import { version } from '../../../version';
import { menu } from '../../../menu';
import { icon } from '../../../icon';
import { logo } from '../../../logo';
import { link } from '../../../link';

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

const menuContentToolbar = {};

menuContentToolbar.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Style'));

  const toolbarStyle = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-style-transparent', labelText: 'Transparent', value: 'transparent' },
      { id: 'toolbar-style-Bar', labelText: 'Bar', value: 'bar' }
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

  const toolbarStyleHelper = new Control_helperText({
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

  const toolbarPosition = new Control_radioGrid({
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

  const toolbarPositionHelper = new Control_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  menuContentItem.appendChild(menu.render.component.item.form([
    toolbarPosition.grid(),
    toolbarPositionHelper.wrap()
  ]));

  return menuContentItem;
};

export { menuContentToolbar }
