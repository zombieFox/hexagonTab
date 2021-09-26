import { state } from '../state';
import { data } from '../data';
import { form } from '../form';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { appName } from '../appName';

import { Button } from '../button';
import { MenuFrame } from '../menuFrame';
import { MenuNav } from '../menuNav';
import { Shade } from '../shade';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

const menu = {};

menu.navData = [
  // { name: 'Debug', active: true, overscroll: true, sub: ['Input', 'Button', 'Bookmark', 'Icon'] },
  { name: 'Theme', active: true, overscroll: true, sub: ['Style', 'Colour', 'Accent', 'Font', 'Bookmark', 'Shade', 'Opacity', 'Background'] },
  { name: 'Layout', active: false, overscroll: true, sub: ['Scaling', 'Grid'] },
  { name: 'Bookmark', active: false, overscroll: true, sub: ['General', 'Hover', 'Shadow'] },
  { name: 'Toolbar', active: false, overscroll: true, sub: ['Size', 'Position', 'Controls'] },
  { name: 'Data', active: false, overscroll: true, sub: ['Restore', 'Backup', 'Clear'] },
  { name: 'Coffee', active: false, overscroll: false },
  { name: appName, active: false, overscroll: false }
];

menu.mod = {};

menu.element = {
  frame: null
};

menu.open = (name) => {

  menu.element.frame = new MenuFrame({
    navData: menu.navData
  });

  if (name) {

    menu.element.frame.menuNav.state.toggle(name);

  };

  menu.element.frame.open();

};

menu.close = () => {

  if (menu.element.frame) {
    menu.element.frame.close();
  };

};

menu.toggle = () => {

  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  };

};

export { menu };
