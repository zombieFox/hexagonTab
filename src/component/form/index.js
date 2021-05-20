import './index.css';

import { icon } from '../icon';

import { complexNode } from '../../utility/complexNode';
import { convertColor } from '../../utility/convertColor';
import { node } from '../../utility/node';

const form = {};

form.render = {
  fieldset: function(children) {
    return node('fieldset', children);
  },
  wrap: function(children) {
    return node('div|class:form-wrap', children);
  },
  sticky: function(children) {
    return node('div|class:form-sticky', children);
  },
  group: function(children) {
    return node('div|class:form-group', children);
  },
  groupBlock: function(children) {
    return node('div|class:form-group form-group-block', children);
  },
  inline: function(children) {
    return node('div|class:form-inline', children);
  },
  inlineWide: function(children) {
    return node('div|class:form-inline form-inline-wide-gap', children);
  },
  indent: function(children) {
    return node('div|class:form-indent', children);
  }
};

form.render.helper = function({ text = 'text', classList = [] } = {}) {
  const helper = complexNode({
    tag: 'p',
    text: text,
    attr: [{
      key: 'class',
      value: 'form-helper-item'
    }]
  });

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      helper.classList.add(item);
    });
  };

  return helper;
};

form.render.feedback = function({ text = false } = {}) {
  const feedback = node('div|class:form-feedback');

  if (text) {
    const feedbackText = complexNode({
      tag: 'p',
      text: text,
      attr: [{
        key: 'class',
        value: 'muted small'
      }]
    });

    feedback.appendChild(feedbackText);
  };

  return feedback;
};

form.render.groupText = function({ text = false, classList = [] } = {}) {
  const textElement = node('div|class:form-group-text,tabindex:1');

  if (text) {
    textElement.textContent = text;
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      textElement.classList.add(item);
    });
  };

  return textElement;
};

form.render.label = function({ forInput = false, text = 'label', description = false, icon = false, classList = [] } = {}) {
  let label;

  if (forInput) {
    label = node('label|for:' + forInput);
  } else {
    label = node('label');
  };

  if (text && description) {
    label.appendChild(node('span|class:label-block', [
      node('span:' + text + '|class:label-block-item'),
      node('span:' + description + '|class:label-block-item small muted')
    ]));
  } else if (text) {
    label.appendChild(node('span:' + text));
  };

  if (icon) {
    label.prepend(node('span|class:label-icon'));
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      label.classList.add(item);
    });
  };

  return label;
};

form.render.input = {};

form.render.input.file = function({ id = false, classList = [], func = false } = {}) {
  const input = node('input|type:file,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('change', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.range = function({ id = false, min = 0, max = 100, value = 0, classList = [], func = false } = {}) {
  const input = node('input|class:mb-0,type:range,min:' + min + ',max:' + max + ',value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('input', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.color = function({ id = false, value = '#000000', classList = [], func = false } = {}) {
  const input = node('input|class:mb-0,type:color,value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('change', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.radio = function({ id = false, radioGroup = false, value = false, checked = false, classList = [], func = false } = {}) {
  const input = node('input|type:radio,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (radioGroup) {
    input.setAttribute('name', radioGroup);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (checked) {
    input.setAttribute('checked', '');
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('change', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.checkbox = function({ id = false, value = false, checked = false, classList = [], func = false } = {}) {
  const input = node('input|type:checkbox,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (checked) {
    input.setAttribute('checked', '');
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('change', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.text = function({ id = false, value = false, min = false, max = false, placeholder = false, classList = [], func = false } = {}) {
  const input = node('input|type:text,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (typeof min === 'number') {
    input.setAttribute('minlength', min);
  };

  if (typeof max === 'number') {
    input.setAttribute('maxlength', max);
  };

  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('input', function(event) {
      func();
    });
  };

  return input;
};

form.render.input.textarea = function({ id = false, value = false, placeholder = false, classList = [], func = false } = {}) {
  const textarea = node('textarea|tabindex:1,spellcheck:false');

  if (id) {
    textarea.setAttribute('id', id);
  };

  if (value) {
    textarea.setAttribute('value', value);
  };

  if (placeholder) {
    textarea.setAttribute('placeholder', placeholder);
  };

  if (checked) {
    textarea.setAttribute('checked', '');
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      textarea.classList.add(item);
    });
  };

  if (func) {
    textarea.addEventListener('input', function(event) {
      func();
    });
  };

  return textarea;
};

form.render.input.number = function({ id = false, min = 0, max = 100, step = 1, value = false, placeholder = false, classList = [], func = false } = {}) {
  const input = node('input|type:number,min:' + min + ',max:' + max + ',step:' + step + ',tabindex:1');

  let delayUpdate = null;

  if (id) {
    input.setAttribute('id', id);
  };

  if (value || (typeof value === 'number' && value === 0)) {
    input.setAttribute('value', value);
  };

  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (func) {
    input.addEventListener('input', function(event) {
      func();
    });
  };

  return input;
};

export { form };
