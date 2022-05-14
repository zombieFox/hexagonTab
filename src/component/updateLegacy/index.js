
const updateLegacy = {};

updateLegacy.get = () => {
  return {
    '1.0.0': function(data) {
      return data;
    },
    '2.4.0': function(data) {
      data.state.theme.background.video = { url: '', blur: 0, scale: 100, opacity: 100 };

      if (data.state.theme.bookmark.shadow.type === 'theme' || data.state.theme.bookmark.shadow.type === 'custom') {
        data.state.theme.bookmark.shadow.color.type = data.state.theme.bookmark.shadow.type;

        delete data.state.theme.bookmark.shadow.type;
      }

      return data;
    },
    '2.5.0': function(data) {
      data.bookmark.forEach(item => {
        item.display.gutter = 75;
        item.display.direction = 'vertical';
        item.display.order = 'visual-name';
      });

      return data;
    },
    '2.6.0': function(data) {
      data.bookmark.forEach(item => {
        item.background = { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } };
      });

      return data;
    },
    '2.7.0': function(data) {
      data.state.toolbar = { style: 'transparent', position: 'bottom-right' };

      return data;
    },
    '3.0.0': function(data) {
      const h = data.state.theme.color.hsl.h;
      const s = data.state.theme.color.hsl.s;

      data.state.theme.color = {
        range: { primary: { h: h, s: s } },
        lightness: { contrast: 32, offset: null, start: null, end: null },
        shades: 9
      };

      data.state.theme.color.lightness.offset = 45 - data.state.theme.color.lightness.contrast;

      data.state.theme.color.lightness.start = data.state.theme.color.lightness.offset;

      data.state.theme.color.lightness.end = 100 - data.state.theme.color.lightness.offset;

      return data;
    },
    '3.1.0': function(data) {

      data.state.theme.shade = {
        opacity: 20
      };

      data.state.theme.font = {
        display: { name: '', weight: 400, style: 'normal' },
        ui: { name: '', weight: 400, style: 'normal' }
      };

      data.state.theme.accent.random = { active: false, style: 'any' };

      data.state.theme.shade.blur = 0;

      data.state.toolbar.size = 100;

      data.state.toolbar.accent = { show: true };

      data.state.toolbar.add = { show: true };

      data.state.toolbar.edit = { show: true };

      return data;
    }
  };
};

export { updateLegacy };
