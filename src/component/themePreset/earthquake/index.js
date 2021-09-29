export const earthquake = {
  name: 'Earthquake',
  color: { range: { primary: { h: 0, s: 13 } }, contrast: { start: 15, end: 40 } },
  accent: { hsl: { h: 48, s: 100, l: 50 }, rgb: { r: 255, g: 204, b: 0 } },
  font: { display: { name: 'Tulpen One', weight: 400, style: 'normal' }, ui: { name: 'Barlow Condensed', weight: 400, style: 'normal' } },
  background: {
    type: 'theme',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  style: 'dark',
  shade: { opacity: 80, blur: 0 },
  bookmark: {
    shadow: { opacity: 100, blur: 0, color: { type: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } },
    item: { opacity: 100 }
  },
  toolbar: { opacity: 100 }
};
