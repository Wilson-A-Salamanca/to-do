//elements of html to interact with js
const addTask = document.querySelector(".task__add--btn");//btn of add
const newTask = document.querySelector(".task__new");
const listTask = document.querySelector("#task__list");


//solve the value of the task
let task;
newTask.addEventListener("change", e =>{
  task = e.target.value;
});
let cont = 0;
addTask.addEventListener("click", () => {
  //checkbox for check the task and revome button
  let taskCheck = "";
  taskCheck += `<input type="checkbox" class="task__check">
  <button class="task__add--btn" id="remove__task">x</button>`;
  //create task, add the text, a class and revome button
  let taskContent = document.createElement("li");
  taskContent.classList.add ("task__text");
  taskContent.setAttribute("id", cont++);//contador
  taskContent.innerHTML = task + taskCheck;
  //add the tasks
  listTask.appendChild(taskContent);
});

listTask.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON"){
    document.getElementById(e.target.parentNode.id).remove();
  }

  if (e.target.nodeName === "INPUT"){
    //e.target.parentNode.textContent.setAttribute("class", "chikis")
    console.log(e.target.parentNode.textContent)
  }
  e.preventDefault();
})
