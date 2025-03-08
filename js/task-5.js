const bodyColor = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});


// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку 
// на button.change-color і задає це значення кольору текстовим вмістом для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// На що буде звертати увагу ментор при перевірці:

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору

const pClass = document.querySelector(".widget p");
pClass.classList.add("color-p");


