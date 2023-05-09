// select all span's with .number
const items = [...document.querySelectorAll(".number")];
//console.log(items);
// (3) [span.number, span.number, span.number]
// 0: span.number
// 1: span.number
// 2: span.number

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  //  console.log(value);
  // 30
  // 1000
  // 20
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 100);
};

// iterate over and log each span
items.forEach((item) => {
  updateCount(item);
  //  console.log(item);
  // <span class="number" data-value="30">0</span
  // <span class="number" data-value="1000">1000</span
  // <span class="number" data-value="20">20</span
});
