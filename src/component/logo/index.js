import './index.css';

import { state } from '../state';

import { node } from '../../utility/node';

const logo = {};

logo.svg = `<svg class="logo" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g>
    <polygon class="logo-hexagon logo-fill-solid" points="384 35 512 256 384 477 128 477 0 256 128 35"></polygon>
    <circle class="logo-circle logo-fill-clear" cx="256" cy="256" r="160"></circle>
    <rect class="logo-cross-x logo-fill-solid" x="160" y="224" width="192" height="64"></rect>
    <rect class="logo-cross-y logo-fill-solid" x="224" y="160" width="64" height="192"></rect>
  </g>
</svg>`;

logo.render = function() {
  const element = node('div|class:version-icon');
  element.innerHTML = logo.svg;

  return element;
};

export { logo };
