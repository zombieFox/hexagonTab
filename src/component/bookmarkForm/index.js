import { bookmark } from '../bookmark';
import { bookmarkDefault } from '../bookmarkDefault';
import { bookmarkMinMax } from '../bookmarkMinMax';

import * as form from '../form';

import { Button } from '../button';
import { Suggest } from '../suggest';
import { Collapse } from '../collapse';
import { Tab } from '../tab';
import { BookmarkPreview } from '../bookmarkPreview';
import { Alert } from '../alert';

import { Control_helperText } from '../control/helperText';
import { Control_inputButton } from '../control/inputButton';
import { Control_groupText } from '../control/groupText';
import { Control_radio } from '../control/radio';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_color } from '../control/color';
import { Control_text } from '../control/text';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';

import './index.css';

export const BookmarkForm = function({
  bookmarkData = false
} = {}) {

  this.element = {
    form: node('form|class:bookmark-form'),
    main: node('div|class:bookmark-form-main'),
    aside: node('div|class:bookmark-form-aside')
  };

  this.control = {};

  this.control.bookmark = {
    url: new Control_text({
      object: bookmarkData.link,
      path: 'url',
      id: 'url',
      value: bookmarkData.link.url,
      placeholder: 'https://www.example.com/',
      labelText: 'URL'
    }),
    display: {
      direction: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'display-direction-vertical', labelText: 'Vertical', description: 'Stack the Visual Element and Name one above the other.', value: 'vertical' },
          { id: 'display-direction-horizontal', labelText: 'Horizontal', description: 'Arrange the Visual Element and Name side by side.', value: 'horizontal' }
        ],
        groupName: 'display-direction',
        path: 'display.direction',
        action: () => {
          this.disable();
          this.preview.update.style(bookmarkData);
        }
      }),
      order: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'display-order-visual-name', labelText: 'Visual element then name', description: 'Place the Visual Element before the Name.', value: 'visual-name' },
          { id: 'display-order-name-visual', labelText: 'Name then visual element', description: 'Place the Name before the Visual Element.', value: 'name-visual' }
        ],
        groupName: 'display-order',
        path: 'display.order',
        action: () => {
          this.disable();
          this.preview.update.style(bookmarkData);
        }
      }),
      rotate: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'display.rotate',
        id: 'display-rotate',
        labelText: 'Rotate',
        value: bookmarkData.link.display.rotate,
        defaultValue: bookmarkDefault.display.rotate,
        min: bookmarkMinMax.display.rotate.min,
        max: bookmarkMinMax.display.rotate.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      translate: {
        label: form.label({
          text: 'Adjust Visual Element position',
          noPadding: true
        }),
        x: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.translate.x',
          id: 'display-translate-x',
          labelText: 'Horizontal',
          value: bookmarkData.link.display.translate.x,
          defaultValue: bookmarkDefault.display.translate.x,
          min: bookmarkMinMax.display.translate.x.min,
          max: bookmarkMinMax.display.translate.x.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        }),
        y: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.translate.y',
          id: 'display-translate-y',
          labelText: 'Vertical',
          value: bookmarkData.link.display.translate.y,
          defaultValue: bookmarkDefault.display.translate.y,
          min: bookmarkMinMax.display.translate.y.min,
          max: bookmarkMinMax.display.translate.y.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        })
      },
      gutter: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'display.gutter',
        id: 'display-gutter',
        labelText: 'Gutter',
        value: bookmarkData.link.display.gutter,
        defaultValue: bookmarkDefault.display.gutter,
        min: bookmarkMinMax.display.gutter.min,
        max: bookmarkMinMax.display.gutter.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      visual: {
        show: new Control_checkbox({
          object: bookmarkData.link,
          path: 'display.visual.show',
          id: 'display-visual-show',
          labelText: 'Show Visual Element',
          description: 'Display Letters, Icon or an Image on this Bookmark hexagon.',
          action: () => {
            this.disable();
            this.collapse.display.visual.update();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        type: new Control_radio({
          object: bookmarkData.link,
          radioGroup: [
            { id: 'display-visual-type-letter', labelText: 'Letter', value: 'letter' },
            { id: 'display-visual-type-icon', labelText: 'Icon', value: 'icon' },
            { id: 'display-visual-type-image', labelText: 'Image', value: 'image' }
          ],
          groupName: 'display-visual-type',
          path: 'display.visual.type',
          action: () => {
            this.disable();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        size: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.visual.size',
          id: 'display-visual-size',
          labelText: 'Visual size',
          value: bookmarkData.link.display.visual.size,
          defaultValue: bookmarkDefault.display.visual.size,
          min: bookmarkMinMax.display.visual.size.min,
          max: bookmarkMinMax.display.visual.size.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        }),
        letter: {
          text: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.letter.text',
            id: 'display-visual-letter-text',
            value: bookmarkData.link.display.visual.letter.text,
            placeholder: 'E',
            labelText: 'Bookmark letter',
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          })
        },
        icon: {
          text: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.icon.label',
            id: 'display-visual-icon-label',
            value: bookmarkData.link.display.visual.icon.label,
            placeholder: 'FontAwesome Brands or Icons',
            labelText: 'Bookmark icon',
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          }),
          preview: new Control_groupText({
            classList: ['bookmark-form-text-icon', 'form-group-item-small']
          }),
          remove: new Button({
            text: 'Remove icon',
            srOnly: true,
            style: ['line'],
            iconName: 'cross',
            classList: ['form-group-item-small'],
            func: () => {
              bookmarkData.link.display.visual.icon.label = '';
              bookmarkData.link.display.visual.icon.prefix = '';
              bookmarkData.link.display.visual.icon.name = '';
              this.update();
              this.preview.update.assemble(bookmarkData);
            }
          })
        },
        image: {
          url: new Control_text({
            object: bookmarkData.link,
            path: 'display.visual.image.url',
            id: 'display-visual-image-url',
            value: bookmarkData.link.display.visual.image.url,
            placeholder: 'https://www.example.com/image.jpg',
            labelText: 'Bookmark image',
            srOnly: true,
            action: () => {
              this.preview.update.assemble(bookmarkData);
            }
          })
        }
      },
      name: {
        show: new Control_checkbox({
          object: bookmarkData.link,
          path: 'display.name.show',
          id: 'display-name-show',
          labelText: 'Show Name',
          action: () => {
            this.disable();
            this.collapse.display.name.update();
            this.preview.update.assemble(bookmarkData);
          }
        }),
        text: new Control_text({
          object: bookmarkData.link,
          path: 'display.name.text',
          id: 'display-name-text',
          value: bookmarkData.link.display.name.text,
          placeholder: 'Example',
          labelText: 'Bookmark name',
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        }),
        size: new Control_sliderSlim({
          object: bookmarkData.link,
          path: 'display.name.size',
          id: 'display-name-size',
          labelText: 'Name size',
          value: bookmarkData.link.display.name.size,
          defaultValue: bookmarkDefault.display.name.size,
          min: bookmarkMinMax.display.name.size.min,
          max: bookmarkMinMax.display.name.size.max,
          action: () => {
            this.preview.update.style(bookmarkData);
          }
        })
      }
    },
    accent: {
      by: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'accent-by-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
          { id: 'accent-by-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
        ],
        groupName: 'accent-by',
        path: 'accent.by',
        action: () => {
          this.collapse.accent.update();
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      color: new Control_colorMixer({
        object: bookmarkData.link,
        path: 'accent',
        id: 'accent',
        labelText: 'Accent',
        srOnly: true,
        defaultValue: bookmarkDefault.accent.rgb,
        minMaxObject: bookmarkMinMax,
        randomColor: true,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      })
    },
    color: {
      by: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'color-by-theme', labelText: 'Theme colour', description: 'Use the Colour defined by the Theme.', value: 'theme' },
          { id: 'color-by-custom', labelText: 'Custom colour', description: 'Override the Theme colour.', value: 'custom' }
        ],
        groupName: 'color-by',
        path: 'color.by',
        action: () => {
          this.collapse.color.update();
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      color: new Control_colorMixer({
        object: bookmarkData.link,
        path: 'color',
        id: 'color',
        labelText: 'Colour',
        srOnly: true,
        defaultValue: bookmarkDefault.color.rgb,
        minMaxObject: bookmarkMinMax,
        randomColor: true,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      })
    },
    background: {
      show: new Control_checkbox({
        object: bookmarkData.link,
        path: 'background.show',
        id: 'background-show',
        labelText: 'Show background',
        description: 'Display an Image or video Background on this Bookmark tile.',
        action: () => {
          this.disable();
          this.collapse.background.update();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      type: new Control_radio({
        object: bookmarkData.link,
        radioGroup: [
          { id: 'background-type-image', labelText: 'Image', value: 'image' },
          { id: 'background-type-video', labelText: 'Video', value: 'video' }
        ],
        groupName: 'background-type',
        path: 'background.type',
        action: () => {
          this.disable();
          this.preview.update.assemble(bookmarkData);
        }
      }),
      opacity: new Control_sliderSlim({
        object: bookmarkData.link,
        path: 'background.opacity',
        id: 'background-opacity',
        labelText: 'Opacity',
        value: bookmarkData.link.background.opacity,
        defaultValue: bookmarkDefault.background.opacity,
        min: bookmarkMinMax.background.opacity.min,
        max: bookmarkMinMax.background.opacity.max,
        action: () => {
          this.preview.update.style(bookmarkData);
        }
      }),
      image: {
        url: new Control_text({
          object: bookmarkData.link,
          path: 'background.image.url',
          id: 'background-image-url',
          value: bookmarkData.link.background.image.url,
          placeholder: 'https://www.example.com/image.jpg',
          labelText: 'Background image URL',
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        })
      },
      video: {
        url: new Control_text({
          object: bookmarkData.link,
          path: 'background.video.url',
          id: 'background-video-url',
          value: bookmarkData.link.background.video.url,
          placeholder: 'https://www.example.com/video.mp4',
          labelText: 'Background video URL',
          srOnly: true,
          action: () => {
            this.preview.update.assemble(bookmarkData);
          }
        })
      }
    }
  };

  this.control.propagate = {};

  this.control.propagate.visual = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'display',
    id: 'apply-to-all-display',
    labelText: 'Apply "Show Visual Element" and "Show Name" to other Bookmarks',
    description: [
      'The Letter, Icon, Image and Name text will not be shared.',
      'Useful for hiding the Visual Elements or Names on all Bookmarks.'
    ]
  });

  this.control.propagate.visualAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.visual.wrap()]
  });

  this.control.propagate.layout = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'layout',
    id: 'apply-to-all-layout',
    labelText: 'Apply Layout to other Bookmarks',
    description: [
      'When saved, apply the above Layout to all other Bookmarks.',
      'Only the Visual and Name size, Alignment, Order, Position and Gutter will be will be applied to all.'
    ]
  });

  this.control.propagate.layoutAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.layout.wrap()]
  });

  this.control.propagate.theme = new Control_checkbox({
    object: bookmarkData.propagate,
    path: 'theme',
    id: 'apply-to-all-theme',
    labelText: 'Apply Theme to other Bookmarks',
    description: [
      'When saved, apply the above Theme to all other Bookmarks.',
      'Only the Colour and Accent will be applied to all.'
    ]
  });

  this.control.propagate.themeAlert = new Alert({
    iconName: 'propagate',
    children: [this.control.propagate.theme.wrap()]
  });

  this.helper = {
    bookmark: {
      background: {
        image: new Control_helperText({
          text: ['Background image only supports a direct URL to an image file.']
        }),
        video: new Control_helperText({
          text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
        })
      }
    }
  };

  this.area = {};

  this.area.display = {};

  this.area.display.visual = () => {
    return node('div', [
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.display.visual.type.radioSet[0].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      this.control.bookmark.display.visual.letter.text.wrap()
                    ]
                  })
                ]
              }),
              this.control.bookmark.display.visual.type.radioSet[1].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      form.wrap({
                        children: [
                          this.control.bookmark.display.visual.icon.text.label,
                          form.group({
                            block: true,
                            children: [
                              this.control.bookmark.display.visual.icon.text.text,
                              this.control.bookmark.display.visual.icon.preview.groupText,
                              this.control.bookmark.display.visual.icon.remove.button
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              this.control.bookmark.display.visual.type.radioSet[2].wrap(),
              form.wrap({
                children: [
                  form.indent({
                    children: [
                      this.control.bookmark.display.visual.image.url.wrap()
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]);
  };

  this.area.display.name = () => {
    return node('div', [
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.display.name.text.wrap()
            ]
          })
        ]
      })
    ]);
  };

  this.area.accent = () => {
    return node('div', [
      this.control.bookmark.accent.color.wrap()
    ]);
  };

  this.area.color = () => {
    return node('div', [
      this.control.bookmark.color.color.wrap()
    ]);
  };

  this.area.visual = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Visual & Name|class:mb-2'),
            node('p:Display Letters, Icon, Image and a Name on this Bookmark tile.|class:mb-5')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.display.visual.show.wrap(),
                this.collapse.display.visual.collapse(),
                node('hr'),
                this.control.bookmark.display.name.show.wrap(),
                this.collapse.display.name.collapse(),
                node('hr'),
                this.control.propagate.visualAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.address = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Address|class:mb-2'),
            complexNode({ tag: 'p', text: 'Be sure to use the full URL and include <strong>"https://..."</strong>', complexText: true, attr: [{ key: 'class', value: 'mb-5' }] })
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.url.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.layout = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Layout|class:mb-2'),
            node('p:Change the Visual Element and Name position, scale and orientation.|class:mb-5')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.display.visual.size.wrap(),
                this.control.bookmark.display.name.size.wrap(),
                node('hr'),
                form.wrap({
                  children: [
                    this.control.bookmark.display.translate.label
                  ]
                }),
                this.control.bookmark.display.translate.x.wrap(),
                this.control.bookmark.display.translate.y.wrap(),
                this.control.bookmark.display.rotate.wrap(),
                node('hr'),
                this.control.bookmark.display.direction.wrap(),
                node('hr'),
                this.control.bookmark.display.order.wrap(),
                node('hr'),
                this.control.bookmark.display.gutter.wrap(),
                node('hr'),
                this.control.propagate.layoutAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.theme = () => {
    return form.fieldset({
      children: [
        form.wrap({
          children: [
            node('h2:Theme|class:mb-2'),
            node('p:Override the Theme and Accent colour.|class:mb-5')
          ]
        }),
        form.wrap({
          children: [
            form.indent({
              children: [
                this.control.bookmark.color.by.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.color.collapse()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.bookmark.accent.by.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.accent.collapse()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.bookmark.background.show.wrap(),
                form.wrap({
                  children: [
                    form.indent({
                      children: [
                        this.collapse.background.collapse()
                      ]
                    })
                  ]
                }),
                node('hr'),
                this.control.propagate.themeAlert.wrap()
              ]
            })
          ]
        })
      ]
    });
  };

  this.area.background = () => {
    return node('div', [
      this.control.bookmark.background.type.radioSet[0].wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.image.url.wrap(),
              this.helper.bookmark.background.image.wrap()
            ]
          })
        ]
      }),
      this.control.bookmark.background.type.radioSet[1].wrap(),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.video.url.wrap(),
              this.helper.bookmark.background.video.wrap()
            ]
          })
        ]
      }),
      form.wrap({
        children: [
          form.indent({
            children: [
              this.control.bookmark.background.opacity.wrap()
            ]
          })
        ]
      })
    ]);
  };

  this.collapse = {
    display: {
      visual: new Collapse({
        type: 'checkbox',
        checkbox: this.control.bookmark.display.visual.show,
        target: [{
          content: this.area.display.visual()
        }]
      }),
      name: new Collapse({
        type: 'checkbox',
        checkbox: this.control.bookmark.display.name.show,
        target: [{
          content: this.area.display.name()
        }]
      })
    },
    color: new Collapse({
      type: 'radio',
      radioGroup: this.control.bookmark.color.by,
      target: [{
        id: this.control.bookmark.color.by.radioSet[1].radio.value,
        content: this.area.color()
      }]
    }),
    accent: new Collapse({
      type: 'radio',
      radioGroup: this.control.bookmark.accent.by,
      target: [{
        id: this.control.bookmark.accent.by.radioSet[1].radio.value,
        content: this.area.accent()
      }]
    }),
    background: new Collapse({
      type: 'checkbox',
      checkbox: this.control.bookmark.background.show,
      target: [{
        content: this.area.background()
      }]
    })
  };

  this.tab = new Tab({
    group: [{
      tabText: 'Visual & Name',
      area: this.area.visual(),
      active: true
    }, {
      tabText: 'Address',
      area: this.area.address(),
      active: false
    }, {
      tabText: 'Layout',
      area: this.area.layout(),
      active: false
    }, {
      tabText: 'Theme',
      area: this.area.theme(),
      active: false
    }]
  });

  this.preview = new BookmarkPreview({ bookmarkData: bookmarkData });

  this.disable = () => {
    if (bookmarkData.link.display.visual.show) {
      this.control.bookmark.display.visual.type.enable();
      this.control.bookmark.display.visual.letter.text.enable();
      this.control.bookmark.display.visual.icon.text.enable();
      this.control.bookmark.display.visual.icon.preview.enable();
      this.control.bookmark.display.visual.icon.remove.enable();
      this.control.bookmark.display.visual.image.url.enable();
      this.control.bookmark.display.visual.size.enable();

      switch (bookmarkData.link.display.visual.type) {
        case 'letter':
          this.control.bookmark.display.visual.letter.text.enable();
          this.control.bookmark.display.visual.icon.text.disable();
          this.control.bookmark.display.visual.icon.preview.disable()
          this.control.bookmark.display.visual.icon.remove.disable();
          this.control.bookmark.display.visual.image.url.disable();
          break;

        case 'icon':
          this.control.bookmark.display.visual.letter.text.disable();
          this.control.bookmark.display.visual.icon.text.enable();
          this.control.bookmark.display.visual.icon.preview.enable();
          this.control.bookmark.display.visual.icon.remove.enable();
          this.control.bookmark.display.visual.image.url.disable();
          break;

        case 'image':
          this.control.bookmark.display.visual.letter.text.disable();
          this.control.bookmark.display.visual.icon.text.disable();
          this.control.bookmark.display.visual.icon.preview.disable()
          this.control.bookmark.display.visual.icon.remove.disable();
          this.control.bookmark.display.visual.image.url.enable();
          break;
      };
    } else {
      this.control.bookmark.display.visual.type.disable();
      this.control.bookmark.display.visual.letter.text.disable();
      this.control.bookmark.display.visual.icon.text.disable();
      this.control.bookmark.display.visual.icon.preview.disable();
      this.control.bookmark.display.visual.icon.remove.disable();
      this.control.bookmark.display.visual.image.url.disable();
      this.control.bookmark.display.visual.size.disable();
    };

    if (bookmarkData.link.display.name.show) {
      this.control.bookmark.display.name.text.enable();
      this.control.bookmark.display.name.size.enable();
    } else {
      this.control.bookmark.display.name.text.disable();
      this.control.bookmark.display.name.size.disable();
    };

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      this.control.bookmark.display.translate.x.enable();
      this.control.bookmark.display.translate.y.enable();
      this.control.bookmark.display.rotate.enable();
    } else {
      this.control.bookmark.display.translate.x.disable();
      this.control.bookmark.display.translate.y.disable();
      this.control.bookmark.display.rotate.disable();
    };

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.name.show) {
      this.control.bookmark.display.direction.enable();
      this.control.bookmark.display.order.enable();
      this.control.bookmark.display.gutter.enable();
    } else {
      this.control.bookmark.display.direction.disable();
      this.control.bookmark.display.order.disable();
      this.control.bookmark.display.gutter.disable();
    };

    switch (bookmarkData.link.color.by) {
      case 'theme':
        this.control.bookmark.color.color.disable();
        break;

      case 'custom':
        this.control.bookmark.color.color.enable();
        break;
    };

    switch (bookmarkData.link.accent.by) {
      case 'theme':
        this.control.bookmark.accent.color.disable();
        break;

      case 'custom':
        this.control.bookmark.accent.color.enable();
        break;
    };

    if (bookmarkData.link.background.show) {
      this.control.bookmark.background.type.enable();
      this.control.bookmark.background.opacity.enable();

      switch (bookmarkData.link.background.type) {
        case 'image':
          this.control.bookmark.background.image.url.enable();
          this.helper.bookmark.background.image.enable();
          this.control.bookmark.background.video.url.disable();
          this.helper.bookmark.background.video.disable();
          break;

        case 'video':
          this.control.bookmark.background.image.url.disable();
          this.helper.bookmark.background.image.disable();
          this.control.bookmark.background.video.url.enable();
          this.helper.bookmark.background.video.enable();
          break;
      };
    } else {
      this.control.bookmark.background.type.disable();
      this.control.bookmark.background.image.url.disable();
      this.helper.bookmark.background.image.disable();
      this.control.bookmark.background.video.url.disable();
      this.helper.bookmark.background.video.disable();
      this.control.bookmark.background.opacity.disable();
    };
  };

  this.update = () => {
    this.control.bookmark.display.visual.show.update();
    this.control.bookmark.display.visual.type.update();
    this.control.bookmark.display.visual.letter.text.update();
    this.control.bookmark.display.visual.icon.text.update();
    if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
      this.control.bookmark.display.visual.icon.preview.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
    } else {
      this.control.bookmark.display.visual.icon.preview.update();
    };
    this.control.bookmark.display.visual.image.url.update();
    this.control.bookmark.display.name.show.update();
    this.control.bookmark.display.name.text.update();
    this.control.bookmark.url.update();
  };

  this.assemble = () => {

    this.element.main.appendChild(this.tab.tab());

    this.element.aside.appendChild(this.preview.preview());

    this.element.form.appendChild(this.element.main);

    this.element.form.appendChild(this.element.aside);

  };

  this.bind = () => {

    this.element.form.addEventListener('keydown', (event) => {

      if (event.keyCode == 13) { event.preventDefault(); return false; };

    });

  };

  this.suggest = new Suggest({
    input: this.control.bookmark.display.visual.icon.text.text,
    widthElement: this.element.main,
    type: 'fontawesomeIcon',

    postFocus: this.control.bookmark.display.visual.icon.preview.groupText,
    action: (suggestData) => {

      bookmarkData.link.display.visual.icon.label = suggestData.label;
      bookmarkData.link.display.visual.icon.name = suggestData.name;

      if (suggestData.styles.includes('solid')) {
        bookmarkData.link.display.visual.icon.prefix = 'fas';
      } else if (suggestData.styles.includes('brands')) {
        bookmarkData.link.display.visual.icon.prefix = 'fab';
      };

      this.preview.update.assemble(bookmarkData);
      this.update();

    }
  });

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

  this.disable();

  this.update();

};
