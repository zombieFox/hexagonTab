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

toolbar.render.style = {};

toolbar.render.style.set = function(rgb) {
  toolbar.bar.style.setProperty('--toolbar-t', 0.5);
  toolbar.bar.style.setProperty('--toolbar-t-r', 0.2721);
  toolbar.bar.style.setProperty('--toolbar-t-g', 0.7152);
  toolbar.bar.style.setProperty('--toolbar-t-b', 0.1255);

  toolbar.bar.style.setProperty('--toolbar-color-r', rgb.r);
  toolbar.bar.style.setProperty('--toolbar-color-g', rgb.g);
  toolbar.bar.style.setProperty('--toolbar-color-b', rgb.b);

  toolbar.bar.style.setProperty('--toolbar-color-text', '0, 0%, calc(((((var(--toolbar-color-r) * var(--toolbar-t-r)) + (var(--toolbar-color-g) * var(--toolbar-t-g)) + (var(--toolbar-color-b) * var(--toolbar-t-b))) / 255) - var(--toolbar-t)) * -10000000%)');

  toolbar.bar.style.setProperty('--button-link-text', 'var(--toolbar-color-text)');
  toolbar.bar.style.setProperty('--button-link-text-focus-hover', 'var(--toolbar-color-text)');
  toolbar.bar.style.setProperty('--button-link-text-active', 'var(--toolbar-color-text)');
}

toolbar.render.style.remove = function() {
  toolbar.bar.style.removeProperty('--toolbar-t');
  toolbar.bar.style.removeProperty('--toolbar-t-r');
  toolbar.bar.style.removeProperty('--toolbar-t-g');
  toolbar.bar.style.removeProperty('--toolbar-t-b');

  toolbar.bar.style.removeProperty('--toolbar-color-r');
  toolbar.bar.style.removeProperty('--toolbar-color-g');
  toolbar.bar.style.removeProperty('--toolbar-color-b');

  toolbar.bar.style.removeProperty('--toolbar-color-text');

  toolbar.bar.style.removeProperty('--button-link-text');
  toolbar.bar.style.removeProperty('--button-link-text-focus-hover');
  toolbar.bar.style.removeProperty('--button-link-text-active');
}

toolbar.render.style.update = function() {

  switch (state.get.current().toolbar.style) {

    case 'transparent':

      switch (state.get.current().theme.background.type) {

        case 'theme':
          toolbar.render.style.remove();
          break;

        case 'accent':
          toolbar.render.style.set(state.get.current().theme.accent.rgb);
          break;

        case 'color':
          toolbar.render.style.set(state.get.current().theme.background.color.rgb);
          break;

        case 'gradient':
          let angle = state.get.current().theme.background.gradient.angle;

          switch (state.get.current().toolbar.position) {

            case 'top-left':
            case 'top-right':
              if (angle < 90) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 90 && angle < 180) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 180 && angle < 270) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 270) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.end.rgb);
              };
              break;

            case 'bottom-right':
            case 'bottom-left':
              if (angle < 90) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 90 && angle < 180) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 180 && angle < 270) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 270) {
                toolbar.render.style.set(state.get.current().theme.background.gradient.start.rgb);
              };
              break;

          };

          break;

      };

      break;

    case 'bar':

      toolbar.render.style.remove();

      break;

  };

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
      toolbar.render.style.update();
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
  toolbar.render.style.update();
  toolbar.bar.render();
  toolbar.bar.active();
};

export { toolbar }
