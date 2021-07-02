import { state } from '../state';
import { data } from '../data';

import { KeyboardShortcut } from '../keyboardShortcut';

import { menu } from '../menu';
import { bookmark } from '../bookmark';
import { theme } from '../theme';
import { toolbar } from '../toolbar';

import { themeSetting } from '../menuContent/themeSetting';

const keyboard = {};

keyboard.esc = new KeyboardShortcut({
  keycode: 27,
  action: () => {
    if (state.get.current().bookmark.edit && !state.get.current().modal && !state.get.current().menu) {
      bookmark.edit.close();
      toolbar.current.update.edit();
    };
  }
});

keyboard.ctrAltD = new KeyboardShortcut({
  keycode: 68,
  ctrl: true,
  alt: true,
  action: () => {
    theme.style.toggle();
    if (themeSetting.exposeControl.style) {
      themeSetting.exposeControl.style.update();
    };
    data.save();
  }
});

keyboard.ctrAltA = new KeyboardShortcut({
  keycode: 65,
  ctrl: true,
  alt: true,
  action: () => {
    if (!state.get.current().bookmark.add) {
      bookmark.add.render();
    };
  }
});

keyboard.ctrAltE = new KeyboardShortcut({
  keycode: 69,
  ctrl: true,
  alt: true,
  action: () => {
    bookmark.edit.toggle();
    toolbar.current.update.edit();
    data.save();
  }
});

keyboard.ctrAltM = new KeyboardShortcut({
  keycode: 77,
  ctrl: true,
  alt: true,
  action: () => {
    menu.toggle();
  }
});

keyboard.init = function() {
  keyboard.esc.add();
  keyboard.ctrAltA.add();
  keyboard.ctrAltE.add();
  keyboard.ctrAltD.add();
  keyboard.ctrAltM.add();
};

export { keyboard };
