import { debugSetting } from './debugSetting';
import { layoutSetting } from './layoutSetting';
import { bookmarkSetting } from './bookmarkSetting';
import { toolbarSetting } from './toolbarSetting';
import { themeSetting } from './themeSetting';
import { dataSetting } from './dataSetting';
import { supportSetting } from './supportSetting';
import { coffeeSetting } from './coffeeSetting';
import { appSetting } from './appSetting';

import { node } from '../../utility/node';

import './index.css';

export const MenuContent = function({
  activeNavData = {},
  container = false
} = {}) {

  this.element = {
    content: (id) => {
      return node('div|id:menu-content-item-' + id + ',class:menu-content-item');
    },
    header: (name) => {
      return node('div|class:menu-item-header', [
        node('h1:' + name + '|class:menu-item-header-text')
      ]);
    },
    form: ({ indent = false } = {}) => {

      const formElement = node('div|class:menu-item-form');

      if (indent) {
        formElement.classList.add('menu-item-form-indent');
      }

      return formElement;
    }
  };

  this.content = () => {

    if (activeNavData.sub && activeNavData.sub.length > 0) {

      activeNavData.sub.forEach(item => {

        const menuContentItem = this.element.content(this.makeId(item));

        menuContentItem.appendChild(this.element.header(item));

        const formElement = this.element.form({ indent: true });

        switch (activeNavData.id) {

          case 'layout':
            layoutSetting[this.makeId(item)](formElement);
            break;

          case 'bookmark':
            bookmarkSetting[this.makeId(item)](formElement);
            break;

          case 'toolbar':
            toolbarSetting[this.makeId(item)](formElement);
            break;

          case 'theme':
            themeSetting[this.makeId(item)](formElement);
            break;

          case 'data':
            dataSetting[this.makeId(item)](formElement);
            break;

          case 'debug':
            debugSetting[this.makeId(item)](formElement);
            break;

        }

        menuContentItem.appendChild(formElement);

        container.appendChild(menuContentItem);

      });

      switch (activeNavData.id) {

        case 'theme':
          themeSetting.disable();
          break;

      }

    } else {

      const menuContentItem = this.element.content(activeNavData.name);

      let formElement;

      switch (activeNavData.id) {

        case 'support':

          menuContentItem.appendChild(this.element.header(activeNavData.name));

          formElement = this.element.form({ indent: true });

          supportSetting[activeNavData.id](formElement);

          break;

        case 'coffee':

          menuContentItem.appendChild(this.element.header(activeNavData.name));

          formElement = this.element.form({ indent: true });

          coffeeSetting[activeNavData.id](formElement);

          break;

        case 'app':

          formElement = this.element.form();

          appSetting[activeNavData.id](formElement);

          break;

      }

      menuContentItem.appendChild(formElement);

      container.appendChild(menuContentItem);

    }

  };

  this.makeId = (name) => {
    return name.split(' ')[0].toLowerCase();
  };

};
