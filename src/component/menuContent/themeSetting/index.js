import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';
import { theme } from '../../theme';
import { toolbar } from '../../toolbar';
import { grid } from '../../grid';
import { version } from '../../version';
import { menu } from '../../menu';
import { icon } from '../../icon';
import { logo } from '../../logo';
import { link } from '../../link';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

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
import { complexNode } from '../../../utility/complexNode';

const themeSetting = {};

themeSetting.exposeControl = {
  style: false
};

themeSetting.style = (parent) => {

  const themeStyle = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-style-dark', labelText: 'Dark mode', description: false, value: 'dark' },
      { id: 'theme-style-light', labelText: 'Light mode', description: false, value: 'light' },
      { id: 'theme-style-system', labelText: 'Automatic', description: 'Follow the system Light or Dark mode.', value: 'system' }
    ],
    groupName: 'theme-style',
    path: 'theme.style',
    action: () => {
      theme.mod.style.initial();
      theme.render.class();
      data.save();
    }
  });

  themeSetting.exposeControl.style = themeStyle;

  parent.appendChild(
    node('div', [
      themeStyle.wrap()
    ])
  );

};

themeSetting.color = (parent) => {

  const shadesHelper = new Control_helperText({
    text: ['Backgrounds, Bookmarks and Modals use shades from the left.', 'Text and form elements use shades from the right.', 'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.']
  });

  const themeColorRangePrimaryH = new Control_slider({
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
      theme.render.color();
      data.save();
    }
  });

  const themeColorRangePrimaryS = new Control_slider({
    object: state.get.current(),
    path: 'theme.color.range.primary.s',
    id: 'theme-color-range-primary-s',
    labelText: 'Saturation',
    value: state.get.current().theme.color.range.primary.s,
    defaultValue: state.get.default().theme.color.range.primary.s,
    min: state.get.minMax().theme.color.range.primary.s.min,
    max: state.get.minMax().theme.color.range.primary.s.max,
    action: () => {
      theme.render.color();
      data.save();
    }
  });

  const themeColorRangeContrast = new Control_slider({
    object: state.get.current(),
    path: 'theme.color.lightness.contrast',
    id: 'theme-color-range-contrast',
    labelText: 'Contrast',
    value: state.get.current().theme.color.lightness.contrast,
    defaultValue: state.get.default().theme.color.lightness.contrast,
    min: state.get.minMax().theme.color.lightness.contrast.min,
    max: state.get.minMax().theme.color.lightness.contrast.max,
    action: () => {
      state.get.current().theme.color.lightness.offset = 40 - state.get.current().theme.color.lightness.contrast;
      state.get.current().theme.color.lightness.start = state.get.current().theme.color.lightness.offset;
      state.get.current().theme.color.lightness.end = 100 - state.get.current().theme.color.lightness.offset;
      theme.render.color();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      form.sticky({
        children: [
          form.wrap({
            children: [
              themeSetting.shades()
            ]
          })
        ]
      }),
      shadesHelper.wrap(),
      node('hr'),
      themeColorRangePrimaryH.wrap(),
      themeColorRangePrimaryS.wrap(),
      themeColorRangeContrast.wrap()
    ])
  );

};

themeSetting.shades = (parent) => {
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

  return formGroup;
};

themeSetting.accent = (parent) => {

  const themeAccentMixer = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.accent',
    id: 'theme-accent',
    labelText: 'Accent colour',
    defaultValue: state.get.default().theme.accent.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.accent();
      toolbar.accent.update();
      toolbar.render.style.update();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeAccentMixer.wrap()
    ])
  );

};

themeSetting.font = (parent) => {

  const fontWeight = { light: 300, regular: 400, bold: 700 };

  const themeFontDisplayName = new Control_textReset({
    object: state.get.current(),
    path: 'theme.font.display.name',
    id: 'theme-font-display-name',
    value: state.get.current().theme.font.display.name,
    defaultValue: state.get.default().theme.font.display.name,
    placeholder: 'Google font name',
    labelText: 'Display font',
    action: () => {
      theme.render.font.delay.display();
      data.save();
    }
  });

  const themeFontDisplayNameHelper = new Control_helperText({
    text: [
      'Use a <a href="https://fonts.google.com/" target="_blank">Google Font</a> to customise the Clock, Date, Group names and Bookmark Letters.',
      'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Fredoka One" or "Kanit"',
      'Clear the field to use the default font "Fjalla One".'
    ]
  });

  const themeFontDisplayWeight = new Control_slider({
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
      theme.render.font.display.weight();
      data.save();
    }
  });

  const themeFontDisplayWeightLight = new Button({
    text: 'Light',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.display.weight = fontWeight.light;
      theme.render.font.display.weight();
      themeFontDisplayWeight.update();
      data.save();
    }
  });

  const themeFontDisplayWeightRegular = new Button({
    text: 'Regular',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.display.weight = fontWeight.regular;
      theme.render.font.display.weight();
      themeFontDisplayWeight.update();
      data.save();
    }
  });

  const themeFontDisplayWeightBold = new Button({
    text: 'Bold',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.display.weight = fontWeight.bold;
      theme.render.font.display.weight();
      themeFontDisplayWeight.update();
      data.save();
    }
  });

  const themeFontDisplayWeighHelper = new Control_helperText({
    text: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
  });

  const themeFontDisplayStyle = new Control_radio({
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
      theme.render.font.display.style();
      data.save();
    }
  });

  const themeFontUiName = new Control_textReset({
    object: state.get.current(),
    path: 'theme.font.ui.name',
    id: 'theme-font-ui-name',
    value: state.get.current().theme.font.ui.name,
    defaultValue: state.get.default().theme.font.ui.name,
    placeholder: 'Google font name',
    labelText: 'User interface font',
    action: () => {
      theme.render.font.delay.ui();
      data.save();
    }
  });

  const themeFontUiNameHelper = new Control_helperText({
    text: [
      'Use a <a href="https://fonts.google.com/" target="_blank">Google Font</a> to customise the Bookmark name, URL and form elements.',
      'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Roboto", "Source Sans Pro" or "Noto Sans"',
      'Clear the field to use the default font "Open Sans".'
    ]
  });

  const themeFontUiWeight = new Control_slider({
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
      theme.render.font.ui.weight();
      data.save();
    }
  });

  const themeFontUiWeightLight = new Button({
    text: 'Light',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.ui.weight = fontWeight.light;
      theme.render.font.ui.weight();
      themeFontUiWeight.update();
      data.save();
    }
  });

  const themeFontUiWeightRegular = new Button({
    text: 'Regular',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.ui.weight = fontWeight.regular;
      theme.render.font.ui.weight();
      themeFontUiWeight.update();
      data.save();
    }
  });

  const themeFontUiWeightBold = new Button({
    text: 'Bold',
    style: ['line'],
    func: () => {
      state.get.current().theme.font.ui.weight = fontWeight.bold;
      theme.render.font.ui.weight();
      themeFontUiWeight.update();
      data.save();
    }
  });

  const themeFontUiWeighHelper = new Control_helperText({
    text: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
  });

  const themeFontUiStyle = new Control_radio({
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
      theme.render.font.ui.style();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeFontDisplayName.wrap(),
      themeFontDisplayNameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeFontDisplayWeight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeFontDisplayWeightLight.button,
                      themeFontDisplayWeightRegular.button,
                      themeFontDisplayWeightBold.button
                    ]
                  })
                ]
              }),
              form.wrap({
                children: [
                  themeFontDisplayStyle.inputButton()
                ]
              }),
              themeFontDisplayWeighHelper.wrap()
            ]
          })
        ]
      }),
      node('hr'),
      themeFontUiName.wrap(),
      themeFontUiNameHelper.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeFontUiWeight.wrap(),
              form.wrap({
                children: [
                  form.group({
                    children: [
                      themeFontUiWeightLight.button,
                      themeFontUiWeightRegular.button,
                      themeFontUiWeightBold.button
                    ]
                  })
                ]
              }),
              form.wrap({
                children: [
                  themeFontUiStyle.inputButton()
                ]
              }),
              themeFontUiWeighHelper.wrap()
            ]
          })
        ]
      }),
    ])
  );

};

themeSetting.bookmark = (parent) => {

  const themeBookmarkShadowColorBy = new Control_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-bookmark-shadow-color-type-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
      { id: 'theme-bookmark-shadow-color-type-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
    ],
    groupName: 'theme-bookmark-shadow-color-type',
    path: 'theme.bookmark.shadow.color.type',
    action: () => {
      theme.render.class();
      themeBookmarkShadowColorByCollapse.update();
      data.save();
    }
  });

  const themeBookmarkShadowColor = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.bookmark.shadow.color',
    id: 'theme-bookmark-shadow-color',
    labelText: 'Bookmark shadow colour',
    srOnly: true,
    defaultValue: state.get.default().theme.bookmark.shadow.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.bookmark.style();
      data.save();
    }
  });

  const themeBookmarkShadowOpacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.bookmark.shadow.opacity',
    id: 'theme-bookmark-shadow-opacity',
    labelText: 'Bookmark shadow opacity',
    value: state.get.current().theme.bookmark.shadow.opacity,
    defaultValue: state.get.default().theme.bookmark.shadow.opacity,
    min: state.get.minMax().theme.bookmark.shadow.opacity.min,
    max: state.get.minMax().theme.bookmark.shadow.opacity.max,
    action: () => {
      theme.render.bookmark.style();
      data.save();
    }
  });

  const themeBookmarkShadowColorByCustonArea = node('div', [
    node('hr'),
    themeBookmarkShadowColor.wrap(),
  ]);

  const themeBookmarkShadowColorByCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeBookmarkShadowColorBy,
    target: [{
      id: themeBookmarkShadowColorBy.radioSet[1].radio.value,
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
      themeBookmarkShadowColorBy.wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              themeBookmarkShadowColorByCollapse.collapse(),
              node('hr'),
              themeBookmarkShadowOpacity.wrap()
            ]
          })
        ]
      })
    ])
  );

};

themeSetting.shade = (parent) => {

  const themeShadeOpacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.shade.opacity',
    id: 'theme.shade.opacity',
    labelText: 'Shade opacity',
    value: state.get.current().theme.shade.opacity,
    defaultValue: state.get.default().theme.shade.opacity,
    min: state.get.minMax().theme.shade.opacity.min,
    max: state.get.minMax().theme.shade.opacity.max,
    action: () => {
      theme.render.shade.opacity();
      data.save();
    }
  });

  parent.appendChild(
    node('div', [
      themeShadeOpacity.wrap()
    ])
  );

};

themeSetting.background = (parent) => {

  const themeBackgroundType = new Control_radio({
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
      theme.render.background.type();
      themeBackgroundCollapse.update();
      toolbar.render.style.update();
      updateDisabled();
      updateVideoPlayState();
      data.save();
    }
  });

  const themeBackgroundColorMixer = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.background.color',
    id: 'theme-background-color',
    labelText: 'Background colour',
    defaultValue: state.get.default().theme.background.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.color();
      toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientAngle = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.gradient.angle',
    id: 'theme-background-gradient-angle',
    labelText: 'Background gradient angle',
    value: state.get.current().theme.background.gradient.angle,
    defaultValue: state.get.default().theme.background.gradient.angle,
    min: state.get.minMax().theme.background.gradient.angle.min,
    max: state.get.minMax().theme.background.gradient.angle.max,
    action: () => {
      theme.render.background.gradient();
      toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientStartMixer = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.background.gradient.start',
    id: 'theme-background-gradient-start',
    labelText: 'Background gradient start',
    defaultValue: state.get.default().theme.background.gradient.start.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.gradient();
      toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientEndMixer = new Control_colorMixer({
    object: state.get.current(),
    path: 'theme.background.gradient.end',
    id: 'theme-background-gradient-end',
    labelText: 'Background gradient end',
    defaultValue: state.get.default().theme.background.gradient.end.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.gradient();
      toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundImageUrl = new Control_text({
    object: state.get.current(),
    path: 'theme.background.image.url',
    id: 'theme-background-image-url',
    value: state.get.current().theme.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    action: () => {
      theme.render.background.image.set();
      data.save();
    }
  });

  const themeBackgroundImageUrlHelper = new Control_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const themeBackgroundImageBlur = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.image.blur',
    id: 'theme-background-image-blur',
    labelText: 'Background image blur',
    value: state.get.current().theme.background.image.blur,
    defaultValue: state.get.default().theme.background.image.blur,
    min: state.get.minMax().theme.background.image.blur.min,
    max: state.get.minMax().theme.background.image.blur.max,
    action: () => {
      theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundImageScale = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.image.scale',
    id: 'theme-background-image-scale',
    labelText: 'Background image scale',
    value: state.get.current().theme.background.image.scale,
    defaultValue: state.get.default().theme.background.image.scale,
    min: state.get.minMax().theme.background.image.scale.min,
    max: state.get.minMax().theme.background.image.scale.max,
    action: () => {
      theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundImageOpacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.image.opacity',
    id: 'theme-background-image-opacity',
    labelText: 'Background image opacity',
    value: state.get.current().theme.background.image.opacity,
    defaultValue: state.get.default().theme.background.image.opacity,
    min: state.get.minMax().theme.background.image.opacity.min,
    max: state.get.minMax().theme.background.image.opacity.max,
    action: () => {
      theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundVideoUrl = new Control_text({
    object: state.get.current(),
    path: 'theme.background.video.url',
    id: 'theme-background-video-url',
    value: state.get.current().theme.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    action: () => {
      theme.render.background.video.remove();
      theme.render.background.video.set();
      theme.render.background.video.add();
      data.save();
    }
  });

  const themeBackgroundVideoUrlHelper = new Control_helperText({
    text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const themeBackgroundVideoBlur = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.video.blur',
    id: 'theme-background-video-blur',
    labelText: 'Background video blur',
    value: state.get.current().theme.background.video.blur,
    defaultValue: state.get.default().theme.background.video.blur,
    min: state.get.minMax().theme.background.video.blur.min,
    max: state.get.minMax().theme.background.video.blur.max,
    action: () => {
      theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundVideoScale = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.video.scale',
    id: 'theme-background-video-scale',
    labelText: 'Background video scale',
    value: state.get.current().theme.background.video.scale,
    defaultValue: state.get.default().theme.background.video.scale,
    min: state.get.minMax().theme.background.video.scale.min,
    max: state.get.minMax().theme.background.video.scale.max,
    action: () => {
      theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundVideoOpacity = new Control_slider({
    object: state.get.current(),
    path: 'theme.background.video.opacity',
    id: 'theme-background-video-opacity',
    labelText: 'Background video opacity',
    value: state.get.current().theme.background.video.opacity,
    defaultValue: state.get.default().theme.background.video.opacity,
    min: state.get.minMax().theme.background.video.opacity.min,
    max: state.get.minMax().theme.background.video.opacity.max,
    action: () => {
      theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundColorArea = node('div', [
    node('hr'),
    themeBackgroundColorMixer.wrap()
  ]);

  const themeBackgroundGradientArea = node('div', [
    node('hr'),
    themeBackgroundGradientAngle.wrap(),
    node('hr'),
    themeBackgroundGradientStartMixer.wrap(),
    node('hr'),
    themeBackgroundGradientEndMixer.wrap()
  ]);

  const themeBackgroundImageArea = node('div', [
    node('hr'),
    themeBackgroundImageUrl.wrap(),
    themeBackgroundImageUrlHelper.wrap(),
    node('hr'),
    themeBackgroundImageBlur.wrap(),
    themeBackgroundImageScale.wrap(),
    themeBackgroundImageOpacity.wrap()
  ]);

  const themeBackgroundVideoArea = node('div', [
    node('hr'),
    themeBackgroundVideoUrl.wrap(),
    themeBackgroundVideoUrlHelper.wrap(),
    node('hr'),
    themeBackgroundVideoBlur.wrap(),
    themeBackgroundVideoScale.wrap(),
    themeBackgroundVideoOpacity.wrap()
  ]);

  const themeBackgroundCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeBackgroundType,
    target: [{
      id: themeBackgroundType.radioSet[2].radio.value,
      content: themeBackgroundColorArea
    }, {
      id: themeBackgroundType.radioSet[3].radio.value,
      content: themeBackgroundGradientArea
    }, {
      id: themeBackgroundType.radioSet[4].radio.value,
      content: themeBackgroundImageArea
    }, {
      id: themeBackgroundType.radioSet[5].radio.value,
      content: themeBackgroundVideoArea
    }]
  });

  themeBackgroundCollapse.update();

  parent.appendChild(
    node('div', [
      themeBackgroundType.wrap(),
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

  const updateVideoPlayState = () => {
    if (themeBackgroundType.value() === 'video') {
      theme.render.background.video.element.play();
    } else {
      theme.render.background.video.element.pause();
    };
  };

  const updateDisabled = () => {
    switch (state.get.current().theme.background.type) {
      case 'theme':
      case 'accent':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'color':
        themeBackgroundColorMixer.enable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'gradient':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.enable();
        themeBackgroundGradientStartMixer.enable();
        themeBackgroundGradientEndMixer.enable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'image':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.enable();
        themeBackgroundImageUrlHelper.enable();
        themeBackgroundImageBlur.enable();
        themeBackgroundImageScale.enable();
        themeBackgroundImageOpacity.enable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'video':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.enable();
        themeBackgroundVideoUrlHelper.enable();
        themeBackgroundVideoBlur.enable();
        themeBackgroundVideoScale.enable();
        themeBackgroundVideoOpacity.enable();
        break;
    };
  };

  updateDisabled();

};

export { themeSetting }
