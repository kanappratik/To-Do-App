const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
const MAX_TASKS = 20;

function addTask() {
    if (inputBox.value === '') {
        alert("You should write something");
        return;
    }

    //number of tasks at maximum
    if (list.children.length >= MAX_TASKS) {
        alert("You cannot add more than 20 tasks.");
        return;
    }

    // create the list 
    let li = document.createElement('li');
    li.classList.add('task-item');  

    // checkbox 
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');  

    // task text element
    let taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = inputBox.value;

    // Add the checkbox and task text to the list 
    li.appendChild(checkbox);
    li.appendChild(taskText);

    // Add event listener to toggle the task's completion status
    checkbox.addEventListener('change', toggleTask);

    // Append the task to the list
    list.appendChild(li);

    // Clear the input box after adding the task
    inputBox.value = '';
}

function toggleTask(event) {
    const taskItem = event.currentTarget.parentElement; // Get the <li> of the task
    const checkbox = event.currentTarget;

    // If the checkbox is checked, mark the task as complete and remove it
    if (checkbox.checked) {
        const taskText = taskItem.querySelector('.task-text');
        taskText.style.textDecoration = 'line-through'; // Strike through the text
        taskText.style.color = 'gray'; // Change text color to gray

        // Optional: Remove the task after 1 second
        setTimeout(() => {
            taskItem.remove(); // Remove the task from the list
        }, 200); // Adjust this timeout duration as needed
    } else {
        const taskText = taskItem.querySelector('.task-text');
        taskText.style.textDecoration = 'none'; // Remove the strike-through
        taskText.style.color = 'black'; // Reset text color to black
    }
}


document.getElementById('Add-btn').addEventListener('click', addTask);

// Optional: Add task when the user presses the "Enter" key in the input box
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
