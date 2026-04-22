function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func.apply(this, args);
      lastCall = now;
    }
  };
}

const input = document.querySelector("input");
input.addEventListener(
  "input",
  throttle((e) => {
    console.log(e.target.value);
  }, 1000),
);
