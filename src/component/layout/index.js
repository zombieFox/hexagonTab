import { state, presentationMode } from '../state';
import { data } from '../data';
import { node } from '../../utility/node';

import './index.css';

const layoutWrap = node('div|class:layout-wrap');

const layoutArea = node('div|class:layout-area');

const layout = {}

layout.render = function() {
  layoutWrap.appendChild(layoutArea);

  if (presentationMode) {
    layoutArea.appendChild(node('div|class:presentation-name-wrap', node('h1:' + data.saveName + '|class:presentation-name')));
  };

  document.querySelector('body').appendChild(layoutWrap);
};

layout.class = function() {
  const html = document.querySelector('html');

  if (presentationMode) {
    html.classList.add('is-presentation-mode');
  } else {
    html.classList.remove('is-presentation-mode');
  };
};

layout.init = function() {
  layout.render();
  layout.class();
};

export { layout, layoutWrap, layoutArea };