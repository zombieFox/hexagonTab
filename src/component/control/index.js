import { state } from '../state';
import { data } from '../data';
import { grid } from '../grid';
import { bookmark } from '../bookmark';
import { form } from '../form';

import { Button } from '../button';
import { Collapse } from '../collapse';

import { node } from '../../utility/node';
import { get } from '../../utility/get';
import { set } from '../../utility/set';
import { convertColor } from '../../utility/convertColor';
import { ifValidString } from '../../utility/ifValidString';

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

const ControlModul_helperText = function({ text = [] } = {}) {
  this.para = [];

  text.forEach((item, i) => {
    this.para.push(form.render.helper({
      tag: 'p',
      text: item
    }));
  });

  this.wrap = () => {
    const formWrap = form.render.wrap();

    this.para.forEach((item, i) => {
      formWrap.appendChild(item);
    });

    return formWrap;
  };

  this.disable = () => {
    this.para.forEach((item, i) => {
      item.classList.add('disabled');
    });
  };

  this.enable = () => {
    this.para.forEach((item, i) => {
      item.classList.remove('disabled');
    });
  };
};

const ControlModule_inputButton = function({ object = {}, path = false, id = 'name', classList = [], inputButtonClassList = [], type = false, inputHide = false, labelText = 'Name', srOnly = false, inputButton = [], action = false } = {}) {

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
        id: id,
        value: convertColor.rgb.hex(get({
          object: object,
          path: path
        })),
        classList: classList,
        func: () => {
          if (path) {
            set({
              object: object,
              path: path,
              value: convertColor.hex.rgb(this.input.value)
            });
          };
          if (action) {
            action();
          };
        }
      });

      break;
  };

  this.label = form.render.label({
    text: labelText,
    forInput: id
  });

  this.button = node('div|class:form-input-button');

  if (inputButtonClassList.length > 0) {
    inputButtonClassList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (inputButton.length > 0) {
    inputButton.forEach((item, i) => {
      switch (item) {
        case 'link':
          this.button.classList.add('form-input-button-link');
          break;

        case 'line':
          this.button.classList.add('form-input-button-line');
          break;

        case 'ring':
          this.button.classList.add('form-input-button-ring');
          break;

        case 'dot':
          this.button.classList.add('input-color-dot');
          break;
      };
    });
  };

  if (inputHide) {
    this.button.classList.add('form-input-hide');
  };

  if (srOnly) {
    this.button.classList.add('form-input-button-sr-only');
  };

  this.button.appendChild(this.input);

  this.button.appendChild(this.label);

  this.update = () => {
    switch (type) {
      case 'color':
        this.input.value = convertColor.rgb.hex(get({
          object: object,
          path: path,
        }));

        break;
    };
  };

  this.wrap = () => {
    return form.render.wrap([
      this.button
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

const ControlModule_slider = function({ object = {}, path = false, id = 'name', labelText = 'Name', hue = false, value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText
  });

  const classList = [];

  if (hue) {
    classList.push('input-range-hue-spectrum');
  };

  this.range = form.render.input.range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.value()
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
    classList: ['form-group-item-small'],
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
    classList: ['form-group-item-small'],
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

  this.value = () => {
    return parseInt(this.range.value, 10);
  };

  this.wrap = () => {
    const formGroup = form.render.group({
      children: [
        this.number
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const formInline = form.render.inline({
      block: true,
      children: [
        this.range,
        formGroup
      ]
    });

    const wrap = form.render.wrap([
      this.label,
      formInline
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

const ControlModule_slimSlider = function({ object = {}, path = false, id = 'name', labelText = 'Name', hue = false, value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText,
    classList: ['form-group-text', 'form-group-text-left', 'form-group-text-transparent', 'form-group-text-borderless', 'form-group-item-medium', ]
  });

  const classList = ['form-group-item-grow'];

  if (hue) {
    classList.push('input-range-hue-spectrum');
  };

  this.range = form.render.input.range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.value()
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
    classList: ['form-group-item-small'],
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
    classList: ['form-group-item-small'],
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

  this.value = () => {
    return parseInt(this.range.value, 10);
  };

  this.wrap = () => {
    const formGroup = form.render.group({
      children: [
        this.number
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const formInline = form.render.inline({
      block: true,
      children: [
        this.label,
        this.range,
        formGroup
      ]
    });

    const wrap = form.render.wrap([
      formInline
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

const ControlModule_color = function({ object = {}, path = false, id = 'name', labelText = 'Name', srOnly = false, value = 0, defaultValue = false, action = false, extraButtons = [] } = {}) {

  this.label = form.render.label({
    forInput: id,
    text: labelText,
    srOnly: srOnly
  });

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
    classList: ['form-group-item-small'],
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
    const formGroup = form.render.group({
      block: true,
      children: [
        this.color,
        this.text
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        formGroup.appendChild(item.button);
      });
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

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.disable();
      });
    };
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.color.disabled = false;
    this.text.disabled = false;
    this.reset.enable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.enable();
      });
    };
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
          ]);
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

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;
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

  this.inline = () => {
    const formGroup = form.render.wrap();

    const formInline = form.render.inline({
      gap: 'large',
      wrap: true
    });

    this.radioSet.forEach((item, i) => {
      formInline.appendChild(
        form.render.wrap([
          item.radio,
          item.label
        ])
      );
    });

    formGroup.appendChild(formInline);

    return formGroup;
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

const ControlModule_radioGrid = function({ radioGroup = [], label = false, object = {}, groupName = 'group', path = false, gridSize = '3x3', action = false } = {}) {
  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  const gridElement = form.render.grid();

  let gridLabel = false;

  if (label) {
    gridLabel = form.render.label({
      text: label
    });
  };

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {};

      radioAndLabel.position = item.position;

      radioAndLabel.radio = form.render.input.radio({
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
      });

      radioAndLabel.label = form.render.label({
        forInput: item.id,
        text: item.labelText,
        description: item.description,
        srOnly: true,
        icon: true
      });

      radioAndLabel.wrap = () => {
        return form.render.wrap([
          radioAndLabel.radio,
          radioAndLabel.label
        ]);
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

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;
  };

  this.update = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });
  };

  this.grid = () => {
    const wrap = form.render.wrap();

    switch (gridSize) {
      case '3x3':
        gridElement.classList.add('form-grid-3x3');
        break;

      case '3x1':
        gridElement.classList.add('form-grid-3x1');
        break;

      case '1x3':
        gridElement.classList.add('form-grid-1x3');
        break;

      case '2x2':
        gridElement.classList.add('form-grid-2x2');
        break;
    };

    this.radioSet.forEach((item, i) => {
      const wrap = form.render.wrap([
        item.radio,
        item.label
      ]);

      wrap.style.setProperty('--form-grid-cell', 'cell-' + item.position);

      gridElement.appendChild(wrap);
    });

    if (label) {
      wrap.appendChild(gridLabel);
    };

    wrap.appendChild(gridElement);

    return wrap;
  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });

    gridElement.classList.add('disabled');

    if (label) {
      gridLabel.classList.add('disabled');
    };
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });

    gridElement.classList.remove('disabled');

    if (label) {
      gridLabel.classList.remove('disabled');
    };
  };
};

const ControlModule_checkbox = function({ object = {}, id = 'name', path = false, labelText = 'name', description = false, action = false } = {}) {

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

  this.update = () => {
    this.checkbox.checked = (get({
      object: object,
      path: path,
    }) === true);
  };

  this.checked = () => {
    return get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return form.render.wrap([
      form.render.group({
        children: [
          this.checkbox,
          this.label
        ]
      })
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

  this.moreControlsToggle = new Button({
    text: false,
    iconName: 'arrowKeyboardDown',
    style: ['line'],
    classList: ['collapse-toggle', 'form-group-item-small'],
    func: () => {
      this.moreControlsCollapse.toggle();
      this.moreControlsUpdate();
    }
  });

  this.color = new ControlModule_color({
    object: object,
    path: path + '.rgb',
    id: id + '-rgb',
    labelText: labelText,
    srOnly: srOnly,
    value: get({ object: object, path: path + '.rgb' }),
    defaultValue: defaultValue,
    extraButtons: [this.moreControlsToggle],
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

  this.moreControls = node('div', [
    node('hr'),
    this.colorSliderH.wrap(),
    this.colorSliderS.wrap(),
    this.colorSliderL.wrap(),
    node('hr'),
    this.colorSliderR.wrap(),
    this.colorSliderG.wrap(),
    this.colorSliderB.wrap()
  ]);

  this.moreControlsCollapse = new Collapse({
    type: 'toggle',
    target: [{
      toggle: this.moreControlsToggle.button,
      content: this.moreControls
    }]
  });

  this.moreControlsCollapse.update();

  this.wrap = () => {
    return form.render.wrap([
      this.color.wrap(),
      form.render.wrap([
        form.render.indent([
          form.render.wrap([
            this.moreControlsCollapse.collapse()
          ])
        ])
      ])
    ])
  };

  this.disable = () => {
    this.color.disable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.moreControlsUpdate();
    };
  };

  this.enable = () => {
    this.color.enable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    } else {
      this.moreControlsUpdate();
    };
  };

  this.moreControlsUpdate = () => {
    if (this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    };
  };

  this.moreControlsUpdate();
};

export { ControlModul_helperText, ControlModule_inputButton, ControlModule_groupText, ControlModule_radio, ControlModule_radioGrid, ControlModule_checkbox, ControlModule_slider, ControlModule_slimSlider, ControlModule_colorMixer, ControlModule_color, ControlModule_text, rgbToHsl, hslToRgb };
