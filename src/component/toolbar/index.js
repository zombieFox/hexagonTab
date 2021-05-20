import './index.css';

import { state } from '../state';
import { menu } from '../menu';
import { data } from '../data';
import { bookmark } from '../bookmark';
import { icon } from '../icon';

import { Button } from '../button';

import { node } from '../../utility/node';

const toolbar = {};

toolbar.button = {
  add: new Button({
    text: 'Add a bookmark',
    srOnly: true,
    iconName: 'add',
    style: ['link'],
    classList: ['toolbar-button'],
    func: function() {
      bookmark.add.open();
    }
  }),
  edit: new Button({
    text: 'Enter edit bookmark mode',
    srOnly: true,
    iconName: 'edit',
    style: ['link'],
    classList: ['toolbar-button'],
    func: function() {
      bookmark.edit.toggle();
      toolbar.render.active();
      data.save();
    }
  }),
  menu: new Button({
    text: 'Open settings menu',
    srOnly: true,
    iconName: 'settings',
    style: ['link'],
    classList: ['toolbar-button'],
    func: function() {
      menu.toggle();
    }
  })
}

toolbar.render = {};

toolbar.render.bar = function() {
  const toolbarElement = node('div|class:toolbar');

  const formGroup = node('div|class:form-group');

  formGroup.appendChild(toolbar.button.add.button);
  formGroup.appendChild(toolbar.button.edit.button);
  formGroup.appendChild(toolbar.button.menu.button);
  toolbarElement.appendChild(formGroup);

  document.querySelector('body').appendChild(toolbarElement);
};

toolbar.render.active = function() {
  if (state.get.current().bookmark.edit) {
    toolbar.button.edit.active();
  } else {
    toolbar.button.edit.deactive();
  };
};

toolbar.init = function() {
  toolbar.render.bar();
  toolbar.render.active();
};

export { toolbar }
