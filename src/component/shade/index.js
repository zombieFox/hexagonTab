import { node } from '../../utility/node';

import './index.css';

const Shade = function() {

  this.shade = node('div|class:shade');

  this.open = () => {
    const body = document.querySelector('body');

    this.shade.classList.add('is-transparent');

    this.shade.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'opacity' && getComputedStyle(this.shade).opacity == 0) {
        body.removeChild(this.shade);
      };
    });

    body.appendChild(this.shade);

    getComputedStyle(this.shade).opacity;

    this.shade.classList.remove('is-transparent');

    this.shade.classList.add('is-opaque');
  };

  this.close = () => {

    this.shade.classList.remove('is-opaque');

    this.shade.classList.add('is-transparent');

  };

};

export { Shade };
