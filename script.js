document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const prioritySelect = document.getElementById("priority"); // Add an ID to your priority selector

        if (taskText !== "") {
            const li = document.createElement("li");
            const selectedPriority = prioritySelect.value; // Get the selected priority

            li.innerHTML = `
                ${taskText} (Priority: ${selectedPriority})
                <button class="delete-button">Delete</button>
            `;

            li.classList.add("grid-item");

            li.querySelector(".delete-button").addEventListener("click", function () {
                const confirmation = confirm("Are you sure you want to delete this task?");
                if (confirmation) {
                    li.classList.add("removed");
                    setTimeout(() => {
                        li.remove();
                    }, 300);
                }
            });

            taskList.appendChild(li);
            taskInput.value = "";
            prioritySelect.value = "low"; // Reset the priority selector
            setTimeout(() => {
                li.classList.add("added");
            }, 0);

            sortTasks(); // Sort the tasks by priority
        }
    });

    // Function to sort tasks by priority
    function sortTasks() {
        const tasks = [...taskList.querySelectorAll(".grid-item")];
        tasks.sort((a, b) => {
            const priorityA = a.querySelector(".priority").value;
            const priorityB = b.querySelector(".priority").value;
            return priorityA.localeCompare(priorityB);
        });

        // Remove all tasks from the list and re-append them in the sorted order
        taskList.innerHTML = "";
        tasks.forEach(task => {
            taskList.appendChild(task);
        });
    }
});

// When adding a new task, assign a CSS class based on priority
addTaskButton.addEventListener("click", function () {
    // ...
    li.classList.add("grid-item");
    li.classList.add(`${selectedPriority}-priority`); // Add the priority class
    // ...
});
