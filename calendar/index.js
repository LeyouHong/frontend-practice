const yearSelector = document.querySelector(".year-selector");
const monthSelector = document.querySelector(".month-selector");
const wrap = document.querySelector(".calendar-wrap");
let selectedYear = new Date().getFullYear();
let selectedMonth = new Date().getMonth();
render();

function render() {
  renderYearAndMonth();
  renderCalendar();
}

function renderYearAndMonth() {
  let curYear = new Date().getFullYear();
  let curMonth = new Date().getMonth();
  for (let i = curYear - 121; i < curYear + 120; i++) {
    yearSelector.options.add(new Option(i, i, false, i === curYear));
  }
  yearSelector.addEventListener("change", (e) => {
    selectedYear = e.target.value;
    renderCalendar();
  });
  for (let i = 0; i < 12; i++) {
    monthSelector.options.add(new Option(i + 1, i, false, i === curMonth));
  }
  monthSelector.addEventListener("change", (e) => {
    selectedMonth = e.target.value;
    renderCalendar();
  });
}
function renderCalendar() {
  console.log(selectedYear, selectedMonth);
  wrap.innerHTML = "";
  const monthDays = [
    31,
    getFebDays(selectedYear),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let startDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const frag = document.createDocumentFragment();
  for (let i = 0; i < monthDays[Number(selectedMonth)] + startDay; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    if (i >= startDay) {
      cell.textContent = i - startDay + 1;
    }
    frag.appendChild(cell);
  }
  wrap.appendChild(frag);
}

function getFebDays(year) {
  return isLeap(year) ? 29 : 28;
}

function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
