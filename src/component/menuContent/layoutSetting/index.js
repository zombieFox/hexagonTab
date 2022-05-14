import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';



import { Control_helperText } from '../../control/helperText';
import { Control_slider } from '../../control/slider';

import { node } from '../../../utility/node';
import { applyCSSVar } from '../../../utility/applyCSSVar';

const layoutSetting = {};

layoutSetting.control = {
  scaling: {},
  grid: {}
};

layoutSetting.scaling = (parent) => {

  layoutSetting.control.scaling.size = new Control_slider({
    object: state.get.current(),
    path: 'grid.size',
    id: 'grid-size',
    labelText: 'Global size',
    value: state.get.current().grid.size,
    defaultValue: state.get.default().grid.size,
    min: state.get.minMax().grid.size.min,
    max: state.get.minMax().grid.size.max,
    action: () => {
      applyCSSVar('grid.size');
      data.save();
    }
  });

  layoutSetting.control.scaling.sizeHelper = new Control_helperText({
    text: ['Resize all elements on the page.', 'Take care as some elements could scale up to outside the page.']
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.scaling.size.wrap(),
      layoutSetting.control.scaling.sizeHelper.wrap()
    ])
  );

};

layoutSetting.grid = (parent) => {

  layoutSetting.control.grid.column = new Control_slider({
    object: state.get.current(),
    path: 'grid.column',
    id: 'grid-column',
    labelText: 'Grid column',
    value: state.get.current().grid.column,
    defaultValue: state.get.default().grid.column,
    min: state.get.minMax().grid.column.min,
    max: state.get.minMax().grid.column.max,
    action: () => {
      applyCSSVar('grid.column');
      bookmark.item.clear();
      bookmark.item.render();
      data.save();
    }
  });

  layoutSetting.control.grid.gap = new Control_slider({
    object: state.get.current(),
    path: 'grid.gap',
    id: 'grid-gap',
    labelText: 'Grid gap',
    value: state.get.current().grid.gap,
    defaultValue: state.get.default().grid.gap,
    min: state.get.minMax().grid.gap.min,
    max: state.get.minMax().grid.gap.max,
    action: () => {
      applyCSSVar('grid.gap');
      data.save();
    }
  });

  layoutSetting.control.grid.perspective = new Control_slider({
    object: state.get.current(),
    path: 'grid.perspective',
    id: 'grid-perspective',
    labelText: 'Grid perspective',
    value: state.get.current().grid.perspective,
    defaultValue: state.get.default().grid.perspective,
    min: state.get.minMax().grid.perspective.min,
    max: state.get.minMax().grid.perspective.max,
    action: () => {
      applyCSSVar('grid.perspective');
      data.save();
    }
  });

  layoutSetting.control.grid.focus = new Control_slider({
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

  layoutSetting.control.grid.transform = {};

  layoutSetting.control.grid.transform.rotateX = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.x',
    id: 'grid-transform-rotate-x',
    labelText: 'Rotate grid around X axis',
    value: state.get.current().grid.transform.rotate.x,
    defaultValue: state.get.default().grid.transform.rotate.x,
    min: state.get.minMax().grid.transform.rotate.x.min,
    max: state.get.minMax().grid.transform.rotate.x.max,
    action: () => {
      applyCSSVar('grid.transform.rotate.x');
      data.save();
    }
  });

  layoutSetting.control.grid.transform.rotateY = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.y',
    id: 'grid-transform-rotate-y',
    labelText: 'Rotate grid around Y axis',
    value: state.get.current().grid.transform.rotate.y,
    defaultValue: state.get.default().grid.transform.rotate.y,
    min: state.get.minMax().grid.transform.rotate.y.min,
    max: state.get.minMax().grid.transform.rotate.y.max,
    action: () => {
      applyCSSVar('grid.transform.rotate.y');
      data.save();
    }
  });

  layoutSetting.control.grid.transform.rotateZ = new Control_slider({
    object: state.get.current(),
    path: 'grid.transform.rotate.z',
    id: 'grid-transform-rotate-z',
    labelText: 'Rotate grid around Z axis',
    value: state.get.current().grid.transform.rotate.z,
    defaultValue: state.get.default().grid.transform.rotate.z,
    min: state.get.minMax().grid.transform.rotate.z.min,
    max: state.get.minMax().grid.transform.rotate.z.max,
    action: () => {
      applyCSSVar('grid.transform.rotate.z');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      layoutSetting.control.grid.column.wrap(),
      layoutSetting.control.grid.gap.wrap(),
      layoutSetting.control.grid.perspective.wrap(),
      layoutSetting.control.grid.focus.wrap(),
      node('hr'),
      layoutSetting.control.grid.transform.rotateX.wrap(),
      layoutSetting.control.grid.transform.rotateY.wrap(),
      layoutSetting.control.grid.transform.rotateZ.wrap()
    ])
  );

};

export { layoutSetting };
