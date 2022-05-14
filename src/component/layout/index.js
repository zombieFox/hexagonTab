import { node } from '../../utility/node';

import './index.css';

const layout = {};

layout.element = {
  layout: node('div|class:layout'),
  area: node('div|class:layout-area')
};

layout.area = {
  render: () => {

    layout.element.layout.appendChild(layout.element.area);

    document.querySelector('body').appendChild(layout.element.layout);

  }
};

layout.init = () => {
  layout.area.render();
};

export { layout };
