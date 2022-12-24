// Завдання 4
// Лічильник складається зі спану і кнопок, які
// по кліку повинні збільшувати і зменшувати його
// значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких
// збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const div = document.querySelector("div");
const span = document.querySelector("#value");
let counterValue = span.textContent;
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
console.log(counterValue);

const firstCallback = () => {
  span.textContent = Number(span.textContent) + 1;
  return span.textContent;
};
const secondCallback = () => {
  span.textContent = Number(span.textContent) - 1;
  return span.textContent;
};

incrementBtnEl.addEventListener("click", firstCallback);
decrementBtnEl.addEventListener("click", secondCallback);
