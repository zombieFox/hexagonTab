import { layoutArea } from '../layout';
import { state } from '../state';

import { node } from '../../utility/node';

import './index.css';

const grid = {};

const gridArea = node('div|class:grid-area');

const gridList = node('div|class:grid-list');

grid.mod = {};

grid.render = {};

grid.render.area = function() {
  gridArea.appendChild(gridList);
  layoutArea.appendChild(gridArea);
};

grid.render.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--grid-size', state.get.current().grid.size);
  html.style.setProperty('--grid-column', state.get.current().grid.column);
  html.style.setProperty('--grid-perspective', state.get.current().grid.perspective);
  html.style.setProperty('--grid-gap', state.get.current().grid.gap);
};

grid.render.rotate = {
  bind: function() {
    gridArea.addEventListener('mouseenter', function(event) {
      grid.render.rotate.position.origin.set();
      grid.render.rotate.update(event);
    });
    gridArea.addEventListener('mouseleave', function(event) {
      grid.render.rotate.position.origin.set();
      grid.render.rotate.style(state.get.current().grid.transform.rotate.x, state.get.current().grid.transform.rotate.y, state.get.current().grid.transform.rotate.z);
    });
    gridArea.addEventListener('mousemove', function(event) {
      if (grid.render.rotate.delay.check()) {
        grid.render.rotate.position.origin.set();
        grid.render.rotate.update(event);
      }
    });
  },
  position: {
    origin: {
      set: function() {
        // set center point of grid area from top left of viewport
        grid.render.rotate.position.origin.get.x = gridArea.offsetLeft + Math.floor(gridArea.offsetWidth / 2);
        grid.render.rotate.position.origin.get.y = gridArea.offsetTop + Math.floor(gridArea.offsetHeight / 2);
      },
      get: { x: 0, y: 0 }
    },
    current: {
      set: function() {
        // set mouse position from center of grid area
        grid.render.rotate.position.current.get.x = (event.clientX - grid.render.rotate.position.origin.get.x) * -1;
        grid.render.rotate.position.current.get.y = (event.clientY - grid.render.rotate.position.origin.get.y);
      },
      get: { x: 0, y: 0 }
    }
  },
  delay: {
    counter: 0,
    check: function() {
      let refreshRate = state.get.current().grid.transform.refresh;
      grid.render.rotate.delay.counter++
      if (grid.render.rotate.delay.counter % refreshRate === 0) {
        grid.render.rotate.delay.counter = 0;
        return true;
      } else {
        return false;
      };
    }
  },
  update: function() {
    grid.render.rotate.position.current.set(event);
    grid.render.rotate.style(
      state.get.current().grid.transform.rotate.x + ((grid.render.rotate.position.current.get.y / gridList.offsetHeight / 2).toFixed(4) * state.get.current().grid.transform.focus),
      state.get.current().grid.transform.rotate.y + ((grid.render.rotate.position.current.get.x / gridList.offsetWidth / 2).toFixed(4) * state.get.current().grid.transform.focus),
      state.get.current().grid.transform.rotate.z
    );
  },
  style: function(x, y, z) {
    const html = document.querySelector('html');
    html.style.setProperty('--grid-transform-rotate-x', x);
    html.style.setProperty('--grid-transform-rotate-y', y);
    html.style.setProperty('--grid-transform-rotate-z', z);
  }
};

grid.init = function() {
  grid.render.style();
  grid.render.area();
  grid.render.rotate.style(state.get.current().grid.transform.rotate.x, state.get.current().grid.transform.rotate.y, state.get.current().grid.transform.rotate.z);
  grid.render.rotate.position.origin.set();
  grid.render.rotate.bind();
};

export { grid, gridArea, gridList };