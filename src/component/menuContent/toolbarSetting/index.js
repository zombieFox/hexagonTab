import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { toolbar } from '../../toolbar';
import { grid } from '../../grid';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_slimSlider } from '../../control/slimSlider';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const toolbarSetting = {};

toolbarSetting.style = (parent) => {

  const toolbarStyle = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'toolbar-style-transparent', labelText: 'Transparent', value: 'transparent' },
      { id: 'toolbar-style-Bar', labelText: 'Bar', value: 'bar' }
    ],
    groupName: 'toolbar-style',
    path: 'toolbar.style',
    action: () => {
      toolbar.current.update.style();
      data.save();
    }
  });

  const toolbarStyleHelper = new Control_helperText({
    text: ['Use the Bar style if the Toolbar is not visible with your Background.']
  });

  parent.appendChild(
    node('div', [
      toolbarStyle.inline(),
      toolbarStyleHelper.wrap()
    ])
  );

};

toolbarSetting.position = (parent) => {

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
      toolbar.current.update.position();
      toolbar.current.update.style();
      data.save();
    }
  });

  const toolbarPositionHelper = new Control_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  parent.appendChild(
    node('div', [
      toolbarPosition.grid(),
      toolbarPositionHelper.wrap()
    ])
  );

};

export { toolbarSetting }
