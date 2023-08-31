document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        clearCompletedTasks();
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('fade-in'); 
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        updateTaskListeners();
    }

    function updateTaskListeners() {
        const deleteButtons = document.querySelectorAll('.deleteBtn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.remove();
            });
        });

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                checkbox.parentElement.classList.toggle('completed');
            });
        });
    }

    function clearCompletedTasks() {
        const completedItems = document.querySelectorAll('.completed');
        completedItems.forEach(item => {
            item.classList.add('fade-out');
            setTimeout(() => {
                item.remove();
            }, 500);
        });
    }
});
