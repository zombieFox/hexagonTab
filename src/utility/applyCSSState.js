import { state } from '../component/state';
import { get } from './get';

const html = document.querySelector('html');

export const applyCSSState = function(path) {

  const apply = (path) => {

    if (get({ object: state.get.current(), path: path })) {

      html.classList.add('is-' + path.replace(/\./g, '-').toLowerCase());

    } else {

      html.classList.remove('is-' + path.replace(/\./g, '-').toLowerCase());

    };

  };

  if (Array.isArray(path)) {

    path.forEach((item, i) => { apply(item); });

  } else {

    apply(path);

  };

};
