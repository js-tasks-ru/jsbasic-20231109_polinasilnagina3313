
function print(text) {
  console.log(text);
}


function isValid(name) {
  if (!name) {
    return false;
  }

  name = name.trim();

  if (name.length < 4) {
    return false;
  }

  if (name.indexOf(' ') > -1) {
    return false;
  }
  
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
