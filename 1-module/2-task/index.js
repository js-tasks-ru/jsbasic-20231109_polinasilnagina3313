
function print(text) {
  console.log(text);
}


function isValid(name) {
  name = name.trim();

  if (name.lenght >= 4) {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
