import createElements from './createElements.js';
const {
  createRow,
} = createElements;

const putNumbersOnTr = () => {
  const trs = document.querySelectorAll('.task-number');
  trs.forEach((item, index) => {
    item.textContent = `${index + 1}`;
  });
};

const getStorage = (userName) => {
  const storageData = localStorage.getItem(userName);
  return storageData === null ? [] : JSON.parse(storageData);
};

const setStorage = (userName) => {
  const tasks = document.querySelectorAll('tbody tr');
  const arr = [];

  tasks.forEach((item) => {
    const task = {};
    task.trClass = item.className;
    task.taskClass = item.children[1].className;
    task.task = item.children[1].textContent;
    task.status = item.children[2].textContent;

    arr.push(task);
  });

  localStorage.setItem(userName, JSON.stringify(arr));
};

const taskControlers = (task, userName) => {
  task.addEventListener('click', (e) => {
    const target = e.target;
    const tr = target.closest('tr');
    if (target.classList.contains('btn-danger')) {
      if (confirm('Вы уверены?')) {
        tr.remove();
        putNumbersOnTr();
        setStorage(userName);
      }
    }
    if (target.classList.contains('btn-success')) {
      tr.children[2].textContent = 'Выполнена';
      tr.children[1].classList.add('text-decoration-line-through');
      tr.removeAttribute('class');
      tr.classList.add('table-success');
      setStorage(userName);
    }

    if (target.classList.contains('btn-info')) {
      if (tr.children[1].contentEditable === 'true') {
        tr.children[1].contentEditable = false;
        tr.style.outline = 'none';
      } else {
        tr.children[1].contentEditable = true;
        tr.style.outline = '1px solid crimson';
      }
    }
  });
};

const addTask = (table, task) => {
  const newTask = createRow(task);
  table.append(newTask);
};


const formControls = (form, table, userName) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);

    addTask(table, newTask)
    putNumbersOnTr();
    form.reset();
    setStorage(userName);
  });
};

export default {
  getStorage,
  setStorage,
  taskControlers,
  addTask,
  putNumbersOnTr,
  formControls,
};