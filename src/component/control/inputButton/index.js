import { state } from '../../state';
import { data } from '../../data';
import { grid } from '../../grid';
import { bookmark } from '../../bookmark';
import { form } from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { ifValidString } from '../../../utility/ifValidString';

export const Control_inputButton = function({ object = {}, path = false, id = 'name', classList = [], inputButtonClassList = [], type = false, inputHide = false, labelText = 'Name', srOnly = false, inputButton = [], action = false } = {}) {

  this.input;

  switch (type) {
    case 'file':
      this.input = form.render.input.file({
        id: id,
        func: () => {
          if (action) {
            action();
          };
        }
      });

      break;

    case 'color':
      this.input = form.render.input.color({
        id: id,
        value: convertColor.rgb.hex(get({
          object: object,
          path: path
        })),
        classList: classList,
        func: () => {
          if (path) {
            set({
              object: object,
              path: path,
              value: convertColor.hex.rgb(this.input.value)
            });
          };
          if (action) {
            action();
          };
        }
      });

      break;
  };

  this.label = form.render.label({
    text: labelText,
    forInput: id
  });

  this.button = node('div|class:form-input-button');

  if (inputButtonClassList.length > 0) {
    inputButtonClassList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (inputButton.length > 0) {
    inputButton.forEach((item, i) => {
      switch (item) {
        case 'link':
          this.button.classList.add('form-input-button-link');
          break;

        case 'line':
          this.button.classList.add('form-input-button-line');
          break;

        case 'ring':
          this.button.classList.add('form-input-button-ring');
          break;

        case 'dot':
          this.button.classList.add('input-color-dot');
          break;
      };
    });
  };

  if (inputHide) {
    this.button.classList.add('form-input-hide');
  };

  if (srOnly) {
    this.button.classList.add('form-input-button-sr-only');
  };

  this.button.appendChild(this.input);

  this.button.appendChild(this.label);

  this.update = () => {
    switch (type) {
      case 'color':
        this.input.value = convertColor.rgb.hex(get({
          object: object,
          path: path,
        }));

        break;
    };
  };

  this.wrap = () => {
    return form.render.wrap([
      this.button
    ])
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.input.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.input.disabled = false;
  };
};
