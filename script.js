const inputText = document.querySelector("#input-text");
const addButton = document.querySelector(".add-button");
const taskListContainer = document.querySelector(".task-list-container");

const addNewTask = () => {
   if (!inputText.value.trim()) {
      inputText.classList.add("error");
      inputText.value = "";
      return;
   }

   const task = document.createElement("div");
   task.classList.add("task");
   taskListContainer.appendChild(task);

   const taskCheckBox = document.createElement("input");
   taskCheckBox.setAttribute("type", "checkbox");
   taskCheckBox.classList.add("task-checkbox");
   task.appendChild(taskCheckBox);

   const taskText = document.createElement("p");
   taskText.innerText = inputText.value;
   taskText.classList.add("task-text");
   task.appendChild(taskText);

   const taskIcon = document.createElement("i");
   taskIcon.classList.add("fa-solid");
   taskIcon.classList.add("fa-trash");
   task.appendChild(taskIcon);

   inputText.value = "";

   taskCheckBox.addEventListener("change", () => {
      if (taskCheckBox.checked === true) {
         taskText.classList.add("done");
      } else {
         taskText.classList.remove("done");
      }
   });

   taskIcon.addEventListener("click", () => {
      task.remove();
   });
};

addButton.addEventListener("click", addNewTask);

inputText.addEventListener("focus", () => {
   inputText.classList.remove("error");
});
