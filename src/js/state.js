import { data } from './data.js';

let state = {};

let presentationMode = false;

state.current = {};

state.default = {
  grid: {
    size: 100,
    column: 4,
    gap: 100,
    perspective: 90,
    transform: {
      focus: 15,
      refresh: 10,
      rotate: { x: 15, y: 15, z: 0 }
    }
  },
  bookmark: {
    size: 70,
    hover: { size: 0, distance: 30 },
    shadow: { blur: 0, distance: 30 },
    edit: false,
    add: false
  },
  theme: {
    color: { hsl: { h: 211, s: 10, l: 50 }, rgb: { r: 115, g: 127, b: 140 }, contrast: { light: 40, dark: 40 }, generated: {} },
    accent: { hsl: { h: 210, s: 50, l: 50 }, rgb: { r: 64, g: 127, b: 191 } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    style: 'light',
    bookmark: {
      shadow: { opacity: 25, color: { type: 'custom', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } }
    },
    background: {
      type: 'gradient',
      color: { hsl: { h: 200, s: 29, l: 70 }, rgb: { r: 156, g: 186, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 180, s: 54, l: 51 }, rgb: { r: 64, g: 197, b: 198 } },
        end: { hsl: { h: 244, s: 91, l: 13 }, rgb: { r: 7, g: 3, b: 63 } }
      },
      image: { url: '', blur: 0, scale: 100, opacity: 100 },
      video: { url: '', blur: 0, scale: 100, opacity: 100 }
    },
    radius: 40,
    shadow: 75
  },
  modal: false,
  menu: false,
  autoSuggest: false
};

state.minMax = {
  grid: {
    size: { min: 10, max: 200 },
    column: { min: 1, max: 20 },
    gap: { min: 0, max: 300 },
    perspective: { min: 30, max: 400 },
    transform: {
      focus: { min: 0, max: 200 },
      rotate: {
        x: { min: -80, max: 80 },
        y: { min: -80, max: 80 },
        z: { min: -80, max: 80 }
      }
    }
  },
  bookmark: {
    hover: {
      size: { min: 0, max: 100 },
      distance: { min: 0, max: 300 }
    },
    shadow: {
      blur: { min: 0, max: 200 },
      distance: { min: 0, max: 300 }
    }
  },
  theme: {
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    },
    color: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
      contrast: {
        light: { min: 10, max: 80 },
        dark: { min: 10, max: 80 }
      }
    },
    bookmark: {
      shadow: {
        opacity: { min: 0, max: 100 },
        color: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        }
      }
    },
    background: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
        end: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
      },
      image: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } },
      video: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } }
    }
  }
};

state.get = {
  current: () => { return state.current },
  default: () => { return JSON.parse(JSON.stringify(state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)) }
};

state.set = {
  restore: (dataToRestore) => {
    state.current = dataToRestore.state;
    console.log('state restored');
  },
  default: () => {
    state.current = state.get.default();
    console.log('state set to default');
  }
};

export { state, presentationMode };
