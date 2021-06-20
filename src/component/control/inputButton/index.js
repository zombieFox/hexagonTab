import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { isValidString } from '../../../utility/isValidString';

export const Control_inputButton = function({
  object = {},
  path = false,
  id = 'name',
  classList = [],
  inputButtonClassList = [],
  type = false,
  inputHide = false,
  labelText = 'Name',
  srOnly = false,
  inputButtonStyle = [],
  action = false
} = {}) {

  this.input;

  switch (type) {
    case 'file':
      this.input = form.input.file({
        id: id,
        func: () => {
          if (action) {
            action();
          };
        }
      });

      break;

    case 'color':
      this.input = form.input.color({
        id: id,
        value: convertColor.rgb.hex(get({
          object: object,
          path: path + '.rgb'
        })),
        classList: classList,
        func: () => {
          if (path) {
            set({
              object: object,
              path: path + '.rgb',
              value: convertColor.hex.rgb(this.input.value)
            });
            set({
              object: object,
              path: path + '.hsl',
              value: convertColor.rgb.hsl(get({
                object: object,
                path: path + '.rgb'
              }))
            });
          };
          if (action) {
            action();
          };
        }
      });

      break;

  };

  this.label = form.label({
    text: labelText,
    forInput: id
  });

  this.button = form.input.inputButton({
    style: inputButtonStyle,
    inputHide: inputHide,
    srOnly: srOnly
  });

  if (inputButtonClassList.length > 0) {

    inputButtonClassList.forEach((item, i) => {
      this.button.classList.add(item);
    });

  };

  this.button.appendChild(this.input);

  this.button.appendChild(this.label);

  this.update = () => {
    switch (type) {
      case 'color':
        this.input.value = convertColor.rgb.hex(get({
          object: object,
          path: path + '.rgb'
        }));

        break;
    };
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.button
      ]
    })
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