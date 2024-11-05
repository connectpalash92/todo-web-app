document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText}
            <div class="task-action-buttons">
                <button class="complete-btn">&#10003;</button>
                <button class="delete-btn">&#10007;</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function handleTaskAction(event) {
        if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.closest('li');
            taskList.removeChild(taskItem);
        }

        if (event.target.classList.contains('complete-btn')) {
            const taskItem = event.target.closest('li');
            taskItem.classList.toggle('completed');
        }
    }
});
