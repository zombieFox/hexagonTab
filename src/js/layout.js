import { node } from './utilities/node.js';

const layoutWrap = node('div|class:layout-wrap');

const layoutArea = node('div|class:layout-area');

const layout = {}

layout.render = function() {
  layoutWrap.appendChild(layoutArea);
  document.querySelector('body').appendChild(layoutWrap);
};

layout.init = function() {
  layout.render();
};

export { layout, layoutWrap, layoutArea };
