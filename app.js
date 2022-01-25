//elements of html to interact with js
const addTask = document.querySelector(".task__add--btn");//btn of add
const newTask = document.querySelector(".task__new");
const listTask = document.querySelector("#task__list");


//solve the value of the task
let task;
newTask.addEventListener("change", e =>{
  task = e.target.value;
});

addTask.addEventListener("click", () => {
  //checkbox for check the task
  let taskCheck = "";
  taskCheck += `<input type="checkbox" class="task__check">`;
  //create task, add the text and a class
  let taskContent = document.createElement("li");
  taskContent.classList.add ("task__text");
  taskContent.innerHTML = task + taskCheck;

  //create a button for delete the task with a class
  let deleteTask = document.createElement("button");
  deleteTask.classList.add ("task__add--btn");
  deleteTask.textContent = deleteTask.textContent + "x";

  //add the tasks and delete button
  listTask.appendChild(taskContent);
  taskContent.appendChild(deleteTask);

  //event for delete button(s)
  deleteTask.addEventListener("click", () =>{
    listTask.removeChild(taskContent);
  })
});









