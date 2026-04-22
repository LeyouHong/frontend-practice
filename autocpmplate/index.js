const arr = [
  "qwertyuiop",
  "plkmnbvcxz",
  "asdfghjk",
  "qazxsw",
  "edcvfr",
  "tgbnhy",
  "ujmkiopl",
];

const ul = document.querySelector("ul");
const input = document.querySelector("input");
input.addEventListener("keyup", (e) => onKeyUp(e, ul, arr));

function onKeyUp(e, list, arr) {
  const val = e.target.value;

  list.innerHTML = "";

  if (val === "") return;

  const filteredArr = arr.filter((itm) => itm.indexOf(val) >= 0);

  const lis = document.createDocumentFragment();
  filteredArr.forEach((v) => {
    const li = document.createElement("li");
    const idx = v.indexOf(val);

    li.innerHTML = `<div>${v.substring(0, idx)}<span style="color:red">${val}</span>${v.substring(idx + val.length)}</div>`;
    lis.appendChild(li);
  });

  list.appendChild(lis);
}
