const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of category:", categories.length);


categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  console.log(`Category: ${title}`);


  const elementLi = category.querySelectorAll("li").length;
  console.log("Elements:", elementLi);
});

// ==== styles.css ===  

const titleClass = document.querySelectorAll("h2");
titleClass.forEach(detalH => {
  const allTitle = detalH.classList.add("item-title");
})

const classUl = document.querySelectorAll(".item ul");
classUl.forEach(detalUl => {
  const allClassUl = detalUl.classList.add("item-block");
 
});

const classLi = document.querySelectorAll(".item ul li");
classLi.forEach(detalLi => {
  const allClass = detalLi.classList.add("item-detals");
  
});




// З використанням властивостей і методів 
// DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку 
// ul#categories знайде й виведе в консоль текст 
// заголовка елемента (тегу <h2>) і кількість 
// елементів у категорії (усіх <li>, вкладених 
//     у нього).

