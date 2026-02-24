const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");

const taskList = [
  {
    value: "task 1",
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    value: "task 2",
    isCompleted: true,
    createdAt: new Date(),
    completedAt: new Date(),
  },
  {
    value: "task 3",
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    value: "task 4",
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
];
taskList.forEach((element, index) => {
  console.log(element, index)
  addTodo(element)

});

addBtn.addEventListener("click", handleAddTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    handleAddTodo();
  }
});

function handleAddTodo() {
  if (todoInput.value.trim() == "") return;

  addTodo(todoInput.value);
}

function addTodo(value = null) {
  if (!value) {
    alert("Please provide a task");
    return;
  }

  // created and appended todoItem to todolist
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoList.append(todoItem);

  // created and appended left div inside of todoItem
  const left = document.createElement("div");
  left.classList.add("left");
  todoItem.append(left);

  // created and appended input inside of left
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  left.append(checkbox);

  // created and appended span inside of left
  const span = document.createElement("span");
  span.innerHTML = value;
  left.append(span);

  // created and appended button inside of todoItem
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "❌";
  todoItem.append(deleteBtn);

  // empty todoINput
  todoInput.value = "";
}

todoList.addEventListener("click", (e) => {
  if (e.target.className.includes("delete-btn")) {
    e.target.parentElement.remove();
    console.log("btn was clicked");
  }
});