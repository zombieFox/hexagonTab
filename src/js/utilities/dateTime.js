const dateTime = function() {
  const date = new Date();

  return {
    // string: date.constructor(),
    // time: date.getTime()
    date: date.getDate(),
    day: date.getDay(),
    year: date.getFullYear(),
    hours: date.getHours(),
    milliseconds: date.getMilliseconds(),
    minutes: date.getMinutes(),
    month: date.getMonth(),
    seconds: date.getSeconds()
  };
};

export { dateTime };
