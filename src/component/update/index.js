import { version } from '../version';

const update = {};

update.all = {
  '1.0.0': function(dataToUpdate) {
    return dataToUpdate;
  },
  '2.4.0': function(dataToUpdate) {
    dataToUpdate.state.theme.background.video = { url: '', blur: 0, scale: 100, opacity: 100 };

    if (dataToUpdate.state.theme.bookmark.shadow.type === 'theme' || dataToUpdate.state.theme.bookmark.shadow.type === 'custom') {
      dataToUpdate.state.theme.bookmark.shadow.color.type = dataToUpdate.state.theme.bookmark.shadow.type;

      delete dataToUpdate.state.theme.bookmark.shadow.type;
    };

    return dataToUpdate;
  },
  '2.5.0': function(dataToUpdate) {
    dataToUpdate.bookmark.forEach((item, i) => {
      item.display.gutter = 75;
      item.display.direction = 'vertical';
      item.display.order = 'visual-name';
    });

    return dataToUpdate;
  },
  '2.6.0': function(dataToUpdate) {
    dataToUpdate.bookmark.forEach((item, i) => {
      item.background = { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } };
    });

    return dataToUpdate;
  },
  '2.7.0': function(dataToUpdate) {
    dataToUpdate.state.toolbar = { style: 'transparent', position: 'bottom-right' };

    return dataToUpdate;
  },
  '3.0.0': function(dataToUpdate) {
    const h = dataToUpdate.state.theme.color.hsl.h;
    const s = dataToUpdate.state.theme.color.hsl.s;

    dataToUpdate.state.theme.color = {
      range: { primary: { h: h, s: s } },
      lightness: { contrast: 30, offset: null, start: null, end: null },
      shades: 9
    };

    dataToUpdate.state.theme.color.lightness.start = dataToUpdate.state.theme.color.lightness.offset;

    dataToUpdate.state.theme.color.lightness.end = 100 - dataToUpdate.state.theme.color.lightness.offset;

    return dataToUpdate;
  }
};

update.run = function(dataToUpdate) {
  // loop over all updates in mod.all object
  for (var key in update.all) {
    if (version.compare(dataToUpdate.version, key) == -1) {
      console.log('\t > running update', key);
      dataToUpdate = update.all[key](dataToUpdate);
      dataToUpdate.version = key;
    };
  };

  // if no update is needed version bump
  if (version.compare(dataToUpdate.version, version.number) == -1) {
    console.log('\t > no state data to update, version bump to', version.number);
    dataToUpdate.version = version.number;
  };

  return dataToUpdate;
};

export { update };
