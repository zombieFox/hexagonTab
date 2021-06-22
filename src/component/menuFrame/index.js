import { state } from '../state';
import { menu } from '../menu';
import { pageLock } from '../pageLock';

import { Button } from '../button';
import { Shade } from '../shade';
import { MenuNav } from '../menuNav';
import { MenuClose } from '../menuClose';
import { MenuContent } from '../menuContent';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

const MenuFrame = function({
  navData = [],
} = {}) {

  this.element = {
    menu: node('section|class:menu'),
    area: node('div|class:menu-area'),
    content: node('div|class:menu-content')
  };

  this.menuNav = new MenuNav({
    navData: navData,
    action: () => {
      this.content();
      this.element.content.scrollTop = 0;
    }
  });

  this.menuClose = new MenuClose();

  this.shade = new Shade();

  this.class = () => {

    const html = document.querySelector('html');

    if (state.get.current().menu) {
      html.classList.add('is-menu-open');
    } else {
      html.classList.remove('is-menu-open');
    };

  };

  this.open = () => {

    state.get.current().menu = true;

    const body = document.querySelector('body');

    this.element.menu.classList.add('is-transparent');

    this.element.menu.addEventListener('transitionend', (event) => {

      if (event.propertyName === 'opacity' && getComputedStyle(this.element.menu).opacity == 0) {

        body.removeChild(this.element.menu);

      };

    });

    this.shade.open();

    this.assemble();

    body.appendChild(this.element.menu);

    getComputedStyle(this.element.menu).opacity;

    this.element.menu.classList.remove('is-transparent');

    this.element.menu.classList.add('is-opaque');

    this.bind.add();

    this.focus.set();

    this.menuNav.init();

    this.content();

    this.class();

    pageLock.render();

  };

  this.close = () => {

    state.get.current().menu = false;

    this.element.menu.classList.remove('is-opaque');

    this.element.menu.classList.add('is-transparent');

    this.bind.remove();

    this.shade.close();

    this.locationReset();

    this.class();

    pageLock.render();

    clearTimeout(this.delayedForceRemove);

    this.delayedForceRemove = setTimeout(() => {
      console.log('force remove menu');
      const body = document.querySelector('body');

      if (body.contains(this.element.menu)) {
        body.removeChild(this.element.menu)
      };

    }, 6000);

  };

  this.delayedForceRemove = null;

  this.locationReset = () => {

    const location = window.location;

    if ('pushState' in history) {
      history.pushState('', document.title, location.origin + location.pathname + location.search);
    };

  };

  this.bind = {
    add: () => {

      window.addEventListener('mouseup', this.clickOut);

      window.addEventListener('keydown', this.esc);

      window.addEventListener('keydown', this.focus.loop);

    },
    remove: () => {

      window.removeEventListener('mouseup', this.clickOut);

      window.removeEventListener('keydown', this.esc);

      window.removeEventListener('keydown', this.focus.loop);

    }
  };

  this.clickOut = (event) => {

    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(this.element.menu)) {
      this.close();
    };

  };

  this.esc = (event) => {

    if ((event.keyCode == 27)) {

      event.preventDefault();

      this.close();

    };

  };

  this.focus = {
    set: () => {

      const allFocusElement = document.querySelector('.menu').querySelectorAll('[tabindex]');

      allFocusElement[0].focus();

    },
    loop: (event) => {

      const allFocusElement = document.querySelector('.menu').querySelectorAll('[tabindex]');

      if (allFocusElement.length > 0) {

        const firstElement = allFocusElement[0];

        const lastElement = allFocusElement[allFocusElement.length - 1];

        if (event.keyCode == 9 && event.shiftKey) {

          if (document.activeElement === firstElement) {
            lastElement.focus();

            event.preventDefault();
          }

        } else if (event.keyCode == 9) {

          if (document.activeElement === lastElement) {
            firstElement.focus();

            event.preventDefault();
          }

        };

      };

    }
  };

  this.assemble = () => {

    this.element.area.appendChild(this.menuNav.nav());

    this.element.area.appendChild(this.menuClose.close());

    this.element.area.appendChild(this.element.content);

    this.element.menu.appendChild(this.element.area);

  };

  this.content = () => {

    clearChildNode(this.element.content);

    navData.forEach((item, i) => {

      if (item.active) {

        if (item.overscroll) {
          this.element.content.classList.add('menu-content-overscroll');
        } else {
          this.element.content.classList.remove('menu-content-overscroll');
        };

        const settingContent = new MenuContent({
          activeNavData: item,
          container: this.element.content
        });

        settingContent.content();

      };

    });

  };

};

export { MenuFrame };
