import { state } from '../component/state';
import { get } from './get';

const html = document.querySelector('html');

export const applyCSSVar = function(path) {

  const apply = (path) => {

    html.style.setProperty('--' + path.replace(/\./g, '-').toLowerCase(), get({
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
