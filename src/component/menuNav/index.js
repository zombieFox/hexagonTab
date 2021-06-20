import { menu } from '../menu';

import { Button } from '../button';

import { node } from '../../utility/node';

const MenuNav = function({
  navData = {},
  contentArea = false
} = {}) {

  this.element = {
    menuNav: node('div|class:menu-nav')
  };

  this.navItem = [];

  navData.forEach((item, i) => {

    const navItem = {
      active: item.active,
      topLevel: false,
      subLevel: false
    };

    const navButton = new Button({
      text: item.name,
      style: ['link'],
      block: true,
      classList: ['menu-nav-tab'],
      func: () => {
        menu.mod.area.toggle(item.name);
        menu.render.component.content();
        contentArea.scrollTop = 0;
        this.update();
      }
    });

    navItem.topLevel = navButton.button;

    if (item.sub) {
      const sub = node('div|class:menu-subnav');

      item.sub.forEach((item, i) => {

        const subBarItem = node('a:' + item + '|href:#menu-content-item-' + item.replace(/\s+/g, '-').toLowerCase() + ',class:menu-nav-sub button button-link button-small,tabindex:1');
        sub.appendChild(subBarItem);
      });

      navItem.subLevel = sub;
    };

    this.navItem.push(navItem);

  });

  this.init = () => {
    this.navItem.forEach((item, i) => {
      if (item.subLevel) {
        item.subLevel.classList.add('active');
        item.subLevel.setAttribute('style', '--menu-subnav-height: ' + item.subLevel.getBoundingClientRect().height + 'px;');
        item.subLevel.classList.remove('active');
      };
    });
  };

  this.update = () => {
    navData.forEach((item, i) => {

      this.navItem[i].menuNavItem.classList.remove('active');
      this.navItem[i].topLevel.classList.remove('active');

      if (item.sub) {
        this.navItem[i].subLevel.classList.remove('active');
      };

      if (item.active) {
        this.navItem[i].menuNavItem.classList.add('active');
        this.navItem[i].topLevel.classList.add('active');

        if (item.sub) {
          this.navItem[i].subLevel.classList.add('active');
        };
      };

    });
  };

  this.render = () => {
    this.navItem.forEach((item, i) => {
      item.menuNavItem = node('div|class:menu-nav-item');

      if (item.active) {
        item.menuNavItem.classList.add('active');
      };

      item.menuNavItem.appendChild(item.topLevel);

      if (item.subLevel) {
        item.menuNavItem.appendChild(item.subLevel);
      };

      this.element.menuNav.appendChild(item.menuNavItem);
    });

    return this.element.menuNav;
  };

};

export { MenuNav };
