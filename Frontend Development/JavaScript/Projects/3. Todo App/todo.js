let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  localStorage.setItem('todoList', JSON.stringify(todoList));
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button 
        class="delete-btn"
        onclick="deleteTodoItem(${i});">
          Delete
      </button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayItems();
}