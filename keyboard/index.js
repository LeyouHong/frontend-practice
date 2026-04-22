const divs = document.querySelectorAll(".wrapper > div");
const wrapper = document.querySelector(".wrapper");

document.addEventListener("keyup", (e) => {
  console.log(e);
  const hightlightNode = document.querySelector(".highlight");
  const keycode = e.code;
  const { x, y, width, height } = hightlightNode.getBoundingClientRect();
  let nextNode;

  if (keycode === "ArrowLeft") {
    let min = Infinity;

    for (let node of divs) {
      const nodeObj = node.getBoundingClientRect();
      if (x > nodeObj.x && nodeObj.x < min && nodeObj.y === y) {
        nextNode = node;
        min = x;
      }
    }
  }

  if (keycode === "ArrowRight") {
    let max = -Infinity;

    for (let node of divs) {
      const nodeObj = node.getBoundingClientRect();
      if (x < nodeObj.x && nodeObj.x > max && nodeObj.y === y) {
        nextNode = node;
        max = x;
      }
    }
  }

  if (keycode === "ArrowUp") {
    let min = Infinity;

    for (let node of divs) {
      const nodeObj = node.getBoundingClientRect();
      if (y > nodeObj.y && nodeObj.y < min && nodeObj.x === x) {
        nextNode = node;
        min = y;
      }
    }
  }

  if (keycode === "ArrowDown") {
    let max = -Infinity;

    for (let node of divs) {
      const nodeObj = node.getBoundingClientRect();
      if (y < nodeObj.y && nodeObj.y > max && nodeObj.x === x) {
        nextNode = node;
        max = y;
      }
    }
  }

  if (nextNode) {
    nextNode.classList.add("highlight");
    hightlightNode.classList.remove("highlight");
    console.log(nextNode, hightlightNode);
  }
});
