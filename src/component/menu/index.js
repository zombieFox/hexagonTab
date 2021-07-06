import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { grid } from '../grid';

import { Button } from '../button';
import { MenuFrame } from '../menuFrame';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

const menu = {};

menu.navData = [
  { name: 'Layout', active: true, overscroll: true, sub: ['Scaling', 'Grid'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['Hover', 'Shadow'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Style', 'Position'] },
  { name: 'Theme', active: false, overscroll: true, sub: ['Style', 'Colour', 'Accent', 'Font', 'Bookmark', 'Shade', 'Background'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Import', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: data.saveName.toLowerCase(), active: false, overscroll: false }
];

menu.mod = {};

menu.frame = null;

menu.open = () => {
  menu.frame = new MenuFrame({
    navData: menu.navData
  });
  menu.frame.open();
};

menu.close = () => {
  if (menu.frame) {
    menu.frame.close();
  };
};

menu.toggle = () => {
  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };
};

menu.init = () => {
  state.get.current().menu = false;
};

export { menu };
