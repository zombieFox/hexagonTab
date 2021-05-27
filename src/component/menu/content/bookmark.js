import { state } from '../../state';
import { data } from '../../data';
import { form } from '../../form';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { toolbar } from '../../toolbar';
import { grid } from '../../grid';
import { modal } from '../../modal';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { ControlModul_helperText, ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from '../../control';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const menuContentBookmark = {};

menuContentBookmark.hover = function() {
  const menuContentItem = node('div|id:menu-content-item-hover,class:menu-content-item');

  const bookmarkHoverSize = new ControlModule_slider({
    object: state.get.current(),
    path: 'bookmark.hover.size',
    id: 'bookmark-hover-size',
    labelText: 'Bookmark grow on hover',
    value: state.get.current().bookmark.hover.size,
    defaultValue: state.get.default().bookmark.hover.size,
    min: state.get.minMax().bookmark.hover.size.min,
    max: state.get.minMax().bookmark.hover.size.max,
    action: () => {
      bookmark.render.style();
      data.save();
    }
  });

  const bookmarkHoverDistance = new ControlModule_slider({
    object: state.get.current(),
    path: 'bookmark.hover.distance',
    id: 'bookmark-hover-distance',
    labelText: 'Bookmark raise distance on hover',
    value: state.get.current().bookmark.hover.distance,
    defaultValue: state.get.default().bookmark.hover.distance,
    min: state.get.minMax().bookmark.hover.distance.min,
    max: state.get.minMax().bookmark.hover.distance.max,
    action: () => {
      bookmark.render.style();
      data.save();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Hover'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      bookmarkHoverSize.wrap(),
      bookmarkHoverDistance.wrap(),
    ])
  );

  return menuContentItem;
};

menuContentBookmark.shadow = function() {
  const menuContentItem = node('div|id:menu-content-item-shadow,class:menu-content-item');

  const bookmarkShadowDistance = new ControlModule_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.distance',
    id: 'bookmark-shadow-distance',
    labelText: 'Bookmark shadow distance',
    value: state.get.current().bookmark.shadow.distance,
    defaultValue: state.get.default().bookmark.shadow.distance,
    min: state.get.minMax().bookmark.shadow.distance.min,
    max: state.get.minMax().bookmark.shadow.distance.max,
    action: () => {
      bookmark.render.style();
      data.save();
    }
  });

  const bookmarkShadowBlur = new ControlModule_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.blur',
    id: 'bookmark-shadow-blur',
    labelText: 'Bookmark shadow blur',
    value: state.get.current().bookmark.shadow.blur,
    defaultValue: state.get.default().bookmark.shadow.blur,
    min: state.get.minMax().bookmark.shadow.blur.min,
    max: state.get.minMax().bookmark.shadow.blur.max,
    action: () => {
      bookmark.render.style();
      data.save();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Shadow'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      bookmarkShadowDistance.wrap(),
      bookmarkShadowBlur.wrap()
    ])
  );

  return menuContentItem;
};

export { menuContentBookmark }
