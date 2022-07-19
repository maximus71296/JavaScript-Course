// Task List App
let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function(event) {
    
    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();

    // Get Tasks from Local Storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    // Set to Local Storage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTask();

    window.reload();

});

// Display Task
let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length !== 0){
        let eachTask = '';
        for(let task of taskList){
            eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
            <span class="font-weight-bold">${task}</span>
            <button class="close">
                <i class="fa fa-times-circle"></i>
            </button>
        </li>`;
        }
        taskListEl.innerHTML = eachTask;
    }
};

displayTask();

// Remove Task
let taskListEL = document.querySelector('#task-list');
taskListEL.addEventListener('click', function (event) {
    let targetElement = event.target;
    if(targetElement.classList.contains('fa-times-circle')){
        let actualEL = targetElement.parentElement.parentElement;
        let selectedTask = actualEL.innerText;
        
        // Get task from Local Storage
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function (task) {
            return task.trim() !== selectedTask.trim(); 
        });
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTask();
    }   
});