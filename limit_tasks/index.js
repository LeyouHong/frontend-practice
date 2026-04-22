function limit(cnt, array, func) {
  const tasks = [],
    doingTasks = [];
  let i = 0;

  return enqueue().then(() => Promise.all(tasks));

  function enqueue() {
    if (i === array.length) {
      return Promise.resolve();
    }

    const task = Promise.resolve().then(() => func(array[i++]));
    tasks.push(task);
    const doing = task.then(() =>
      doingTasks.splice(doingTasks.indexOf(doing), 1),
    );
    doingTasks.push(doing);
    const res =
      doingTasks.length >= cnt ? Promise.race(doingTasks) : Promise.resolve();

    return res.then(enqueue);
  }
}

const output = document.getElementById("output");
const div = document.createElement("div");

let str = "";

const timer = (i) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
      str += `finishing... ${i}<br/>`;
      div.innerHTML = str;
      output.appendChild(div);
    }, i);
  });

limit(3, [1000, 1000, 2000, 2000], timer).then((res) => {
  div.textContent = `FINAL: ${JSON.stringify(res)}`;
  output.appendChild(div);
});
