import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';
import { bookmark } from '../bookmark';

import { Button } from '../button';
import { Video } from '../video';
import { Modal } from '../modal';
import { StagedBookmark } from '../stagedBookmark';
import { BookmarkForm } from '../bookmarkForm';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';

const HexTile = function({
  bookmarkData = {},
  index = 0,
  row = 0,
  column = 0,
  preview = false
} = {}) {

  this.element = {
    bookmark: node('div|class:bookmark'),
    shadow: {
      wrap: node('div|class:bookmark-shadow-wrap'),
      shadow: node('div|class:bookmark-shadow')
    },
    content: {
      link: node('a|class:bookmark-link,tabindex:1'),
      wrap: node('div|class:bookmark-content-wrap'),
      display: {
        wrap: node('div|class:bookmark-display-wrap'),
        display: node('div|class:bookmark-display'),
        visual: {
          visual: node('div|class:bookmark-display-visual'),
          letter: complexNode({ tag: 'div', text: bookmarkData.link.display.visual.letter.text, attr: [{ key: 'class', value: 'bookmark-display-visual-letter' }] }),
          icon: node('div|class:bookmark-display-visual-icon'),
          faIcon: node('div|class:' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name),
          image: node('div|class:bookmark-display-visual-image')
        },
        name: {
          name: node('div|class:bookmark-display-name'),
          text: node('div:' + bookmarkData.link.display.name.text + '|class:bookmark-display-name-text')
        }
      },
      background: {
        wrap: node('div|class:bookmark-background-wrap'),
        image: node('div|class:bookmark-background-image'),
        video: node('div|class:bookmark-background-video')
      }
    },
    control: node('div|class:bookmark-control')
  };

  if (preview) { this.element.bookmark.classList.add('bookmark-preview'); };

  this.control = {};

  this.control.button = {
    left: new Button({
      text: 'Move this bookmark left',
      srOnly: true,
      iconName: 'arrowKeyboardLeft',
      style: ['link'],
      title: 'Move this bookmark left',
      classList: ['bookmark-control-button', 'bookmark-control-left'],
      func: () => {

        bookmarkData.position.destination--;

        if (bookmarkData.position.destination < 0) {
          bookmarkData.position.destination = 0;
        };

        bookmark.item.mod.move(bookmarkData);

        bookmark.item.clear();

        bookmark.item.render();

        data.save();

      }
    }),
    right: new Button({
      text: 'Move this bookmark right',
      srOnly: true,
      iconName: 'arrowKeyboardRight',
      style: ['link'],
      title: 'Move this bookmark right',
      classList: ['bookmark-control-button', 'bookmark-control-right'],
      func: () => {

        bookmarkData.position.destination++;

        if (bookmarkData.position.destination > bookmark.all.length - 1) {
          bookmarkData.position.destination = bookmark.all.length - 1;
        };

        bookmark.item.mod.move(bookmarkData);

        bookmark.item.clear();

        bookmark.item.render();

        data.save();

      }
    }),
    edit: new Button({
      text: 'Edit this bookmark',
      srOnly: true,
      iconName: 'edit',
      style: ['link'],
      title: 'Edit this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-edit'],
      func: () => {

        let newBookmarkData = new StagedBookmark();

        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData.link));

        newBookmarkData.position.origin = index;

        newBookmarkData.position.destination = index;

        const bookmarkForm = new BookmarkForm({ bookmarkData: newBookmarkData });

        const editModal = new Modal({

          heading: isValidString(newBookmarkData.link.display.name.text) ? 'Edit ' + newBookmarkData.link.display.name.text : 'Edit unnamed bookmark',
          content: bookmarkForm.form(),
          successText: 'Save',
          width: 60,
          maxHeight: true,
          successAction: () => {

            bookmark.item.mod.edit(newBookmarkData);

            bookmark.item.mod.propagate(newBookmarkData);

            bookmark.item.clear();

            bookmark.item.render();

            data.save();

          }

        });

        editModal.open();

      }
    }),
    remove: new Button({
      text: 'Remove this bookmark',
      srOnly: true,
      iconName: 'cross',
      style: ['link'],
      title: 'Remove this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-remove'],
      func: () => {

        const removeModal = new Modal({
          heading: isValidString(bookmarkData.link.display.name.text) ? 'Remove ' + bookmarkData.link.display.name.text : 'Remove unnamed bookmark',
          content: 'Are you sure you want to remove this Bookmark? This can not be undone.',
          successText: 'Remove',
          width: 'small',
          successAction: () => {

            bookmark.item.mod.remove(bookmarkData);

            bookmark.item.clear();

            bookmark.item.render();

            data.save();

          }
        });

        removeModal.open();

      }
    })
  };

  this.control.disable = () => {
    for (var key in this.control.button) {
      this.control.button[key].disable();
    };
  };

  this.control.enable = () => {
    for (var key in this.control.button) {
      this.control.button[key].enable();
    };
  };

  this.makeStyle = (newBookmarkData) => {

    if (newBookmarkData) {
      bookmarkData = newBookmarkData;
    };

    this.element.bookmark.style.setProperty('--bookmark-row-start', row);

    this.element.bookmark.style.setProperty('--bookmark-column-start', column);

    if (isValidString(bookmarkData.link.url) && !preview) {
      this.element.content.link.setAttribute('href', trimString(bookmarkData.link.url));
    } else {
      this.element.content.link.setAttribute('href', '#');
    };

    this.element.bookmark.style.setProperty('--bookmark-transition-delay', index);

    this.element.bookmark.style.setProperty('--bookmark-color-opacity', bookmarkData.link.color.opacity);

    switch (bookmarkData.link.display.direction) {
      case 'vertical':
        switch (bookmarkData.link.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column-reverse');
            break;
        };
        break;

      case 'horizontal':
        switch (bookmarkData.link.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row-reverse');
            break;
        };
        break;
    };

    this.element.bookmark.style.setProperty('--bookmark-display-translate-x', bookmarkData.link.display.translate.x);

    this.element.bookmark.style.setProperty('--bookmark-display-translate-y', bookmarkData.link.display.translate.y);

    this.element.bookmark.style.setProperty('--bookmark-display-rotate', bookmarkData.link.display.rotate);

    this.element.bookmark.style.setProperty('--bookmark-display-gutter', bookmarkData.link.display.gutter);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-size', bookmarkData.link.display.visual.size);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(bookmarkData.link.display.visual.image.url) + ')');

    this.element.bookmark.style.setProperty('--bookmark-display-name-size', bookmarkData.link.display.name.size);

    if (bookmarkData.link.accent.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-accent-rgb-r', bookmarkData.link.accent.rgb.r);
      this.element.bookmark.style.setProperty('--theme-accent-rgb-g', bookmarkData.link.accent.rgb.g);
      this.element.bookmark.style.setProperty('--theme-accent-rgb-b', bookmarkData.link.accent.rgb.b);
      this.element.bookmark.style.setProperty('--theme-accent', 'var(--theme-accent-rgb-r), var(--theme-accent-rgb-g), var(--theme-accent-rgb-b)');

      this.element.bookmark.style.setProperty('--theme-accent-rgb-text', '0, 0%, calc(((((var(--theme-accent-rgb-r) * var(--theme-t-r)) + (var(--theme-accent-rgb-g) * var(--theme-t-g)) + (var(--theme-accent-rgb-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-display-visual-color', 'var(--theme-accent)');
      this.element.bookmark.style.setProperty('--bookmark-display-visual-color-focus-hover', 'var(--theme-accent)');
    };

    if (bookmarkData.link.color.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-color-r', bookmarkData.link.color.rgb.r);
      this.element.bookmark.style.setProperty('--theme-color-g', bookmarkData.link.color.rgb.g);
      this.element.bookmark.style.setProperty('--theme-color-b', bookmarkData.link.color.rgb.b);

      this.element.bookmark.style.setProperty('--theme-color-h', bookmarkData.link.color.hsl.h);
      this.element.bookmark.style.setProperty('--theme-color-s', bookmarkData.link.color.hsl.s);
      this.element.bookmark.style.setProperty('--theme-color-l', bookmarkData.link.color.hsl.l);

      this.element.bookmark.style.setProperty('--theme-color', bookmarkData.link.color.hsl.h + ', ' + bookmarkData.link.color.hsl.s + '%, ' + bookmarkData.link.color.hsl.l + '%');
      this.element.bookmark.style.setProperty('--theme-color-text', '0, 0%, calc(((((var(--theme-color-r) * var(--theme-t-r)) + (var(--theme-color-g) * var(--theme-t-g)) + (var(--theme-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-color', 'var(--theme-color)');
      this.element.bookmark.style.setProperty('--bookmark-color-focus-hover', 'var(--theme-color)');

      this.element.bookmark.style.setProperty('--bookmark-display-name-color', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--bookmark-display-name-color-focus-hover', 'var(--theme-color-text)');

      this.element.bookmark.style.setProperty('--button-link-text', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-focus-hover', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-active', 'var(--theme-color-text)');
    };

    if (bookmarkData.link.background.show) {
      this.element.bookmark.style.setProperty('--bookmark-background-opacity', bookmarkData.link.background.opacity);

      switch (bookmarkData.link.background.type) {
        case 'image':
          if (isValidString(bookmarkData.link.background.image.url)) {
            this.element.bookmark.style.setProperty('--bookmark-background-image-url', 'url(' + trimString(bookmarkData.link.background.image.url) + ')');
          };
          break;
      };
    };

  };

  this.assemble = () => {

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      if (bookmarkData.link.display.visual.show) {
        switch (bookmarkData.link.display.visual.type) {
          case 'letter':
            if (isValidString(bookmarkData.link.display.visual.letter.text)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.letter);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'icon':
            if (isValidString(bookmarkData.link.display.visual.icon.name)) {
              this.element.content.display.visual.icon.appendChild(this.element.content.display.visual.faIcon);
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.icon);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'image':
            if (isValidString(bookmarkData.link.display.visual.image.url)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.image);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;
        };
      };

      if (bookmarkData.link.display.name.show && isValidString(bookmarkData.link.display.name.text)) {
        this.element.content.display.name.name.appendChild(this.element.content.display.name.text);
        this.element.content.display.display.appendChild(this.element.content.display.name.name);
      };

      this.element.content.display.wrap.appendChild(this.element.content.display.display);

      this.element.content.link.appendChild(this.element.content.display.wrap);
    };

    if (bookmarkData.link.background.show) {

      switch (bookmarkData.link.background.type) {
        case 'image':
          this.element.content.background.wrap.appendChild(this.element.content.background.image);
          break;

        case 'video':
          this.element.content.background.wrap.appendChild(this.element.content.background.video);

          if (isValidString(bookmarkData.link.background.video.url)) {
            const backgroundVideoElement = new Video({
              url: bookmarkData.link.background.video.url
            });

            this.element.content.background.video.appendChild(backgroundVideoElement.video);
          };

          break;
      };

      this.element.content.link.appendChild(this.element.content.background.wrap);
    };

    this.element.content.wrap.appendChild(this.element.content.link);

    this.element.shadow.wrap.appendChild(this.element.shadow.shadow);

    this.element.bookmark.appendChild(this.element.shadow.wrap);

    this.element.bookmark.appendChild(this.element.content.wrap);

    this.element.control.appendChild(this.control.button.left.button);

    this.element.control.appendChild(this.control.button.right.button);

    this.element.control.appendChild(this.control.button.edit.button);

    this.element.control.appendChild(this.control.button.remove.button);

    this.element.content.wrap.appendChild(this.element.control);

    if (state.get.current().bookmark.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

  };

  this.tile = () => {

    return this.element.bookmark;

  };

  this.update = (newBookmarkData) => {

    this.makeStyle(newBookmarkData);

  };

  this.assemble();

  this.makeStyle();

};

export { HexTile };
