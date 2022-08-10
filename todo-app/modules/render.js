import createElements from './createElements.js';
const {
  createTitle,
  createInput,
  createSelect,
  createLabel,
  createForm,
  createBtn,
  createTable,
  createRow,
} = createElements;

const renderTasks = (table, data) => {
  const tasks = data.map(createRow);
  table.append(...tasks);
  return tasks;
};

const renderApp = (selector) => {
  const title = createTitle();
  const form = createForm();
  const input = createInput();
  const select = createSelect();
  const label = createLabel();
  const btnSave = createBtn('submit', 'Сохранить', 'btn-primary', 'me-3');
  const btnReset = createBtn('reset', 'Очистить', 'btn-warning');
  btnSave.disabled = true;
  label.append(input);
  form.append(label, select, btnSave, btnReset);

  const table = createTable();

  const wrapper = document.createElement('div');
  wrapper.classList.add('table-wrapper');
  wrapper.append(table);

  selector.append(title, form, wrapper);
  form.input = input;
  form.select = select;
  form.btnSave = btnSave;
  form.btnReset = btnReset;

  form.input.addEventListener('input', (e) => {
    if (e.target.value !== '') {
      form.btnSave.disabled = false;
    } else {
      form.btnSave.disabled = true;
    }
  });

  return {
    form,
    table
  };
};

export default {
  renderTasks,
  renderApp,
};