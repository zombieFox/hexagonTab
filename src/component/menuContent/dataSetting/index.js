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
import { clearChildNode } from '../../../utility/clearChildNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const dataSetting = {};

dataSetting.import = (parent) => {

  const importFeedback = form.feedback();

  data.render.feedback.empty(importFeedback);

  const importButton = new Control_inputButton({
    id: 'import-data',
    type: 'file',
    inputHide: true,
    labelText: 'Import data',
    inputButtonStyle: ['line'],
    action: () => {
      data.import(importButton.input, importFeedback)
    }
  });

  const importHelper = new Control_helperText({
    text: ['Restore a previously exported ' + data.saveName + ' backup.']
  });

  parent.appendChild(
    node('div', [
      importButton.wrap(),
      importHelper.wrap(),
      form.wrap({
        children: [
          importFeedback
        ]
      })
    ])
  );

};

dataSetting.backup = (parent) => {

  const exportButton = new Button({
    text: 'Export data',
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  const exportHelper = new Control_helperText({
    text: ['Download a backup of your ' + data.saveName + ' Bookmarks and Settings.', 'This file can later be imported on this or another deivce.']
  });

  parent.appendChild(
    node('div', [
      exportButton.wrap(),
      exportHelper.wrap()
    ])
  );

};

dataSetting.clear = (parent) => {

  const clearButton = new Button({
    text: 'Clear all data',
    style: ['line'],
    func: () => {
      menu.close();
      data.render.clear();
    }
  });

  const clearHelper = new Control_helperText({
    text: ['Wipe all data and restore ' + data.saveName + ' to the default state.']
  });

  parent.appendChild(
    node('div', [
      clearButton.wrap(),
      clearHelper.wrap()
    ])
  );

};

export { dataSetting }
