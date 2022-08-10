import createElements from './modules/createElements.js';
const {
  createModal,
} = createElements;

import actions from './modules/actions.js';
const {
  getStorage,
  taskControlers,
  putNumbersOnTr,
  formControls,
} = actions;

import render from './modules/render.js';
const {
  renderTasks,
  renderApp,
} = render;

{
  const init = (selector) => {
    const app = document.querySelector(selector);
    app.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center',
      'justify-content-center', 'flex-column');
    createModal(app);

    const modalForm = document.querySelector('.zen-modal__form');
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = modalForm.userName.value;
      document.querySelector('.zen-modal').style.display = 'none';
      const data = getStorage(userName);

      const {
        form,
        table,
      } =
      renderApp(app);
      renderTasks(table.tbody, data);
      taskControlers(table.tbody, userName);
      formControls(form, table.tbody, userName);
      putNumbersOnTr();
    });
  };

  window.toDoList = init;
}


toDoList('.app-container');