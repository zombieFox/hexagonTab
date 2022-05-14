import { ToolbarControl } from '../toolbarControl';

const toolbar = {};

toolbar.current = null;

toolbar.bar = {};

toolbar.bar.render = () => {

  toolbar.current = new ToolbarControl();

  const body = document.querySelector('body');

  body.appendChild(toolbar.current.toolbar());

};

toolbar.init = () => {
  toolbar.bar.render();
  toolbar.current.update.edit();
};

export { toolbar };
