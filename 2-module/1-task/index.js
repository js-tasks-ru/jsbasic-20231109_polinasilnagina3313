function sumSalary(salaries) {
  let sum = 0;

  for (const key in salaries) {
    const value = salaries[key];

    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
      continue;
    }
    sum += value;
  }

  return sum;
}
