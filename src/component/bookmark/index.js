import { state } from '../state';
import { data } from '../data';
import { gridList } from '../grid';
import { theme } from '../theme';
import { bookmarkForm } from '../bookmarkForm';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkPreset } from '../bookmarkPreset';

import * as form from '../form';

import { HexTile } from '../hexTile';
import { Modal } from '../modal';
import { StagedBookmark } from '../stagedBookmark';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';

import './index.css';

const bookmark = {};

bookmark.modal = null;

bookmark.all = bookmarkPreset.get();

bookmark.mod = {};

bookmark.mod.add = {
  open: () => { state.get.current().bookmark.add = true; },
  close: () => { state.get.current().bookmark.add = false; }
};

bookmark.mod.edit = {
  open: () => { state.get.current().bookmark.edit = true; },
  close: () => { state.get.current().bookmark.edit = false; }
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
    display: false,
    layout: false,
    theme: false
  },
  reset: function() {
    for (var key in bookmark.mod.propagate.state.current) {
      bookmark.mod.propagate.state.current[key] = false;
    }
  },
  apply: function(bookmarkData) {

    if (bookmark.mod.propagate.state.current.display) {
      bookmark.all.forEach((item, i) => {
        item.display.visual.show = bookmarkData.link.display.visual.show;
        item.display.name.show = bookmarkData.link.display.name.show;
      });
    };

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

  clearChildNode(gridList);

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

bookmark.render.tile.edit = function() {

  if (bookmark.render.tile.current.length > 0) {

    bookmark.render.tile.current.forEach((item, i) => {

      if (state.get.current().bookmark.edit) {
        item.control.enable();
      } else {
        item.control.disable();
      };

    });

  };

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

    const itemIndex = index;

    const currentBookmarkData = new StagedBookmark(item);

    currentBookmarkData.position.origin = index;

    currentBookmarkData.position.destination = index;

    const bookmarkTile = new HexTile({
      bookmarkData: currentBookmarkData,
      index: index,
      row: rowStart,
      column: columnStart
    });

    gridList.appendChild(bookmarkTile.tile());

    bookmark.render.tile.current.push(bookmarkTile);

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

bookmark.render.add = {
  open: function() {

    const newBookmarkData = new StagedBookmark();

    newBookmarkData.newBookmark();

    const addModal = new Modal({
      heading: 'Add a new Bookmark',
      content: bookmarkForm.form(newBookmarkData),
      successText: 'Add',
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

    addModal.open();

  }
};

bookmark.add = {
  open: function() {
    bookmark.mod.add.open();
    bookmark.render.add.open();
  },
  close: function() {
    bookmark.mod.add.close();
  },
  toggle: function() {
    if (state.get.current().bookmark.add) {
      bookmark.add.close();
    } else {
      bookmark.add.open();
    };
  }
};

bookmark.edit = {
  open: function() {
    bookmark.mod.edit.open();
    bookmark.render.class();
    bookmark.render.tile.edit();
  },
  close: function() {
    bookmark.mod.edit.close();
    bookmark.render.class();
    bookmark.render.tile.edit();
  },
  toggle: function() {
    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    };
  }
};

bookmark.restore = function(dataToRestore) {
  bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark.init = function() {
  bookmark.render.mask();
  bookmark.render.style();
  bookmark.render.class();
  bookmark.render.item();
  bookmark.add.close();
};

export { bookmark };
