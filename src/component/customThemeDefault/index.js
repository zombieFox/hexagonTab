import { state } from '../state';

export const customThemeDefault = () => {
  return {
    name: '',
    color: { range: { primary: { h: state.get.current().theme.color.range.primary.h, s: state.get.current().theme.color.range.primary.s } }, contrast: state.get.current().theme.color.contrast },
    accent: { hsl: state.get.current().theme.accent.hsl, rgb: state.get.current().theme.accent.rgb },
    font: state.get.current().theme.font,
    background: state.get.current().theme.background,
    style: state.get.current().theme.style,
    shade: state.get.current().theme.shade,
    bookmark: state.get.current().theme.bookmark,
    toolbar: state.get.current().theme.toolbar
  };
};
