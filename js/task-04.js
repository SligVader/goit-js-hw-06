const clickValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const decreseValue = () => {
  counterValue -= 1;
  return (clickValue.textContent = counterValue);
};

const increseValue = () => {
  counterValue += 1;
  return (clickValue.textContent = counterValue);
};

decrementBtn.addEventListener("click", decreseValue);
incrementBtn.addEventListener("click", increseValue);
