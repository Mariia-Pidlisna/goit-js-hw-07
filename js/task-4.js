const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", handClick);

function handClick(event) {
    event.preventDefault();
    
    const elements = event.target.elements;
    
    const infoForm = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    if (!infoForm.email || !infoForm.password) {
        alert("All form fields must be filled in");
        return;
    }
    
    console.log(infoForm);
    
    event.target.reset();
}


// +1. відправлення форми form.login-form повинна відбуватися за подією submit.
// +2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те,
//  що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація 
//  має відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома 
// властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, 
// очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// +5. При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми 
// методом reset.

const labelClass = document.querySelectorAll("label");
labelClass.forEach(detalLabel => {
  const allTitle = detalLabel.classList.add("login-form-label");
})

const inputClass = document.querySelectorAll("label input");
inputClass.forEach(detalInput => {
  const allTitle = detalInput.classList.add("login-form-input");
})

const buttonClass = document.querySelector("button");
buttonClass.classList.add("button-form")