const toDo = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todolist");
let toDos = [];

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDO);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}
function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDO(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

toDo.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  saveToDos();
  paintToDo(newTodoObj);
});

const saveToDo = localStorage.getItem("toDos");

if (saveToDo !== null) {
  const parsedToDos = JSON.parse(saveToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
