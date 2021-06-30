import { state } from '../state';

import { ToolbarControl } from '../toolbarControl';

import './index.css';

const toolbar = {};

toolbar.current = false;

toolbar.class = {};

toolbar.class.render = function() {
  const html = document.querySelector('html');

  const position = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

  position.forEach((item, i) => {
    html.classList.remove('is-toolbar-position-' + item);
  });

  html.classList.add('is-toolbar-position-' + state.get.current().toolbar.position);

  const style = ['bar', 'transparent'];

  style.forEach((item, i) => {
    html.classList.remove('is-toolbar-style-' + item);
  });

  html.classList.add('is-toolbar-style-' + state.get.current().toolbar.style);
};

toolbar.bar = {};

toolbar.bar.render = function() {

  const body = document.querySelector('body');

  toolbar.current = new ToolbarControl();

  body.appendChild(toolbar.current.toolbar());

};

toolbar.init = function() {
  toolbar.class.render();
  toolbar.bar.render();
};

export { toolbar }
