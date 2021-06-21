import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { grid } from '../grid';
import { pageLock } from '../pageLock';

import { Button } from '../button';
import { MenuFrame } from '../menuFrame';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

let currentMenu = null;

let currentContentArea = node('div|class:menu-content');

const menu = {};

menu.navData = [
  { name: 'Layout', active: true, overscroll: true, sub: ['Scaling', 'Grid'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['Hover', 'Shadow'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Style', 'Position'] },
  { name: 'Theme', active: false, overscroll: true, sub: ['Style', 'Color', 'Accent', 'Font', 'Bookmark', 'Shade', 'Background'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Import', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: data.saveName.toLowerCase(), active: false, overscroll: false }
];

menu.mod = {};

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

menu.frame = null;

menu.open = function() {
  menu.frame = new MenuFrame({
    navData: menu.navData
  });
  menu.frame.open();
};

menu.close = function() {
  if (menu.frame) {
    menu.frame.close();
  };
};

menu.toggle = function() {
  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };
};

export { menu };
