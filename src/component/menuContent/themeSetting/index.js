import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { grid } from '../../grid';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';
import { toolbar } from '../../toolbar';
import { accentPreset } from '../../accentPreset';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';
import { AccentPresetButton } from '../../accentPresetButton';

import { Control_helperText } from '../../control/helperText';
import { Control_inputButton } from '../../control/inputButton';
import { Control_groupText } from '../../control/groupText';
import { Control_radio } from '../../control/radio';
import { Control_radioGrid } from '../../control/radioGrid';
import { Control_checkbox } from '../../control/checkbox';
import { Control_slider } from '../../control/slider';
import { Control_slimSlider } from '../../control/slimSlider';
import { Control_colorMixer } from '../../control/colorMixer';
import { Control_color } from '../../control/color';
import { Control_text } from '../../control/text';
import { Control_textReset } from '../../control/textReset';

import { node } from '../../../utility/node';
import { convertColor } from '../../../utility/convertColor';
import { complexNode } from '../../../utility/complexNode';
import { applyCSSVar } from '../../../utility/applyCSSVar';
import { applyCSSClass } from '../../../utility/applyCSSClass';
import { applyCSSState } from '../../../utility/applyCSSState';

const themeSetting = {};

themeSetting.control = {
  style: {},
  colour: {},
  accent: {},
  font: {},
  bookmark: {},
  shade: {},
  background: {}
};

themeSetting.disable = () => {

  if (state.get.current().theme.accent.random.active) {
    themeSetting.control.accent.style.enable();
    themeSetting.control.accent.randomiseNow.enable();
  } else {
    themeSetting.control.accent.style.disable();
    themeSetting.control.accent.randomiseNow.disable();
  };

  switch (state.get.current().theme.background.type) {
    case 'theme':
    case 'accent':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.opacity.disable();
      break;

    case 'color':
      themeSetting.control.background.color.enable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.opacity.disable();
      break;

    case 'gradient':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.enable();
      themeSetting.control.background.gradient.start.enable();
      themeSetting.control.background.gradient.end.enable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.opacity.disable();
      break;

    case 'image':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.enable();
      themeSetting.control.background.image.urlHelper.enable();
      themeSetting.control.background.image.blur.enable();
      themeSetting.control.background.image.grayscale.enable();
      themeSetting.control.background.image.scale.enable();
      themeSetting.control.background.image.opacity.enable();
      themeSetting.control.background.video.url.disable();
      themeSetting.control.background.video.urlHelper.disable();
      themeSetting.control.background.video.blur.disable();
      themeSetting.control.background.video.grayscale.disable();
      themeSetting.control.background.video.scale.disable();
      themeSetting.control.background.video.opacity.disable();
      break;

    case 'video':
      themeSetting.control.background.color.disable();
      themeSetting.control.background.gradient.angle.disable();
      themeSetting.control.background.gradient.start.disable();
      themeSetting.control.background.gradient.end.disable();
      themeSetting.control.background.image.url.disable();
      themeSetting.control.background.image.urlHelper.disable();
      themeSetting.control.background.image.blur.disable();
      themeSetting.control.background.image.grayscale.disable();
      themeSetting.control.background.image.scale.disable();
      themeSetting.control.background.image.opacity.disable();
      themeSetting.control.background.video.url.enable();
      themeSetting.control.background.video.urlHelper.enable();
      themeSetting.control.background.video.blur.enable();
      themeSetting.control.background.video.grayscale.enable();
      themeSetting.control.background.video.scale.enable();
      themeSetting.control.background.video.opacity.enable();
      break;
  };

  switch (state.get.current().theme.bookmark.shadow.color.type) {

    case 'theme':
      themeSetting.control.bookmark.shadow.color.color.disable();
      break;

    case 'custom':
      themeSetting.control.bookmark.shadow.color.color.enable();
      break;

  };

};

themeSetting.style = (parent) => {

  themeSetting.control.style = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-style-dark', labelText: 'Dark mode', description: false, value: 'dark' },
      { id: 'theme-style-light', labelText: 'Light mode', description: false, value: 'light' },
      { id: 'theme-style-system', labelText: 'Automatic', description: 'Follow the system Light or Dark mode.', value: 'system' }
    ],
    groupName: 'theme-style',
    path: 'theme.style',
    action: () => {
      theme.style.initial();
      applyCSSClass('theme.style');
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeSetting.control.style.wrap()
    ])
  );

};

themeSetting.colour = (parent) => {

  const shade = () => {

    const formSticky = form.sticky();

    const formGroup = form.group({
      block: true,
      border: true
    });

    const shadeCount = state.get.current().theme.color.shades;

    for (var i = 1; i <= shadeCount; i++) {
      let count = i;

      if (count < 10) {
        count = '0' + count;
      };

      formGroup.appendChild(
        node('div|class:form-group-text form-group-text-borderless', [
          node('div|class:theme-color-box theme-color-shade-' + count + '')
        ])
      );
    };

    formSticky.appendChild(formGroup);

    return formSticky;
  };

  themeSetting.control.color = {
    range: {
      primary: {
        h: new Control_slider({
          object: state.get.current(),
          path: 'theme.color.range.primary.h',
          id: 'theme-color-range-primary-h',
          labelText: 'Primary colour',
          hue: true,
          value: state.get.current().theme.color.range.primary.h,
          defaultValue: state.get.default().theme.color.range.primary.h,
          min: state.get.minMax().theme.color.range.primary.h.min,
          max: state.get.minMax().theme.color.range.primary.h.max,
          action: () => {
            theme.color.render();
            data.save();
          }
        }),
        s: new Control_slider({
          object: state.get.current(),
          path: 'theme.color.range.primary.s',
          id: 'theme-color-range-primary-s',
          labelText: 'Saturation',
          value: state.get.current().theme.color.range.primary.s,
          defaultValue: state.get.default().theme.color.range.primary.s,
          min: state.get.minMax().theme.color.range.primary.s.min,
          max: state.get.minMax().theme.color.range.primary.s.max,
          action: () => {
            theme.color.render();
            data.save();
          }
        })
      }
    },
    lightness: {
      contrast: new Control_slider({
        object: state.get.current(),
        path: 'theme.color.lightness.contrast',
        id: 'theme-color-range-contrast',
        labelText: 'Contrast',
        value: state.get.current().theme.color.lightness.contrast,
        defaultValue: state.get.default().theme.color.lightness.contrast,
        min: state.get.minMax().theme.color.lightness.contrast.min,
        max: state.get.minMax().theme.color.lightness.contrast.max,
        action: () => {
          theme.color.lightness.set();
          theme.color.render();
          data.save();
        }
      })
    },
    shade: {
      helper: new Control_helperText({
        text: [
          'Backgrounds, Bookmarks and Modals use shades from the left.',
          'Text and form elements use shades from the right.',
          'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.'
        ]
      })
    }
  };

  parent.appendChild(
    node('div', [
      shade(),
      themeSetting.control.color.shade.helper.wrap(),
      node('hr'),
      themeSetting.control.color.range.primary.h.wrap(),
      themeSetting.control.color.range.primary.s.wrap(),
      themeSetting.control.color.lightness.contrast.wrap()
    ])
  );

};

themeSetting.accent = (parent) => {

  const preset = () => {

    const allPreset = accentPreset.get();

    const formWrap = form.wrap();

    const themeAccentPreset = node('div|class:theme-accent-preset');

    allPreset.forEach((item, i) => {

      const presetButton = new AccentPresetButton({
        presetData: item
      });

      themeAccentPreset.appendChild(presetButton.button());

    });

    formWrap.appendChild(themeAccentPreset);

    return formWrap;

  };

  themeSetting.control.accent = {
    color: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent',
      labelText: 'Accent colour',
      defaultValue: state.get.default().theme.accent.rgb,
      minMaxObject: state.get.minMax(),
      action: () => {
        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);
        toolbar.current.update.style();
        toolbar.current.update.accent();
        data.save();
      }
    }),
    random: new Control_checkbox({
      object: state.get.current(),
      path: 'theme.accent.random.active',
      id: 'theme-accent-random-active',
      labelText: 'Random Accent colour on load/refresh',
      action: () => {
        themeSetting.disable();
        data.save();
      }
    }),
    style: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-accent-random-style-any', labelText: 'Any', value: 'any' },
        { id: 'theme-accent-random-style-light', labelText: 'Light', value: 'light' },
        { id: 'theme-accent-random-style-dark', labelText: 'Dark', value: 'dark' },
        { id: 'theme-accent-random-style-pastel', labelText: 'Pastel', value: 'pastel' },
        { id: 'theme-accent-random-style-saturated', labelText: 'Saturated', value: 'saturated' },
      ],
      groupName: 'theme-accent-random-style',
      path: 'theme.accent.random.style',
      action: () => {
        data.save();
      }
    }),
    randomiseNow: new Button({
      text: 'Randomise now',
      style: ['line'],
      func: () => {
        theme.accent.random.render();
        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);
        toolbar.current.update.style();
        toolbar.current.update.accent();
        themeSetting.control.accent.color.update();
        data.save();
      }
    })
  };

  parent.appendChild(
    node('div', [
      preset(),
      node('hr'),
      themeSetting.control.accent.color.wrap(),
      node('hr'),
      themeSetting.control.accent.random.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.accent.style.inline(),
              themeSetting.control.accent.randomiseNow.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.font = (parent) => {

  const fontWeight = { light: 300, regular: 400, bold: 700 };

  themeSetting.control.font.display = {
    name: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.display.name',
      id: 'theme-font-display-name',
      value: state.get.current().theme.font.display.name,
      defaultValue: state.get.default().theme.font.display.name,
      placeholder: 'Google font name',
      labelText: 'Display font',
      action: () => {
        theme.font.display.delay();
        data.save();
      }
    }),
    nameHelper: new Control_helperText({
      text: [
        'Use a <a href="https://fonts.google.com/" target="_blank">Google Font</a> to customise the Clock, Date, Group names and Bookmark Letters.',
        'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Fredoka One" or "Kanit"',
        'Clear the field to use the default font "Fjalla One".'
      ]
    }),
    weight: new Control_slider({
      object: state.get.current(),
      path: 'theme.font.display.weight',
      id: 'theme-font-display-weight',
      labelText: 'Font weight',
      value: state.get.current().theme.font.display.weight,
      defaultValue: state.get.default().theme.font.display.weight,
      step: state.get.step().theme.font.display.weight,
      min: state.get.minMax().theme.font.display.weight.min,
      max: state.get.minMax().theme.font.display.weight.max,
      action: () => {
        applyCSSVar('theme.font.display.weight');
        data.save();
      }
    }),
    weightLight: new Button({
      text: 'Light',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.light;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightRegular: new Button({
      text: 'Regular',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.regular;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightBold: new Button({
      text: 'Bold',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.display.weight = fontWeight.bold;
        applyCSSVar('theme.font.display.weight');
        themeSetting.control.font.display.weight.update();
        data.save();
      }
    }),
    weightHelper: new Control_helperText({
      text: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
    }),
    style: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-font-display-style-normal', labelText: 'Normal', value: 'normal' },
        { id: 'theme-font-display-style-italic', labelText: 'Italic', value: 'italic' }
      ],
      groupName: 'theme-font-display-style',
      path: 'theme.font.display.style',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['line'],
      action: () => {
        applyCSSVar('theme.font.display.style');
        data.save();
      }
    })
  };

  themeSetting.control.font.ui = {
    name: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.ui.name',
      id: 'theme-font-ui-name',
      value: state.get.current().theme.font.ui.name,
      defaultValue: state.get.default().theme.font.ui.name,
      placeholder: 'Google font name',
      labelText: 'User interface font',
      action: () => {
        theme.font.ui.delay();
        data.save();
      }
    }),
    nameHelper: new Control_helperText({
      text: [
        'Use a <a href="https://fonts.google.com/" target="_blank">Google Font</a> to customise the Bookmark name, URL and form elements.',
        'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Roboto", "Source Sans Pro" or "Noto Sans"',
        'Clear the field to use the default font "Open Sans".'
      ]
    }),
    weight: new Control_slider({
      object: state.get.current(),
      path: 'theme.font.ui.weight',
      id: 'theme-font-ui-weight',
      labelText: 'Font weight',
      value: state.get.current().theme.font.ui.weight,
      defaultValue: state.get.default().theme.font.ui.weight,
      step: state.get.step().theme.font.ui.weight,
      min: state.get.minMax().theme.font.ui.weight.min,
      max: state.get.minMax().theme.font.ui.weight.max,
      action: () => {
        applyCSSVar('theme.font.ui.weight');
        data.save();
      }
    }),
    weightLight: new Button({
      text: 'Light',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.light;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightRegular: new Button({
      text: 'Regular',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.regular;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightBold: new Button({
      text: 'Bold',
      style: ['line'],
      func: () => {
        state.get.current().theme.font.ui.weight = fontWeight.bold;
        applyCSSVar('theme.font.ui.weight');
        themeSetting.control.font.ui.weight.update();
        data.save();
      }
    }),
    weightHelper: new Control_helperText({
      text: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
    }),
    style: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-font-ui-style-normal', labelText: 'Normal', value: 'normal' },
        { id: 'theme-font-ui-style-italic', labelText: 'Italic', value: 'italic' }
      ],
      groupName: 'theme-font-ui-style',
      path: 'theme.font.ui.style',
      inputButton: true,
      inputHide: true,
      inputButtonStyle: ['line'],
      action: () => {
        applyCSSVar('theme.font.ui.style');
        data.save();
      }
    }),
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.font.display.name.wrap(),
      themeSetting.control.font.display.nameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.font.display.weight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeSetting.control.font.display.weightLight.button,
                      themeSetting.control.font.display.weightRegular.button,
                      themeSetting.control.font.display.weightBold.button
                    ]
                  })
                ]
              }),
              form.wrap({
                children: [
                  themeSetting.control.font.display.style.inputButton()
                ]
              }),
              themeSetting.control.font.display.weightHelper.wrap()
            ]
          })
        ]
      }),
      node('hr'),
      themeSetting.control.font.ui.name.wrap(),
      themeSetting.control.font.ui.nameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeSetting.control.font.ui.weight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeSetting.control.font.ui.weightLight.button,
                      themeSetting.control.font.ui.weightRegular.button,
                      themeSetting.control.font.ui.weightBold.button
                    ]
                  })
                ]
              }),
              form.wrap({
                children: [
                  themeSetting.control.font.ui.style.inputButton()
                ]
              }),
              themeSetting.control.font.ui.weightHelper.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.bookmark = (parent) => {

  themeSetting.control.bookmark = {
    shadow: {
      color: {
        type: new Control_radio({
          object: state.get.current(),
          radioGroup: [
            { id: 'theme-bookmark-shadow-color-type-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
            { id: 'theme-bookmark-shadow-color-type-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
          ],
          groupName: 'theme-bookmark-shadow-color-type',
          path: 'theme.bookmark.shadow.color.type',
          action: () => {
            applyCSSClass('theme.bookmark.shadow.color.type');
            themeSetting.disable();
            themeBookmarkShadowColorByCollapse.update();
            data.save();
          }
        }),
        color: new Control_colorMixer({
          object: state.get.current(),
          path: 'theme.bookmark.shadow.color',
          id: 'theme-bookmark-shadow-color',
          labelText: 'Bookmark shadow colour',
          srOnly: true,
          defaultValue: state.get.default().theme.bookmark.shadow.color.rgb,
          minMaxObject: state.get.minMax(),
          action: () => {
            applyCSSVar([
              'theme.bookmark.shadow.color.rgb.r',
              'theme.bookmark.shadow.color.rgb.g',
              'theme.bookmark.shadow.color.rgb.b',
              'theme.bookmark.shadow.color.hsl.h',
              'theme.bookmark.shadow.color.hsl.s',
              'theme.bookmark.shadow.color.hsl.l'
            ]);
            data.save();
          }
        })
      },
      opacity: new Control_slider({
        object: state.get.current(),
        path: 'theme.bookmark.shadow.opacity',
        id: 'theme-bookmark-shadow-opacity',
        labelText: 'Bookmark shadow opacity',
        value: state.get.current().theme.bookmark.shadow.opacity,
        defaultValue: state.get.default().theme.bookmark.shadow.opacity,
        min: state.get.minMax().theme.bookmark.shadow.opacity.min,
        max: state.get.minMax().theme.bookmark.shadow.opacity.max,
        action: () => {
          applyCSSVar('theme.bookmark.shadow.opacity');
          data.save();
        }
      })
    }
  };

  const themeBookmarkShadowColorByCustonArea = node('div', [
    node('hr'),
    themeSetting.control.bookmark.shadow.color.color.wrap(),
  ]);

  const themeBookmarkShadowColorByCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.bookmark.shadow.color.type,
    target: [{
      id: themeSetting.control.bookmark.shadow.color.type.radioSet[1].radio.value,
      content: themeBookmarkShadowColorByCustonArea
    }]
  });

  themeBookmarkShadowColorByCollapse.update();

  parent.appendChild(
    node('div', [
      form.wrap({
        children: [
          form.label({
            text: 'Bookmark shadow colour'
          })
        ]
      }),
      themeSetting.control.bookmark.shadow.color.type.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeBookmarkShadowColorByCollapse.collapse(),
              node('hr'),
              themeSetting.control.bookmark.shadow.opacity.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.shade = (parent) => {

  themeSetting.control.shade = {
    opacity: new Control_slider({
      object: state.get.current(),
      path: 'theme.shade.opacity',
      id: 'theme.shade.opacity',
      labelText: 'Shade opacity',
      value: state.get.current().theme.shade.opacity,
      defaultValue: state.get.default().theme.shade.opacity,
      min: state.get.minMax().theme.shade.opacity.min,
      max: state.get.minMax().theme.shade.opacity.max,
      action: () => {
        applyCSSVar('theme.shade.opacity');
        data.save();
      }
    }),
    blur: new Control_slider({
      object: state.get.current(),
      path: 'theme.shade.blur',
      id: 'theme.shade.blur',
      labelText: 'Shade blur',
      value: state.get.current().theme.shade.blur,
      defaultValue: state.get.default().theme.shade.blur,
      min: state.get.minMax().theme.shade.blur.min,
      max: state.get.minMax().theme.shade.blur.max,
      action: () => {
        applyCSSVar('theme.shade.blur');
        data.save();
      }
    })
  };

  parent.appendChild(
    node('div', [
      themeSetting.control.shade.opacity.wrap(),
      themeSetting.control.shade.blur.wrap()
    ])
  );

};

themeSetting.background = (parent) => {

  const updateVideoPlayState = () => {

    if (theme.background.element.video) {
      if (themeSetting.control.background.type.value() === 'video') {
        theme.background.element.video.play();
      } else {
        theme.background.element.video.pause();
      };
    };

  };

  themeSetting.control.background = {
    type: new Control_radio({
      object: state.get.current(),
      radioGroup: [
        { id: 'theme-background-type-theme', labelText: 'Background by Theme', description: 'Use the Background colour defined by the Theme.', value: 'theme' },
        { id: 'theme-background-type-accent', labelText: 'Background by Accent', description: 'Use the Accent colour for the Background.', value: 'accent' },
        { id: 'theme-background-type-color', labelText: 'Custom colour', value: 'color' },
        { id: 'theme-background-type-gradient', labelText: 'Gradient', value: 'gradient' },
        { id: 'theme-background-type-image', labelText: 'Image', value: 'image' },
        { id: 'theme-background-type-video', labelText: 'Video', value: 'video' }
      ],
      groupName: 'theme-background-type',
      path: 'theme.background.type',
      action: () => {
        applyCSSClass('theme.background.type');
        themeBackgroundCollapse.update();
        toolbar.current.update.style();
        themeSetting.disable();
        updateVideoPlayState();
        data.save();
      }
    }),
    color: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.background.color',
      id: 'theme-background-color',
      labelText: 'Background colour',
      defaultValue: state.get.default().theme.background.color.rgb,
      minMaxObject: state.get.minMax(),
      action: () => {
        applyCSSVar([
          'theme.background.color.rgb.r',
          'theme.background.color.rgb.g',
          'theme.background.color.rgb.b',
          'theme.background.color.hsl.h',
          'theme.background.color.hsl.s',
          'theme.background.color.hsl.l'
        ]);
        toolbar.current.update.style();
        data.save();
      }
    }),
    gradient: {
      angle: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.gradient.angle',
        id: 'theme-background-gradient-angle',
        labelText: 'Background gradient angle',
        value: state.get.current().theme.background.gradient.angle,
        defaultValue: state.get.default().theme.background.gradient.angle,
        min: state.get.minMax().theme.background.gradient.angle.min,
        max: state.get.minMax().theme.background.gradient.angle.max,
        action: () => {
          applyCSSVar('theme.background.gradient.angle');
          toolbar.current.update.style();
          data.save();
        }
      }),
      start: new Control_colorMixer({
        object: state.get.current(),
        path: 'theme.background.gradient.start',
        id: 'theme-background-gradient-start',
        labelText: 'Background gradient start',
        defaultValue: state.get.default().theme.background.gradient.start.rgb,
        minMaxObject: state.get.minMax(),
        action: () => {
          applyCSSVar([
            'theme.background.gradient.start.rgb.r',
            'theme.background.gradient.start.rgb.g',
            'theme.background.gradient.start.rgb.b',
            'theme.background.gradient.start.hsl.h',
            'theme.background.gradient.start.hsl.s',
            'theme.background.gradient.start.hsl.l'
          ]);
          toolbar.current.update.style();
          data.save();
        }
      }),
      end: new Control_colorMixer({
        object: state.get.current(),
        path: 'theme.background.gradient.end',
        id: 'theme-background-gradient-end',
        labelText: 'Background gradient end',
        defaultValue: state.get.default().theme.background.gradient.end.rgb,
        minMaxObject: state.get.minMax(),
        action: () => {
          applyCSSVar([
            'theme.background.gradient.end.rgb.r',
            'theme.background.gradient.end.rgb.g',
            'theme.background.gradient.end.rgb.b',
            'theme.background.gradient.end.hsl.h',
            'theme.background.gradient.end.hsl.s',
            'theme.background.gradient.end.hsl.l'
          ]);
          toolbar.current.update.style();
          data.save();
        }
      })
    },
    image: {
      url: new Control_text({
        object: state.get.current(),
        path: 'theme.background.image.url',
        id: 'theme-background-image-url',
        value: state.get.current().theme.background.image.url,
        placeholder: 'https://www.example.com/image.jpg',
        labelText: 'Background image URL',
        action: () => {
          theme.background.image.render();
          data.save();
        }
      }),
      urlHelper: new Control_helperText({
        text: ['Background image only supports a direct URL to an image file.']
      }),
      blur: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.blur',
        id: 'theme-background-image-blur',
        labelText: 'Background image blur',
        value: state.get.current().theme.background.image.blur,
        defaultValue: state.get.default().theme.background.image.blur,
        min: state.get.minMax().theme.background.image.blur.min,
        max: state.get.minMax().theme.background.image.blur.max,
        action: () => {
          applyCSSVar('theme.background.image.blur');
          data.save();
        }
      }),
      grayscale: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.grayscale',
        id: 'theme-background-image-grayscale',
        labelText: 'Background image grayscale',
        value: state.get.current().theme.background.image.grayscale,
        defaultValue: state.get.default().theme.background.image.grayscale,
        min: state.get.minMax().theme.background.image.grayscale.min,
        max: state.get.minMax().theme.background.image.grayscale.max,
        action: () => {
          applyCSSVar('theme.background.image.grayscale');
          data.save();
        }
      }),
      scale: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.scale',
        id: 'theme-background-image-scale',
        labelText: 'Background image scale',
        value: state.get.current().theme.background.image.scale,
        defaultValue: state.get.default().theme.background.image.scale,
        min: state.get.minMax().theme.background.image.scale.min,
        max: state.get.minMax().theme.background.image.scale.max,
        action: () => {
          applyCSSVar('theme.background.image.scale');
          data.save();
        }
      }),
      accent: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.accent',
        id: 'theme-background-image-accent',
        labelText: 'Background image accent',
        value: state.get.current().theme.background.image.accent,
        defaultValue: state.get.default().theme.background.image.accent,
        min: state.get.minMax().theme.background.image.accent.min,
        max: state.get.minMax().theme.background.image.accent.max,
        action: () => {
          applyCSSVar('theme.background.image.accent');
          data.save();
        }
      }),
      opacity: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.opacity',
        id: 'theme-background-image-opacity',
        labelText: 'Background image opacity',
        value: state.get.current().theme.background.image.opacity,
        defaultValue: state.get.default().theme.background.image.opacity,
        min: state.get.minMax().theme.background.image.opacity.min,
        max: state.get.minMax().theme.background.image.opacity.max,
        action: () => {
          applyCSSVar('theme.background.image.opacity');
          data.save();
        }
      })
    },
    video: {
      url: new Control_text({
        object: state.get.current(),
        path: 'theme.background.video.url',
        id: 'theme-background-video-url',
        value: state.get.current().theme.background.video.url,
        placeholder: 'https://www.example.com/video.mp4',
        labelText: 'Background video URL',
        action: () => {
          theme.background.video.clear();
          theme.background.video.render();
          data.save();
        }
      }),
      urlHelper: new Control_helperText({
        text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
      }),
      blur: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.video.blur',
        id: 'theme-background-video-blur',
        labelText: 'Background video blur',
        value: state.get.current().theme.background.video.blur,
        defaultValue: state.get.default().theme.background.video.blur,
        min: state.get.minMax().theme.background.video.blur.min,
        max: state.get.minMax().theme.background.video.blur.max,
        action: () => {
          applyCSSVar('theme.background.video.blur');
          data.save();
        }
      }),
      grayscale: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.image.grayscale',
        id: 'theme-background-image-grayscale',
        labelText: 'Background image grayscale',
        value: state.get.current().theme.background.image.grayscale,
        defaultValue: state.get.default().theme.background.image.grayscale,
        min: state.get.minMax().theme.background.image.grayscale.min,
        max: state.get.minMax().theme.background.image.grayscale.max,
        action: () => {
          applyCSSVar('theme.background.image.grayscale');
          data.save();
        }
      }),
      scale: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.video.scale',
        id: 'theme-background-video-scale',
        labelText: 'Background video scale',
        value: state.get.current().theme.background.video.scale,
        defaultValue: state.get.default().theme.background.video.scale,
        min: state.get.minMax().theme.background.video.scale.min,
        max: state.get.minMax().theme.background.video.scale.max,
        action: () => {
          applyCSSVar('theme.background.video.scale');
          data.save();
        }
      }),
      accent: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.video.accent',
        id: 'theme-background-video-accent',
        labelText: 'Background video accent',
        value: state.get.current().theme.background.video.accent,
        defaultValue: state.get.default().theme.background.video.accent,
        min: state.get.minMax().theme.background.video.accent.min,
        max: state.get.minMax().theme.background.video.accent.max,
        action: () => {
          applyCSSVar('theme.background.video.accent');
          data.save();
        }
      }),
      opacity: new Control_slider({
        object: state.get.current(),
        path: 'theme.background.video.opacity',
        id: 'theme-background-video-opacity',
        labelText: 'Background video opacity',
        value: state.get.current().theme.background.video.opacity,
        defaultValue: state.get.default().theme.background.video.opacity,
        min: state.get.minMax().theme.background.video.opacity.min,
        max: state.get.minMax().theme.background.video.opacity.max,
        action: () => {
          applyCSSVar('theme.background.video.opacity');
          data.save();
        }
      })
    }
  };

  const themeBackgroundColorArea = node('div', [
    node('hr'),
    themeSetting.control.background.color.wrap()
  ]);

  const themeBackgroundGradientArea = node('div', [
    node('hr'),
    themeSetting.control.background.gradient.angle.wrap(),
    node('hr'),
    themeSetting.control.background.gradient.start.wrap(),
    node('hr'),
    themeSetting.control.background.gradient.end.wrap()
  ]);

  const themeBackgroundImageArea = node('div', [
    node('hr'),
    themeSetting.control.background.image.url.wrap(),
    themeSetting.control.background.image.urlHelper.wrap(),
    node('hr'),
    themeSetting.control.background.image.blur.wrap(),
    themeSetting.control.background.image.grayscale.wrap(),
    themeSetting.control.background.image.scale.wrap(),
    themeSetting.control.background.image.accent.wrap(),
    themeSetting.control.background.image.opacity.wrap()
  ]);

  const themeBackgroundVideoArea = node('div', [
    node('hr'),
    themeSetting.control.background.video.url.wrap(),
    themeSetting.control.background.video.urlHelper.wrap(),
    node('hr'),
    themeSetting.control.background.video.blur.wrap(),
    themeSetting.control.background.video.grayscale.wrap(),
    themeSetting.control.background.video.scale.wrap(),
    themeSetting.control.background.video.accent.wrap(),
    themeSetting.control.background.video.opacity.wrap()
  ]);

  const themeBackgroundCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeSetting.control.background.type,
    target: [{
      id: themeSetting.control.background.type.radioSet[2].radio.value,
      content: themeBackgroundColorArea
    }, {
      id: themeSetting.control.background.type.radioSet[3].radio.value,
      content: themeBackgroundGradientArea
    }, {
      id: themeSetting.control.background.type.radioSet[4].radio.value,
      content: themeBackgroundImageArea
    }, {
      id: themeSetting.control.background.type.radioSet[5].radio.value,
      content: themeBackgroundVideoArea
    }]
  });

  themeBackgroundCollapse.update();

  parent.appendChild(
    node('div', [
      themeSetting.control.background.type.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeBackgroundCollapse.collapse()
            ]
          })
        ]
      })
    ])
  );

};

export { themeSetting }
