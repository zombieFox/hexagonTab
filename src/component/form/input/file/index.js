import { node } from '../../../../utility/node';

import './index.css';

export const file = function({ id = false, classList = [], func = false } = {}) {

  const input = node('input|type:file,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('change', function(event) {
      func();
    });

  };

  return input;

};
