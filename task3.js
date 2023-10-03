let registerLogin = prompt("Придумайте логин");
let registerPass = prompt("Придумайте пароль");

alert("Пройдите авторизацию");

let authLogin;
let authPass;

do {
  authLogin = prompt("Введите свой логин");
  authPass = prompt("Введите свой пароль");

  if (authLogin === registerLogin && authPass === registerPass) {
    alert("Все ок");
    break;
  } else {
    alert("Логин или пароль неверный");
  }
} while (true);