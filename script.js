// FIRST TASK=========================================================================================
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//      1) першого елемента списку
//      2) останнього елемента списку
//      3) другого елемента списку
//      4) четвертого елемента списку
//      5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

// SOLUTION

// const getElem = document.getElementById("list");
// const firstEl = getElem.children[0];
// const fivesEl = getElem.children[getElem.children.length - 1];
// const secondEl = getElem.children[1];
// const thirdEl = getElem.children[3];
// const fourthEl = getElem.children[2];
// console.log(
//   `${firstEl.textContent}, ${fivesEl.textContent}, ${secondEl.textContent}, ${thirdEl.textContent}, ${fourthEl.textContent}`
// );

// TASK 2=========================================================================================
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

// SOLUTION
// document.body.children[0].style.backgroundColor = "lightgreen";
// const firstDivList = document.getElementById("myDiv");
// firstDivList.children[0].style.fontWeight = "700";
// firstDivList.children[1].style.color = "red";
// firstDivList.children[2].style.textDecoration = "underline";
// firstDivList.children[firstDivList.children.length - 1].style.fontStyle =
//   "italic";
// const secondDivList = document.getElementById("myList");
// secondDivList.style.listStyle = "none";
// secondDivList.style.display = "flex";
// document.body.getElementsByTagName("span")[0].style.display = "none";

// TASK 3=========================================================================================
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

// SOLUTION
// document.body.innerHTML = `
//     <main class="mainClass check item">
//         <div id="myDiv">
//             <p>First paragraph</p>
//         </div>
//     </main>
// `;

// TASK 4=========================================================================================
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez

// // SOLUTION
// const fullNameInp = document.querySelector('[data-form="ПІБ"]');
// const phoneNumberInp = document.querySelector('[data-form="Номер телефону"]');
// const birthDayInp = document.querySelector('[data-form="Дата народження"]');
// const emailInp = document.querySelector('[data-form="Електронна пошта"]');
// const btn = document.querySelector(".btn");
// const outData = document.querySelector(".out");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const fullNameValue = fullNameInp.value;
//   const phoneNumberValue = phoneNumberInp.value;
//   const birthDayValue = birthDayInp.value;
//   const emailValue = emailInp.value;

//   outData.innerHTML = `
//         ПІБ: ${fullNameValue}, <br>
//         Номер телефону: ${phoneNumberValue}, <br>
//         Дата народження: ${birthDayValue}, <br>
//         Електронна пошта: ${emailValue}
//     `;
//   fullNameInp.value = "";
//   phoneNumberInp.value = "";
//   birthDayInp.value = "";
//   emailInp.value = "";
// });

// TASK 5=========================================================================================
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo
/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/
// SOLUTION
// const circle = document.querySelectorAll(".circle");
// let circleValue;

// const newCircle = Array.from(circle).map((item) => {
//   circleValue = item.getAttribute("data-anim");
//   item.classList.add(circleValue);
//   return circleValue;
// });

// circle.forEach((item) => {
//   const animation = item.classList.contains(circleValue);
//   console.log(`Animation run: ${animation}`);
// });

// TASK 6=========================================================================================
/* 
Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
Придумати ще 2 варіації, відяких буде залежати ціна товару.
https://codepen.io/misha_klymenko/pen/dyjyeGO
*/
// SOLUTION
let price = 189.99;
const colorButtons = document.querySelectorAll(".color");
const priceElement = document.querySelector("#outprice");

function priceUpdate(newPrice) {
  priceElement.textContent = newPrice.toFixed(2);
}

colorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedColor = this.getAttribute("color");

    if (selectedColor === "blue") {
      price = 189.99;
    } else if (selectedColor === "red") {
      price = 201.52;
    } else if (selectedColor === "green") {
      price = 210.99;
    } else if (selectedColor === "orange") {
      price = 220.39;
    } else if (selectedColor === "black") {
      price = 225.99;
    }
    priceUpdate(price);
  });
});
