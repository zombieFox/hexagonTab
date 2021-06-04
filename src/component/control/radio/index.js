import { state } from '../../state';
import { data } from '../../data';
import { grid } from '../../grid';
import { bookmark } from '../../bookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { isValidString } from '../../../utility/isValidString';

export const Control_radio = function({ radioGroup = [], object = {}, groupName = 'group', path = false, action = false } = {}) {

  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {
        radio: form.input.radio({
          id: item.id,
          radioGroup: radioGroupName,
          value: item.value,
          checked: (get({
            object: object,
            path: radioGroupPath,
          }) === item.value),
          func: () => {
            set({
              object: object,
              path: radioGroupPath,
              value: item.value
            });
            if (action) {
              action();
            };
          }
        }),
        label: form.label({
          forInput: item.id,
          text: item.labelText,
          description: item.description,
          icon: true
        }),
        wrap: () => {
          return form.wrap({
            children: [
              radioAndLabel.radio,
              radioAndLabel.label
            ]
          });
        }
      };

      radioAndLabel.radio.update = () => {
        radioAndLabel.radio.checked = (get({
          object: object,
          path: radioGroupPath,
        }) === item.value);
      };

      radioAndLabel.radio.disable = () => {
        radioAndLabel.radio.disabled = true;
      };

      radioAndLabel.radio.enable = () => {
        radioAndLabel.radio.disabled = false;
      };

      this.radioSet.push(radioAndLabel);
    });
  };

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;
  };

  this.update = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });
  };

  this.wrap = () => {
    const group = form.wrap();

    this.radioSet.forEach((item, i) => {
      group.appendChild(
        form.wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    return group;
  };

  this.inline = () => {
    const formGroup = form.wrap();

    const formInline = form.inline({
      gap: 'large',
      wrap: true
    });

    this.radioSet.forEach((item, i) => {
      formInline.appendChild(
        form.wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    formGroup.appendChild(formInline);

    return formGroup;
  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });
  };

};
