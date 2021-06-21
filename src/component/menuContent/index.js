import { data } from '../data';
import { layoutSetting } from './layoutSetting';
import { bookmarkSetting } from './bookmarkSetting';
import { toolbarSetting } from './toolbarSetting';
import { themeSetting } from './themeSetting';
import { dataSetting } from './dataSetting';
import { coffeeSetting } from './coffeeSetting';
import { appSetting } from './appSetting';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

const MenuContent = function({
  activeNavData = {},
  container = false
} = {}) {

  this.element = {
    content: (name) => {
      return node('div|id:menu-content-item-' + this.makeId(name) + ',class:menu-content-item');
    },
    header: (name) => {
      return node('div|class:menu-item-header', [
        node('h1:' + name + '|class:menu-item-header-text')
      ]);
    },
    form: (children) => {
      return node('div|class:menu-item-form', children);
    }
  };

  this.content = () => {

    if (activeNavData.sub && activeNavData.sub.length > 0) {

      activeNavData.sub.forEach((item, i) => {

        const menuContentItem = this.element.content(item);

        menuContentItem.appendChild(this.element.header(item));

        const formElement = this.element.form();

        switch (this.makeId(activeNavData.name)) {
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

        };

        menuContentItem.appendChild(formElement);

        container.appendChild(menuContentItem);

      });

    } else {

      const menuContentItem = this.element.content(activeNavData.name);

      menuContentItem.appendChild(this.element.header(activeNavData.name));

      const formElement = this.element.form();

      switch (this.makeId(activeNavData.name)) {
        case 'coffee':
          coffeeSetting[this.makeId(activeNavData.name)](formElement);
          break;

        case this.makeId(data.saveName):
          appSetting[this.makeId(activeNavData.name)](formElement);
          break;

      };

      menuContentItem.appendChild(formElement);

      container.appendChild(menuContentItem);

    };

  };

  this.makeId = (name) => {
    return name.replace(/\s+/g, '-').toLowerCase()
  };

};

export { MenuContent };
