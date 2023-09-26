document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          const li = document.createElement("li");
          li.innerHTML = `
              ${taskText}
              <button class="delete-button">Delete</button>
          `;

          li.classList.add("grid-item"); // Add the grid-item class for animation

          li.querySelector(".delete-button").addEventListener("click", function () {
              const confirmation = confirm("Are you sure , completed this task?");
              if (confirmation) {
                  li.classList.add("removed"); // Add the removed class for animation
                  setTimeout(() => {
                      li.remove(); // Remove the element after the animation completes
                  }, 300); // Match the animation duration (0.3s)
              }
          });

          taskList.appendChild(li);
          taskInput.value = "";

          // Trigger a reflow to apply the animation
          setTimeout(() => {
              li.classList.add("added"); // Add the added class for animation
          }, 0);
      }
  });
});
