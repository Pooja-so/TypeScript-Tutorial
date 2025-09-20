import "./style.css";
/* Declaring the types */
interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

// TodoList
let todoList: Array<Todo> = [
  // {
  //   id: crypto.randomUUID(),
  //   title: "Homework",
  //   isCompleted: false,
  // },
];

/* DOM elements Type Assertion */
const form = document.getElementById("my-form") as HTMLFormElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

form.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();

  // Creating a TODO object from the input field "inputTodo"
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: todoInput.value,
    isCompleted: false,
  };

  // Appending todo to our todoList
  todoList.push(todo);
  // Clear input field
  todoInput.value = "";

  // Display todoList
  displayTodos(todoList);
  console.log(todoList);
};

// Display todoList in todoContainer
const todoContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
todoContainer.className = "container";

function generateTodo(title: string, isCompleted: boolean, id: string) {
  const todoDiv = document.createElement("div") as HTMLDivElement;
  todoDiv.className = "todo";

  // a. Creating Paragraph tag for title
  const titlePara: HTMLParagraphElement = document.createElement("p");
  titlePara.innerText = title;
  titlePara.className = isCompleted ? "textCut" : "";

  // b. Creating a checkbox: First create input element then set type Attribute to checkbox
  const checkbox = document.createElement("input") as HTMLInputElement;
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "isCompleted";
  checkbox.checked = isCompleted;
  checkbox.onchange = () => {
    titlePara.className = checkbox.checked ? "textCut" : "";
    todoList.find((todo) => {
      if (todo.id === id) todo.isCompleted = checkbox.checked;
    });
  };

  // c. Creating Paragraph tag for title
  const deleteButton = document.createElement("button") as HTMLButtonElement;
  deleteButton.innerText = "Delete";
  deleteButton.className = "deleteBtn";
  deleteButton.onclick = () => {
    deleteTodo(id);
  };

  // Appending checkbox, titlePara and deleteButton to the todoDiv
  todoDiv.append(checkbox, titlePara, deleteButton);

  // Now appending entire todoDiv to the todoContainer
  todoContainer.append(todoDiv);
}

function displayTodos(todoList: Todo[]) {
  todoContainer.innerText = "";
  todoList.forEach((todo) => {
    generateTodo(todo.title, todo.isCompleted, todo.id);
  });
}

function deleteTodo(id: string) {
  todoList = todoList.filter((todo) => todo.id != id);
  displayTodos(todoList);
}
