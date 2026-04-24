function createColorGrid(m, n) {
  const grid = Array.from({ length: m }).map(() => Array(n).fill("#000"));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const r = Math.random() * 256;
      const g = Math.random() * 256;
      const b = Math.random() * 256;
      grid[i][j] = { v: i * n + j, c: `rgb(${r},${g},${b})` };
    }
  }

  return grid;
}

function generateGridHtml(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const root = document.querySelector("#grid");

  // console.log(root)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const div = document.createElement("div");
      div.textContent = grid[i][j].v;
      div.classList.add("sm-grid");
      div.style.backgroundColor = grid[i][j].c;
      root.appendChild(div);
    }
    const br = document.createElement("br");
    root.appendChild(br);
  }
}

function generateSpiralHtml(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const tmp = [];
  const root = document.querySelector("#spiral-grid");

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1;

  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      tmp.push(grid[top][j]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      tmp.push(grid[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        tmp.push(grid[bottom][j]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        tmp.push(grid[i][left]);
      }
      left++;
    }
  }

  for (let k = 0; k < tmp.length; k++) {
    const div = document.createElement("div");
    div.textContent = tmp[k].v;
    div.classList.add("sm-grid");
    div.style.backgroundColor = tmp[k].c;
    root.appendChild(div);
  }
}
const colorGrid = createColorGrid(5, 4);
generateSpiralHtml(colorGrid);
generateGridHtml(colorGrid);
