const inputBoxEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");
let currentEditTask = null;

function createtask() {
    if (inputBoxEl.value === '') {
        alert("You have to write something!!!!!");
    } else {
        if (currentEditTask) {
            currentEditTask.innerHTML = inputBoxEl.value + getButtons();
            currentEditTask = null;  // Clear the current task being edited
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBoxEl.value + getButtons();
            listContainerEl.appendChild(li);
        }
    }
    inputBoxEl.value = "";  // Clear input field
    savedData();
}

function getButtons() {
    return `<div class="btn-group"><button class="edit-btn">Edit</button><button class="delete-btn">\u00d7</button></div>`;
}

// Add event listener for Edit and Delete buttons
listContainerEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.parentElement.remove();
        savedData();
    } else if (event.target.classList.contains("edit-btn")) {
        currentEditTask = event.target.parentElement.parentElement;
        inputBoxEl.value = currentEditTask.firstChild.textContent.trim();  // Put text into input for editing
    } else if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        savedData();
    }
}, false);

// to store the data in list-container using setItem
function savedData() {
    localStorage.setItem("data", listContainerEl.innerHTML);
}

function showingTasks() {
    listContainerEl.innerHTML = localStorage.getItem("data");
}

showingTasks();
