setTimeout(() => {
  const ul = document.querySelector("ul");
  let idx = 1;
  function add() {
    const list = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
      let li = document.createElement("li");
      li.textContent = idx++;
      list.appendChild(li);
    }

    ul.appendChild(list);
  }

  const times = 1000 / 20;
  for (let i = 0; i < times; i++) {
    window.requestAnimationFrame(add);
  }
}, 0);
