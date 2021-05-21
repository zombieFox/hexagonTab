
import { state } from '../state';
import { data } from '../data';
import { gridList } from '../grid';
import { modal } from '../modal';
import { theme } from '../theme';
import { form } from '../form';

import { Button } from '../button';
import { Suggest } from '../autoSuggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';
import { ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from '../control';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { convertColor } from '../../utility/convertColor';
import { ifValidString } from '../../utility/ifValidString';
import { trimString } from '../../utility/trimString';

import './index.css';

const defaultBookmark = {
  url: '',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: '', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: '' }, icon: { name: '', prefix: '', label: '' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
};

const minMaxBookmark = {
  display: {
    rotate: { min: -180, max: 180 },
    translate: { x: { min: -300, max: 300 }, y: { min: -300, max: 300 } },
    gutter: { min: 0, max: 500 },
    visual: { size: { min: 5, max: 200 } },
    name: { size: { min: 5, max: 200 } }
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
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'awesomeSheet', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'AS' }, icon: { name: 'dice-d20', prefix: 'fas', label: 'Dice D20' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.amazon.co.uk/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Amazon', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'AZ' }, icon: { name: 'amazon', prefix: 'fab', label: 'Amazon' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://mail.google.com/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Gmail', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'GM' }, icon: { name: 'envelope', prefix: 'fas', label: 'Envelope' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.reddit.com/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Reddit', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'R' }, icon: { name: 'reddit-alien', prefix: 'fab', label: 'reddit Alien' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://www.netflix.com/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Netflix', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'N' }, icon: { name: 'film', prefix: 'fas', label: 'Film' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://drive.google.com/drive/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Drive', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'DR' }, icon: { name: 'google-drive', prefix: 'fab', label: 'Drive' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://devdocs.io/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Devdocs', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'DEV' }, icon: { name: 'code', prefix: 'fas', label: 'Code' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 }
}, {
  url: 'https://github.com/',
  display: {
    direction: "vertical",
    order: "visual-name",
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
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

bookmark.mod.propagate = {};

bookmark.mod.propagate.state = {
  current: {
    visual: false,
    name: false,
    layout: false,
    theme: false
  },
  reset: function() {
    for (var key in bookmark.mod.propagate.state.current) {
      bookmark.mod.propagate.state.current[key] = false;
    }
  },
  apply: function(bookmarkData) {
    if (bookmark.mod.propagate.state.current.layout) {
      bookmark.all.forEach((item, i) => {
        item.display.visual.size = bookmarkData.link.display.visual.size;
        item.display.name.size = bookmarkData.link.display.name.size;
        item.display.gutter = bookmarkData.link.display.gutter;
        item.display.rotate = bookmarkData.link.display.rotate;
        item.display.translate = bookmarkData.link.display.translate;
        item.display.direction = bookmarkData.link.display.direction;
        item.display.order = bookmarkData.link.display.order;
      });
    };

    if (bookmark.mod.propagate.state.current.visual) {
      bookmark.all.forEach((item, i) => {
        item.display.visual.show = bookmarkData.link.display.visual.show;
      });
    };

    if (bookmark.mod.propagate.state.current.name) {
      bookmark.all.forEach((item, i) => {
        item.display.name.show = bookmarkData.link.display.name.show;
      });
    };

    if (bookmark.mod.propagate.state.current.theme) {
      bookmark.all.forEach((item, i) => {
        item.accent = bookmarkData.link.accent;
        item.color = bookmarkData.link.color;
      });
    };

    bookmark.mod.propagate.state.reset();
  }
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

    gridList.appendChild(bookmark.render.tile(item, index, rowStart, columnStart));
  });
};

bookmark.render.tile = function(tileData, index, rowStart, columnStart, preview) {
  const bookmarkElement = node('div|class:bookmark');

  if (preview) {
    bookmarkElement.classList.add('bookmark-preview');
  };

  bookmarkElement.style.setProperty('--bookmark-row-start', rowStart);

  bookmarkElement.style.setProperty('--bookmark-column-start', columnStart);

  const shadowWrap = node('div|class:bookmark-shadow-wrap');

  const shadow = node('div|class:bookmark-shadow');
  shadowWrap.appendChild(shadow);

  const contentWrap = node('div|class:bookmark-content-wrap');

  let contentOptions = { tag: 'a', attr: [{ key: 'class', value: 'bookmark-content' }, { key: 'tabindex', value: 1 }] };

  if (ifValidString(tileData.url) && !preview) {
    contentOptions.attr.push({ key: 'href', value: trimString(tileData.url) });
  } else {
    contentOptions.attr.push({ key: 'href', value: '#' });
  };

  const content = complexNode(contentOptions);

  const display = node('div|class:bookmark-display');

  const visual = node('div|class:bookmark-display-visual');

  const visualLetter = node('div:' + tileData.display.visual.letter.text + '|class:bookmark-display-visual-letter');

  const visualIcon = node('div|class:bookmark-display-visual-icon');

  const icon = node('div|class:' + tileData.display.visual.icon.prefix + ' fa-' + tileData.display.visual.icon.name);

  visualIcon.appendChild(icon);

  const visualImage = node('div|class:bookmark-display-visual-image');

  switch (tileData.display.visual.type) {
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

  if (tileData.display.visual.show) {
    display.appendChild(visual);
  };

  const name = node('div|class:bookmark-display-name');
  const nameText = node('div:' + tileData.display.name.text + '|class:bookmark-display-name-text');
  name.appendChild(nameText);

  if (tileData.display.name.show) {
    display.appendChild(name);
  };

  if (tileData.display.visual.show || tileData.display.name.show) {
    content.appendChild(display);
  };

  contentWrap.appendChild(content);

  bookmarkElement.appendChild(shadowWrap);

  bookmarkElement.appendChild(contentWrap);

  bookmarkElement.style.setProperty('--bookmark-transition-delay', index);

  bookmarkElement.style.setProperty('--bookmark-color-opacity', tileData.color.opacity);

  switch (tileData.display.direction) {
    case 'vertical':
      switch (tileData.display.order) {
        case 'visual-name':
          bookmarkElement.style.setProperty('--bookmark-display-direction', 'column');
          break;

        case 'name-visual':
          bookmarkElement.style.setProperty('--bookmark-display-direction', 'column-reverse');
          break;
      };
      break;

    case 'horizontal':
      switch (tileData.display.order) {
        case 'visual-name':
          bookmarkElement.style.setProperty('--bookmark-display-direction', 'row');
          break;

        case 'name-visual':
          bookmarkElement.style.setProperty('--bookmark-display-direction', 'row-reverse');
          break;
      };
      break;
  };

  bookmarkElement.style.setProperty('--bookmark-display-translate-x', tileData.display.translate.x);
  bookmarkElement.style.setProperty('--bookmark-display-translate-y', tileData.display.translate.y);
  bookmarkElement.style.setProperty('--bookmark-display-rotate', tileData.display.rotate);
  bookmarkElement.style.setProperty('--bookmark-display-gutter', tileData.display.gutter);

  bookmarkElement.style.setProperty('--bookmark-display-visual-size', tileData.display.visual.size);
  bookmarkElement.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(tileData.display.visual.image.url) + ')');

  bookmarkElement.style.setProperty('--bookmark-display-name-size', tileData.display.name.size);

  if (tileData.accent.by == 'custom') {
    bookmarkElement.style.setProperty('--theme-accent-r', tileData.accent.rgb.r);
    bookmarkElement.style.setProperty('--theme-accent-g', tileData.accent.rgb.g);
    bookmarkElement.style.setProperty('--theme-accent-b', tileData.accent.rgb.b);
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

  if (tileData.color.by == 'custom') {
    var shades = theme.mod.color.shades({
      rgb: tileData.color.rgb,
      contrastNegative: 60,
      contrastPositive: 60
    });

    var nameColor;

    if (tileData.color.hsl.l <= 50) {
      if (tileData.color.hsl.l > 30 && tileData.color.hsl.l <= 50 && tileData.color.hsl.h > 40 && tileData.color.hsl.h < 200) {
        nameColor = shades.negative['9'];
      } else {
        nameColor = shades.positive['9'];
      };
    } else {
      nameColor = shades.negative['9'];
    };

    if (tileData.color.hsl.l <= 50) {
      bookmarkElement.style.setProperty('--theme-style-text', 'var(--theme-white)');
    } else {
      bookmarkElement.style.setProperty('--theme-style-text', 'var(--theme-black)');
    };

    bookmarkElement.style.setProperty('--bookmark-color', tileData.color.rgb.r + ', ' + tileData.color.rgb.g + ', ' + tileData.color.rgb.b);
    bookmarkElement.style.setProperty('--bookmark-color-focus-hover', tileData.color.rgb.r + ', ' + tileData.color.rgb.g + ', ' + tileData.color.rgb.b);
    bookmarkElement.style.setProperty('--bookmark-display-name-color', nameColor.r + ', ' + nameColor.g + ', ' + nameColor.b);
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
      bookmarkData.link = JSON.parse(JSON.stringify(tileData));
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
      bookmarkData.link = JSON.parse(JSON.stringify(tileData));
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
      bookmarkData.link = JSON.parse(JSON.stringify(tileData));
      bookmarkData.position.origin = index;
      bookmarkData.position.destination = index;
      modal.open({
        heading: 'Edit ' + tileData.display.name.text,
        actionText: 'Save',
        content: bookmark.form(bookmarkData),
        width: 60,
        maxHeight: true,
        successAction: () => {
          bookmark.mod.item.edit(bookmarkData);
          bookmark.mod.propagate.state.apply(bookmarkData);
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
      if (ifValidString(tileData.display.name.text)) {
        heading = 'Remove ' + tileData.display.name.text;
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
          bookmarkData.link = JSON.parse(JSON.stringify(tileData));
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

  return bookmarkElement;
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
    width: 60,
    maxHeight: true,
    successAction: () => {
      bookmark.mod.item.add(newBookmarkData);
      bookmark.mod.propagate.state.apply(newBookmarkData);
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
  bookmark.mod.propagate.state.reset();

  const bookmarkForm = node('form|class:bookmark-form');

  const bookmarkFormMain = node('form|class:bookmark-form-main');

  bookmarkForm.disable = () => {
    if (bookmarkData.link.display.visual.show) {
      displayVisualType.enable();
      displayVisualTypeLetter.enable();
      displayVisualTypeIcon.enable();
      displayVisualTypeIconDisplay.enable();
      displayVisualTypeIconRemove.enable();
      displayVisualTypeImage.enable();
      displayVisualSize.enable();

      switch (bookmarkData.link.display.visual.type) {
        case 'letter':
          displayVisualTypeLetter.enable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.disable();
          break;

        case 'icon':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.enable();
          displayVisualTypeIconDisplay.enable();
          displayVisualTypeIconRemove.enable();
          displayVisualTypeImage.disable();
          break;

        case 'image':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.enable();
          break;
      };
    } else {
      displayVisualType.disable();
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable();
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.disable();
      displayVisualSize.disable();
    };

    if (bookmarkData.link.display.name.show) {
      displayNameText.enable();
      displayNameSize.enable();
    } else {
      displayNameText.disable();
      displayNameSize.disable();
    };

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      displayTranslateX.enable();
      displayTranslateY.enable();
      displayRotate.enable();
    } else {
      displayTranslateX.disable();
      displayTranslateY.disable();
      displayRotate.disable();
    };

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.name.show) {
      displayVisualDirection.enable();
      displayVisualOrder.enable();
      displayGutter.enable();
    } else {
      displayVisualDirection.disable();
      displayVisualOrder.disable();
      displayGutter.disable();
    };

    switch (bookmarkData.link.color.by) {
      case 'theme':
        colorMixer.disable();
        break;

      case 'custom':
        colorMixer.enable();
        break;
    };

    switch (bookmarkData.link.accent.by) {
      case 'theme':
        accentMixer.disable();
        break;

      case 'custom':
        accentMixer.enable();
        break;
    };
  };

  const displayVisualShow = new ControlModule_checkbox({
    object: bookmarkData.link,
    path: 'display.visual.show',
    id: 'display-visual-show',
    labelText: 'Show Visual Element',
    description: 'Display Letters, Icon or an Image on this Bookmark hexagon.',
    action: () => {
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const displayVisualType = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-visual-type-letter', labelText: 'Letter', value: 'letter' },
      { id: 'display-visual-type-icon', labelText: 'Icon', value: 'icon' },
      { id: 'display-visual-type-image', labelText: 'Image', value: 'image' }
    ],
    groupName: 'display-visual-type',
    path: 'display.visual.type',
    action: () => {
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const displayVisualTypeLetter = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.letter.text',
    id: 'display-visual-letter-text',
    value: bookmarkData.link.display.visual.letter.text,
    placeholder: 'E',
    labelText: 'Bookmark letter',
    srOnly: true,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayVisualTypeIcon = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.icon.label',
    id: 'display-visual-icon-label',
    value: bookmarkData.link.display.visual.icon.label,
    placeholder: 'FontAwesome Brands or Icons',
    labelText: 'Bookmark icon',
    srOnly: true,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayVisualTypeIconDisplay = new ControlModule_groupText({
    classList: ['bookmark-form-text-icon', 'form-group-item-small']
  });

  const displayVisualTypeIconRemove = new Button({
    text: 'Remove icon',
    srOnly: true,
    style: ['line'],
    iconName: 'cross',
    classList: ['form-group-item-small'],
    func: () => {
      bookmarkData.link.display.visual.icon.label = '';
      bookmarkData.link.display.visual.icon.prefix = '';
      bookmarkData.link.display.visual.icon.name = '';
      bookmarkForm.update();
      bookmarkPreview.update();
    }
  });

  const displayVisualTypeImage = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.visual.image.url',
    id: 'display-visual-image-url',
    value: bookmarkData.link.display.visual.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Bookmark image',
    srOnly: true,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayVisualSize = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.visual.size',
    id: 'display-visual-size',
    labelText: 'Visual size',
    value: bookmarkData.link.display.visual.size,
    defaultValue: defaultBookmark.display.visual.size,
    min: minMaxBookmark.display.visual.size.min,
    max: minMaxBookmark.display.visual.size.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayVisualShowPropagate = new ControlModule_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'visual',
    id: 'apply-to-all-visual',
    labelText: 'Apply Show Visual Element to other Bookmarks',
    description: 'When saved, apply the above Visual Element visibility to all other Bookmarks.'
  });

  const displayNameShow = new ControlModule_checkbox({
    object: bookmarkData.link,
    path: 'display.name.show',
    id: 'display-name-show',
    labelText: 'Show Name',
    action: () => {
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const displayNameText = new ControlModule_text({
    object: bookmarkData.link,
    path: 'display.name.text',
    id: 'display-name-text',
    value: bookmarkData.link.display.name.text,
    placeholder: 'Example',
    labelText: 'Bookmark name',
    srOnly: true,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayNameSize = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.name.size',
    id: 'display-name-size',
    labelText: 'Name size',
    value: bookmarkData.link.display.name.size,
    defaultValue: defaultBookmark.display.name.size,
    min: minMaxBookmark.display.name.size.min,
    max: minMaxBookmark.display.name.size.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayNameShowPropagate = new ControlModule_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'name',
    id: 'apply-to-all-name',
    labelText: 'Apply Show Name to other Bookmarks',
    description: 'When saved, apply the above Name visibility to all other Bookmarks.'
  });

  const url = new ControlModule_text({
    object: bookmarkData.link,
    path: 'url',
    id: 'url',
    value: bookmarkData.link.url,
    placeholder: 'https://www.example.com/',
    labelText: 'URL'
  });

  const colorBy = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'color-by-theme', labelText: 'Theme colour', description: 'Use the Colour defined by the Theme.', value: 'theme' },
      { id: 'color-by-custom', labelText: 'Custom colour', description: 'Override the Theme colour.', value: 'custom' }
    ],
    groupName: 'color-by',
    path: 'color.by',
    action: () => {
      colorMixerCollapse.update();
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const colorMixer = new ControlModule_colorMixer({
    object: bookmarkData.link,
    path: 'color',
    id: 'color',
    labelText: 'Colour',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.color.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const accentBy = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'accent-by-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
      { id: 'accent-by-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
    ],
    groupName: 'accent-by',
    path: 'accent.by',
    action: () => {
      accentMixerCollapse.update();
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const accentMixer = new ControlModule_colorMixer({
    object: bookmarkData.link,
    path: 'accent',
    id: 'accent',
    labelText: 'Accent',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.accent.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayTranslateX = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.x',
    id: 'display-translate-x',
    labelText: 'Horizontal shift',
    value: bookmarkData.link.display.translate.x,
    defaultValue: defaultBookmark.display.translate.x,
    min: minMaxBookmark.display.translate.x.min,
    max: minMaxBookmark.display.translate.x.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayTranslateY = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.y',
    id: 'display-translate-y',
    labelText: 'Vertical shift',
    value: bookmarkData.link.display.translate.y,
    defaultValue: defaultBookmark.display.translate.y,
    min: minMaxBookmark.display.translate.y.min,
    max: minMaxBookmark.display.translate.y.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayRotate = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.rotate',
    id: 'display-rotate',
    labelText: 'Rotate',
    value: bookmarkData.link.display.rotate,
    defaultValue: defaultBookmark.display.rotate,
    min: minMaxBookmark.display.rotate.min,
    max: minMaxBookmark.display.rotate.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayVisualDirection = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-direction-vertical', labelText: 'Vertical', description: 'Stack the Visual Element and Name one above the other.', value: 'vertical' },
      { id: 'display-direction-horizontal', labelText: 'Horizontal', description: 'Arrange the Visual Element and Name side by side.', value: 'horizontal' }
    ],
    groupName: 'display-direction',
    path: 'display.direction',
    action: () => {
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const displayVisualOrder = new ControlModule_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-order-visual-name', labelText: 'Visual element then name', description: 'Place the Visual Element before the Name', value: 'visual-name' },
      { id: 'display-order-name-visual', labelText: 'Name then visual element', description: 'Place the Name before the Visual Element', value: 'name-visual' }
    ],
    groupName: 'display-order',
    path: 'display.order',
    action: () => {
      bookmarkForm.disable();
      bookmarkPreview.update();
    }
  });

  const displayGutter = new ControlModule_slimSlider({
    object: bookmarkData.link,
    path: 'display.gutter',
    id: 'display-gutter',
    labelText: 'Gutter',
    value: bookmarkData.link.display.gutter,
    defaultValue: defaultBookmark.display.gutter,
    min: minMaxBookmark.display.gutter.min,
    max: minMaxBookmark.display.gutter.max,
    action: () => {
      bookmarkPreview.update();
    }
  });

  const displayLayoutPropagate = new ControlModule_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'layout',
    id: 'apply-to-all-layout',
    labelText: 'Apply this Layout to other Bookmarks',
    description: 'When saved, apply the above Layout to all other Bookmarks.'
  });

  const accentMixerArea = node('div', [
    node('hr'),
    accentMixer.wrap()
  ]);

  const accentMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: accentBy,
    target: [{
      id: accentBy.radioSet[1].radio.value,
      content: accentMixerArea
    }]
  });

  accentMixerCollapse.update();

  const colorMixerArea = node('div', [
    node('hr'),
    colorMixer.wrap()
  ]);

  const colorMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: colorBy,
    target: [{
      id: colorBy.radioSet[1].radio.value,
      content: colorMixerArea
    }]
  });

  colorMixerCollapse.update();

  const displayThemePropagate = new ControlModule_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'theme',
    id: 'apply-to-all-theme',
    labelText: 'Apply Theme to other Bookmarks',
    description: 'When saved, apply the above Theme to all other Bookmarks.'
  });

  const displayVisualArea = form.render.fieldset([
    form.render.wrap([
      node('h2:Visual element|class:mb-2'),
      node('p:Display Letters, Icon or an Image on this Bookmark tile.|class:mb-5')
    ]),
    form.render.wrap([
      form.render.indent([
        displayVisualShow.wrap(),
        form.render.wrap([
          form.render.indent([
            displayVisualType.radioSet[0].wrap(),
            form.render.wrap([
              form.render.indent([
                displayVisualTypeLetter.wrap()
              ])
            ]),
            displayVisualType.radioSet[1].wrap(),
            form.render.wrap([
              form.render.indent([
                form.render.wrap([
                  displayVisualTypeIcon.label,
                  form.render.groupBlock([
                    displayVisualTypeIcon.text,
                    displayVisualTypeIconDisplay.groupText,
                    displayVisualTypeIconRemove.button
                  ])
                ])
              ])
            ]),
            displayVisualType.radioSet[2].wrap(),
            form.render.wrap([
              form.render.indent([
                displayVisualTypeImage.wrap()
              ])
            ])
          ])
        ]),
        node('hr'),
        displayVisualShowPropagate.wrap(),
      ])
    ])
  ]);

  const displayNameArea = form.render.fieldset([
    form.render.wrap([
      node('h2:Name|class:mb-2'),
      node('p:Display a Name on this Bookmark tile.|class:mb-5')
    ]),
    form.render.wrap([
      form.render.indent([
        displayNameShow.wrap(),
        form.render.wrap([
          form.render.indent([
            displayNameText.wrap()
          ]),
        ]),
        node('hr'),
        displayNameShowPropagate.wrap()
      ])
    ])
  ]);

  const displayAddressArea = form.render.fieldset([
    form.render.wrap([
      node('h2:Address|class:mb-2'),
      node('p:The websites address.'),
      complexNode({ tag: 'p', text: 'Be sure to use the full URL and include <strong>"https://..."</strong>', attr: [{ key: 'class', value: 'mb-5' }] })
    ]),
    form.render.wrap([
      form.render.indent([
        url.wrap()
      ])
    ])
  ]);

  const displayLayoutArea = form.render.fieldset([
    form.render.wrap([
      node('h2:Layout|class:mb-2'),
      node('p:Change the Visual element and Name position.|class:mb-5')
    ]),
    form.render.wrap([
      form.render.indent([
        displayVisualSize.wrap(),
        displayNameSize.wrap(),
        node('hr'),
        displayTranslateX.wrap(),
        displayTranslateY.wrap(),
        displayRotate.wrap(),
        node('hr'),
        displayVisualDirection.wrap(),
        displayVisualOrder.wrap(),
        displayGutter.wrap(),
        node('hr'),
        displayLayoutPropagate.wrap()
      ])
    ])
  ]);

  const displayThemeArea = form.render.fieldset([
    form.render.wrap([
      node('h2:Theme|class:mb-2'),
      node('p:Override the Theme and Accent colour.|class:mb-5')
    ]),
    form.render.wrap([
      form.render.indent([
        colorBy.wrap(),
        form.render.wrap([
          form.render.indent([
            colorMixerCollapse.collapse()
          ])
        ]),
        node('hr'),
        accentBy.wrap(),
        form.render.wrap([
          form.render.indent([
            accentMixerCollapse.collapse()
          ])
        ]),
        node('hr'),
        displayThemePropagate.wrap()
      ])
    ])
  ]);

  const formTab = new Tab({
    group: [{
      tabText: 'Visual',
      area: displayVisualArea,
      active: true
    }, {
      tabText: 'Name',
      area: displayNameArea,
      active: false
    }, {
      tabText: 'Address',
      area: displayAddressArea,
      active: false
    }, {
      tabText: 'Layout',
      area: displayLayoutArea,
      active: false
    }, {
      tabText: 'Theme',
      area: displayThemeArea,
      active: false
    }]
  });

  bookmarkFormMain.appendChild(formTab.tab());

  const bookmarkFormAside = node('div|class:bookmark-form-aside');

  const bookmarkFormPreview = node('div|class:bookmark-form-preview');

  const bookmarkPreview = {
    preview: bookmark.render.tile(bookmarkData.link, 1, 1, 1, true),
    update: () => {
      bookmarkPreview.preview = bookmark.render.tile(bookmarkData.link, 1, 1, 1, true);

      while (bookmarkFormPreview.lastChild) {
        bookmarkFormPreview.removeChild(bookmarkFormPreview.lastChild);
      };

      bookmarkFormPreview.appendChild(bookmarkPreview.preview);
    }
  };

  bookmarkPreview.update();

  bookmarkFormAside.appendChild(bookmarkFormPreview);

  bookmarkForm.appendChild(bookmarkFormMain);

  bookmarkForm.appendChild(bookmarkFormAside);

  if (ifValidString(bookmarkData.link.display.visual.icon.prefix) && ifValidString(bookmarkData.link.display.visual.icon.name)) {
    displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
  } else {
    displayVisualTypeIconDisplay.update();
  };

  const displayVisualTypeIconAutoSuggest = new Suggest({
    input: displayVisualTypeIcon.text,
    widthElement: displayVisualArea,
    type: 'fontawesomeIcon',
    postFocus: displayVisualTypeIconDisplay.groupText,
    action: () => {
      bookmarkPreview.update();
    }
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

  bookmarkForm.disable();

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
