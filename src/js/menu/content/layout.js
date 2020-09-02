import { state } from '../../state.js';
import { data } from '../../data.js';
import { grid } from '../../grid.js';
import { menu } from '../../menu.js';
import { theme } from '../../theme.js';
import { bookmark } from '../../bookmark.js';
import { node } from '../../utilities/node.js';
import { complexNode } from '../../utilities/complexNode.js';
import { icon } from '../../utilities/icon.js';
import { form } from '../../utilities/form.js';
import { Button } from '../../utilities/button.js';
import { link } from '../../utilities/link.js';
import { ControlModule_text, ControlModule_inputButton, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color } from '../../control.js';

const menuContentLayout = {};

menuContentLayout.size = function() {
  const menuContentItem = node('div|id:menu-content-item-size,class:menu-content-item');

  const gridSize = new ControlModule_slider({
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

  menuContentItem.appendChild(menu.render.component.item.header('Scaling'));

  menuContentItem.appendChild(
    menu.render.component.item.form([
      gridSize.wrap(),
      form.render.wrap([
        form.render.helper({ text: 'Resize all elements on the page.' }),
        form.render.helper({ text: 'Take care as some elements could scale up to outside the page.' })
      ])
    ])
  );

  return menuContentItem;
};

menuContentLayout.grid = function() {
  const menuContentItem = node('div|id:menu-content-item-grid,class:menu-content-item');

  const gridColumn = new ControlModule_slider({
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

  const gridGap = new ControlModule_slider({
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

  const gridPerspective = new ControlModule_slider({
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

  const gridFocus = new ControlModule_slider({
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

  const gridTransformRotateX = new ControlModule_slider({
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

  const gridTransformRotateY = new ControlModule_slider({
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

  const gridTransformRotateZ = new ControlModule_slider({
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

  menuContentItem.appendChild(menu.render.component.item.header('Hex grid'));

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
