import { state } from '../state';
import { menu } from '../menu';
import { data } from '../data';
import { bookmark } from '../bookmark';
import { icon } from '../icon';
import { theme } from '../theme';
import { form } from '../form';

import { Button } from '../button';
import { ControlModule_inputButton, ControlModule_color } from '../control';

import { node } from '../../utility/node';

import './index.css';

const toolbar = {};

toolbar.bar = node('div|class:toolbar');

toolbar.edit = false;

toolbar.accent = false;

toolbar.render = {};

toolbar.render.class = function() {
  const html = document.querySelector('html');

  const position = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

  position.forEach((item, i) => {
    html.classList.remove('is-toolbar-position-' + item);
  });

  html.classList.add('is-toolbar-position-' + state.get.current().toolbar.position);

  const style = ['bar', 'transparent'];

  style.forEach((item, i) => {
    html.classList.remove('is-toolbar-style-' + item);
  });

  html.classList.add('is-toolbar-style-' + state.get.current().toolbar.style);
};

toolbar.bar.render = function() {

  const accentOptions = {
    object: state.get.current(),
    path: 'theme.accent.rgb',
    id: 'theme-accent-quick',
    type: 'color',
    labelText: 'Accent colour',
    srOnly: true,
    inputButton: ['dot', 'accent'],
    inputButtonClassList: ['toolbar-item'],
    action: () => {
      theme.render.accent();
      data.save();
    }
  };

  const addOptions = {
    text: 'Add a bookmark',
    srOnly: true,
    iconName: 'add',
    classList: ['toolbar-item'],
    func: function() {
      bookmark.add.open();
    }
  };

  const editOptions = {
    text: 'Enter edit bookmark mode',
    srOnly: true,
    iconName: 'edit',
    classList: ['toolbar-item'],
    func: function() {
      bookmark.edit.toggle();
      toolbar.bar.active();
      data.save();
    }
  };

  const settingsMenuOptions = {
    text: 'Open settings menu',
    srOnly: true,
    iconName: 'settings',
    classList: ['toolbar-item'],
    func: function() {
      menu.toggle();
    }
  };

  switch (state.get.current().toolbar.style) {
    case 'bar':
      addOptions.style = ['line'];
      editOptions.style = ['line'];
      settingsMenuOptions.style = ['line'];
      accentOptions.inputButton.push('line');
      break;

    case 'transparent':
      addOptions.style = ['link'];
      editOptions.style = ['link'];
      settingsMenuOptions.style = ['link'];
      accentOptions.inputButton.push('link');
      break;
  };

  const accent = new ControlModule_inputButton(accentOptions);

  const add = new Button(addOptions);

  const edit = new Button(editOptions);

  const settingsMenu = new Button(settingsMenuOptions);

  toolbar.edit = edit;

  toolbar.accent = accent;

  const toolbarControl = node('div|class:toolbar-control');

  let formGroup;

  switch (state.get.current().toolbar.position) {
    case 'top-right':
    case 'bottom-right':
      formGroup = form.render.group();

      break;

    case 'top-left':
    case 'bottom-left':
      formGroup = form.render.group({
        reverse: true
      });

      break;
  };

  formGroup.appendChild(accent.button);

  formGroup.appendChild(add.button);

  formGroup.appendChild(edit.button);

  formGroup.appendChild(settingsMenu.button);

  toolbarControl.appendChild(formGroup);

  toolbar.bar.appendChild(toolbarControl);

  document.querySelector('body').appendChild(toolbar.bar);

};

toolbar.bar.clear = function() {
  while (toolbar.bar.lastChild) {
    toolbar.bar.removeChild(toolbar.bar.lastChild);
  };
};

toolbar.bar.active = function() {
  if (state.get.current().bookmark.edit) {
    toolbar.edit.active();
  } else {
    toolbar.edit.deactive();
  };
};

toolbar.init = function() {
  toolbar.render.class();
  toolbar.bar.render();
  toolbar.bar.active();
};

export { toolbar }
