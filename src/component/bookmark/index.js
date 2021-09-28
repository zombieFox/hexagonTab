import { state } from '../state';
import { data } from '../data';
import { grid } from '../grid';
import { theme } from '../theme';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkPreset } from '../bookmarkPreset';

import * as form from '../form';

import { HexTile } from '../hexTile';
import { Modal } from '../modal';
import { StagedBookmark } from '../stagedBookmark';
import { BookmarkForm } from '../bookmarkForm';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';
import { set } from '../../utility/set';
import { get } from '../../utility/get';
import { sortArrayOfObject } from '../../utility/sortArrayOfObject';

import './index.css';

const bookmark = {};

bookmark.all = bookmarkPreset.get();

bookmark.tile = {
  current: []
};

bookmark.item = {
  mod: {
    add: (bookmarkData) => {

      bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);

    },
    edit: (bookmarkData) => {

      bookmark.all.splice(bookmarkData.position.origin, 1);

      bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);

    },
    move: (bookmarkData) => {

      var bookmarkCopy = JSON.parse(JSON.stringify(bookmark.all[bookmarkData.position.origin]));

      bookmark.all.splice(bookmarkData.position.origin, 1);

      bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkCopy);

    },
    remove: (bookmarkData) => {

      bookmark.all.splice(bookmarkData.position.origin, 1);

    },
    propagate: (bookmarkData) => {

      if (bookmarkData.propagate.display || bookmarkData.propagate.layout || bookmarkData.propagate.theme) {

        bookmark.all.forEach((item, i) => {

          if (bookmarkData.propagate.display) {
            item.display.visual.show = bookmarkData.link.display.visual.show;
            item.display.name.show = bookmarkData.link.display.name.show;
          };

          if (bookmarkData.propagate.layout) {
            item.display.visual.size = bookmarkData.link.display.visual.size;
            item.display.name.size = bookmarkData.link.display.name.size;
            item.display.gutter = bookmarkData.link.display.gutter;
            item.display.rotate = bookmarkData.link.display.rotate;
            item.display.translate = bookmarkData.link.display.translate;
            item.display.direction = bookmarkData.link.display.direction;
            item.display.order = bookmarkData.link.display.order;
          };

          if (bookmarkData.propagate.theme) {
            item.accent = bookmarkData.link.accent;
            item.color = bookmarkData.link.color;
          };

        });

      };

    },
    applyVar: (path, value) => {

      bookmark.all.forEach((item, i) => {

        set({ object: item, path: path, value: value });

      });

    }
  },
  render: () => {

    bookmark.tile.current = [];

    let evenRowFlag = true; // if true the row is even

    let rowCount = 1; // used to asign and calculate the overall row start value

    let columnStart = 1; // starting grid column

    let rowStart = 1; // starting grid row

    bookmark.all.forEach((item, index) => {

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

      grid.element.list.appendChild(bookmarkTile.tile());

      bookmark.tile.current.push(bookmarkTile);

    });

  },
  clear: () => {

    clearChildNode(grid.element.list);

  }
};

bookmark.edit = {
  open: () => {

    state.get.current().bookmark.edit = true;

    bookmark.edit.render();

  },
  close: () => {

    state.get.current().bookmark.edit = false;

    bookmark.edit.render();

  },
  toggle: () => {

    if (state.get.current().bookmark.edit) {
      bookmark.edit.close();
    } else {
      bookmark.edit.open();
    };

  },
  render: () => {

    applyCSSState('bookmark.edit');

    if (bookmark.tile.current.length > 0) {
      bookmark.tile.current.forEach((item, i) => {

        if (state.get.current().bookmark.edit) {
          item.control.enable();
        } else {
          item.control.disable();
        };

      });
    };

  }
};

bookmark.mask = {
  render: () => {

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

  }
};

bookmark.add = {
  mod: {
    open: () => { state.get.current().bookmark.add = true; },
    close: () => { state.get.current().bookmark.add = false; }
  },
  render: () => {

    const newBookmarkData = new StagedBookmark();

    newBookmarkData.newBookmark();

    const bookmarkForm = new BookmarkForm({ bookmarkData: newBookmarkData });

    const addModal = new Modal({
      heading: 'Add a new Bookmark',
      content: bookmarkForm.form(),
      successText: 'Add',
      width: 60,
      maxHeight: true,
      openAction: () => {

        bookmark.add.mod.open();

        data.save();

      },
      closeAction: () => {

        bookmark.add.mod.close();

        data.save();

      },
      successAction: () => {

        bookmark.item.mod.add(newBookmarkData);

        bookmark.item.mod.propagate(newBookmarkData);

        bookmark.item.clear();

        bookmark.item.render();

        bookmark.add.mod.close();

        data.save();

      },
      cancelAction: () => {

        bookmark.add.mod.close();

        data.save();

      }
    });

    addModal.open();

    bookmarkForm.tab.update();

  }
};

bookmark.restore = (dataToRestore) => {
  bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark.init = () => {
  applyCSSVar([
    'bookmark.size',
    'bookmark.hover.distance',
    'bookmark.hover.size',
    'bookmark.shadow.distance'
  ]);
  bookmark.add.mod.close();
  bookmark.mask.render();
  bookmark.item.render();
};

export { bookmark };
