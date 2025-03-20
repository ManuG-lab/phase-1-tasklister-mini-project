document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;

   
    const taskItem = document.createElement("li");
    taskItem.textContent = newTask;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    
    taskForm.reset();
  });
});
