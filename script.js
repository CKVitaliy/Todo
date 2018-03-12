let arr = [];
let arrDone = [];
let input = document.getElementById("input");
let idi = 0;
input.addEventListener("keydown", createTask);

function showArr(a,b) {
    while (document.getElementById(b).lastChild){
        document.getElementById(b).removeChild(document.getElementById(b).lastChild)
    }
    a.forEach(function show(el) {
        let task = document.createElement("li");
        task.id = el.id;
        task.innerHTML = `<span class='done'>&#9745;</span>${el.name}<span class='del'>&#9746;</span>`;
        document.getElementById(b).appendChild(task);
    })
}

function createTask() {
    if (event.keyCode == 13) {
        let element = {};
        element.name = input.value;
        element.id = idi++;
        arr.push(element);
        showArr(arr, "tasks");
        input.value = "";
    }
}

document.getElementById("allTasks").addEventListener("click", doneTask);
function doneTask() {
    let done = document.getElementsByClassName("done");
    for (let i = 0; i<=done.length; i++){
        if (event.target === done[i]){
            let idArr = done[i].parentElement.id;
            let index = arr.findIndex(function (a) {
                return a.id == idArr;
            });
            let indexDone = arrDone.findIndex(function (a) {
                return a.id == idArr;
            });
            if (index !== -1){
                let el = arr.splice(index,1);
                showArr(arr, "tasks");
                arrDone.push(el[0]);
                showArr(arrDone, "doneTasks");
            } else {
                let el =arrDone.splice(indexDone,1);
                showArr(arrDone, "doneTasks");
                arr.push(el[0]);
                showArr(arr, "tasks");
            }
        }
    }
}

document.getElementById("allTasks").addEventListener("click", delTask);
function delTask() {
    let del = document.getElementsByClassName("del");
    for (let i = 0; i<=del.length; i++){
        if (event.target === del[i]){
            let idArr = del[i].parentElement.id;
            let index = arr.findIndex(function (a) {
                return a.id == idArr;
            });
            let indexDone = arrDone.findIndex(function (a) {
                return a.id == idArr;
            });
            if (index !== -1){
                arr.splice(index,1);
                showArr(arr, "tasks");
            } else {
                arrDone.splice(indexDone,1);
                showArr(arrDone, "doneTasks");
            }
        }
    }
}