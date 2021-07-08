import { layout } from '../layout';
import { state } from '../state';

import { node } from '../../utility/node';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';

const grid = {};

grid.element = {
  area: node('div|class:grid-area'),
  list: node('div|class:grid-list')
};

grid.area = {
  render: () => {
    grid.element.area.appendChild(grid.element.list);
    layout.element.area.appendChild(grid.element.area);
  }
};

grid.rotate = {
  bind: () => {

    grid.element.area.addEventListener('mouseenter', (event) => {
      grid.rotate.position.origin.set();
      grid.rotate.update(event);
    });

    grid.element.area.addEventListener('mouseleave', (event) => {
      grid.rotate.position.origin.set();
      applyCSSVar([
        'grid.transform.rotate.x',
        'grid.transform.rotate.y',
        'grid.transform.rotate.z'
      ]);
    });

    grid.element.area.addEventListener('mousemove', (event) => {
      if (grid.rotate.delay.check()) {
        grid.rotate.position.origin.set();
        grid.rotate.update(event);
      }
    });

  },
  position: {
    origin: {
      set: () => {
        // set center point of grid area from top left of viewport
        grid.rotate.position.origin.get.x = grid.element.area.offsetLeft + Math.floor(grid.element.area.offsetWidth / 2);
        grid.rotate.position.origin.get.y = grid.element.area.offsetTop + Math.floor(grid.element.area.offsetHeight / 2);
      },
      get: { x: 0, y: 0 }
    },
    current: {
      set: () => {
        // set mouse position from center of grid area
        grid.rotate.position.current.get.x = (event.clientX - grid.rotate.position.origin.get.x) * -1;
        grid.rotate.position.current.get.y = (event.clientY - grid.rotate.position.origin.get.y);
      },
      get: { x: 0, y: 0 }
    }
  },
  delay: {
    counter: 0,
    check: () => {

      let refreshRate = state.get.current().grid.transform.refresh;

      grid.rotate.delay.counter++

      if (grid.rotate.delay.counter % refreshRate === 0) {
        grid.rotate.delay.counter = 0;
        return true;
      } else {
        return false;
      };

    }
  },
  update: () => {
    grid.rotate.position.current.set(event);
    grid.rotate.style(
      state.get.current().grid.transform.rotate.x + ((grid.rotate.position.current.get.y / grid.element.list.offsetHeight / 2).toFixed(4) * state.get.current().grid.transform.focus),
      state.get.current().grid.transform.rotate.y + ((grid.rotate.position.current.get.x / grid.element.list.offsetWidth / 2).toFixed(4) * state.get.current().grid.transform.focus)
    );
  },
  style: (x, y) => {
    const html = document.querySelector('html');
    html.style.setProperty('--grid-transform-rotate-x', x);
    html.style.setProperty('--grid-transform-rotate-y', y);
  }
};

grid.init = () => {
  applyCSSVar([
    'grid.size',
    'grid.column',
    'grid.perspective',
    'grid.gap',
    'grid.transform.rotate.x',
    'grid.transform.rotate.y',
    'grid.transform.rotate.z'
  ]);
  grid.area.render();
  grid.rotate.bind();
  grid.rotate.position.origin.set();
};

export { grid };
