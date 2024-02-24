// script.js
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    loadTasks();

    // Add task event
    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));
    }

    // Save tasks to local storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(li => li.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to the list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // script.js
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    loadTasks();

    // Add task event
    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));
    }

    // Save tasks to local storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(li => li.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to the list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // Edit task functionality
    // You need to add more code here to handle editing tasks

    // Mark task as completed or uncompleted
    // This is already handled in the addTask function with the 'completed' class
});

});
