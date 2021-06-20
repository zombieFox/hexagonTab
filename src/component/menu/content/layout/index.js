import { state } from '../../../state';
import { data } from '../../../data';
import { bookmark } from '../../../bookmark';
import { theme } from '../../../theme';
import { toolbar } from '../../../toolbar';
import { grid } from '../../../grid';
import { version } from '../../../version';
import { menu } from '../../../menu';
import { icon } from '../../../icon';
import { logo } from '../../../logo';
import { link } from '../../../link';

import * as form from '../../../form';

import { Button } from '../../../button';
import { Collapse } from '../../../collapse';

import { Control_helperText } from '../../../control/helperText';
import { Control_inputButton } from '../../../control/inputButton';
import { Control_groupText } from '../../../control/groupText';
import { Control_radio } from '../../../control/radio';
import { Control_radioGrid } from '../../../control/radioGrid';
import { Control_checkbox } from '../../../control/checkbox';
import { Control_slider } from '../../../control/slider';
import { Control_slimSlider } from '../../../control/slimSlider';
import { Control_colorMixer } from '../../../control/colorMixer';
import { Control_color } from '../../../control/color';
import { Control_text } from '../../../control/text';
import { Control_textReset } from '../../../control/textReset';

import { node } from '../../../../utility/node';
import { complexNode } from '../../../../utility/complexNode';

const menuContentLayout = {};

menuContentLayout.scaling = function() {
  const menuContentItem = node('div|id:menu-content-item-scaling,class:menu-content-item');

  const gridSize = new Control_slider({
    object: state.get.current(),
    path: 'grid.size',
    id: 'grid-size',
    labelText: 'Global size',
    value: state.get.current().grid.size,
    defaultValue: state.get.default().grid.size,
    min: state.get.minMax().grid.size.min,
    max: state.get.minMax().grid.size.max,
    action: () => {
      grid.render.style();
      data.save();
    }
  });

  const gridSizeHelper = new Control_helperText({
    text: ['Resize all elements on the page.', 'Take care as some elements could scale up to outside the page.']
  });

  menuContentItem.appendChild(menu.render.component.item.header('Scaling'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      gridSize.wrap(),
      gridSizeHelper.wrap()
    ])
  );

  return menuContentItem;
};

menuContentLayout.grid = function() {
  const menuContentItem = node('div|id:menu-content-item-grid,class:menu-content-item');

  const gridColumn = new Control_slider({
    object: state.get.current(),
    path: 'grid.column',
    id: 'grid-column',
    labelText: 'Grid column',
    value: state.get.current().grid.column,
    defaultValue: state.get.default().grid.column,
    min: state.get.minMax().grid.column.min,
    max: state.get.minMax().grid.column.max,
    action: () => {
      grid.render.style();
      bookmark.render.clear();
      bookmark.render.item();
      data.save();
    }
  });

  const gridGap = new Control_slider({
    object: state.get.current(),
    path: 'grid.gap',
    id: 'grid-gap',
    labelText: 'Grid gap',
    value: state.get.current().grid.gap,
    defaultValue: state.get.default().grid.gap,
    min: state.get.minMax().grid.gap.min,
    max: state.get.minMax().grid.gap.max,
    action: () => {
      grid.render.style();
      data.save();
    }
  });

  const gridPerspective = new Control_slider({
    object: state.get.current(),
    path: 'grid.perspective',
    id: 'grid-perspective',
    labelText: 'Grid perspective',
    value: state.get.current().grid.perspective,
    defaultValue: state.get.default().grid.perspective,
    min: state.get.minMax().grid.perspective.min,
    max: state.get.minMax().grid.perspective.max,
    action: () => {
      grid.render.style();
      data.save();
    }
  });

  const gridFocus = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.focus',
    id: 'grid-transform-focus',
    labelText: 'Grid tilt on hover',
    value: state.get.current().grid.transform.focus,
    defaultValue: state.get.default().grid.transform.focus,
    min: state.get.minMax().grid.transform.focus.min,
    max: state.get.minMax().grid.transform.focus.max,
    action: () => {
      data.save();
    }
  });

  const gridTransformRotateX = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.x',
    id: 'grid-transform-rotate-x',
    labelText: 'Rotate grid around X axis',
    value: state.get.current().grid.transform.rotate.x,
    defaultValue: state.get.default().grid.transform.rotate.x,
    min: state.get.minMax().grid.transform.rotate.x.min,
    max: state.get.minMax().grid.transform.rotate.x.max,
    action: () => {
      grid.render.style();
      grid.render.rotate.style(state.get.current().grid.transform.rotate.x, state.get.current().grid.transform.rotate.y, state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  const gridTransformRotateY = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.y',
    id: 'grid-transform-rotate-y',
    labelText: 'Rotate grid around Y axis',
    value: state.get.current().grid.transform.rotate.y,
    defaultValue: state.get.default().grid.transform.rotate.y,
    min: state.get.minMax().grid.transform.rotate.y.min,
    max: state.get.minMax().grid.transform.rotate.y.max,
    action: () => {
      grid.render.style();
      grid.render.rotate.style(state.get.current().grid.transform.rotate.x, state.get.current().grid.transform.rotate.y, state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  const gridTransformRotateZ = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.z',
    id: 'grid-transform-rotate-z',
    labelText: 'Rotate grid around Z axis',
    value: state.get.current().grid.transform.rotate.z,
    defaultValue: state.get.default().grid.transform.rotate.z,
    min: state.get.minMax().grid.transform.rotate.z.min,
    max: state.get.minMax().grid.transform.rotate.z.max,
    action: () => {
      grid.render.style();
      grid.render.rotate.style(state.get.current().grid.transform.rotate.x, state.get.current().grid.transform.rotate.y, state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.header('Grid'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      gridColumn.wrap(),
      gridGap.wrap(),
      gridPerspective.wrap(),
      gridFocus.wrap(),
      node('hr'),
      gridTransformRotateX.wrap(),
      gridTransformRotateY.wrap(),
      gridTransformRotateZ.wrap()
    ])
  );

  return menuContentItem;
};

export { menuContentLayout }