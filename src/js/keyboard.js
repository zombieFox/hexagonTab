import { data } from './data';
import { state } from './state';
import { menu } from './menu';
import { modal } from './modal';
import { bookmark } from './bookmark';
import { theme } from './theme';
import { autoSuggest } from './autoSuggest';
import { toolbar } from './toolbar';

const KeyPress = function({ keycode = false, ctrl = false, alt = false, action = false } = {}) {
  this.bind = () => {
    if (keycode) {
      window.addEventListener('keydown', function(event) {

        if ((event.keyCode == keycode) && (ctrl == event.ctrlKey) && (alt == event.altKey)) {
          this.func();
        };

      }.bind(this));
    };
  };

  this.func = () => {
    if (action) {
      action();
    };
  };

};

const keyboard = {};

keyboard.esc = new KeyPress({
  keycode: 27,
  action: () => {
    if (state.get.current().menu) {
      menu.close();
    } else if (state.get.current().autoSuggest) {
      autoSuggest.close();
    } else if (state.get.current().bookmark.add) {
      modal.close();
    } else if (state.get.current().modal) {
      modal.close();
    } else if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    };
  }
});

keyboard.ctrAltA = new KeyPress({
  keycode: 65,
  ctrl: true,
  alt: true,
  action: () => {
    if (state.get.current().menu) {
      menu.close();
    };
    if (!state.get.current().bookmark.add) {
      bookmark.add.open();
    };
  }
});

keyboard.ctrAltE = new KeyPress({
  keycode: 69,
  ctrl: true,
  alt: true,
  action: () => {
    bookmark.edit.toggle();
    toolbar.render.active();
    data.save();
  }
});

keyboard.ctrAltD = new KeyPress({
  keycode: 68,
  ctrl: true,
  alt: true,
  action: () => {
    theme.style.toggle();
  }
});

keyboard.ctrAltM = new KeyPress({
  keycode: 77,
  ctrl: true,
  alt: true,
  action: () => {
    if (state.get.current().bookmark.add) {
      modal.close();
    };
    menu.toggle();
  }
});

keyboard.init = function() {
  keyboard.esc.bind();
  keyboard.ctrAltA.bind();
  keyboard.ctrAltE.bind();
  keyboard.ctrAltD.bind();
  keyboard.ctrAltM.bind();
};

export { KeyPress, keyboard };
