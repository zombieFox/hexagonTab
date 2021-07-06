import { state } from '../state';
import { data } from '../data';

import { Video } from '../video';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';
import { clearChildNode } from '../../utility/clearChildNode';
import { randomNumber } from '../../utility/randomNumber';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import WebFont from 'webfontloader';

import './index.css';

const theme = {};

theme.font = {};

theme.font.display = {
  timer: false,
  delay: () => {

    clearTimeout(theme.font.display.timer);

    theme.font.display.timer = setTimeout(theme.font.display.load, 600);

  },
  load: () => {

    const displayFont = trimString(state.get.current().theme.font.display.name);

    if (isValidString(displayFont)) {

      WebFont.load({
        // fontloading: (familyName, fvd) => { console.log('fontloading:', familyName); },
        google: { families: [trimString(displayFont) + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] }
      });

    };

    theme.font.display.render();

  },
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(trimString(state.get.current().theme.font.display.name))) {

      html.style.setProperty('--theme-font-display-name', '"' + trimString(state.get.current().theme.font.display.name) + '", "Fjalla One", sans-serif');

    } else {

      html.style.removeProperty('--theme-font-display-name');

    };

  }
};

theme.font.ui = {
  timer: false,
  delay: () => {

    clearTimeout(theme.font.ui.timer);

    theme.font.ui.timer = setTimeout(theme.font.ui.load, 600);

  },
  load: () => {

    const uiFont = trimString(state.get.current().theme.font.ui.name);

    if (isValidString(uiFont)) {

      WebFont.load({
        // fontloading: (familyName, fvd) => { console.log('fontloading:', familyName); },
        google: { families: [trimString(uiFont) + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] }
      });

    };

    theme.font.ui.render();

  },
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(trimString(state.get.current().theme.font.ui.name))) {

      html.style.setProperty('--theme-font-ui-name', '"' + trimString(state.get.current().theme.font.ui.name) + '", "Fjalla One", sans-serif');

    } else {

      html.style.removeProperty('--theme-font-ui-name');

    };

  }
};

theme.color = {
  render: () => {

    const html = document.querySelector('html');

    let shades = (state.get.current().theme.color.lightness.end - state.get.current().theme.color.lightness.start) / (state.get.current().theme.color.shades - 1);

    for (var type in state.get.current().theme.color.range) {

      for (var i = 0; i < state.get.current().theme.color.shades; i++) {

        let hsl = JSON.parse(JSON.stringify(state.get.current().theme.color.range[type]));

        hsl.l = Math.round((shades * i) + state.get.current().theme.color.lightness.start);

        let rgb = convertColor.hsl.rgb(hsl);

        for (var key in rgb) {
          html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, rgb[key]);
        };

        for (var key in hsl) {
          html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, hsl[key]);
        };

      };

    };

  }
};

theme.accent = {};

theme.accent.random = {
  render: () => {

    if (state.get.current().theme.accent.random.active) {

      const randomAccentType = {
        any: () => { return { h: randomNumber(0, 360), s: randomNumber(0, 100), l: randomNumber(0, 100) }; },
        light: () => { return { h: randomNumber(0, 360), s: randomNumber(50, 90), l: randomNumber(50, 90) }; },
        dark: () => { return { h: randomNumber(0, 360), s: randomNumber(10, 50), l: randomNumber(10, 50) }; },
        pastel: () => { return { h: randomNumber(0, 360), s: 50, l: 80 }; },
        saturated: () => { return { h: randomNumber(0, 360), s: 100, l: 50 }; }
      };

      const hsl = randomAccentType[state.get.current().theme.accent.random.style]();

      const rgb = convertColor.hsl.rgb(hsl);

      state.get.current().theme.accent.rgb = rgb;

      state.get.current().theme.accent.hsl = hsl;

    };

  }
};

theme.style = {
  bind: () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      theme.style.initial();
    });
  },
  initial: () => {
    switch (state.get.current().theme.style) {

      case 'dark':
      case 'light':

        localStorage.setItem(data.saveName + 'Style', state.get.current().theme.style);
        break;

      case 'system':

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          localStorage.setItem(data.saveName + 'Style', 'dark');
        } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
          localStorage.setItem(data.saveName + 'Style', 'light');
        };
        break;

    };
  },
  dark: () => {
    state.get.current().theme.style = 'dark';
    theme.style.initial();
    applyCSSClass('theme.style');
  },
  light: () => {
    state.get.current().theme.style = 'light';
    theme.style.initial();
    applyCSSClass('theme.style');
  },
  toggle: () => {
    switch (state.get.current().theme.style) {

      case 'dark':
        theme.style.light();
        break;

      case 'light':
        theme.style.dark();
        break;

    };
  }
};

theme.background = {
  element: {
    background: node('div|class:background'),
    type: {
      theme: node('div|class:theme-background-type theme-background-type-theme'),
      accent: node('div|class:theme-background-type theme-background-type-accent'),
      color: node('div|class:theme-background-type theme-background-type-color'),
      gradient: node('div|class:theme-background-type theme-background-type-gradient'),
      image: node('div|class:theme-background-type theme-background-type-image'),
      video: node('div|class:theme-background-type theme-background-type-video')
    },
    video: false
  }
};

theme.background.area = {
  render: () => {

    const backgroundElement = node('div|class:background');

    state.get.option().theme.background.type.forEach((item, i) => {

      theme.background.element.background.appendChild(theme.background.element.type[item]);

    });

    document.querySelector('body').appendChild(theme.background.element.background);

  }
};

theme.background.image = {
  render: () => {

    const html = document.querySelector('html');

    if (isValidString(state.get.current().theme.background.image.url)) {
      html.style.setProperty('--theme-background-image', 'url(' + trimString(state.get.current().theme.background.image.url) + ')');
    } else {
      html.style.removeProperty('--theme-background-image');
    };

  }
};

theme.background.video = {
  render: () => {

    theme.background.element.video = new Video({
      url: state.get.current().theme.background.video.url
    });

    if (isValidString(state.get.current().theme.background.video.url)) {

      theme.background.element.type.video.appendChild(theme.background.element.video.video);

    } else {

      theme.background.video.clear();

    };

  },
  clear: () => {

    theme.background.element.video = false;

    if (theme.background.element.type.video.lastChild) {

      clearChildNode(theme.background.element.type.video);

    };

  }
};

theme.init = () => {
  theme.style.initial();
  theme.style.bind();
  theme.color.render();
  theme.accent.random.render();
  theme.font.display.load();
  theme.font.ui.load();
  theme.background.area.render();
  theme.background.image.render();
  theme.background.video.render();
  applyCSSVar([
    'theme.accent.rgb.r',
    'theme.accent.rgb.g',
    'theme.accent.rgb.b',
    'theme.accent.hsl.h',
    'theme.accent.hsl.s',
    'theme.accent.hsl.l',
    'theme.font.display.weight',
    'theme.font.display.style',
    'theme.font.ui.weight',
    'theme.font.ui.style',
    'theme.bookmark.shadow.color.rgb.r',
    'theme.bookmark.shadow.color.rgb.g',
    'theme.bookmark.shadow.color.rgb.b',
    'theme.bookmark.shadow.color.hsl.h',
    'theme.bookmark.shadow.color.hsl.s',
    'theme.bookmark.shadow.color.hsl.l',
    'theme.bookmark.shadow.opacity',
    'theme.background.color.rgb.r',
    'theme.background.color.rgb.g',
    'theme.background.color.rgb.b',
    'theme.background.color.hsl.h',
    'theme.background.color.hsl.s',
    'theme.background.color.hsl.l',
    'theme.background.image.blur',
    'theme.background.image.scale',
    'theme.background.image.accent',
    'theme.background.image.opacity',
    'theme.background.video.blur',
    'theme.background.video.scale',
    'theme.background.video.accent',
    'theme.background.video.opacity',
    'theme.background.gradient.angle',
    'theme.background.gradient.start.rgb.r',
    'theme.background.gradient.start.rgb.g',
    'theme.background.gradient.start.rgb.b',
    'theme.background.gradient.start.hsl.h',
    'theme.background.gradient.start.hsl.s',
    'theme.background.gradient.start.hsl.l',
    'theme.background.gradient.end.rgb.r',
    'theme.background.gradient.end.rgb.g',
    'theme.background.gradient.end.rgb.b',
    'theme.background.gradient.end.hsl.h',
    'theme.background.gradient.end.hsl.s',
    'theme.background.gradient.end.hsl.l',
    'theme.radius',
    'theme.shadow',
    'theme.shade.opacity',
    'theme.shade.blur'
  ]);
  applyCSSClass([
    'theme.style',
    'theme.bookmark.shadow.color.type',
    'theme.background.type'
  ]);
};

export { theme };
