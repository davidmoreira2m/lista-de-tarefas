const inputText = document.querySelector("#input-text");
const addButton = document.querySelector(".add-button");
const taskListContainer = document.querySelector(".task-list-container");

function addNewTask() {
   if (!inputText.value.trim()) {
      return;
   }

   const task = document.createElement("div");
   taskListContainer.appendChild(task);
   task.classList.add("task");

   const taskText = document.createElement("p");
   task.appendChild(taskText);
   taskText.innerText = inputText.value;

   const taskIcon = document.createElement("span");
   task.appendChild(taskIcon);
   taskIcon.innerText = "X";

   inputText.value = "";

   // Remover
   function removeTask() {
      task.remove();
   }
   taskIcon.addEventListener("click", removeTask);
}

addButton.addEventListener("click", addNewTask);
