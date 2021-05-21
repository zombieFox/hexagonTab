export const isJson = function(string) {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  };
  return true;
};
