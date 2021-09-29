export const lex = {
  name: 'Lex',
  color: { range: { primary: { h: 278, s: 73 } }, contrast: { start: 10, end: 60 } },
  accent: { hsl: { h: 160, s: 100, l: 50 }, rgb: { r: 0, g: 255, b: 170 } },
  font: { display: { name: 'Autour One', weight: 400, style: 'normal' }, ui: { name: 'Solway', weight: 400, style: 'normal' } },
  background: {
    type: 'gradient',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 0,
      start: { hsl: { h: 222, s: 72, l: 25 }, rgb: { r: 18, g: 45, b: 110 } },
      end: { hsl: { h: 299, s: 72, l: 25 }, rgb: { r: 108, g: 18, b: 110 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  style: 'dark',
  shade: { opacity: 90, blur: 0 },
  bookmark: {
    shadow: { opacity: 0, blur: 0, color: { type: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } },
    item: { opacity: 15 }
  },
  toolbar: { opacity: 15 }
};
