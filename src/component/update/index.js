import { state } from '../state';
import { version } from '../version';
import { convertColor } from '../../utility/convertColor';
import { updateLegacy } from '../updateLegacy';

const update = {};

update.mod = updateLegacy.get();


update.mod['4.0.0'] = function(data) {

  data.state.bookmark.newTab = false;

  data.state.theme.toolbar = { opacity: 100 };

  delete data.state.toolbar.style;

  data.state.theme.bookmark.item = { opacity: 100 };

  data.state.theme.bookmark.shadow.blur = data.state.bookmark.shadow.blur;

  delete data.state.bookmark.shadow.blur;

  data.state.theme.color.contrast = {
    start: data.state.theme.color.lightness.start,
    end: data.state.theme.color.lightness.end
  };

  delete data.state.theme.color.lightness;

  data.state.theme.color.shades = 14;

  data.state.theme.background.image.vignette = { opacity: 0, start: 90, end: 70 };

  data.state.theme.background.video.vignette = { opacity: 0, start: 90, end: 70 };

  data.bookmark.forEach((item, i) => {
    item.display.gutter = 25;
    item.color.opacity = item.color.opacity * 100;
  });

  return data;

};

update.run = (data) => {

  // loop over all updates in mod.all object
  for (var key in update.mod) {
    if (version.compare(data.version, key) == -1) {
      console.log('\t > running update', key);
      data = update.mod[key](data);
      data.version = key;
    };
  };

  // if no update is needed version bump
  if (version.compare(data.version, version.number) == -1) {
    console.log('\t > no state data to update, version bump to', version.number);
    data.version = version.number;
  };

  return data;

};

export { update };
