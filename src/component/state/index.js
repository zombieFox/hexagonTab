const state = {};

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
    hover: { size: 0, distance: 15 },
    shadow: { blur: 15, distance: 30 },
    edit: false,
    add: false
  },
  theme: {
    color: {
      range: { primary: { h: 210, s: 10 } },
      lightness: { contrast: 32, offset: null, start: null, end: null },
      shades: 9
    },
    accent: { hsl: { h: 15, s: 90, l: 50 }, rgb: { r: 242, g: 70, b: 13 }, random: { active: false, style: 'any' } },
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
      color: { hsl: { h: 213, s: 40, l: 65 }, rgb: { r: 130, g: 162, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
        end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
      },
      image: { url: '', blur: 0, scale: 100, accent: 0, opacity: 100 },
      video: { url: '', blur: 0, scale: 100, accent: 0, opacity: 100 }
    },
    radius: 25,
    shadow: 75,
    shade: { opacity: 20, blur: 0 }
  },
  toolbar: { style: 'transparent', position: 'bottom-right', accent: { show: true }, add: { show: true }, edit: { show: true } },
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
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      lightness: { contrast: { min: 5, max: 45 } }
    },
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    },
    font: {
      display: { weight: { min: 100, max: 900 } },
      ui: { weight: { min: 100, max: 900 } }
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
      image: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 } },
      video: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, accent: { min: 0, max: 100 }, accent: { min: 0, max: 100 }, opacity: { min: 0, max: 100 } }
    },
    shade: { opacity: { min: 0, max: 100 }, blur: { min: 0, max: 200 } }
  }
};

state.option = {
  theme: {
    accent: { random: { style: ['any', 'light', 'dark', 'pastel', 'saturated'] } },
    style: ['dark', 'light', 'system'],
    bookmark: { shadow: { color: { type: ['theme', 'custom'] } } },
    background: {
      type: ['theme', 'accent', 'color', 'gradient', 'image', 'video']
    }
  }
};

state.step = {
  theme: {
    font: {
      display: { weight: 100 },
      ui: { weight: 100 }
    }
  }
};

state.default.theme.color.lightness.offset = state.minMax.theme.color.lightness.contrast.max - state.default.theme.color.lightness.contrast;

state.default.theme.color.lightness.start = state.default.theme.color.lightness.offset;

state.default.theme.color.lightness.end = 100 - state.default.theme.color.lightness.offset;

state.get = {
  current: () => { return state.current },
  default: () => { return JSON.parse(JSON.stringify(state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state.minMax)) },
  step: () => { return JSON.parse(JSON.stringify(state.step)) },
  option: () => { return JSON.parse(JSON.stringify(state.option)) }
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

export { state };
