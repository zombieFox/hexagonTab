import { state } from './state.js';
import { data } from './data.js';
import { grid } from './grid';
import { bookmark } from './bookmark';
import { node } from './utilities/node.js';
import { get } from './utilities/get.js';
import { set } from './utilities/set.js';
import { Button } from './utilities/button.js';
import { form } from './utilities/form.js';
import { convertColor } from './utilities/convertColor.js';
import { ifValidString } from './utilities/ifValidString.js';

const update = function({ controlInput = [], delay = false } = {}) {
  if (controlInput.length > 0) {

    let delayedUpdate = null;

    const updateControl = () => {
      controlInput.forEach((item, i) => {
        item.update();
      });
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };

  };
};

const minMax = function({ min = 0, max = 0, value = 0 } = {}) {
  if (value > max) {
    return max;
  } else if (value < min) {
    return min;
  } else if (isNaN(value)) {
    return min;
  } else {
    return value;
  };
};

const rgbToHsl = function(rgb) {
  const hsl = convertColor.rgb.hsl(rgb);
  hsl.h = Math.round(hsl.h);
  hsl.s = Math.round(hsl.s);
  hsl.l = Math.round(hsl.l);
  return hsl;
};

const hslToRgb = function(hsl) {
  const rgb = convertColor.hsl.rgb(hsl);
  rgb.r = Math.round(rgb.r);
  rgb.g = Math.round(rgb.g);
  rgb.b = Math.round(rgb.b);
  return rgb;
};

const ControlModule_inputButton = function({ id = 'name', type = false, inputHide = false, labelText = 'Name', action = false } = {}) {
  this.input;

  switch (type) {
    case 'file':
      this.input = form.render.input.file({
        id: id,
        func: () => {
          if (action) {
            action();
          };
        }
      });
      break;

    case 'color':
      this.input = form.render.input.color({
        id: id
      });
      break;
  };

  this.label = form.render.label({
    text: labelText,
    forInput: id
  });

  this.formButton = node('div|class:form-input-button form-input-button-line');

  if (inputHide) {
    this.formButton.classList.add('form-input-hide');
  };

  this.formButton.appendChild(this.input);
  this.formButton.appendChild(this.label);

  this.wrap = () => {
    return form.render.wrap([
      this.formButton
    ])
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.input.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.input.disabled = false;
  };
};

const ControlModule_groupText = function({ text = false, classList = [] } = {}) {
  this.groupText = form.render.groupText({
    text: text,
    classList: classList
  });

  this.update = (content) => {
    while (this.groupText.lastChild) {
      this.groupText.removeChild(this.groupText.lastChild);
    };
    if (typeof content === 'string' && ifValidString(content)) {
      this.groupText.textContent = content;
    } else if (content && content != '') {
      this.groupText.appendChild(content);
    };
  };

  this.wrap = () => {
    return form.render.wrap([
      this.groupText
    ])
  };

  this.disable = () => {
    this.groupText.classList.add('disabled');
  };

  this.enable = () => {
    this.groupText.classList.remove('disabled');
  };
};

const ControlModule_text = function({ object = {}, path = false, id = 'name', value = false, min = false, max = false, placeholder = false, classList = [], labelText = 'Name', srOnly = false, action = false } = {}) {
  this.label = form.render.label({
    forInput: id,
    text: labelText
  });

  if (srOnly) {
    this.label.classList.add('sr-only')
  };

  this.text = form.render.input.text({
    id: id,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.text.value
        });
      };
      if (action) {
        action();
      };
    }
  });

  if (value) {
    this.text.value = value;
  };

  if (min) {
    this.text.min = min;
  };

  if (max) {
    this.text.max = max;
  };

  if (placeholder) {
    this.text.placeholder = placeholder;
  };

  this.update = () => {
    this.text.value = get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return form.render.wrap([
      this.label,
      this.text
    ])
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.text.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.text.disabled = false;
  };
};

const ControlModule_slider = function({ object = {}, path = false, id = 'name', labelText = 'Name', value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText
  });

  this.range = form.render.input.range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: ['mr-3'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: parseInt(this.range.value, 10)
        });
      };
      if (action) {
        action();
      };
      this.number.value = get({
        object: object,
        path: path,
      });
    }
  });

  this.number = form.render.input.number({
    value: value,
    min: min,
    max: max,
    classList: ['form-group-item-medium', 'form-group-radius-left'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: minMax({
            value: parseInt(this.number.value, 10),
            min: min,
            max: max
          })
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    func: () => {
      set({
        object: object,
        path: path,
        value: defaultValue
      });
      this.update();
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.range.value = get({
        object: object,
        path: path,
      });
      this.number.value = get({
        object: object,
        path: path,
      });
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.wrap = () => {
    const formGroup = form.render.group([
      this.range,
      this.number
    ]);

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const wrap = form.render.wrap([
      this.label,
      formGroup
    ]);

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
    this.number.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
    this.number.disabled = false;
    this.reset.enable();
  };
};

const ControlModule_slimSlider = function({ object = {}, path = false, id = 'name', labelText = 'Name', value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText,
    classList: ['form-group-text', 'form-group-text-left', 'form-group-text-transparent', 'form-group-text-borderless', 'form-group-item-medium', 'mr-3', 'pb-0']
  });

  this.range = form.render.input.range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: ['mr-3'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: parseInt(this.range.value, 10)
        });
      };
      if (action) {
        action();
      };
      this.number.value = get({
        object: object,
        path: path,
      });
    }
  });

  this.number = form.render.input.number({
    value: value,
    min: min,
    max: max,
    classList: ['form-group-item-medium', 'form-group-radius-left'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: minMax({
            value: parseInt(this.number.value, 10),
            min: min,
            max: max
          })
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    func: () => {
      set({
        object: object,
        path: path,
        value: defaultValue
      });
      this.update();
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.range.value = get({
        object: object,
        path: path,
      });
      this.number.value = get({
        object: object,
        path: path,
      });
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.wrap = () => {
    const formGroup = form.render.group([
      this.label,
      this.range,
      this.number
    ]);

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const wrap = form.render.wrap([
      formGroup
    ]);

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
    this.number.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
    this.number.disabled = false;
    this.reset.enable();
  };
};

const ControlModule_color = function({ object = {}, path = false, id = 'name', labelText = 'Name', srOnly = false, value = 0, defaultValue = false, action = false } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText
  });

  if (srOnly) {
    this.label.classList.add('sr-only')
  };

  this.color = form.render.input.color({
    id: id,
    value: convertColor.rgb.hex(get({
      object: object,
      path: path
    })),
    classList: ['form-group-item-half'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: convertColor.hex.rgb(this.color.value)
        });
      };
      if (action) {
        action();
      };
      this.text.value = convertColor.rgb.hex(get({
        object: object,
        path: path
      }));
    }
  });

  this.text = form.render.input.text({
    value: convertColor.rgb.hex(get({
      object: object,
      path: path
    })),
    max: 7,
    classList: ['form-group-item-half'],
    placeholder: 'Hex code',
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: convertColor.hex.rgb(this.text.value)
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    func: () => {
      set({
        object: object,
        path: path,
        value: defaultValue
      });
      this.update({ all: true });
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false, all = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.color.value = convertColor.rgb.hex(get({
        object: object,
        path: path
      }));
      if (all) {
        this.text.value = convertColor.rgb.hex(get({
          object: object,
          path: path
        }));
      };
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.wrap = () => {
    const formGroup = form.render.group([
      this.color,
      this.text
    ]);

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const wrap = form.render.wrap([
      this.label,
      formGroup
    ]);

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.color.disabled = true;
    this.text.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.color.disabled = false;
    this.text.disabled = false;
    this.reset.enable();
  };
};

const ControlModule_radio = function({ radioGroup = [], object = {}, groupName = 'group', path = false, action = false } = {}) {
  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {
        radio: form.render.input.radio({
          id: item.id,
          radioGroup: radioGroupName,
          value: item.value,
          checked: (get({
            object: object,
            path: radioGroupPath,
          }) === item.value),
          func: () => {
            set({
              object: object,
              path: radioGroupPath,
              value: item.value
            });
            if (action) {
              action();
            };
          }
        }),
        label: form.render.label({
          forInput: item.id,
          text: item.labelText,
          description: item.description,
          icon: true
        }),
        wrap: () => {
          return form.render.wrap([
            radioAndLabel.radio,
            radioAndLabel.label
          ])
        }
      };

      radioAndLabel.radio.update = () => {
        radioAndLabel.radio.checked = (get({
          object: object,
          path: radioGroupPath,
        }) === item.value);
      };

      radioAndLabel.radio.disable = () => {
        radioAndLabel.radio.disabled = true;
      };

      radioAndLabel.radio.enable = () => {
        radioAndLabel.radio.disabled = false;
      };

      this.radioSet.push(radioAndLabel);
    });
  };

  this.update = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });
  };

  this.wrap = () => {
    const group = form.render.wrap();
    this.radioSet.forEach((item, i) => {
      group.appendChild(
        form.render.wrap([
          item.radio,
          item.label
        ])
      );
    });

    return group;
  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });
  };
};

const ControlModule_checkbox = function({ object = {}, id = 'name', path = false, labelText = 'name', description = 'description', action = false } = {}) {

  this.checkbox = form.render.input.checkbox({
    id: id,
    checked: (get({
      object: object,
      path: path,
    }) === true),
    func: () => {
      set({
        object: object,
        path: path,
        value: this.checkbox.checked
      });
      if (action) {
        action();
      };
    }
  });

  this.label = form.render.label({
    forInput: id,
    text: labelText,
    description: description,
    icon: true
  });

  this.checkbox.update = () => {
    this.checkbox.checked = (get({
      object: object,
      path: path,
    }) === true);
  };

  this.update = () => {
    this.checkbox.update();
  };

  this.wrap = () => {
    return form.render.wrap([
      form.render.group([
        this.checkbox,
        this.label
      ])
    ])
  };

  this.disable = () => {
    this.checkbox.disabled = true;
  };

  this.enable = () => {
    this.checkbox.disabled = false;
  };
};

const ControlModule_colorMixer = function({ object = {}, path = false, defaultValue = false, minMaxObject = false, id = 'name', labelText = 'name', srOnly = false, action = false } = {}) {

  this.color = new ControlModule_color({
    object: object,
    path: path + '.rgb',
    id: id + '-rgb',
    labelText: labelText,
    srOnly: srOnly,
    value: get({ object: object, path: path + '.rgb' }),
    defaultValue: defaultValue,
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: rgbToHsl(get({ object: object, path: path + '.rgb' }))
      });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderH = new ControlModule_slimSlider({
    object: object,
    path: path + '.hsl.h',
    id: id + '-hsl-h',
    labelText: 'Hue',
    value: get({ object: object, path: path + '.hsl.h' }),
    min: get({ object: minMaxObject, path: path + '.hsl.h.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.h.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: hslToRgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderS = new ControlModule_slimSlider({
    object: object,
    path: path + '.hsl.s',
    id: id + '-hsl-s',
    labelText: 'Saturation',
    value: get({ object: object, path: path + '.hsl.s' }),
    min: get({ object: minMaxObject, path: path + '.hsl.s.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.s.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: hslToRgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderL = new ControlModule_slimSlider({
    object: object,
    path: path + '.hsl.l',
    id: id + '-hsl-l',
    labelText: 'Lightness',
    value: get({ object: object, path: path + '.hsl.l' }),
    min: get({ object: minMaxObject, path: path + '.hsl.l.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.l.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: hslToRgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderR = new ControlModule_slimSlider({
    object: object,
    path: path + '.rgb.r',
    id: id + '-rgb-r',
    labelText: 'Red',
    value: get({ object: object, path: path + '.rgb.r' }),
    min: get({ object: minMaxObject, path: path + '.rgb.r.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.r.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: rgbToHsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderG = new ControlModule_slimSlider({
    object: object,
    path: path + '.rgb.g',
    id: id + '-rgb-g',
    labelText: 'Green',
    value: get({ object: object, path: path + '.rgb.g' }),
    min: get({ object: minMaxObject, path: path + '.rgb.g.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.g.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: rgbToHsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderB = new ControlModule_slimSlider({
    object: object,
    path: path + '.rgb.b',
    id: id + '-rgb-b',
    labelText: 'Blue',
    value: get({ object: object, path: path + '.rgb.b' }),
    min: get({ object: minMaxObject, path: path + '.rgb.b.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.b.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: rgbToHsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.wrap = () => {
    return form.render.wrap([
      this.color.wrap(),
      form.render.wrap([
        form.render.indent([
          node('hr'),
          this.colorSliderH.wrap(),
          this.colorSliderS.wrap(),
          this.colorSliderL.wrap(),
          node('hr'),
          this.colorSliderR.wrap(),
          this.colorSliderG.wrap(),
          this.colorSliderB.wrap()
        ])
      ])
    ])
  };

  this.disable = () => {
    this.color.disable();
    this.colorSliderH.disable();
    this.colorSliderS.disable();
    this.colorSliderL.disable();
    this.colorSliderR.disable();
    this.colorSliderG.disable();
    this.colorSliderB.disable();
  };

  this.enable = () => {
    this.color.enable();
    this.colorSliderH.enable();
    this.colorSliderS.enable();
    this.colorSliderL.enable();
    this.colorSliderR.enable();
    this.colorSliderG.enable();
    this.colorSliderB.enable();
  };
};

export { ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text };
