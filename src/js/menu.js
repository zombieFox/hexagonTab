import { state } from './state.js';
import { data } from './data.js';
import { bookmark } from './bookmark.js';
import { theme } from './theme.js';
import { grid } from './grid.js';
import { ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color } from './control.js';
import { Button } from './utilities/button.js';
import { form } from './utilities/form.js';
import { node } from './utilities/node.js';
import { convertColor } from './utilities/convertColor.js';
import { menuContentTheme } from './menu/content/theme.js';
import { menuContentLayout } from './menu/content/layout.js';
import { menuContentBookmark } from './menu/content/bookmark.js';
import { menuContentData } from './menu/content/data.js';
import { menuContentCoffee } from './menu/content/coffee.js';
import { menuContentApp } from './menu/content/app.js';

const MenuNav = function() {
  this.nav = node('div|class:menu-nav');

  this.navItem = [];

  menu.mod.area.all.forEach((item, i) => {
    const navItem = {
      topLevel: false,
      subLevel: false
    };

    const navButton = new Button({
      text: item.name,
      style: ['line'],
      block: true,
      classList: ['menu-nav-tab'],
      func: () => {
        menu.mod.area.toggle(item.name);
        menu.render.component.content();
        currentContentArea.scrollTop = 0;
        this.update();
      }
    });

    navItem.topLevel = navButton.button;

    if (item.subNav) {
      const subNav = node('div|class:menu-subnav');

      item.subNav.forEach((item, i) => {

        const subNavBarItem = node('a:' + item.name + '|href:#menu-content-item-' + item.id + ',class:menu-nav-sub button button-small,tabindex:1');
        subNav.appendChild(subNavBarItem);
      });

      navItem.subLevel = subNav;
    };

    this.navItem.push(navItem);
  });

  this.init = () => {
    this.navItem.forEach((item, i) => {
      if (item.subLevel) {
        item.subLevel.classList.add("active");
        item.subLevel.setAttribute("style", "--menu-subnav-height: " + item.subLevel.getBoundingClientRect().height + "px;");
        item.subLevel.classList.remove("active");
      };
    });
  };

  this.update = () => {
    menu.mod.area.all.forEach((item, i) => {
      if (item.subNav) {
        this.navItem[i].topLevel.classList.remove('active');
        this.navItem[i].subLevel.classList.remove('active');
      };
    });
    menu.mod.area.all.forEach((item, i) => {
      if (item.active) {
        if (item.subNav) {
          this.navItem[i].topLevel.classList.add('active');
          this.navItem[i].subLevel.classList.add('active');
        };
      };
    });
  };

  this.render = () => {
    this.navItem.forEach((item, i) => {
      const menuNavItem = node('div|class:menu-nav-item');

      menuNavItem.appendChild(item.topLevel);

      if (item.subLevel) {
        menuNavItem.appendChild(item.subLevel);
      };

      this.nav.appendChild(menuNavItem);
    });

    return this.nav;
  };
};

let currentMenu = null;

let currentContentArea = node('div|class:menu-content');

const menu = {};

menu.mod = {};

menu.mod.open = function() {
  state.get.current().menu = true;
};

menu.mod.close = function() {
  state.get.current().menu = false;
};

menu.mod.area = {
  all: [{
    id: 'layout',
    name: 'Layout',
    active: true,
    overscroll: true,
    subNav: [{ id: 'size', name: 'Scaling' }, { id: 'grid', name: 'Hex grid' }]
  }, {
    id: 'bookmark',
    name: 'Bookmarks',
    active: false,
    overscroll: true,
    subNav: [{ id: 'hover', name: 'Hover' }, { id: 'shadow', name: 'Shadow' }]
  }, {
    id: 'theme',
    name: 'Theme',
    active: false,
    overscroll: true,
    subNav: [{ id: 'style', name: 'Style' }, { id: 'color', name: 'Color' }, { id: 'accent', name: 'Accent' }, { id: 'bookmark', name: 'Bookmarks' }, { id: 'background', name: 'Background' }]
  }, {
    id: 'data',
    name: 'Data',
    active: false,
    overscroll: true,
    subNav: [{ id: 'import', name: 'Import' }, { id: 'backup', name: 'Backup' }, { id: 'clear', name: 'Clear' }]
  }, {
    id: 'coffee',
    name: 'Coffee',
    active: false,
    overscroll: false
  }, {
    id: 'app',
    name: data.saveName,
    active: false,
    overscroll: false
  }],
  toggle: function(name) {
    menu.mod.area.all.forEach((item, i) => {
      item.active = false;
      if (item.name == name) {
        item.active = true;
      };
    });
  }
};

menu.bind = {};

menu.bind.close = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(currentMenu)) {
      menu.close();
    };
  },
  add: function() {
    window.addEventListener('mouseup', menu.bind.close.check);
  },
  remove: function() {
    window.removeEventListener('mouseup', menu.bind.close.check);
  }
};

menu.render = {};

menu.render.frame = {
  open: function() {
    // menu containers
    const menuElement = node('section|class:menu');
    const menuArea = node('section|class:menu-area');

    menuElement.addEventListener('transitionend', function(event, elapsed) {
      if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
        menuElement.remove();
        currentMenu = null;
      };
    });

    // menu components
    const menuClose = menu.render.component.close();

    let menuNav = new MenuNav();

    menuArea.appendChild(menuNav.render());
    menuArea.appendChild(menuClose);
    menuArea.appendChild(currentContentArea);

    // add menu content for active area
    menu.render.component.content();

    menuElement.appendChild(menuArea);
    document.querySelector('body').appendChild(menuElement);

    getComputedStyle(menuElement).opacity;

    menuElement.classList.remove('is-transparent');
    menuElement.classList.add('is-opaque');

    currentMenu = menuElement;

    menuNav.init();
    menuNav.update();
  },
  close: function() {
    if (currentMenu) {
      if (currentMenu.classList.contains('is-opaque')) {
        currentMenu.classList.remove('is-opaque');
        currentMenu.classList.add('is-transparent');
      } else {
        currentMenu.remove();
      };
    } else {
      document.querySelectorAll('.menu').forEach((item, i) => {
        item.classList.add('is-opaque');
        item.classList.remove('is-transparent');
        item.remove();
      });
    };
  }
};

menu.render.component = {
  close: function() {
    const menuClose = node('div|class:menu-close');

    const closeButton = new Button({
      text: 'Close settings menu',
      srOnly: true,
      style: ['link'],
      iconName: 'cross',
      classList: ['menu-close-tab'],
      func: function() {
        menu.close();
      }
    });

    menuClose.appendChild(closeButton.button);

    return menuClose;
  },
  content: function() {
    while (currentContentArea.lastChild) {
      currentContentArea.removeChild(currentContentArea.lastChild);
    };

    menu.mod.area.all.forEach((item, i) => {
      if (item.active) {
        if (item.overscroll) {
          currentContentArea.classList.add('menu-content-overscroll');
        } else {
          currentContentArea.classList.remove('menu-content-overscroll');
        };

        if (menu.render.component.section[item.id]) {
          menu.render.component.section[item.id](currentContentArea);
        } else {
          currentContentArea.appendChild(node('p:' + item.id));
        };
      };
    });
  },
  item: {
    form: function(children) {
      return node('div|class:menu-item-form', children);
    },
    header: function(name) {
      const item = node('div|class:menu-item-header');
      const text = node('h1:' + name + '|class:menu-item-header-text');
      item.appendChild(text);
      return item;
    }
  },
  section: {
    layout: function(currentContentArea) {
      currentContentArea.appendChild(menuContentLayout.size());
      currentContentArea.appendChild(menuContentLayout.grid());
    },
    bookmark: function(currentContentArea) {
      currentContentArea.appendChild(menuContentBookmark.hover());
      currentContentArea.appendChild(menuContentBookmark.shadow());
    },
    theme: function(currentContentArea) {
      currentContentArea.appendChild(menuContentTheme.style());
      currentContentArea.appendChild(menuContentTheme.color());
      currentContentArea.appendChild(menuContentTheme.accent());
      currentContentArea.appendChild(menuContentTheme.bookmark());
      currentContentArea.appendChild(menuContentTheme.background());
    },
    data: function(currentContentArea) {
      currentContentArea.appendChild(menuContentData.import());
      currentContentArea.appendChild(menuContentData.backup());
      currentContentArea.appendChild(menuContentData.clear());
    },
    coffee: function(currentContentArea) {
      currentContentArea.appendChild(menuContentCoffee.fuel());
    },
    app: function(currentContentArea) {
      currentContentArea.appendChild(menuContentApp.splash());
    }
  }
};

menu.open = function() {
  menu.mod.open();
  menu.render.frame.open();
  menu.bind.close.add();
};

menu.close = function() {
  menu.mod.close();
  menu.render.frame.close();
  menu.bind.close.remove();
};

menu.toggle = function() {
  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };
};

menu.init = function() {
  menu.close();
};

export { menu };
