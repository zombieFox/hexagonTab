import { state } from './state.js';
import { data } from './data.js';
import { gridList } from './grid';
import { modal } from './modal.js';
import { theme } from './theme.js';
import { autoSuggest } from './autoSuggest.js';
import { ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from './control.js';
import { node } from './utilities/node.js';
import { complexNode } from './utilities/complexNode.js';
import { form } from './utilities/form.js';
import { Button } from './utilities/button.js';
import { convertColor } from './utilities/convertColor.js';
import { ifValidString } from './utilities/ifValidString.js';
import { trimString } from './utilities/trimString.js';

const defaultBookmark = {
  url: '',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: '', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: '' }, icon: { name: '', prefix: '', label: '' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
};

const minMaxBookmark = {
  display: {
    rotate: { min: 0, max: 360 },
    translate: { x: { min: 0, max: 1000 }, y: { min: 0, max: 1000 } },
    name: { size: { min: 10, max: 200 } },
    visual: { size: { min: 10, max: 200 } }
  },
  accent: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
  },
  color: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    opacity: { min: 0, max: 100 }
  }
};

const StagedLink = function() {
  this.link = JSON.parse(JSON.stringify(defaultBookmark));

  this.position = { origin: 0, destination: 0 };

  this.newBookmark = function() {
    this.position.destination = bookmark.all.length + 1;
  };
};

let currentBookmarkForm = null;

const bookmark = {};

bookmark.all = [{
  url: 'https://zombiefox.github.io/awesomeSheet/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'awesomeSheet', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'AS' }, icon: { name: 'dice-d20', prefix: 'fas', label: 'Dice D20' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.amazon.co.uk/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Amazon', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'AZ' }, icon: { name: 'amazon', prefix: 'fab', label: 'Amazon' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://mail.google.com/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Gmail', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'GM' }, icon: { name: 'envelope', prefix: 'fas', label: 'Envelope' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.reddit.com/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Reddit', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'R' }, icon: { name: 'reddit-alien', prefix: 'fab', label: 'reddit Alien' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.netflix.com/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Netflix', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'N' }, icon: { name: 'film', prefix: 'fas', label: 'Film' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://drive.google.com/drive/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Drive', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'DR' }, icon: { name: 'google-drive', prefix: 'fab', label: 'Drive' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'http://devdocs.io/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Devdocs', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'DEV' }, icon: { name: 'code', prefix: 'fas', label: 'Code' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://github.com/',
  display: {
    rotate: 0,
    translate: { x: 0, y: 0 },
    name: { show: true, text: 'Github', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'GIT' }, icon: { name: 'github', prefix: 'fab', label: 'GitHub' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}];

bookmark.mod = {};

bookmark.mod.add = {
  open: function() {
    state.get.current().bookmark.add = true;
  },
  close: function() {
    state.get.current().bookmark.add = false;
  },
  toggle: function() {
    if (state.get.current().bookmark.add) {
      bookmark.mod.add.close();
    } else {
      bookmark.mod.add.open();
    };
  }
};

bookmark.mod.edit = {
  open: function() {
    state.get.current().bookmark.edit = true;
  },
  close: function() {
    state.get.current().bookmark.edit = false;
  },
  toggle: function() {
    if (state.get.current().bookmark.edit) {
      bookmark.mod.edit.close();
    } else {
      bookmark.mod.edit.open();
    };
  }
};

bookmark.mod.item = {};

bookmark.mod.item.add = function(bookmarkData) {
  bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);
};

bookmark.mod.item.edit = function(bookmarkData) {
  bookmark.all.splice(bookmarkData.position.origin, 1);
  bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);
};

bookmark.mod.item.remove = function(bookmarkData) {
  bookmark.all.splice(bookmarkData.position.origin, 1);
};

bookmark.mod.item.move = function(bookmarkData) {
  var bookmarkCopy = JSON.parse(JSON.stringify(bookmark.all[bookmarkData.position.origin]));
  bookmark.all.splice(bookmarkData.position.origin, 1);
  bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkCopy);
};

bookmark.render = {};

bookmark.render.clear = function() {
  while (gridList.lastChild) {
    gridList.removeChild(gridList.lastChild);
  };
};

bookmark.render.item = function() {
  var evenRowFlag = true; // if true the row is even
  var rowCount = 1; // used to asign and calculate the overall row start value

  var columnStart = 1; // starting grid column
  var rowStart = 1; // starting grid row

  bookmark.all.forEach(function(item, index) {
    //
    // column start
    //
    // define what column this bookmark will sit on
    if (index > 0) {
      columnStart = columnStart + 2;
    };
    // if end of grid reset column start
    if (index % (state.get.current().grid.column) === 0) {
      columnStart = 1;
    };

    //
    // row start
    //
    // define what row this bookmark will sit on
    if (index > 1 && index % state.get.current().grid.column === 0) {
      rowCount = rowCount + 2;
    };

    // define the offset of this bookmark on this row
    // find out if row is even
    if (index % state.get.current().grid.column === 0) {
      // toggle the flag
      if (evenRowFlag) {
        evenRowFlag = false;
      } else {
        evenRowFlag = true;
      };
    };

    // if column count is odd
    if (state.get.current().grid.column % 2 === 1 && state.get.current().grid.column > 1) {
      if (evenRowFlag) { // if row is even
        if (index % 2 === 1) { // if index is odd
          rowStart = rowCount;
        } else { // if index is even
          rowStart = rowCount + 1;
        };
      } else { // if row is odd
        // if index is odd
        if (index % 2 === 0) { // if index is even
          rowStart = rowCount;
        } else { // if index is odd
          rowStart = rowCount + 1;
        };
      };
    };

    // if column count is even
    if (state.get.current().grid.column % 2 === 0 && state.get.current().grid.column > 1) {
      if (index % 2 === 0) { // if index is even
        rowStart = rowCount;
      } else { // if index is odd
        rowStart = rowCount + 1;
      };
    };

    // if single column
    if (state.get.current().grid.column === 1) {
      if (index > 0) {
        rowStart = rowStart + 2;
      };
    };

    const bookmarkElement = node('div|class:bookmark');
    bookmarkElement.style.setProperty('--bookmark-row-start', rowStart);
    bookmarkElement.style.setProperty('--bookmark-column-start', columnStart);

    const shadowWrap = node('div|class:bookmark-shadow-wrap');
    const shadow = node('div|class:bookmark-shadow');
    shadowWrap.appendChild(shadow);

    const contentWrap = node('div|class:bookmark-content-wrap');

    let contentOptions = {
      tag: "a",
      attr: [{
        key: "class",
        value: "bookmark-content"
      }, {
        key: "tabindex",
        value: 1
      }]
    };
    if (ifValidString(item.url)) {
      contentOptions.attr.push({
        key: "href",
        value: trimString(item.url)
      });
    } else {
      contentOptions.attr.push({
        key: "href",
        value: "#"
      });
    };
    const content = complexNode(contentOptions);

    const display = node('div|class:bookmark-display');

    const visual = node('div|class:bookmark-display-visual');
    const visualLetter = node('div:' + item.display.visual.letter.text + '|class:bookmark-display-visual-letter');
    const visualIcon = node('div|class:bookmark-display-visual-icon');
    const icon = node('div|class:' + item.display.visual.icon.prefix + ' fa-' + item.display.visual.icon.name);
    visualIcon.appendChild(icon);
    const visualImage = node('div|class:bookmark-display-visual-image');

    switch (item.display.visual.type) {
      case 'letter':
        visual.appendChild(visualLetter);
        break;

      case 'icon':
        visual.appendChild(visualIcon);
        break;

      case 'image':
        visual.appendChild(visualImage);
        break;
    };

    if (item.display.visual.show) {
      display.appendChild(visual);
    };

    const name = node('div|class:bookmark-display-name');
    const nameText = node('div:' + item.display.name.text + '|class:bookmark-display-name-text');
    name.appendChild(nameText);

    if (item.display.name.show) {
      display.appendChild(name);
    };

    if (item.display.visual.show || item.display.name.show) {
      content.appendChild(display);
    };

    contentWrap.appendChild(content);
    bookmarkElement.appendChild(shadowWrap);
    bookmarkElement.appendChild(contentWrap);

    bookmarkElement.style.setProperty('--bookmark-transition-delay', index);

    bookmarkElement.style.setProperty('--bookmark-color-opacity', item.color.opacity);

    bookmarkElement.style.setProperty('--bookmark-display-translate-x', item.display.translate.x);
    bookmarkElement.style.setProperty('--bookmark-display-translate-y', item.display.translate.y);
    bookmarkElement.style.setProperty('--bookmark-display-rotate', item.display.rotate);

    bookmarkElement.style.setProperty('--bookmark-display-visual-size', item.display.visual.size);
    bookmarkElement.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(item.display.visual.image.url) + ')');
    bookmarkElement.style.setProperty('--bookmark-display-name-size', item.display.name.size);

    if (item.accent.by == 'custom') {
      bookmarkElement.style.setProperty('--theme-accent-r', item.accent.rgb.r);
      bookmarkElement.style.setProperty('--theme-accent-g', item.accent.rgb.g);
      bookmarkElement.style.setProperty('--theme-accent-b', item.accent.rgb.b);
      bookmarkElement.style.setProperty('--theme-accent', 'var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b)');
      bookmarkElement.style.setProperty('--theme-accent-accessible-threshold', '0.5');
      bookmarkElement.style.setProperty('--theme-accent-accessible-r', 'calc(var(--theme-accent-r) * 0.50)');
      bookmarkElement.style.setProperty('--theme-accent-accessible-g', 'calc(var(--theme-accent-g) * 0.60)');
      bookmarkElement.style.setProperty('--theme-accent-accessible-b', 'calc(var(--theme-accent-b) * 0.20)');
      bookmarkElement.style.setProperty('--theme-accent-accessible-sum', 'calc(var(--theme-accent-accessible-r) + var(--theme-accent-accessible-g) + var(--theme-accent-accessible-b))');
      bookmarkElement.style.setProperty('--theme-accent-accessible-perceived-lightness', 'calc(var(--theme-accent-accessible-sum) / 255)');
      bookmarkElement.style.setProperty('--theme-accent-accessible-color', '0, 0%, calc((var(--theme-accent-accessible-perceived-lightness) - var(--theme-accent-accessible-threshold)) * -10000000%)');
      bookmarkElement.style.setProperty('--bookmark-display-visual-color', 'var(--theme-accent)');
      bookmarkElement.style.setProperty('--bookmark-display-visual-color-focus-hover', 'var(--theme-style-text)');
    };

    if (item.color.by == 'custom') {
      var hsl = convertColor.rgb.hsl(item.color.rgb);

      var shades = theme.mod.color.shades({
        rgb: item.color.rgb,
        contrastNegative: 7,
        contrastPositive: 7
      });

      var rgb;

      if (hsl.l <= 50) {
        if (hsl.l > 30 && hsl.l <= 50 && hsl.h > 40 && hsl.h < 200) {
          rgb = shades.negative['9'];
        } else {
          rgb = shades.positive['9'];
        };
      } else {
        rgb = shades.negative['9'];
      };

      if (hsl.l <= 50) {
        bookmarkElement.style.setProperty('--theme-style-text', 'var(--theme-white)');
      } else {
        bookmarkElement.style.setProperty('--theme-style-text', 'var(--theme-black)');
      };

      bookmarkElement.style.setProperty('--bookmark-color', item.color.rgb.r + ', ' + item.color.rgb.g + ', ' + item.color.rgb.b);
      bookmarkElement.style.setProperty('--bookmark-color-focus-hover', item.color.rgb.r + ', ' + item.color.rgb.g + ', ' + item.color.rgb.b);
      bookmarkElement.style.setProperty('--bookmark-display-name-color', rgb.r + ', ' + rgb.g + ', ' + rgb.b);
      bookmarkElement.style.setProperty('--bookmark-display-name-color-focus-hover', 'var(--theme-style-text)');
    };

    const control = node('div|class:bookmark-control form-group');

    const controlLeft = new Button({
      text: 'Move this bookmark left',
      srOnly: true,
      iconName: 'arrowKeyboardLeft',
      style: ['link'],
      title: 'Edit this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-left'],
      func: () => {
        let bookmarkData = new StagedLink();
        bookmarkData.link = JSON.parse(JSON.stringify(item));
        bookmarkData.position.origin = index;
        bookmarkData.position.destination = index - 1;
        if (bookmarkData.position.destination < 0) {
          bookmarkData.position.destination = 0;
        };
        bookmark.mod.item.move(bookmarkData);
        bookmark.render.clear();
        bookmark.render.item();
        data.save();
      }
    });

    const controlRight = new Button({
      text: 'Move this bookmark right',
      srOnly: true,
      iconName: 'arrowKeyboardRight',
      style: ['link'],
      title: 'Move this bookmark left',
      classList: ['bookmark-control-button', 'bookmark-control-right'],
      func: () => {
        let bookmarkData = new StagedLink();
        bookmarkData.link = JSON.parse(JSON.stringify(item));
        bookmarkData.position.origin = index;
        bookmarkData.position.destination = index + 1;
        if (bookmarkData.position.destination > bookmark.all.length - 1) {
          bookmarkData.position.destination = bookmark.all.length - 1;
        };
        bookmark.mod.item.move(bookmarkData);
        bookmark.render.clear();
        bookmark.render.item();
        data.save();
      }
    });

    const controlEdit = new Button({
      text: 'Edit this bookmark',
      srOnly: true,
      iconName: 'edit',
      style: ['link'],
      title: 'Move this bookmark right',
      classList: ['bookmark-control-button', 'bookmark-control-edit'],
      func: () => {
        let bookmarkData = new StagedLink();
        bookmarkData.link = JSON.parse(JSON.stringify(item));
        bookmarkData.position.origin = index;
        bookmarkData.position.destination = index;
        modal.open({
          heading: 'Edit ' + item.display.name.text,
          actionText: 'Save',
          content: bookmark.form(bookmarkData),
          width: 40,
          successAction: () => {
            bookmark.mod.item.edit(bookmarkData);
            bookmark.render.clear();
            bookmark.render.item();
            data.save();
          }
        });
      }
    });

    const controlRemove = new Button({
      text: 'Remove this bookmark',
      srOnly: true,
      iconName: 'cross',
      style: ['link'],
      title: 'Remove this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-remove'],
      func: () => {
        let heading;
        if (ifValidString(item.display.name.text)) {
          heading = 'Remove ' + item.display.name.text;
        } else {
          heading = 'Remove unnamed bookmark';
        };
        modal.open({
          heading: heading,
          size: 'small',
          actionText: 'Remove',
          content: 'Are you sure you want to remove this Bookmark? This can not be undone.',
          successAction: () => {
            let bookmarkData = new StagedLink();
            bookmarkData.link = JSON.parse(JSON.stringify(item));
            bookmarkData.position.origin = index;
            bookmarkData.position.destination = index;
            bookmark.mod.item.remove(bookmarkData);
            bookmark.render.clear();
            bookmark.render.item();
            data.save();
          }
        });
      }
    });

    control.appendChild(controlLeft.button);
    control.appendChild(controlRight.button);
    control.appendChild(controlEdit.button);
    control.appendChild(controlRemove.button);

    contentWrap.appendChild(control);

    gridList.appendChild(bookmarkElement);
  });
};

bookmark.render.controlTabIndex = function() {
  const allControlButton = document.querySelectorAll('.bookmark-control-button');

  allControlButton.forEach((item, i) => {
    if (true) {
      if (state.get.current().bookmark.edit) {
        item.setAttribute('tabindex', 1);
      } else {
        item.setAttribute('tabindex', -1);
      };
    }
  });
};

bookmark.render.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--bookmark-size', state.get.current().bookmark.size);
  html.style.setProperty('--bookmark-hover-distance', state.get.current().bookmark.hover.distance);
  html.style.setProperty('--bookmark-hover-size', state.get.current().bookmark.hover.size);
  html.style.setProperty('--bookmark-shadow-blur', state.get.current().bookmark.shadow.blur);
  html.style.setProperty('--bookmark-shadow-distance', state.get.current().bookmark.shadow.distance);
};

bookmark.render.class = function() {
  const html = document.querySelector('html');

  if (state.get.current().bookmark.edit) {
    html.classList.add('is-bookmark-edit');
  } else {
    html.classList.remove('is-bookmark-edit');
  };
};

bookmark.render.add = function() {
  const newBookmarkData = new StagedLink();

  newBookmarkData.newBookmark();

  modal.open({
    heading: 'Add a new Bookmark',
    size: 'small',
    actionText: 'Add',
    content: bookmark.form(newBookmarkData),
    width: 40,
    successAction: () => {
      bookmark.mod.item.add(newBookmarkData);
      bookmark.render.clear();
      bookmark.render.item();
      data.save();
    },
    dismissAction: () => {
      bookmark.add.close();
      data.save();
    }
  });
};

bookmark.form = function(bookmarkData) {
  const bookmarkForm = node('form|class:bookmark-form');

  bookmarkForm.disableForm = () => {
    if (bookmarkData.link.display.visual.show) {
      displayVisualType.enable();
      displayVisualTypeLetter.enable();
      displayVisualTypeIcon.enable();
      displayVisualTypeIconDisplay.enable();
      displayVisualTypeIconRemove.enable();
      displayVisualTypeImage.enable();
      displayVisualSize.enable();
    } else {
      displayVisualType.disable();
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable();
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.disable();
      displayVisualSize.disable();
    };

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.visual.type === 'letter') {
      displayVisualTypeLetter.enable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable()
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.disable();
    } else if (bookmarkData.link.display.visual.show && bookmarkData.link.display.visual.type === 'icon') {
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.enable();
      displayVisualTypeIconDisplay.enable();
      displayVisualTypeIconRemove.enable();
      displayVisualTypeImage.disable();
    } else if (bookmarkData.link.display.visual.show && bookmarkData.link.display.visual.type === 'image') {
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable()
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.enable();
    };

    if (bookmarkData.link.display.name.show) {
      displayNameText.enable();
      displayNameSize.enable();
    } else {
      displayNameText.disable();
      displayNameSize.disable();
    };
  };

  const displayVisualShow = new ControlModule_checkbox({
    object: bookmarkData.link,
    path: 'display.visual.show',
    id: 'display-visual-show',
    labelText: 'Show Visual Element',
    description: 'Display Letters, Icon or an Image on this Bookmark tile.',
    action: () => {
      bookmarkForm.disableForm();
    }
  });

  const displayVisualType = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-visual-type-letter', labelText: 'Letter', description: false, value: 'letter' },
      { id: 'display-visual-type-icon', labelText: 'Icon', description: false, value: 'icon' },
      { id: 'display-visual-type-image', labelText: 'Image', description: false, value: 'image' }
    ],
    groupName: 'display-visual-type',
    path: 'display.visual.type',
    action: () => {
      bookmarkForm.disableForm();
    }
  });

  const displayVisualTypeLetter = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.letter.text',
    id: 'display-visual-letter-text',
    value: bookmarkData.link.display.visual.letter.text,
    placeholder: 'E',
    labelText: 'Bookmark letter',
    srOnly: true
  });

  const displayVisualSize = new ControlModule_slider({
    object: bookmarkData.link,
    path: 'display.visual.size',
    id: 'display-visual-size',
    labelText: 'Visual Element size',
    value: bookmarkData.link.display.visual.size,
    defaultValue: defaultBookmark.display.visual.size,
    min: minMaxBookmark.display.visual.size.min,
    max: minMaxBookmark.display.visual.size.max
  });

  const displayVisualTypeIcon = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.icon.label',
    id: 'display-visual-icon-label',
    value: bookmarkData.link.display.visual.icon.label,
    placeholder: 'FontAwesome Brands or Icons',
    labelText: 'Bookmark icon',
    srOnly: true
  });

  const displayVisualTypeIconDisplay = new ControlModule_groupText({
    classList: ['bookmark-form-text-icon']
  });

  const displayVisualTypeIconRemove = new Button({
    text: 'Remove icon',
    srOnly: true,
    style: ['line'],
    iconName: 'cross',
    func: () => {
      bookmarkData.link.display.visual.icon.label = '';
      bookmarkData.link.display.visual.icon.prefix = '';
      bookmarkData.link.display.visual.icon.name = '';
      bookmarkForm.update();
    }
  });

  const displayVisualTypeImage = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.image.url',
    id: 'display-visual-image-url',
    value: bookmarkData.link.display.visual.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Bookmark image',
    srOnly: true
  });

  const displayNameShow = new ControlModule_checkbox({
    object: bookmarkData.link,
    path: 'display.name.show',
    id: 'display-name-show',
    labelText: 'Show Name',
    description: 'Display a Name on this Bookmark tile.',
    action: () => {
      bookmarkForm.disableForm();
    }
  });

  const displayNameText = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.name.text',
    id: 'display-name-text',
    value: bookmarkData.link.display.name.text,
    placeholder: 'Example',
    labelText: 'Bookmark name',
    srOnly: true
  });

  const displayNameSize = new ControlModule_slider({
    object: bookmarkData.link,
    path: 'display.name.size',
    id: 'display-name-size',
    labelText: 'Name size',
    value: bookmarkData.link.display.name.size,
    defaultValue: defaultBookmark.display.name.size,
    min: minMaxBookmark.display.name.min,
    max: minMaxBookmark.display.name.max
  });

  const url = new ControlModule_text({
    object: bookmarkData.link,
    path: 'url',
    id: 'url',
    value: bookmarkData.link.url,
    placeholder: 'https://www.example.com/',
    labelText: 'URL'
  });

  const displayVisualTypeWrap = form.render.wrap([
    form.render.indent([
      displayVisualShow.wrap(),
      form.render.indent([
        form.render.wrap([
          displayVisualType.radioSet[0].radio,
          displayVisualType.radioSet[0].label
        ]),
        form.render.wrap([
          form.render.indent([
            displayVisualTypeLetter.wrap()
          ])
        ]),
        form.render.wrap([
          displayVisualType.radioSet[1].radio,
          displayVisualType.radioSet[1].label
        ]),
        form.render.wrap([
          form.render.indent([
            form.render.wrap([
              displayVisualTypeIcon.label,
              form.render.group([
                displayVisualTypeIcon.text,
                displayVisualTypeIconDisplay.groupText,
                displayVisualTypeIconRemove.button
              ])
            ])
          ])
        ]),
        form.render.wrap([
          displayVisualType.radioSet[2].radio,
          displayVisualType.radioSet[2].label
        ]),
        form.render.wrap([
          form.render.indent([
            displayVisualTypeImage.wrap()
          ])
        ]),
        node('hr'),
        displayVisualSize.wrap()
      ])
    ])
  ]);

  bookmarkForm.appendChild(
    form.render.fieldset([
      form.render.wrap([
        node('h2:Visual Element|class:mb-0')
      ]),
      displayVisualTypeWrap,
      node('hr'),
      form.render.wrap([
        node('h2:Name|class:mb-0'),
      ]),
      form.render.wrap([
        form.render.indent([
          displayNameShow.wrap(),
          form.render.wrap([
            form.render.indent([
              displayNameText.wrap(),
              node('hr'),
              displayNameSize.wrap()
            ])
          ])
        ])
      ]),
      node('hr'),
      form.render.wrap([
        node('h2:Address|class:mb-0'),
      ]),
      form.render.wrap([
        form.render.indent([
          url.wrap()
        ])
      ])
    ])
  );

  if (ifValidString(bookmarkData.link.display.visual.icon.prefix) && ifValidString(bookmarkData.link.display.visual.icon.name)) {
    displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
  } else {
    displayVisualTypeIconDisplay.update();
  };

  autoSuggest.bind.input({
    input: displayVisualTypeIcon.text,
    anchorElement: displayVisualTypeWrap,
    type: 'fontawesomeIcon',
    postFocus: displayVisualTypeIconDisplay
  });

  bookmarkForm.update = () => {
    displayVisualShow.update();
    displayVisualType.update();
    displayVisualTypeLetter.update();
    displayVisualTypeIcon.update();
    if (ifValidString(bookmarkData.link.display.visual.icon.prefix) && ifValidString(bookmarkData.link.display.visual.icon.name)) {
      displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
    } else {
      displayVisualTypeIconDisplay.update();
    };
    displayVisualTypeImage.update();
    displayNameShow.update();
    displayNameText.update();
    url.update();
  };

  bookmarkForm.updateIcon = (autoSuggestData) => {
    bookmarkData.link.display.visual.icon.label = autoSuggestData.label;
    bookmarkData.link.display.visual.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes('solid')) {
      bookmarkData.link.display.visual.icon.prefix = 'fas';
    } else if (autoSuggestData.styles.includes('brands')) {
      bookmarkData.link.display.visual.icon.prefix = 'fab';
    };
    bookmarkForm.update();
  };

  bookmarkForm.disableForm();

  currentBookmarkForm = bookmarkForm;

  bookmarkForm.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    };
  });

  return bookmarkForm;
};

bookmark.restore = function(dataToRestore) {
  bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark.add = {
  open: function() {
    bookmark.mod.add.open();
    bookmark.render.add();
  },
  close: function() {
    bookmark.mod.add.close();
  }
};

bookmark.edit = {
  open: function() {
    bookmark.mod.edit.open();
    bookmark.render.class();
    bookmark.render.controlTabIndex();
  },
  close: function() {
    bookmark.mod.edit.close();
    bookmark.render.class();
    bookmark.render.controlTabIndex();
  },
  toggle: function() {
    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    };
  }
};

bookmark.init = function() {
  bookmark.add.close();
  bookmark.render.style();
  bookmark.render.class();
  bookmark.render.item();
  bookmark.render.controlTabIndex();
};

export { bookmark, currentBookmarkForm };
