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

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Link } from '../../link';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_sliderDouble } from '../../control/sliderDouble';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';
import { Control_textarea } from '../../control/textarea';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const toolbarSetting = {};

toolbarSetting.size = (parent) => {

  const toolbarSize = new Control_slider({
    object: state.get.current(),
    path: 'toolbar.size',
    id: 'toolbar-size',
    labelText: 'Toolbar size',
    value: state.get.current().toolbar.size,
    defaultValue: state.get.default().toolbar.size,
    min: state.get.minMax().toolbar.size.min,
    max: state.get.minMax().toolbar.size.max,
    action: () => {
      applyCSSVar('toolbar.size');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      toolbarSize.wrap()
    ])
  );

};

toolbarSetting.controls = (parent) => {

  const toolbarAccentShow = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-accent-show',
    path: 'toolbar.accent.show',
    labelText: 'Show Accent control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  const toolbarAddShow = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-add-show',
    path: 'toolbar.add.show',
    labelText: 'Show Add control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  const toolbarEditShow = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-edit-show',
    path: 'toolbar.edit.show',
    labelText: 'Show Edit control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      toolbarAccentShow.wrap(),
      toolbarAddShow.wrap(),
      toolbarEditShow.wrap()
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
      toolbarPosition.wrap(),
      toolbarPositionHelper.wrap()
    ])
  );

};

export { toolbarSetting }
