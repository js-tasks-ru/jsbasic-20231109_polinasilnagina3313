function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const ceils = row.querySelectorAll('td');

    ceils.forEach((ceil, index) => {
      if (!ceil.hasAttribute('data-available') && index === 3) {
        row.setAttribute('hidden', true);
      }

      if (index === 2 && ceil.innerText === 'm') {
        row.classList.add('male');
      } else if (index === 2 && ceil.innerText === 'f') {
        row.classList.add('female');
      }

      if (index === 1 && Number(ceil.innerText) < 18) {
        row.style.textDecoration = 'line-through';
      }

      if (ceil.getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else if (ceil.getAttribute('data-available') === 'false') {
        row.classList.add('unavailable');
      }
    });
  });
}
