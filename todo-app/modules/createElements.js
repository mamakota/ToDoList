const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';
  return title;
};

const createInput = () => {
  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'text';
  input.placeholder = 'ввести задачу';
  input.name = 'task';
  input.required = true;
  return input;
};

const createSelect = () => {
  const select = document.createElement('select');
  select.classList.add('custom-select', 'custom-select-lg', 'me-3');
  const options = `<option value="table-light">обычная</option>
  <option value="table-warning">важная</option>
  <option value="table-danger">срочная</option>`;
  select.insertAdjacentHTML('beforeend', options);
  select.style.padding = '0.375rem 0.75rem';
  select.name = 'trClass';

  return select;
};

const createLabel = () => {
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  return label;
};

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  return form;
};

const createBtn = (type, text, ...classes) => {
  const btn = document.createElement('button');
  btn.type = type;
  btn.classList.add('btn');
  classes.forEach(item => {
    btn.classList.add(item);
  });
  btn.textContent = text;
  return btn;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('afterbegin',
    `<tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>`);

  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  table.tbody = tbody;
  return table;
};

const createRow = ({
  trClass,
  taskClass,
  task,
  status,
}) => {
  const tr = document.createElement('tr');
  tr.classList.add(trClass);
  const tdNumber = document.createElement('td');
  tdNumber.classList.add('task-number');
  const tdTask = document.createElement('td');
  tdTask.className = taskClass === undefined ? '' : taskClass;
  tdTask.textContent = task;
  const tdStatus = document.createElement('td');
  tdStatus.classList.add('task-status');
  tdStatus.textContent = status === undefined ? 'В процессе' : status;
  const tdBtns = document.createElement('td');
  const btnDel = createBtn('button', 'Удалить', 'btn-danger', 'me-1');
  const btnComplete = createBtn('button', 'Завершить', 'btn-success', 'me-1');
  const btnEdit = createBtn('button', 'Редактировать', 'btn-info');
  tdBtns.append(btnDel, btnComplete, btnEdit);
  tr.append(tdNumber, tdTask, tdStatus, tdBtns);
  return tr;
};

const createModal = (selector) => {
  const modal = `<div class="zen-modal" style="background: url(https://steamuserimages-a.akamaihd.net/ugc/776234950410894383/64AAB79ABC73B74A688A2A9E5D5279B8C821DDC7/) no-repeat;position: fixed;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: black;">
  <form class="zen-modal__form" action="" style="display: flex;
  flex-direction: column;">
    <input required name="userName" class="zen-modal__input mb-3" type="text" 
    placeholder="Введите ваше имя">
    <button type="submit">Первая ката</button>
  </form>
</div>`;

  selector.insertAdjacentHTML('beforeend', modal);
};

export default {
  createTitle,
  createInput,
  createSelect,
  createLabel,
  createForm,
  createBtn,
  createTable,
  createRow,
  createModal,
};