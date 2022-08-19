const inputText = document.querySelector("#input-text");
const addButton = document.querySelector(".add-button");
const taskListContainer = document.querySelector(".task-list-container");

const addNewTask = (name, isDone) => {
   const task = document.createElement("div");
   task.classList.add("task");
   taskListContainer.appendChild(task);

   const taskCheckBox = document.createElement("input");
   taskCheckBox.setAttribute("type", "checkbox");
   taskCheckBox.classList.add("task-checkbox");
   task.appendChild(taskCheckBox);

   const taskText = document.createElement("p");
   taskText.innerText = name;
   taskText.classList.add("task-text");
   task.appendChild(taskText);

   const taskIcon = document.createElement("i");
   taskIcon.classList.add("fa-solid");
   taskIcon.classList.add("fa-trash");
   task.appendChild(taskIcon);

   if (isDone === true) {
      taskCheckBox.checked = true;
      taskText.classList.add("done");
   }

   taskCheckBox.addEventListener("change", () => {
      if (taskCheckBox.checked === true) {
         taskText.classList.add("done");
      } else {
         taskText.classList.remove("done");
      }
      updateLS();
   });

   taskIcon.addEventListener("click", () => {
      task.remove();
      updateLS();
   });

   updateLS();
};

addButton.addEventListener("click", () => {
   if (!inputText.value.trim()) {
      inputText.classList.add("error");
      inputText.value = "";
      return;
   }
   addNewTask(inputText.value);
   inputText.value = "";
});

inputText.addEventListener("focus", () => {
   inputText.classList.remove("error");
});

const updateLS = () => {
   const tasks = taskListContainer.childNodes;

   const tasksLS = [...tasks].map((taskLS) => {
      const content = taskLS.querySelector("p");
      const isDone = content.classList.contains("done");
      return { descriptiom: content.innerText, isDone };
   });
   localStorage.setItem("tasks", JSON.stringify(tasksLS));
};

const refreshLS = () => {
   const tasksFromLS = JSON.parse(localStorage.getItem("tasks"));
   for (const taskLS of tasksFromLS) {
      addNewTask(taskLS.descriptiom, taskLS.isDone);
   }
};

refreshLS();
