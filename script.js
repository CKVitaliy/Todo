var arr = [];
var arrDone = [];
var task;
var input = document.getElementById("input");
input.addEventListener("keydown", createTask);
function showArr(a,b) {
    a.forEach(function show(el) {
        document.getElementById(b).appendChild(el);
    })
}

function createTask() {
    if (event.keyCode == 13) {
        task = document.createElement("li");
        task.innerHTML = "<span class='done'>&#9745;</span>" + input.value + "<span class='del'>&#9746;</span>";
        arr.push(task);
        showArr(arr, "tasks");
        input.value = "";
    }
}

document.getElementById("tasks").addEventListener("click", delTask);
function delTask() {
    var del = document.getElementsByClassName("del");
    for (var i=0; i<=del.length;i++){
        if (event.target == del[i]){
            arr.splice(i,1);
            var tasks = document.getElementById("tasks");
            while (tasks.lastChild){tasks.removeChild(tasks.lastChild)}
            showArr(arr, "tasks");
        }
    }
}

document.getElementById("tasks").addEventListener("click", doneTask);
function doneTask() {
    var done = document.getElementsByClassName("done");
    for (var i=0; i<=done.length;i++){
        if (event.target == done[i]){
            var x = arr.splice(i,1);
            var tasks = document.getElementById("tasks");
            while (tasks.lastChild){tasks.removeChild(tasks.lastChild)}
            showArr(arr, "tasks");
            console.log(x);
            arrDone.push((x[0]));
            showArr(arrDone, "doneTasks");
        }
    }
}