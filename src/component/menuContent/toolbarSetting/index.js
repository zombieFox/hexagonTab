import { state } from '../../state';
import { data } from '../../data';
import { toolbar } from '../../toolbar';



import { Control_helperText } from '../../control/helperText';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';

const toolbarSetting = {};

toolbarSetting.control = {
  size: {},
  location: {},
  position: {},
  controls: {}
};

toolbarSetting.size = (parent) => {

  toolbarSetting.control.size = new Control_slider({
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
      toolbarSetting.control.size.wrap()
    ])
  );

};

toolbarSetting.controls = (parent) => {

  toolbarSetting.control.controls.accent = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-accent-show',
    path: 'toolbar.accent.show',
    labelText: 'Show Accent control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  toolbarSetting.control.controls.add = new Control_checkbox({
    object: state.get.current(),
    id: 'toolbar-add-show',
    path: 'toolbar.add.show',
    labelText: 'Show Add control',
    action: () => {
      toolbar.current.update.control();
      data.save();
    }
  });

  toolbarSetting.control.controls.edit = new Control_checkbox({
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
      toolbarSetting.control.controls.accent.wrap(),
      toolbarSetting.control.controls.add.wrap(),
      toolbarSetting.control.controls.edit.wrap()
    ])
  );

};

toolbarSetting.position = (parent) => {

  toolbarSetting.control.positionElement = new Control_radioGrid({
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
      toolbar.current.assemble();
      toolbar.current.update.position();
      toolbar.current.update.style();
      data.save();
    }
  });

  toolbarSetting.control.positionElementHelper = new Control_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  parent.appendChild(
    node('div', [
      toolbarSetting.control.positionElement.wrap(),
      toolbarSetting.control.positionElementHelper.wrap()
    ])
  );

};

export { toolbarSetting };
