import { state } from '../state';
import { data } from '../data';
import { gridList } from '../grid';
import { modal } from '../modal';
import { theme } from '../theme';

import * as form from '../form';

import { Button } from '../button';
import { Suggest } from '../autoSuggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';
import { Video } from '../video';
import { HexTile } from '../hexTile';

import { Control_helperText } from '../control/helperText';
import { Control_inputButton } from '../control/inputButton';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_slimSlider } from '../control/slimSlider';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_color } from '../control/color';
import { Control_text } from '../control/text';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { convertColor } from '../../utility/convertColor';
import { ifValidString } from '../../utility/ifValidString';
import { trimString } from '../../utility/trimString';

import './index.css';

const defaultBookmark = {
  url: '',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: '', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: '' }, icon: { name: '', prefix: '', label: '' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
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
  },
  background: {
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
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'awesomeSheet', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'AS' }, icon: { name: 'dice-d20', prefix: 'fas', label: 'Dice D20' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.amazon.co.uk/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Amazon', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'AZ' }, icon: { name: 'amazon', prefix: 'fab', label: 'Amazon' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://mail.google.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Gmail', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'GM' }, icon: { name: 'envelope', prefix: 'fas', label: 'Envelope' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.reddit.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Reddit', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'R' }, icon: { name: 'reddit-alien', prefix: 'fab', label: 'reddit Alien' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.netflix.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Netflix', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'N' }, icon: { name: 'film', prefix: 'fas', label: 'Film' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://drive.google.com/drive/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Drive', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'DR' }, icon: { name: 'google-drive', prefix: 'fab', label: 'Drive' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://devdocs.io/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Devdocs', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'DEV' }, icon: { name: 'code', prefix: 'fas', label: 'Code' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://github.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Github', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'GIT' }, icon: { name: 'github', prefix: 'fab', label: 'GitHub' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
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

bookmark.render.mask = function() {
  const html = document.querySelector('html');

  html.appendChild(node('div', [
    '<svg width="0" height="0" viewBox="0 0 120 100" class="bookmark-mask">' +
    '<g id="Assets" fill="none">' +
    '<defs>' +
    '<clipPath id="bookmark-mask" clipPathUnits="objectBoundingBox" transform="scale(0.01, 0.009615384615384616)">' +
    '<path d="M1.25156 54.6013C0.46058 52.9573 0.460582 51.0427 1.25157 49.3987L23.3648 3.43714C24.3644 1.35955 26.466 0.038475 28.7716 0.038475H71.2284C73.534 0.038475 75.6356 1.35955 76.6352 3.43714L98.7484 49.3987C99.5394 51.0427 99.5394 52.9573 98.7484 54.6013L76.6352 100.563C75.6356 102.64 73.534 103.962 71.2284 103.962H28.7716C26.466 103.962 24.3644 102.64 23.3648 100.563L1.25156 54.6013Z"></path>' +
    '</clipPath>' +
    '</defs>' +
    '</g>' +
    '</svg>'
  ]));
};

bookmark.render.tile = {};

bookmark.render.tile.edit = {
  open: function() {
    if (bookmark.render.tile.current.length > 0) {
      bookmark.render.tile.current.forEach((item, i) => {
        item.control.enable();
      });
    };
  },
  close: function() {
    if (bookmark.render.tile.current.length > 0) {
      bookmark.render.tile.current.forEach((item, i) => {
        item.control.disable();
      });
    };
  }
};

bookmark.render.tile.current = [];

bookmark.render.item = function() {

  bookmark.render.tile.current = [];

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

    const hex = new HexTile({
      bookmarkData: item,
      index: index,
      row: rowStart,
      column: columnStart
    });

    gridList.appendChild(hex.tile());

    bookmark.render.tile.current.push(hex);

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

  const bookmarkForm = node('form|class:bookmark-form');

  const bookmarkFormMain = node('form|class:bookmark-form-main');

  const displayVisualShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.visual.show',
    id: 'display-visual-show',
    labelText: 'Show Visual Element',
    description: 'Display Letters, Icon or an Image on this Bookmark hexagon.',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const displayVisualType = new Control_radio({
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
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeLetter = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.letter.text',
    id: 'display-visual-letter-text',
    value: bookmarkData.link.display.visual.letter.text,
    placeholder: 'E',
    labelText: 'Bookmark letter',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeIcon = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.icon.label',
    id: 'display-visual-icon-label',
    value: bookmarkData.link.display.visual.icon.label,
    placeholder: 'FontAwesome Brands or Icons',
    labelText: 'Bookmark icon',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeIconDisplay = new Control_groupText({
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
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeImage = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.image.url',
    id: 'display-visual-image-url',
    value: bookmarkData.link.display.visual.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Bookmark image',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.visual.size',
    id: 'display-visual-size',
    labelText: 'Visual size',
    value: bookmarkData.link.display.visual.size,
    defaultValue: defaultBookmark.display.visual.size,
    min: minMaxBookmark.display.visual.size.min,
    max: minMaxBookmark.display.visual.size.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualShowPropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'visual',
    id: 'apply-to-all-visual',
    labelText: 'Apply Show Visual Element to other Bookmarks',
    description: 'When saved, apply the above Visual Element visibility to all other Bookmarks.'
  });

  const displayNameShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.name.show',
    id: 'display-name-show',
    labelText: 'Show Name',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const displayNameText = new Control_text({
    object: bookmarkData.link,
    path: 'display.name.text',
    id: 'display-name-text',
    value: bookmarkData.link.display.name.text,
    placeholder: 'Example',
    labelText: 'Bookmark name',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayNameSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.name.size',
    id: 'display-name-size',
    labelText: 'Name size',
    value: bookmarkData.link.display.name.size,
    defaultValue: defaultBookmark.display.name.size,
    min: minMaxBookmark.display.name.size.min,
    max: minMaxBookmark.display.name.size.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayNameShowPropagate = new Control_checkbox({
    object: bookmark.mod.propagate.state.current,
    path: 'name',
    id: 'apply-to-all-name',
    labelText: 'Apply Show Name to other Bookmarks',
    description: 'When saved, apply the above Name visibility to all other Bookmarks.'
  });

  const url = new Control_text({
    object: bookmarkData.link,
    path: 'url',
    id: 'url',
    value: bookmarkData.link.url,
    placeholder: 'https://www.example.com/',
    labelText: 'URL'
  });

  const colorBy = new Control_radio({
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
      bookmarkForm.preview.render();
    }
  });

  const colorMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'color',
    id: 'color',
    labelText: 'Colour',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.color.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const accentBy = new Control_radio({
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
      bookmarkForm.preview.render();
    }
  });

  const accentMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'accent',
    id: 'accent',
    labelText: 'Accent',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.accent.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayTranslateX = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.x',
    id: 'display-translate-x',
    labelText: 'Horizontal shift',
    value: bookmarkData.link.display.translate.x,
    defaultValue: defaultBookmark.display.translate.x,
    min: minMaxBookmark.display.translate.x.min,
    max: minMaxBookmark.display.translate.x.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayTranslateY = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.y',
    id: 'display-translate-y',
    labelText: 'Vertical shift',
    value: bookmarkData.link.display.translate.y,
    defaultValue: defaultBookmark.display.translate.y,
    min: minMaxBookmark.display.translate.y.min,
    max: minMaxBookmark.display.translate.y.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayRotate = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.rotate',
    id: 'display-rotate',
    labelText: 'Rotate',
    value: bookmarkData.link.display.rotate,
    defaultValue: defaultBookmark.display.rotate,
    min: minMaxBookmark.display.rotate.min,
    max: minMaxBookmark.display.rotate.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualDirection = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-direction-vertical', labelText: 'Vertical', description: 'Stack the Visual Element and Name one above the other.', value: 'vertical' },
      { id: 'display-direction-horizontal', labelText: 'Horizontal', description: 'Arrange the Visual Element and Name side by side.', value: 'horizontal' }
    ],
    groupName: 'display-direction',
    path: 'display.direction',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualOrder = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-order-visual-name', labelText: 'Visual element then name', description: 'Place the Visual Element before the Name.', value: 'visual-name' },
      { id: 'display-order-name-visual', labelText: 'Name then visual element', description: 'Place the Name before the Visual Element.', value: 'name-visual' }
    ],
    groupName: 'display-order',
    path: 'display.order',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayGutter = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.gutter',
    id: 'display-gutter',
    labelText: 'Gutter',
    value: bookmarkData.link.display.gutter,
    defaultValue: defaultBookmark.display.gutter,
    min: minMaxBookmark.display.gutter.min,
    max: minMaxBookmark.display.gutter.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayLayoutPropagate = new Control_checkbox({
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

  const backgroundShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'background.show',
    id: 'background-show',
    labelText: 'Show background',
    description: 'Display an Image or video Background on this Bookmark tile.',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const backgroundType = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'background-type-image', labelText: 'Image', value: 'image' },
      { id: 'background-type-video', labelText: 'Video', value: 'video' }
    ],
    groupName: 'background-type',
    path: 'background.type',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const backgroundImageUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.image.url',
    id: 'background-image-url',
    value: bookmarkData.link.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const backgroundImageUrlHelper = new Control_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const backgroundVideoUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.video.url',
    id: 'background-video-url',
    value: bookmarkData.link.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const backgroundVideoUrlHelper = new Control_helperText({
    text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const backgroundOpacity = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'background.opacity',
    id: 'background-opacity',
    labelText: 'Opacity',
    value: bookmarkData.link.background.opacity,
    defaultValue: defaultBookmark.background.opacity,
    min: minMaxBookmark.background.opacity.min,
    max: minMaxBookmark.background.opacity.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Visual element|class:mb-2'),
          node('p:Display Letters, Icon or an Image on this Bookmark tile.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              displayVisualShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      displayVisualType.radioSet[0].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              displayVisualTypeLetter.wrap()
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[1].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              form.wrap({
                                children: [
                                  displayVisualTypeIcon.label,
                                  form.group({
                                    block: true,
                                    children: [
                                      displayVisualTypeIcon.text,
                                      displayVisualTypeIconDisplay.groupText,
                                      displayVisualTypeIconRemove.button
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[2].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              displayVisualTypeImage.wrap()
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              node('hr'),
              displayVisualShowPropagate.wrap(),
            ]
          })
        ]
      })
    ]
  });

  const displayNameArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Name|class:mb-2'),
          node('p:Display a Name on this Bookmark tile.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              displayNameShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      displayNameText.wrap()
                    ]
                  }),
                ]
              }),
              node('hr'),
              displayNameShowPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayAddressArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Address|class:mb-2'),
          node('p:The websites address.'),
          complexNode({ tag: 'p', text: 'Be sure to use the full URL and include <strong>"https://..."</strong>', attr: [{ key: 'class', value: 'mb-5' }] })
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              url.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayLayoutArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Layout|class:mb-2'),
          node('p:Change the Visual element and Name position.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              displayVisualSize.wrap(),
              displayNameSize.wrap(),
              node('hr'),
              displayTranslateX.wrap(),
              displayTranslateY.wrap(),
              displayRotate.wrap(),
              node('hr'),
              displayVisualDirection.wrap(),
              node('hr'),
              displayVisualOrder.wrap(),
              node('hr'),
              displayGutter.wrap(),
              node('hr'),
              displayLayoutPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayThemeArea = form.fieldset({
    children: [
      form.wrap({
        children: [
          node('h2:Theme|class:mb-2'),
          node('p:Override the Theme and Accent colour.|class:mb-5')
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              colorBy.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      colorMixerCollapse.collapse()
                    ]
                  })
                ]
              }),
              node('hr'),
              accentBy.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      accentMixerCollapse.collapse()
                    ]
                  })
                ]
              }),
              node('hr'),
              backgroundShow.wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      backgroundType.radioSet[0].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              backgroundImageUrl.wrap(),
                              backgroundImageUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      backgroundType.radioSet[1].wrap(),
                      form.wrap({
                        children: [
                          form.indent({
                            children: [
                              backgroundVideoUrl.wrap(),
                              backgroundVideoUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      node('hr'),
                      backgroundOpacity.wrap()
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });

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
      bookmarkForm.preview.render();
    }
  });

  bookmark.mod.propagate.state.reset();

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

    if (bookmarkData.link.background.show) {
      backgroundType.enable();
      backgroundOpacity.enable();

      switch (bookmarkData.link.background.type) {
        case 'image':
          backgroundImageUrl.enable();
          backgroundImageUrlHelper.enable();
          backgroundVideoUrl.disable();
          backgroundVideoUrlHelper.disable();
          break;

        case 'video':
          backgroundImageUrl.disable();
          backgroundImageUrlHelper.disable();
          backgroundVideoUrl.enable();
          backgroundVideoUrlHelper.enable();
          break;
      };
    } else {
      backgroundType.disable();
      backgroundImageUrl.disable();
      backgroundImageUrlHelper.disable();
      backgroundVideoUrl.disable();
      backgroundVideoUrlHelper.disable();
      backgroundOpacity.disable();
    };
  };

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

  bookmarkForm.preview = {};

  bookmarkForm.preview.current = false;

  bookmarkForm.preview.render = () => {
    if (bookmarkFormPreview.lastChild) {
      while (bookmarkFormPreview.lastChild) {
        bookmarkFormPreview.removeChild(bookmarkFormPreview.lastChild);
      };
    };

    bookmarkForm.preview.current = new HexTile({
      bookmarkData: bookmarkData.link,
      preview: true
    });

    bookmarkFormPreview.appendChild(bookmarkForm.preview.current.tile());
  };

  bookmarkForm.disable();

  bookmarkForm.preview.render();

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
    bookmark.render.tile.edit.open();
  },
  close: function() {
    bookmark.mod.edit.close();
    bookmark.render.class();
    bookmark.render.tile.edit.close();
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
  bookmark.render.mask();
  bookmark.add.close();
  bookmark.render.style();
  bookmark.render.class();
  bookmark.render.item();
};

export { bookmark, currentBookmarkForm, StagedLink };
