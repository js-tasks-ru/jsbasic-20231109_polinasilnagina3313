function getMinMax(str) {
  const numbers = str
    .split(' ')
    .filter(Number)
    .map(Number);

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}