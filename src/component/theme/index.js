import { state } from '../state';
import { data } from '../data';

import { Video } from '../video';

import { node } from '../../utility/node';
import { convertColor } from '../../utility/convertColor';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

const theme = {};

theme.bind = {};

theme.bind.style = {
  initial: function() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
      theme.mod.style.initial();
    });
  }
};

theme.mod = {};

theme.mod.style = {
  initial: function() {
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
  light: function() {
    state.get.current().theme.style = 'light';
  },
  dark: function() {
    state.get.current().theme.style = 'dark';
  }
};

theme.render = {};

theme.render.color = function() {
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

};

theme.render.class = function() {
  const html = document.querySelector('html');

  if (state.get.current().bookmark.edit) {
    html.classList.add('is-bookmark-edit');
  } else {
    html.classList.remove('is-bookmark-edit');
  };

  const type = ['dark', 'light', 'system', 'theme', 'custom'];

  type.forEach((item, i) => {
    html.classList.remove('is-theme-style-' + item);
    html.classList.remove('is-theme-bookmark-shadow-color-type-' + item);
  });

  html.classList.add('is-theme-style-' + state.get.current().theme.style);
  html.classList.add('is-theme-bookmark-shadow-color-type-' + state.get.current().theme.bookmark.shadow.color.type);
};

theme.render.accent = function() {
  const html = document.querySelector('html');
  const rgb = state.get.current().theme.accent.rgb;
  html.style.setProperty('--theme-accent-r', rgb.r);
  html.style.setProperty('--theme-accent-g', rgb.g);
  html.style.setProperty('--theme-accent-b', rgb.b);
};

theme.render.radius = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-radius', state.get.current().theme.radius);
};

theme.render.shadow = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-shadow', state.get.current().theme.shadow);
};

theme.style = {
  dark: function() {
    theme.mod.style.dark();
    theme.mod.style.initial();
    theme.render.class();
  },
  light: function() {
    theme.mod.style.light();
    theme.mod.style.initial();
    theme.render.class();
  },
  toggle: function() {
    if (state.get.current().theme.style == 'dark') {
      theme.style.light();
    } else if (state.get.current().theme.style == 'light') {
      theme.style.dark();
    };
  }
}

theme.render.bookmark = {};

theme.render.bookmark.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-bookmark-shadow-color', state.get.current().theme.bookmark.shadow.color.rgb.r + ', ' + state.get.current().theme.bookmark.shadow.color.rgb.g + ', ' + state.get.current().theme.bookmark.shadow.color.rgb.b);
  html.style.setProperty('--theme-bookmark-shadow-opacity', state.get.current().theme.bookmark.shadow.opacity);
};

theme.render.background = {};

theme.render.background.choices = ['theme', 'accent', 'color', 'gradient', 'image', 'video'];

theme.render.background.area = function() {
  const backgroundElement = node('div|class:theme-background');

  theme.render.background.choices.forEach((item, i) => {
    backgroundElement.appendChild(node('div|class:theme-background-type theme-background-type-' + item));
  });

  document.querySelector('body').appendChild(backgroundElement);
};

theme.render.background.type = function() {
  const html = document.querySelector('html');

  theme.render.background.choices.forEach((item, i) => {
    html.classList.remove('is-theme-background-type-' + item);
  });

  html.classList.add('is-theme-background-type-' + state.get.current().theme.background.type);
};

theme.render.background.color = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-color', state.get.current().theme.background.color.rgb.r + ', ' + state.get.current().theme.background.color.rgb.g + ', ' + state.get.current().theme.background.color.rgb.b);
};

theme.render.background.gradient = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-gradient-angle', state.get.current().theme.background.gradient.angle);

  html.style.setProperty('--theme-background-gradient-start', state.get.current().theme.background.gradient.start.rgb.r + ', ' + state.get.current().theme.background.gradient.start.rgb.g + ', ' + state.get.current().theme.background.gradient.start.rgb.b);

  html.style.setProperty('--theme-background-gradient-end', state.get.current().theme.background.gradient.end.rgb.r + ', ' + state.get.current().theme.background.gradient.end.rgb.g + ', ' + state.get.current().theme.background.gradient.end.rgb.b);
};

theme.render.background.image = {};

theme.render.background.image.set = function() {
  const html = document.querySelector('html');

  if (isValidString(state.get.current().theme.background.image.url)) {
    html.style.setProperty('--theme-background-image', 'url(' + trimString(state.get.current().theme.background.image.url) + ')');
  } else {
    html.style.removeProperty('--theme-background-image');
  };
};

theme.render.background.image.filter = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-image-blur', state.get.current().theme.background.image.blur);
  html.style.setProperty('--theme-background-image-scale', state.get.current().theme.background.image.scale);
  html.style.setProperty('--theme-background-image-opacity', state.get.current().theme.background.image.opacity);
};

theme.render.background.video = {};

theme.render.background.video.element = false;

theme.render.background.video.set = function() {
  theme.render.background.video.element = new Video({
    url: state.get.current().theme.background.video.url
  });
};

theme.render.background.video.add = function() {
  if (isValidString(state.get.current().theme.background.video.url)) {

    const themeBackgroundTypeVideo = document.querySelector('.theme-background-type-video');

    themeBackgroundTypeVideo.appendChild(theme.render.background.video.element.video);

  } else {

    theme.render.background.video.remove();

  };
};

theme.render.background.video.remove = function() {
  const themeBackgroundTypeVideo = document.querySelector('.theme-background-type-video');

  if (themeBackgroundTypeVideo.lastChild) {
    while (themeBackgroundTypeVideo.lastChild) {
      themeBackgroundTypeVideo.removeChild(themeBackgroundTypeVideo.lastChild);
    };
  };
};

theme.render.background.video.filter = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-video-blur', state.get.current().theme.background.video.blur);
  html.style.setProperty('--theme-background-video-scale', state.get.current().theme.background.video.scale);
  html.style.setProperty('--theme-background-video-opacity', state.get.current().theme.background.video.opacity);
};

theme.init = function() {
  theme.mod.style.initial();
  theme.bind.style.initial();
  theme.render.color();
  theme.render.accent();
  theme.render.class();
  theme.render.radius();
  theme.render.shadow();
  theme.render.bookmark.style();
  theme.render.background.area();
  theme.render.background.type();
  theme.render.background.color();
  theme.render.background.gradient();
  theme.render.background.image.set();
  theme.render.background.image.filter();
  theme.render.background.video.set();
  theme.render.background.video.add();
  theme.render.background.video.filter();
};

export { theme };
