function compose(...funs) {
  if (funs.length === 0) return () => {};
  if (funs.length === 1) return funs[0];

  return funs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
  );
}

const func1 = (a) => {
  return a + 3;
};

const func2 = (a) => {
  return a + 2;
};

const func3 = (a, b) => {
  return a + 1 + b;
};

const chain = [func1, func2, func3];

//func4 = (args) => func1(func2(func3(args)))
const func4 = compose(...chain);

console.log(func4(0, 2));
