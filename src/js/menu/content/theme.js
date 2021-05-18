import { state } from '../../state.js';
import { data } from '../../data.js';
import { grid } from '../../grid.js';
import { menu } from '../../menu.js';
import { theme } from '../../theme.js';
import { bookmark } from '../../bookmark.js';
import { modal } from '../../modal.js';
import { version } from '../../version.js';
import { node } from '../../utilities/node.js';
import { complexNode } from '../../utilities/complexNode.js';
import { icon } from '../../utilities/icon.js';
import { logo } from '../../utilities/logo.js';
import { form } from '../../utilities/form.js';
import { Button } from '../../utilities/button.js';
import { Collapse } from '../../utilities/collapse.js';
import { link } from '../../utilities/link.js';
import { ControlModul_helperText, ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text } from '../../control.js';

const menuContentTheme = {};

menuContentTheme.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Style'));

  const themeStyle = new ControlModule_radio({
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

  menuContentItem.appendChild(menu.render.component.item.form([
    themeStyle.wrap()
  ]));

  return menuContentItem;
};

menuContentTheme.color = function() {
  const menuContentItem = node('div|id:menu-content-item-color,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Colour'));

  const shadesHelper = new ControlModul_helperText({
    text: ['Backgrounds, Bookmarks and Modals use shades from the left.', 'Text and form elements use shades from the right.', 'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.']
  });

  const themeColorMixer = new ControlModule_colorMixer({
    object: state.get.current(),
    path: 'theme.color',
    id: 'theme-color',
    labelText: 'Primary colour',
    defaultValue: state.get.default().theme.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.mod.color.generated();
      theme.render.color.shade();
      data.save();
    }
  });

  const themeColorContrastLight = new ControlModule_slider({
    object: state.get.current(),
    path: 'theme.color.contrast.light',
    id: 'theme-color-contrast-light',
    labelText: 'Light shade contrast',
    value: state.get.current().theme.color.contrast.light,
    defaultValue: state.get.default().theme.color.contrast.light,
    min: state.get.minMax().theme.color.contrast.light.min,
    max: state.get.minMax().theme.color.contrast.light.max,
    action: () => {
      theme.mod.color.generated();
      theme.render.color.shade();
      data.save();
    }
  });

  const themeColorContrastDark = new ControlModule_slider({
    object: state.get.current(),
    path: 'theme.color.contrast.dark',
    id: 'theme-color-contrast-dark',
    labelText: 'Dark shade contrast',
    value: state.get.current().theme.color.contrast.dark,
    defaultValue: state.get.default().theme.color.contrast.dark,
    min: state.get.minMax().theme.color.contrast.dark.min,
    max: state.get.minMax().theme.color.contrast.dark.max,
    action: () => {
      theme.mod.color.generated();
      theme.render.color.shade();
      data.save();
    }
  });

  menuContentItem.appendChild(
    menu.render.component.item.form([
      form.render.sticky([
        form.render.wrap([
          menuContentTheme.shades()
        ])
      ]),
      shadesHelper.wrap(),
      node('hr'),
      themeColorMixer.wrap(),
      form.render.wrap([
        form.render.indent([
          node('hr'),
          themeColorContrastLight.wrap(),
          themeColorContrastDark.wrap()
        ])
      ])
    ])
  );

  return menuContentItem;
};

menuContentTheme.shades = function() {
  const formGroup = node('div|class:form-group form-group-block form-group-border form-group-border-theme-color');

  for (var i = 10; i >= 1; i--) {
    let count = i;
    if (count < 10) {
      count = '0' + count;
    };
    formGroup.appendChild(
      node('div|class:form-group-text form-group-text-borderless',
        node('div|class:theme-color-box theme-color-negative-' + count + '')
      )
    );
  };


  formGroup.appendChild(
    node('div|class:form-group-text form-group-text-borderless form-group-item-small',
      node('div|class:theme-color-box theme-color')
    )
  );

  for (var i = 1; i <= 10; i++) {
    let count = i;
    if (count < 10) {
      count = '0' + count;
    };
    formGroup.appendChild(
      node('div|class:form-group-text form-group-text-borderless',
        node('div|class:theme-color-box theme-color-positive-' + count + '')
      )
    );
  };

  return formGroup;
};

menuContentTheme.accent = function() {
  const menuContentItem = node('div|id:menu-content-item-accent,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Accent'));

  const themeAccentMixer = new ControlModule_colorMixer({
    object: state.get.current(),
    path: 'theme.accent',
    id: 'theme-accent',
    labelText: 'Accent color',
    defaultValue: state.get.default().theme.accent.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.accent.color();
      data.save();
    }
  });

  menuContentItem.appendChild(
    menu.render.component.item.form([
      themeAccentMixer.wrap()
    ])
  );

  return menuContentItem;
};

menuContentTheme.bookmark = function() {
  const menuContentItem = node('div|id:menu-content-item-bookmark,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Bookmark'));

  const themeBookmarkShadowColorBy = new ControlModule_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-bookmark-shadow-color-type-theme', labelText: 'Theme colour', description: 'Use the Accent colour defined by the Theme.', value: 'theme' },
      { id: 'theme-bookmark-shadow-color-type-custom', labelText: 'Custom colour', description: 'Override the Theme accent colour.', value: 'custom' }
    ],
    groupName: 'theme-bookmark-shadow-color-type',
    path: 'theme.bookmark.shadow.color.type',
    action: () => {
      theme.render.class();
      themeBookmarkShadowColorByCollapse.update();
      data.save();
    }
  });

  const themeBookmarkShadowColor = new ControlModule_colorMixer({
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

  const themeBookmarkShadowOpacity = new ControlModule_slider({
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

  menuContentItem.appendChild(menu.render.component.item.form([
    form.render.wrap([
      form.render.label({
        text: 'Bookmark shadow colour'
      })
    ]),
    themeBookmarkShadowColorBy.wrap(),
    form.render.wrap([
      form.render.indent([
        themeBookmarkShadowColorByCollapse.collapse(),
        node('hr'),
        themeBookmarkShadowOpacity.wrap()
      ])
    ])
  ]));

  return menuContentItem;
};

menuContentTheme.background = function() {
  const menuContentItem = node('div|id:menu-content-item-background,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Background'));

  const themeBackgroundType = new ControlModule_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-background-type-theme', labelText: 'Background by Theme', description: 'Use the Background colour defined by the Theme.', value: 'theme' },
      { id: 'theme-background-type-accent', labelText: 'Background by Accent', description: 'Use the Accent colour for the Background.', value: 'accent' },
      { id: 'theme-background-type-color', labelText: 'Background custom colour', value: 'color' },
      { id: 'theme-background-type-gradient', labelText: 'Background gradient', value: 'gradient' },
      { id: 'theme-background-type-image', labelText: 'Background image', value: 'image' },
      { id: 'theme-background-type-video', labelText: 'Background video', value: 'video' }
    ],
    groupName: 'theme-background-type',
    path: 'theme.background.type',
    action: () => {
      theme.render.background.type();
      themeBackgroundCollapse.update();
      updateDisabled();
      data.save();
    }
  });

  const themeBackgroundColorMixer = new ControlModule_colorMixer({
    object: state.get.current(),
    path: 'theme.background.color',
    id: 'theme-background-color',
    labelText: 'Background colour',
    defaultValue: state.get.default().theme.background.color.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.color();
      data.save();
    }
  });

  const themeBackgroundGradientAngle = new ControlModule_slider({
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
      data.save();
    }
  });

  const themeBackgroundGradientStartMixer = new ControlModule_colorMixer({
    object: state.get.current(),
    path: 'theme.background.gradient.start',
    id: 'theme-background-gradient-start',
    labelText: 'Background gradient colour 1',
    defaultValue: state.get.default().theme.background.gradient.start.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.gradient();
      data.save();
    }
  });

  const themeBackgroundGradientEndMixer = new ControlModule_colorMixer({
    object: state.get.current(),
    path: 'theme.background.gradient.end',
    id: 'theme-background-gradient-end',
    labelText: 'Background gradient colour 2',
    defaultValue: state.get.default().theme.background.gradient.end.rgb,
    minMaxObject: state.get.minMax(),
    action: () => {
      theme.render.background.gradient();
      data.save();
    }
  });

  const themeBackgroundImageUrl = new ControlModule_text({
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

  const themeBackgroundImageUrlHelper = new ControlModul_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const themeBackgroundImageBlur = new ControlModule_slider({
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

  const themeBackgroundImageScale = new ControlModule_slider({
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

  const themeBackgroundImageOpacity = new ControlModule_slider({
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

  const themeBackgroundVideoUrl = new ControlModule_text({
    object: state.get.current(),
    path: 'theme.background.video.url',
    id: 'theme-background-video-url',
    value: state.get.current().theme.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    action: () => {
      theme.render.background.video.remove();
      theme.render.background.video.set();
      data.save();
    }
  });

  const themeBackgroundVideoUrlHelper = new ControlModul_helperText({
    text: ['Background video only supports a direct URL to a video file.', 'Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const themeBackgroundVideoBlur = new ControlModule_slider({
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

  const themeBackgroundVideoScale = new ControlModule_slider({
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

  const themeBackgroundVideoOpacity = new ControlModule_slider({
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

  menuContentItem.appendChild(menu.render.component.item.form([
    themeBackgroundType.wrap(),
    form.render.wrap([
      form.render.indent([
        themeBackgroundCollapse.collapse()
      ])
    ])
  ]));

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

  return menuContentItem;
};

export { menuContentTheme }
