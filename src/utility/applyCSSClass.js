import { state } from '../component/state';
import { get } from './get';

const html = document.querySelector('html');

export const applyCSSClass = function(path) {

  const apply = (path) => {

    get({
      object: state.get.option(),
      path: path
    }).forEach((item, i) => {

      html.classList.remove('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + item);

    });

    html.classList.add('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + get({
      object: state.get.current(),
      path: path
    }));

  };

  if (Array.isArray(path)) {

    path.forEach((item, i) => { apply(item); });

  } else {

    apply(path);

  };

};
