export const isValidString = function(value) {
  let result = false;

  if (typeof value == 'string') {
    value = value.trim().replace(/\s/g, '');
    if (value != '') {
      result = true;
    };
  };

  return result;
};
