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

export const Control_checkbox = function({ object = {}, id = 'name', path = false, labelText = 'name', description = false, action = false } = {}) {

  this.checkbox = form.render.input.checkbox({
    id: id,
    checked: (get({
      object: object,
      path: path,
    }) === true),
    func: () => {
      set({
        object: object,
        path: path,
        value: this.checkbox.checked
      });
      if (action) {
        action();
      };
    }
  });

  this.label = form.render.label({
    forInput: id,
    text: labelText,
    description: description,
    icon: true
  });

  this.update = () => {
    this.checkbox.checked = (get({
      object: object,
      path: path,
    }) === true);
  };

  this.checked = () => {
    return get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return form.render.wrap([
      form.render.group({
        children: [
          this.checkbox,
          this.label
        ]
      })
    ])
  };

  this.disable = () => {
    this.checkbox.disabled = true;
  };

  this.enable = () => {
    this.checkbox.disabled = false;
  };
};
