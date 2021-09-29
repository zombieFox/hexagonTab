import { state } from '../../state';
import { appName } from '../../appName';

export const app = {
  name: appName + ' (default)',
  color: state.get.default().theme.color,
  accent: { hsl: state.get.default().theme.accent.hsl, rgb: state.get.default().theme.accent.rgb },
  font: state.get.default().theme.font,
  background: state.get.default().theme.background,
  style: state.get.default().theme.style,
  shade: state.get.default().theme.shade,
  bookmark: state.get.default().theme.bookmark,
  toolbar: state.get.default().theme.toolbar
};
