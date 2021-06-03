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

export const Control_groupText = function({ text = false, classList = [] } = {}) {
  this.groupText = form.render.groupText({
    text: text,
    classList: classList
  });

  this.update = (content) => {
    while (this.groupText.lastChild) {
      this.groupText.removeChild(this.groupText.lastChild);
    };
    if (typeof content === 'string' && ifValidString(content)) {
      this.groupText.textContent = content;
    } else if (content && content != '') {
      this.groupText.appendChild(content);
    };
  };

  this.wrap = () => {
    return form.render.wrap([
      this.groupText
    ])
  };

  this.disable = () => {
    this.groupText.classList.add('disabled');
  };

  this.enable = () => {
    this.groupText.classList.remove('disabled');
  };
};
