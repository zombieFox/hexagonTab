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
import { link } from '../../utilities/link.js';
import { ControlModule_text, ControlModule_inputButton, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color } from '../../control.js';

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
      form.render.wrap([
        form.render.helper({ text: 'Backgrounds, Bookmarks and Modals use shades from the left.' }),
        form.render.helper({ text: 'Text and form elements use shades from the right.' }),
        form.render.helper({ text: 'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.' }),
      ]),
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

  return formGroup
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
      updateDisabled();
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

  menuContentItem.appendChild(menu.render.component.item.form([
    form.render.wrap([
      form.render.label({
        text: 'Bookmark shadow colour'
      })
    ]),
    themeBookmarkShadowColorBy.wrap(),
    form.render.wrap([
      form.render.indent([
        node('hr'),
        themeBookmarkShadowColor.wrap(),
        node('hr'),
        themeBookmarkShadowOpacity.wrap()
      ])
    ])
  ]));

  const updateDisabled = () => {
    switch (state.get.current().theme.bookmark.shadow.color.type) {
      case 'theme':
        themeBookmarkShadowColor.disable();
        break;

      case 'custom':
        themeBookmarkShadowColor.enable();
        break;
    };
  };

  updateDisabled();

  return menuContentItem;
};

menuContentTheme.background = function() {
  const menuContentItem = node('div|id:menu-content-item-background,class:menu-content-item');

  menuContentItem.appendChild(menu.render.component.item.header('Background'));

  const themeBackgroundType = new ControlModule_radio({
    object: state.get.current(),
    radioGroup: [
      { id: 'theme-background-type-theme', labelText: 'Background by theme', description: 'Use the Background colour defined by the Theme.', value: 'theme' },
      { id: 'theme-background-type-color', labelText: 'Background colour', description: false, value: 'color' },
      { id: 'theme-background-type-gradient', labelText: 'Background gradient', description: false, value: 'gradient' },
      { id: 'theme-background-type-image', labelText: 'Background image', description: false, value: 'image' }
    ],
    groupName: 'theme-background-type',
    path: 'theme.background.type',
    action: () => {
      theme.render.background.type();
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
      theme.render.background.style();
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
      theme.render.background.style();
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
      theme.render.background.style();
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
      theme.render.background.style();
      data.save();
    }
  });

  const themeIackgroundImageUrl = new ControlModule_text({
    object: state.get.current(),
    path: 'theme.background.image.url',
    id: 'theme-background-image-url',
    value: state.get.current().theme.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    action: () => {
      theme.render.background.style();
      data.save();
    }
  });

  const themeIackgroundImageBlur = new ControlModule_slider({
    object: state.get.current(),
    path: 'theme.background.image.blur',
    id: 'theme-background-image-blur',
    labelText: 'Background image blur',
    value: state.get.current().theme.background.image.blur,
    defaultValue: state.get.default().theme.background.image.blur,
    min: state.get.minMax().theme.background.image.blur.min,
    max: state.get.minMax().theme.background.image.blur.max,
    action: () => {
      theme.render.background.style();
      data.save();
    }
  });

  const themeIackgroundImageScale = new ControlModule_slider({
    object: state.get.current(),
    path: 'theme.background.image.scale',
    id: 'theme-background-image-scale',
    labelText: 'Background image scale',
    value: state.get.current().theme.background.image.scale,
    defaultValue: state.get.default().theme.background.image.scale,
    min: state.get.minMax().theme.background.image.scale.min,
    max: state.get.minMax().theme.background.image.scale.max,
    action: () => {
      theme.render.background.style();
      data.save();
    }
  });

  const themeIackgroundImageOpacity = new ControlModule_slider({
    object: state.get.current(),
    path: 'theme.background.image.opacity',
    id: 'theme-background-image-opacity',
    labelText: 'Background image opacity',
    value: state.get.current().theme.background.image.opacity,
    defaultValue: state.get.default().theme.background.image.opacity,
    min: state.get.minMax().theme.background.image.opacity.min,
    max: state.get.minMax().theme.background.image.opacity.max,
    action: () => {
      theme.render.background.style();
      data.save();
    }
  });

  menuContentItem.appendChild(menu.render.component.item.form([
    themeBackgroundType.wrap(),
    form.render.wrap([
      form.render.indent([
        node('hr'),
        themeBackgroundColorMixer.wrap(),
        node('hr'),
        themeBackgroundGradientAngle.wrap(),
        node('hr'),
        themeBackgroundGradientStartMixer.wrap(),
        node('hr'),
        themeBackgroundGradientEndMixer.wrap(),
        node('hr'),
        themeIackgroundImageUrl.wrap(),
        node('hr'),
        themeIackgroundImageBlur.wrap(),
        themeIackgroundImageScale.wrap(),
        themeIackgroundImageOpacity.wrap()
      ])
    ])
  ]));

  const updateDisabled = () => {
    switch (state.get.current().theme.background.type) {
      case 'theme':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeIackgroundImageUrl.disable();
        themeIackgroundImageBlur.disable();
        themeIackgroundImageScale.disable();
        themeIackgroundImageOpacity.disable();
        break;

      case 'color':
        themeBackgroundColorMixer.enable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeIackgroundImageUrl.disable();
        themeIackgroundImageBlur.disable();
        themeIackgroundImageScale.disable();
        themeIackgroundImageOpacity.disable();
        break;

      case 'gradient':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.enable();
        themeBackgroundGradientStartMixer.enable();
        themeBackgroundGradientEndMixer.enable();
        themeIackgroundImageUrl.disable();
        themeIackgroundImageBlur.disable();
        themeIackgroundImageScale.disable();
        themeIackgroundImageOpacity.disable();
        break;

      case 'image':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeIackgroundImageUrl.enable();
        themeIackgroundImageBlur.enable();
        themeIackgroundImageScale.enable();
        themeIackgroundImageOpacity.enable();
        break;
    };
  };

  updateDisabled();

  return menuContentItem;
};

export { menuContentTheme }
