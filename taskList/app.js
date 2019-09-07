const form = document.querySelector('#task-form');
const tasklist = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded',getTasks)
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('keyup',filterTasks);
}
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null)
        let=[];
    else
        let = JSON.parse(localStorage.getItem('tasks'));
    
    let.forEach(element => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(element));
        const link =   document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML='<i class = "fa fa-remove"></i>';
        li.appendChild(link); 
        tasklist.appendChild(li);    });
}

function filterTasks(e){

    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task){
        var item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block';
        }
        else
            task.style.display = 'none';    
    });
}

function clearTasks(){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.removeItem('tasks');
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?"))
        {
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();   
        }
    }
}

function removeTaskFromLocalStorage(taskItem){

    let tasks;
    if(localStorage.getItem('tasks') === null)
        tasks=[];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task)
        {
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function addTask(e){
    if(taskInput.value === '')
        alert("add a Task");

    else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link =   document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML='<i class = "fa fa-remove"></i>';
        li.appendChild(link); 
        tasklist.appendChild(li);

        storeInLocalStorage(taskInput.value);

        taskInput.value='';
    }
    e.preventDefault();
}

function storeInLocalStorage(task){

    let tasks;
    if(localStorage.getItem('tasks') === null)
        tasks = [];
    else 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}