import { HexTile } from '../hexTile';

import { node } from '../../utility/node';

import './index.css';

export const BookmarkPreview = function({
  bookmarkData = false
} = {}) {

  this.area = node('div|class:bookmark-preview-area');

  this.grid = node('div|class:bookmark-preview-grid');

  this.title = node('div:Preview|class:bookmark-preview-title small muted');

  this.bookmarkTile = new HexTile({
    bookmarkData: bookmarkData,
    preview: true
  });

  this.update = {};

  this.update.style = (newBookmarkData) => {
    bookmarkData = newBookmarkData;

    this.bookmarkTile.update();

  };

  this.update.assemble = (newBookmarkData) => {
    bookmarkData = newBookmarkData;

    this.area.removeChild(this.title);

    this.grid.removeChild(this.bookmarkTile.tile());

    this.bookmarkTile = new HexTile({
      bookmarkData: bookmarkData,
      preview: true
    });

    this.assemble();
  };

  this.assemble = () => {
    this.area.appendChild(this.title);

    this.grid.appendChild(this.bookmarkTile.tile());

    this.area.appendChild(this.grid);
  };

  this.assemble();

  this.preview = () => {
    return this.area;
  };

};
