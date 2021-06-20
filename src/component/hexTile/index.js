import { state } from '../state';
import { data } from '../data';
import { theme } from '../theme';

import { Button } from '../button';
import { Video } from '../video';
import { Modal } from '../modal';
import { bookmark, StagedLink } from '../bookmark';


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
          letter: node('div:' + bookmarkData.display.visual.letter.text + '|class:bookmark-display-visual-letter'),
          icon: node('div|class:bookmark-display-visual-icon'),
          faIcon: node('div|class:' + bookmarkData.display.visual.icon.prefix + ' fa-' + bookmarkData.display.visual.icon.name),
          image: node('div|class:bookmark-display-visual-image')
        },
        name: {
          name: node('div|class:bookmark-display-name'),
          text: node('div:' + bookmarkData.display.name.text + '|class:bookmark-display-name-text')
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

  this.makeStyle = (newBookmarkData) => {

    if (newBookmarkData) {
      bookmarkData = newBookmarkData;
    };

    this.element.bookmark.style.setProperty('--bookmark-row-start', row);

    this.element.bookmark.style.setProperty('--bookmark-column-start', column);

    if (isValidString(bookmarkData.url) && !preview) {
      this.element.content.link.setAttribute('href', trimString(bookmarkData.url));
    } else {
      this.element.content.link.setAttribute('href', '#');
    };

    this.element.bookmark.style.setProperty('--bookmark-transition-delay', index);

    this.element.bookmark.style.setProperty('--bookmark-color-opacity', bookmarkData.color.opacity);

    switch (bookmarkData.display.direction) {
      case 'vertical':
        switch (bookmarkData.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column-reverse');
            break;
        };
        break;

      case 'horizontal':
        switch (bookmarkData.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row-reverse');
            break;
        };
        break;
    };

    this.element.bookmark.style.setProperty('--bookmark-display-translate-x', bookmarkData.display.translate.x);

    this.element.bookmark.style.setProperty('--bookmark-display-translate-y', bookmarkData.display.translate.y);

    this.element.bookmark.style.setProperty('--bookmark-display-rotate', bookmarkData.display.rotate);

    this.element.bookmark.style.setProperty('--bookmark-display-gutter', bookmarkData.display.gutter);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-size', bookmarkData.display.visual.size);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(bookmarkData.display.visual.image.url) + ')');

    this.element.bookmark.style.setProperty('--bookmark-display-name-size', bookmarkData.display.name.size);

    if (bookmarkData.accent.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-accent-r', bookmarkData.accent.rgb.r);
      this.element.bookmark.style.setProperty('--theme-accent-g', bookmarkData.accent.rgb.g);
      this.element.bookmark.style.setProperty('--theme-accent-b', bookmarkData.accent.rgb.b);
      this.element.bookmark.style.setProperty('--theme-accent', 'var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b)');

      this.element.bookmark.style.setProperty('--theme-accent-text', '0, 0%, calc(((((var(--theme-accent-r) * var(--theme-t-r)) + (var(--theme-accent-g) * var(--theme-t-g)) + (var(--theme-accent-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-display-visual-color', 'var(--theme-accent)');
      this.element.bookmark.style.setProperty('--bookmark-display-visual-color-focus-hover', 'var(--theme-accent)');
    };

    if (bookmarkData.color.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-color-r', bookmarkData.color.rgb.r);
      this.element.bookmark.style.setProperty('--theme-color-g', bookmarkData.color.rgb.g);
      this.element.bookmark.style.setProperty('--theme-color-b', bookmarkData.color.rgb.b);

      this.element.bookmark.style.setProperty('--theme-color-h', bookmarkData.color.hsl.h);
      this.element.bookmark.style.setProperty('--theme-color-s', bookmarkData.color.hsl.s);
      this.element.bookmark.style.setProperty('--theme-color-l', bookmarkData.color.hsl.l);

      this.element.bookmark.style.setProperty('--theme-color', bookmarkData.color.hsl.h + ', ' + bookmarkData.color.hsl.s + '%, ' + bookmarkData.color.hsl.l + '%');
      this.element.bookmark.style.setProperty('--theme-color-text', '0, 0%, calc(((((var(--theme-color-r) * var(--theme-t-r)) + (var(--theme-color-g) * var(--theme-t-g)) + (var(--theme-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-color', 'var(--theme-color)');
      this.element.bookmark.style.setProperty('--bookmark-color-focus-hover', 'var(--theme-color)');

      this.element.bookmark.style.setProperty('--bookmark-display-name-color', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--bookmark-display-name-color-focus-hover', 'var(--theme-color-text)');

      this.element.bookmark.style.setProperty('--button-link-text', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-focus-hover', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-active', 'var(--theme-color-text)');
    };

    if (bookmarkData.background.show) {
      this.element.bookmark.style.setProperty('--bookmark-background-opacity', bookmarkData.background.opacity);

      switch (bookmarkData.background.type) {
        case 'image':
          if (isValidString(bookmarkData.background.image.url)) {
            this.element.bookmark.style.setProperty('--bookmark-background-image-url', 'url(' + trimString(bookmarkData.background.image.url) + ')');
          };
          break;
      };
    };

  };

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
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index - 1;
        if (newBookmarkData.position.destination < 0) {
          newBookmarkData.position.destination = 0;
        };
        bookmark.mod.item.move(newBookmarkData);
        bookmark.render.clear();
        bookmark.render.item();
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
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index + 1;
        if (newBookmarkData.position.destination > bookmark.all.length - 1) {
          newBookmarkData.position.destination = bookmark.all.length - 1;
        };
        bookmark.mod.item.move(newBookmarkData);
        bookmark.render.clear();
        bookmark.render.item();
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
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index;

        const editModal = new Modal({
          heading: isValidString(bookmarkData.display.name.text) ? 'Edit ' + bookmarkData.display.name.text : 'Edit unnamed bookmark',
          content: bookmark.form(newBookmarkData),
          successText: 'Save',
          width: 60,
          maxHeight: true,
          successAction: () => {
            bookmark.mod.item.edit(newBookmarkData);
            bookmark.mod.propagate.state.apply(newBookmarkData);
            bookmark.render.clear();
            bookmark.render.item();
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
          heading: isValidString(bookmarkData.display.name.text) ? 'Remove ' + bookmarkData.display.name.text : 'Remove unnamed bookmark',
          content: 'Are you sure you want to remove this Bookmark? This can not be undone.',
          successText: 'Remove',
          width: 'small',
          successAction: () => {
            let newBookmarkData = new StagedLink();
            newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
            newBookmarkData.position.origin = index;
            newBookmarkData.position.destination = index;
            bookmark.mod.item.remove(newBookmarkData);
            bookmark.render.clear();
            bookmark.render.item();
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

  this.assemble = () => {

    if (bookmarkData.display.visual.show || bookmarkData.display.name.show) {
      if (bookmarkData.display.visual.show) {
        switch (bookmarkData.display.visual.type) {
          case 'letter':
            if (isValidString(bookmarkData.display.visual.letter.text)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.letter);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'icon':
            if (isValidString(bookmarkData.display.visual.icon.name)) {
              this.element.content.display.visual.icon.appendChild(this.element.content.display.visual.faIcon);
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.icon);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'image':
            if (isValidString(bookmarkData.display.visual.image.url)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.image);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;
        };
      };

      if (bookmarkData.display.name.show && isValidString(bookmarkData.display.name.text)) {
        this.element.content.display.name.name.appendChild(this.element.content.display.name.text);
        this.element.content.display.display.appendChild(this.element.content.display.name.name);
      };

      this.element.content.display.wrap.appendChild(this.element.content.display.display);

      this.element.content.link.appendChild(this.element.content.display.wrap);
    };

    if (bookmarkData.background.show) {

      switch (bookmarkData.background.type) {
        case 'image':
          this.element.content.background.wrap.appendChild(this.element.content.background.image);
          break;

        case 'video':
          this.element.content.background.wrap.appendChild(this.element.content.background.video);

          if (isValidString(bookmarkData.background.video.url)) {
            const backgroundVideoElement = new Video({
              url: bookmarkData.background.video.url
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

  };

  this.tile = () => {

    return this.element.bookmark;

  };

  this.update = (newBookmarkData) => {

    this.makeStyle(newBookmarkData);

  };

  if (state.get.current().bookmark.edit) {
    this.control.enable();
  } else {
    this.control.disable();
  };

  this.assemble();

  this.makeStyle();

};

export { HexTile };
