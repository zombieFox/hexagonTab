export const clearChildNode = function(element) {

  while (element.lastChild) {
    element.removeChild(element.lastChild);
  };

};
