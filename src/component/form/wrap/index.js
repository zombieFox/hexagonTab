import { node } from '../../../utility/node';

import './index.css';

export const wrap = function({ children = false } = {}) {

  return node('div|class:form-wrap', children);

};
