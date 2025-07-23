let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

function addTask() {
    if (ipt.value.trim() === "") return;

    let item = document.createElement("li");
    item.classList.add("task-enter");

    // Task text span
    let taskText = document.createElement("span");
    taskText.innerText = ipt.value;

    // Complete button (green tick)
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.classList.add("complete");

    // Delete button (red cross)
    let delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa fa-close"></i>';
    delBtn.classList.add("delete");

    // Add all to item
    item.appendChild(completeBtn);
    item.appendChild(taskText);
    item.appendChild(delBtn);
    ul.appendChild(item);

    ipt.value = ""; // Clear input
}

// Add task when button is clicked
btn.addEventListener("click", addTask);

// Add task when Enter key is pressed
ipt.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// Event delegation for complete/delete
ul.addEventListener("click", function(event) {
    const target = event.target;

    // Mark as complete
    if (target.closest(".complete")) {
        const listItem = target.closest("li");
        listItem.classList.toggle("completed");
    }

    // Delete item
    if (target.closest(".delete")) {
        const listItem = target.closest("li");
        listItem.remove();
        console.log("DELETED");
    }
});
