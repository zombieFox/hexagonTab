const makePath = function(path) {
  if (path) {
    let array;
    if (path.indexOf('[') != -1 && path.indexOf(']') != -1) {
      array = path.split('.').join(',').split('[').join(',').split(']').join(',').split(',');
      for (var i = 0; i < array.length; i++) {
        if (array[i] == '') {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };
    } else {
      array = path.split('.');
    };
    return array;
  } else {
    return false;
  };
};

export { makePath };
