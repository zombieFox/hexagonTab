import { node } from '../../../utility/node';

import './index.css';

export const group = function({ direction = 'horizontal', reverse = false, block = false, border = false, children = false } = {}) {

  const group = node('div|class:form-group', children);

  switch (direction) {
    case 'horizontal':
      group.classList.add('form-group-horizontal');
      break;

    case 'vertical':
      group.classList.add('form-group-vertical');
      break;
  };

  if (reverse) {
    group.classList.add('form-group-reverse');
  };

  if (block) {
    group.classList.add('form-group-block');
  };

  if (border) {
    group.classList.add('form-group-border');
  };

  return group;

};
