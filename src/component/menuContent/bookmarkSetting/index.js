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
import { link } from '../../link';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_slimSlider } from '../../control/slimSlider';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const bookmarkSetting = {};

bookmarkSetting.hover = (parent) => {

  const bookmarkHoverSize = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.hover.size',
    id: 'bookmark-hover-size',
    labelText: 'Bookmark grow on hover',
    value: state.get.current().bookmark.hover.size,
    defaultValue: state.get.default().bookmark.hover.size,
    min: state.get.minMax().bookmark.hover.size.min,
    max: state.get.minMax().bookmark.hover.size.max,
    action: () => {
      bookmark.hover.size.render();
      data.save();
    }
  });

  const bookmarkHoverDistance = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.hover.distance',
    id: 'bookmark-hover-distance',
    labelText: 'Bookmark raise distance on hover',
    value: state.get.current().bookmark.hover.distance,
    defaultValue: state.get.default().bookmark.hover.distance,
    min: state.get.minMax().bookmark.hover.distance.min,
    max: state.get.minMax().bookmark.hover.distance.max,
    action: () => {
      bookmark.hover.distance.render();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkHoverSize.wrap(),
      bookmarkHoverDistance.wrap(),
    ])
  );

};

bookmarkSetting.shadow = (parent) => {

  const bookmarkShadowDistance = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.distance',
    id: 'bookmark-shadow-distance',
    labelText: 'Bookmark shadow distance',
    value: state.get.current().bookmark.shadow.distance,
    defaultValue: state.get.default().bookmark.shadow.distance,
    min: state.get.minMax().bookmark.shadow.distance.min,
    max: state.get.minMax().bookmark.shadow.distance.max,
    action: () => {
      bookmark.shadow.distance.render();
      data.save();
    }
  });

  const bookmarkShadowBlur = new Control_slider({
    object: state.get.current(),
    path: 'bookmark.shadow.blur',
    id: 'bookmark-shadow-blur',
    labelText: 'Bookmark shadow blur',
    value: state.get.current().bookmark.shadow.blur,
    defaultValue: state.get.default().bookmark.shadow.blur,
    min: state.get.minMax().bookmark.shadow.blur.min,
    max: state.get.minMax().bookmark.shadow.blur.max,
    action: () => {
      bookmark.shadow.blur.render();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      bookmarkShadowDistance.wrap(),
      bookmarkShadowBlur.wrap()
    ])
  );

};

export { bookmarkSetting }
