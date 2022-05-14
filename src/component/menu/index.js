import { state } from '../state';
import { APP_NAME } from '../../constant';

import { MenuFrame } from '../menuFrame';

const menu = {};

menu.navData = [
  // { name: 'Debug', id: 'debug', active: true, overscroll: true, sub: ['Input', 'Button', 'Bookmark', 'Icon'] },
  { name: 'Theme', id: 'theme', active: true, overscroll: true, sub: ['Preset', 'Saved', 'Style', 'Colour', 'Accent', 'Font', 'Shade', 'Opacity', 'Background', 'Bookmark'] },
  { name: 'Layout', id: 'layout', active: false, overscroll: true, sub: ['Scaling', 'Grid'] },
  { name: 'Bookmark', id: 'bookmark', active: false, overscroll: true, sub: ['General', 'Hover', 'Shadow'] },
  { name: 'Toolbar', id: 'toolbar', active: false, overscroll: true, sub: ['Size', 'Position', 'Controls'] },
  { name: 'Data', id: 'data', active: false, overscroll: true, sub: ['Restore', 'Backup', 'Clear'] },
  { name: 'Support', id: 'support', active: false, overscroll: false },
  { name: 'Coffee', id: 'coffee', active: false, overscroll: false },
  { name: APP_NAME, id: 'app', active: false, overscroll: false }
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

  }

  menu.element.frame.open();

};

menu.close = () => {

  if (menu.element.frame) {
    menu.element.frame.close();
  }

};

menu.toggle = () => {

  if (state.get.current().menu) {
    menu.close();
  } else {
    menu.open();
  }

};

export { menu };
