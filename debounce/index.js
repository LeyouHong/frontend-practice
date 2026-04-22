function debounce(func, delay) {
  let timer;
  const context = this;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const input = document.querySelector("input");
input.addEventListener(
  "input",
  debounce((e) => {
    console.log(e.target.value);
  }, 1000),
);
