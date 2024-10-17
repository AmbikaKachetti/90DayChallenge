const inputBoxEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");

function createtask(){
    if(inputBoxEl.value === ''){
        alert("You have to write something!!!!!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBoxEl.value;
        listContainerEl.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBoxEl.value = "";
    savedData();
}

listContainerEl.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        savedData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        savedData();
    }
}, false);

// to store the data in list-conatiner using setItem
function savedData(){
    localStorage.setItem("data", listContainerEl.innerHTML);
}

function showingTasks(){
    listContainerEl.innerHTML = localStorage.getItem("data");
}

showingTasks();