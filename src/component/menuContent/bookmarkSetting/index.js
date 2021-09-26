import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { toolbar } from '../../toolbar';
import { grid } from '../../grid';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { Link } from '../../link';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_sliderSlim } from '../../control/sliderSlim';
import { Control_sliderDouble } from '../../control/sliderDouble';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';
import { Control_textarea } from '../../control/textarea';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';
import { clearChildNode } from '../../../utility/clearChildNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const bookmarkSetting = {};

bookmarkSetting.control = {
  general: {},
  hover: {},
  shadow: {}
};

bookmarkSetting.general = (parent) => {

  bookmarkSetting.control.general.newTab = new Control_checkbox({
    object: state.get.current(),
    id: 'bookmark-newTab',
    path: 'bookmark.newTab',
    labelText: 'Open Bookmarks in a new tab',
    action: () => {
      bookmark.item.clear();
      bookmark.item.render();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.general.newTab.wrap()
    ])
  );

};

bookmarkSetting.hover = (parent) => {

  bookmarkSetting.control.hover.size = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.hover.size',
    id: 'bookmark-hover-size',
    labelText: 'Bookmark grow on hover',
    value: state.get.current().bookmark.hover.size,
    defaultValue: state.get.default().bookmark.hover.size,
    min: state.get.minMax().bookmark.hover.size.min,
    max: state.get.minMax().bookmark.hover.size.max,
    action: () => {
      applyCSSVar('bookmark.hover.size');
      data.save();
    }
  });

  bookmarkSetting.control.hover.distance = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.hover.distance',
    id: 'bookmark-hover-distance',
    labelText: 'Bookmark raise distance on hover',
    value: state.get.current().bookmark.hover.distance,
    defaultValue: state.get.default().bookmark.hover.distance,
    min: state.get.minMax().bookmark.hover.distance.min,
    max: state.get.minMax().bookmark.hover.distance.max,
    action: () => {
      applyCSSVar('bookmark.hover.distance');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.hover.size.wrap(),
      bookmarkSetting.control.hover.distance.wrap(),
    ])
  );

};

bookmarkSetting.shadow = (parent) => {

  bookmarkSetting.control.shadow.distance = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.distance',
    id: 'bookmark-shadow-distance',
    labelText: 'Bookmark shadow distance',
    value: state.get.current().bookmark.shadow.distance,
    defaultValue: state.get.default().bookmark.shadow.distance,
    min: state.get.minMax().bookmark.shadow.distance.min,
    max: state.get.minMax().bookmark.shadow.distance.max,
    action: () => {
      applyCSSVar('bookmark.shadow.distance');
      data.save();
    }
  });

  bookmarkSetting.control.shadow.blur = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.blur',
    id: 'bookmark-shadow-blur',
    labelText: 'Bookmark shadow blur',
    value: state.get.current().bookmark.shadow.blur,
    defaultValue: state.get.default().bookmark.shadow.blur,
    min: state.get.minMax().bookmark.shadow.blur.min,
    max: state.get.minMax().bookmark.shadow.blur.max,
    action: () => {
      applyCSSVar('bookmark.shadow.blur');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkSetting.control.shadow.distance.wrap(),
      bookmarkSetting.control.shadow.blur.wrap()
    ])
  );

};

export { bookmarkSetting }
