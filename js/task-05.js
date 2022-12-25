// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті
// input#name-input (подія input), підставляє його
// поточне значення в span#name-output. Якщо інпут порожній, у спані повинен
// відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.querySelector("#name-input");
let spanValue = document.querySelector("#name-output").textContent;
console.log(spanValue);
console.log(nameInput);

nameInput.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    document.querySelector("#name-output").textContent = "Anonymous";
  } else {
    document.querySelector("#name-output").textContent =
      event.currentTarget.value;
  }
});
