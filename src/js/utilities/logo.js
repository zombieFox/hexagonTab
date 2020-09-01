import { state } from '../state.js';
import { node } from './node.js';

const logo = {};

logo.svg = {
  light: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle fill="#000000" cx="256" cy="256" r="256"></circle>
      <polygon fill="#ffffff" points="368 63 480 256 368 449 144 449 32 256 144 63"></polygon>
      <rect fill="#000000" x="128" y="224" width="256" height="64"></rect>
      <rect fill="#000000" x="224" y="128" width="64" height="256"></rect>
    </g>
  </svg>`,
  dark: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle fill="#ffffff" cx="256" cy="256" r="256"></circle>
      <polygon fill="#000000" points="368 63 480 256 368 449 144 449 32 256 144 63"></polygon>
      <rect fill="#ffffff" x="128" y="224" width="256" height="64"></rect>
      <rect fill="#ffffff" x="224" y="128" width="64" height="256"></rect>
    </g>
  </svg>`
};

logo.render = function() {
  const element = node('div|class:version-icon');

  switch (state.get.current().theme.style) {
    case 'light':
      element.innerHTML = logo.svg.light;
      break;

    case 'dark':
      element.innerHTML = logo.svg.dark;
      break;

    case 'system':
      if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        localStorage.setItem(data.saveName + 'Style', 'dark');
      } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
        localStorage.setItem(data.saveName + 'Style', 'light');
      };
      break;
  };

  return element;
};

export { logo };
