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

const menuContentData = {};

menuContentData.import = function() {
  const menuContentItem = node('div|id:menu-content-item-import,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Import'));

  const importFeedback = form.render.feedback();

  data.render.feedback.empty(importFeedback);

  const importButton = new ControlModule_inputButton({
    id: 'name',
    type: 'file',
    inputHide: true,
    labelText: 'Import data',
    action: () => {
      data.import(importButton.input, importFeedback)
    }
  });

  const importHelper = new ControlModul_helperText({
    text: ['Restore a previously exported ' + data.saveName + ' backup.']
  });

  menuContentItem.appendChild(
    menu.render.component.item.form([
      importButton.wrap(),
      importHelper.wrap(),
      form.render.wrap([
        importFeedback
      ])
    ])
  );

  return menuContentItem;
};

menuContentData.backup = function() {
  const menuContentItem = node('div|id:menu-content-item-backup,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Backup'));

  const exportButton = new Button({
    text: 'Export data',
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  const exportHelper = new ControlModul_helperText({
    text: ['Download a backup of your ' + data.saveName + ' Bookmarks and Settings.', 'This file can later be imported on this or another deivce.']
  });

  menuContentItem.appendChild(
    menu.render.component.item.form([
      exportButton.wrap(),
      exportHelper.wrap()
    ])
  );

  return menuContentItem;
};

menuContentData.clear = function() {
  const menuContentItem = node('div|id:menu-content-item-clear,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Clear'));

  const clearButton = new Button({
    text: 'Clear all data',
    style: ['line'],
    func: () => {
      menu.close();
      data.render.clear();
    }
  });

  const clearHelper = new ControlModul_helperText({
    text: ['Wipe all data and restore ' + data.saveName + ' to the default state.']
  });

  menuContentItem.appendChild(
    menu.render.component.item.form([
      clearButton.wrap(),
      clearHelper.wrap()
    ])
  );

  return menuContentItem;
};

export { menuContentData }
