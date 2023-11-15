function factorial(n) {
  if (n < 0) {
    throw new Error('Ошибка выражения');
  }

  let result = 1;

  while (n) {
    result *= n--;
  }
  return result;
}
