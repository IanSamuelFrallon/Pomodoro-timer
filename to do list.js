// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);

        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Attach event listener to the checkbox for marking as completed
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
    }
}

// Add task when the "Add" button is clicked
addTaskButton.addEventListener('click', addTask);

// Add task when Enter key is pressed in the input field
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
