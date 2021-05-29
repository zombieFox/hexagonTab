import { icon } from '../icon';

import { complexNode } from '../../utility/complexNode';
import { convertColor } from '../../utility/convertColor';
import { node } from '../../utility/node';

import './index.css';

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
  indent: function(children) {
    return node('div|class:form-indent', children);
  },
  grid: function(children) {
    return node('div|class:form-grid', children);
  }
};

form.render.group = function({ direction = 'horizontal', reverse = false, block = false, children = false } = {}) {
  const group = node('div|class:form-group', children);

  switch (direction) {
    case 'horizontal':
      group.classList.add('form-group-horizontal');
      break;

    case 'vertical':
      group.classList.add('form-group-vertical');
      break;
  };

  if (reverse) {
    group.classList.add('form-group-reverse');
  };

  if (block) {
    group.classList.add('form-group-block');
  };

  return group;
};

form.render.inline = function({ direction = 'horizontal', reverse = false, block = false, wrap = false, gap = 'medium', children = false } = {}) {
  const inline = node('div|class:form-inline', children);

  switch (direction) {
    case 'horizontal':
      inline.classList.add('form-inline-horizontal');
      break;

    case 'vertical':
      inline.classList.add('form-inline-vertical');
      break;
  };

  switch (gap) {
    case 'small':
      inline.classList.add('form-inline-gap-small');
      break;

    case 'medium':
      inline.classList.add('form-inline-gap-medium');
      break;

    case 'large':
      inline.classList.add('form-inline-gap-large');
      break;
  };

  if (reverse) {
    inline.classList.add('form-inline-reverse');
  };

  if (block) {
    inline.classList.add('form-inline-block');
  };

  if (wrap) {
    inline.classList.add('form-inline-wrap');
  };

  return inline;
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

form.render.label = function({ forInput = false, text = 'label', description = false, srOnly = false, icon = false, classList = [] } = {}) {
  let label;

  if (forInput) {
    label = node('label|for:' + forInput);
  } else {
    label = node('label');
  };

  const labelBlock = node('span|class:label-block');

  if (srOnly) {
    if (icon) {
      labelBlock.classList.add('sr-only');
    } else {
      label.classList.add('sr-only');
    };
  };

  if (text && description) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    labelBlock.appendChild(node('span:' + description + '|class:label-block-item small muted'));
    label.appendChild(labelBlock);
  } else if (text) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    label.appendChild(labelBlock);
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
