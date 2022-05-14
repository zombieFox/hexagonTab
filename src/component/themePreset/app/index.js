import { state } from '../../state';
import { APP_NAME } from '../../../constant';

export const app = {
  name: APP_NAME + ' (default)',
  color: state.get.default().theme.color,
  accent: { hsl: state.get.default().theme.accent.hsl, rgb: state.get.default().theme.accent.rgb },
  font: state.get.default().theme.font,
  background: state.get.default().theme.background,
  style: state.get.default().theme.style,
  shade: state.get.default().theme.shade,
  bookmark: state.get.default().theme.bookmark,
  toolbar: state.get.default().theme.toolbar
};
