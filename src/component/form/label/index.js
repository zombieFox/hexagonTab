import { node } from '../../../utility/node';

import './index.css';

export const label = function({ forInput = false, text = 'label', description = false, srOnly = false, icon = false, classList = [] } = {}) {

  let label;

  if (forInput) {
    label = node('label|for:' + forInput);
  } else {
    label = node('label');
  };

  const labelBlock = node('span|class:label-block');

  if (srOnly) {
    if (icon) {
      labelBlock.classList.add('sr-only');
    } else {
      label.classList.add('sr-only');
    };
  };

  if (text && description) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    labelBlock.appendChild(node('span:' + description + '|class:label-block-item small muted'));
    label.appendChild(labelBlock);
  } else if (text) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    label.appendChild(labelBlock);
  };

  if (icon) {
    label.prepend(node('span|class:label-icon'));
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      label.classList.add(item);
    });

  };

  return label;

};
