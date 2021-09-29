import { state } from '../../state';

export const white = {
  name: 'White',
  color: { range: { primary: { h: 0, s: 0 } }, contrast: { start: 0, end: 100 } },
  accent: { hsl: { h: 0, s: 0, l: 20 }, rgb: { r: 51, g: 51, b: 51 } },
  font: state.get.default().theme.font,
  background: {
    type: 'theme',
    color: state.get.default().theme.background.color,
    gradient: state.get.default().theme.background.gradient,
    image: state.get.default().theme.background.image,
    video: state.get.default().theme.background.video
  },
  style: 'light',
  shade: state.get.default().theme.shade,
  bookmark: {
    shadow: { opacity: 100, blur: 0, color: { type: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } },
    item: state.get.default().theme.bookmark.item
  },
  toolbar: state.get.default().theme.toolbar
};
