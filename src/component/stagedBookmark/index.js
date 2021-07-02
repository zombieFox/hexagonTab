import { bookmark } from '../bookmark';
import { bookmarkDefault } from '../bookmarkDefault';

export const StagedBookmark = function(bookmarkData) {

  this.link = bookmarkData || JSON.parse(JSON.stringify(bookmarkDefault));

  this.position = { origin: 0, destination: 0 };

  this.newBookmark = function() {
    this.position.destination = bookmark.all.length + 1;
  };

  this.propagate = { display: false, layout: false, theme: false };

};
