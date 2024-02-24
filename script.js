
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');


    loadTasks();

   
    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));
    }

    function saveTasks() {
        const tasks = Array.from(taskList.children).map(li => li.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


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


document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

  
    loadTasks();

    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));
    }

    
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


});

});
