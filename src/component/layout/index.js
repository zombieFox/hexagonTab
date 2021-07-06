import { state } from '../state';
import { data } from '../data';

import { node } from '../../utility/node';

import './index.css';

const layout = {}

layout.element = {
  wrap: node('div|class:layout-wrap'),
  area: node('div|class:layout-area')
};

layout.area = {
  render: () => {

    layout.element.wrap.appendChild(layout.element.area);

    document.querySelector('body').appendChild(layout.element.wrap);

  }
};

layout.init = () => {
  layout.area.render();
};

export { layout };
