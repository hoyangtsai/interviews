const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/debounce.md