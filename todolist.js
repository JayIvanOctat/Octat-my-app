function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("tasks");

        var li = document.createElement("li");
        li.textContent = taskText;

        var span = document.createElement("span");
        span.textContent = "❌";
        span.className = "delete";
        span.onclick = function() {
            li.remove();
        };

        li.appendChild(span);
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}