import { state } from '../state';

import { ToolbarControl } from '../toolbarControl';

const toolbar = {};

toolbar.current = false;

toolbar.bar = {};

toolbar.bar.render = () => {

  const body = document.querySelector('body');

  toolbar.current = new ToolbarControl();

  body.appendChild(toolbar.current.toolbar());

};

toolbar.init = () => {
  toolbar.bar.render();
};

export { toolbar }
