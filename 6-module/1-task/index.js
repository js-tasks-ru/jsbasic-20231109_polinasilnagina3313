export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.init();
  }

  init() {
    this.setHTML();
    this.addListeners();
  }

  addListeners() {
    const btnList = this.elem.querySelectorAll('button');

    btnList.forEach(btn => {
      btn.addEventListener('click', this.handleBtnClick);
    });
  }

  handleBtnClick(event) {
    const row = event.currentTarget.parentElement.parentElement;
    row.remove();
  }

  setHTML() {
    this.elem.innerHTML = this.createHTML();
  }

  createHTML() {
    return `
      <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.rows.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button>X</button></td>
          </tr>              
        `).join('')}
      </tbody>`;
  }
}
