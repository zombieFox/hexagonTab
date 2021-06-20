import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { grid } from '../grid';
import { pageLock } from '../pageLock';

import { Button } from '../button';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { Control_helperText } from '../control/helperText';
import { Control_inputButton } from '../control/inputButton';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_slimSlider } from '../control/slimSlider';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_color } from '../control/color';
import { Control_text } from '../control/text';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { clearChildNode } from '../../utility/clearChildNode';

import { menuContentLayout } from './content/layout';
import { menuContentBookmark } from './content/bookmark';
import { menuContentToolbar } from './content/toolbar';
import { menuContentTheme } from './content/theme';
import { menuContentData } from './content/data';
import { menuContentCoffee } from './content/coffee';
import { menuContentApp } from './content/app';

import './index.css';

let currentMenu = null;

let currentContentArea = node('div|class:menu-content');

const menu = {};

menu.navData = [
  { name: 'Layout', active: true, overscroll: true, sub: ['Scaling', 'Grid'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['Hover', 'Shadow'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Style', 'Position'] },
  { name: 'Theme', active: false, overscroll: true, sub: ['Style', 'Color', 'Accent', 'Bookmarks', 'Shade', 'Background'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Import', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: 'App', active: false, overscroll: false }
];

menu.mod = {};

menu.mod.open = function() {
  state.get.current().menu = true;
};

menu.mod.close = function() {
  state.get.current().menu = false;
};

menu.mod.area = {
  toggle: function(name) {
    menu.navData.forEach((item, i) => {
      item.active = false;
      if (item.name == name) {
        item.active = true;
      };
    });
  }
};

menu.bind = {};

menu.bind.close = {
  add: function() {

    window.addEventListener('drag', menu.clickOut);

    window.addEventListener('mouseup', menu.clickOut);

    window.addEventListener('keydown', menu.esc);

  },
  remove: function() {

    window.removeEventListener('drag', menu.clickOut);

    window.removeEventListener('mouseup', menu.clickOut);

    window.removeEventListener('keydown', menu.esc);

  }
};

menu.clickOut = (event) => {

  const path = event.path || (event.composedPath && event.composedPath());

  if (!path.includes(currentMenu)) {
    menu.close();
  };

};

menu.esc = (event) => {

  if ((event.keyCode == 27)) {

    event.preventDefault();

    menu.close();

  };

};

menu.render = {};

menu.render.frame = {
  open: function() {
    // menu containers
    const menuElement = node('section|class:menu');

    const menuArea = node('div|class:menu-area');

    menuElement.addEventListener('transitionend', function(event, elapsed) {
      if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
        menuElement.remove();
        currentMenu = null;
      };
    });

    // menu components
    const menuClose = menu.render.component.close();

    let menuNav = new MenuNav({
      navData: menu.navData,
      contentArea: currentContentArea
    });

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

    if (currentMenu) {
      menu.render.frame.close();
    };

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
      classList: ['menu-close-button'],
      func: function() {
        menu.close();
      }
    });

    menuClose.appendChild(closeButton.button);

    return menuClose;
  },
  content: function() {

    clearChildNode(currentContentArea);

    menu.navData.forEach((item, i) => {

      if (item.active) {
        if (item.overscroll) {
          currentContentArea.classList.add('menu-content-overscroll');
        } else {
          currentContentArea.classList.remove('menu-content-overscroll');
        };

        if (menu.render.component.section[item.name.replace(/\s+/g, '-').toLowerCase()]) {
          menu.render.component.section[item.name.replace(/\s+/g, '-').toLowerCase()](currentContentArea);
        } else {
          currentContentArea.appendChild(node('p:' + item.name.replace(/\s+/g, '-').toLowerCase()));
        };
      };

    });

  },
  item: {
    form: function(children) {
      return node('div|class:menu-item-form', children);
    },
    header: function(name) {
      return node('div|class:menu-item-header', [
        node('h1:' + name + '|class:menu-item-header-text')
      ]);
    }
  },
  section: {
    layout: function(currentContentArea) {
      currentContentArea.appendChild(menuContentLayout.scaling());
      currentContentArea.appendChild(menuContentLayout.grid());
    },
    bookmark: function(currentContentArea) {
      currentContentArea.appendChild(menuContentBookmark.hover());
      currentContentArea.appendChild(menuContentBookmark.shadow());
    },
    toolbar: function(currentContentArea) {
      currentContentArea.appendChild(menuContentToolbar.style());
      currentContentArea.appendChild(menuContentToolbar.position());
    },
    theme: function(currentContentArea) {
      currentContentArea.appendChild(menuContentTheme.style());
      currentContentArea.appendChild(menuContentTheme.color());
      currentContentArea.appendChild(menuContentTheme.accent());
      currentContentArea.appendChild(menuContentTheme.bookmark());
      currentContentArea.appendChild(menuContentTheme.shade());
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

menu.shade = false;

menu.open = function() {
  menu.shade = new Shade();
  menu.shade.open();
  menu.mod.open();
  menu.render.frame.open();
  menu.bind.close.add();
  pageLock.render();
};

menu.close = function() {
  if (menu.shade) {
    menu.shade.close();
  };
  menu.mod.close();
  menu.render.frame.close();
  menu.bind.close.remove();
  pageLock.render();
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