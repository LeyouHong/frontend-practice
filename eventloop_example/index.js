// This is a JavaScript Quiz from BFE.dev
//1 2 3 4 7 10 5 6 9 8
console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

console.log(7);

setTimeout(() => {
  //marco task
  console.log(8);
}, 10);

setTimeout(() => {
  //marco task
  console.log(9);
}, 0);

promise
  .then(() => {
    //micro task
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(10);
