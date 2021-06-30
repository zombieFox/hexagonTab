import { state } from '../state';
import { menu } from '../menu';
import { data } from '../data';
import { bookmark } from '../bookmark';
import { theme } from '../theme';

import * as form from '../form';

import { Button } from '../button';

import { Control_inputButton } from '../control/inputButton';

import { node } from '../../utility/node';

const ToolbarControl = function() {

  this.element = {
    toolbar: node('div|class:toolbar'),
    group: form.group()
  };

  this.control = {};

  this.control.button = {
    accent: new Control_inputButton({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent-quick',
      type: 'color',
      labelText: 'Accent colour',
      srOnly: true,
      inputButtonStyle: ['dot', 'line'],
      inputButtonClassList: ['toolbar-item'],
      action: () => {
        theme.render.accent();
        this.update.style();
        data.save();
      }
    }),
    edit: new Button({
      text: 'Enter edit bookmark mode',
      srOnly: true,
      iconName: 'edit',
      classList: ['toolbar-item'],
      style: ['line'],
      func: () => {
        bookmark.edit();
        this.update.edit();
        data.save();
      }
    }),
    setting: new Button({
      text: 'Open settings menu',
      srOnly: true,
      iconName: 'settings',
      classList: ['toolbar-item'],
      style: ['line'],
      func: () => {
        menu.toggle();
      }
    }),
    add: new Button({
      text: 'Add a bookmark',
      srOnly: true,
      iconName: 'add',
      classList: ['toolbar-item'],
      func: function() {
        bookmark.add();
      }
    })
  };

  this.assemble = () => {

    const toolbarControl = node('div|class:toolbar-control');

    switch (state.get.current().toolbar.position) {

      case 'top-right':
      case 'bottom-right':
        this.element.group.classList.remove('form-group-reverse');
        break;

      case 'top-left':
      case 'bottom-left':
        this.element.group.classList.add('form-group-reverse');
        break;

    };

    this.element.group.appendChild(this.control.button.accent.button);

    this.element.group.appendChild(this.control.button.add.button);

    this.element.group.appendChild(this.control.button.edit.button);

    this.element.group.appendChild(this.control.button.setting.button);

    toolbarControl.appendChild(this.element.group);

    this.element.toolbar.appendChild(toolbarControl);

  };

  this.toolbar = () => {

    return this.element.toolbar;

  };

  this.update = {};

  this.update.style = () => {

    const add = (rgb) => {

      this.element.toolbar.style.setProperty('--toolbar-color-r', rgb.r);
      this.element.toolbar.style.setProperty('--toolbar-color-g', rgb.g);
      this.element.toolbar.style.setProperty('--toolbar-color-b', rgb.b);

      this.element.toolbar.style.setProperty('--toolbar-color-text', '0, 0%, calc(((((var(--toolbar-color-r) * var(--theme-t-r)) + (var(--toolbar-color-g) * var(--theme-t-g)) + (var(--toolbar-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.toolbar.style.setProperty('--button-link-text', 'var(--toolbar-color-text)');
      this.element.toolbar.style.setProperty('--button-link-text-focus-hover', 'var(--toolbar-color-text)');
      this.element.toolbar.style.setProperty('--button-link-text-active', 'var(--toolbar-color-text)');

    };

    const remove = () => {

      this.element.toolbar.style.removeProperty('--toolbar-color-r');
      this.element.toolbar.style.removeProperty('--toolbar-color-g');
      this.element.toolbar.style.removeProperty('--toolbar-color-b');

      this.element.toolbar.style.removeProperty('--toolbar-color-text');

      this.element.toolbar.style.removeProperty('--button-link-text');
      this.element.toolbar.style.removeProperty('--button-link-text-focus-hover');
      this.element.toolbar.style.removeProperty('--button-link-text-active');

    };

    switch (state.get.current().toolbar.style) {

      case 'transparent':

        switch (state.get.current().theme.background.type) {

          case 'theme':
          case 'image':
          case 'video':
            remove();
            break;

          case 'accent':
            add(state.get.current().theme.accent.rgb);
            break;

          case 'color':
            add(state.get.current().theme.background.color.rgb);
            break;

          case 'gradient':
            let angle = state.get.current().theme.background.gradient.angle;

            switch (state.get.current().toolbar.position) {

              case 'top-left':
              case 'top-right':
                if (angle < 90) {
                  add(state.get.current().theme.background.gradient.end.rgb);
                } else if (angle >= 90 && angle < 180) {
                  add(state.get.current().theme.background.gradient.start.rgb);
                } else if (angle >= 180 && angle < 270) {
                  add(state.get.current().theme.background.gradient.start.rgb);
                } else if (angle >= 270) {
                  add(state.get.current().theme.background.gradient.end.rgb);
                };
                break;

              case 'bottom-right':
              case 'bottom-left':
                if (angle < 90) {
                  add(state.get.current().theme.background.gradient.start.rgb);
                } else if (angle >= 90 && angle < 180) {
                  add(state.get.current().theme.background.gradient.end.rgb);
                } else if (angle >= 180 && angle < 270) {
                  add(state.get.current().theme.background.gradient.end.rgb);
                } else if (angle >= 270) {
                  add(state.get.current().theme.background.gradient.start.rgb);
                };
                break;

            };

            break;

        };

        break;

      case 'bar':

        remove();

        break;

    };

    switch (state.get.current().toolbar.style) {

      case 'transparent':

        this.control.button.accent.inputButtonStyle.update(['dot', 'link']);
        this.control.button.edit.style.update(['line', 'link']);
        this.control.button.setting.style.update(['link']);
        this.control.button.add.style.update(['link']);

        break;

      case 'bar':

        this.control.button.accent.inputButtonStyle.update(['dot', 'line']);
        this.control.button.edit.style.update(['line']);
        this.control.button.setting.style.update(['line']);
        this.control.button.add.style.update(['line']);

        break;

    };

  };

  this.update.edit = () => {

    if (state.get.current().bookmark.edit) {

      this.control.button.edit.active();

    } else {

      this.control.button.edit.deactive();

    };

  };

  this.update.position = () => {

    switch (state.get.current().toolbar.position) {

      case 'top-right':
      case 'bottom-right':
        this.element.group.classList.remove('form-group-reverse');
        break;

      case 'top-left':
      case 'bottom-left':
        this.element.group.classList.add('form-group-reverse');
        break;

    };

    this.element.toolbar.classList.remove('is-toolbar-position-top-left');

    this.element.toolbar.classList.remove('is-toolbar-position-top-right');

    this.element.toolbar.classList.remove('is-toolbar-position-bottom-left');

    this.element.toolbar.classList.remove('is-toolbar-position-bottom-right');

    switch (state.get.current().toolbar.position) {

      case 'top-left':
        this.element.toolbar.classList.add('is-toolbar-position-top-left');
        break;

      case 'top-right':
        this.element.toolbar.classList.add('is-toolbar-position-top-right');
        break;

      case 'bottom-right':
        this.element.toolbar.classList.add('is-toolbar-position-bottom-right');
        break;

      case 'bottom-left':
        this.element.toolbar.classList.add('is-toolbar-position-bottom-left');
        break;

    };

  };

  this.update.accent = () => {

    this.control.button.accent.update();

  };

  this.assemble();

  this.update.style();

  this.update.position();

};

export { ToolbarControl }
