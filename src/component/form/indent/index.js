import { node } from '../../../utility/node';

import './index.css';

export const indent = function({ children = false } = {}) {

  return node('div|class:form-indent', children);

};
