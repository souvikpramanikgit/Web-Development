const addbtn = document.querySelector("#add-btn");
const newtask = document.querySelector("#wrapper input");
const alltask = document.querySelector("#tasks");
const errortext = document.getElementById("#error");
const countvalue = document.querySelector(".count-value");
let taskcount = 0;
const displaycount = (taskcount) => {
    countvalue.innerText = taskcount;
};

const addtask = () => { 
    const taskname = newtask.value.trim();
    error.style.display = "none";
    if (!taskname) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

    const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskname}</span>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;

    alltask.insertAdjacentHTML("afterbegin", task);

    const deletebuttons = document.querySelectorAll(".delete");
    deletebuttons.forEach((button) => {
        button.onclick = () => {
            button.parentNode.remove();
            taskcount -= 1;
            displaycount(taskcount);
        };
    });

    const editbuttons = document.querySelectorAll(".edit");
    editbuttons.forEach((editBtn) => {
        editBtn.onclick = (e) => {
            let targetelement = e.target;
            if (!(e.target.className == "edit")) {
                targetelement = e.target.parentElement;
            }
            newtask.value = targetelement.previousElementSibling?.innerText;
            targetelement.parentNode.remove();
            taskcount -= 1;
            displaycount(taskcount);
        };
    });

    const taskscheck = document.querySelectorAll(".task-check");
    taskscheck.forEach((checkbox) => {
        checkbox.onchange = () => {
            checkbox.nextElementSibling.classList.toggle("completed");
            if (checkbox.checked) {
                taskcount -= 1;
            }
            else {
                taskcount += 1;
            }
            displaycount(taskcount);
        };
    });
    taskcount += 1;
    displaycount(taskcount);
    newtask.value = "";
};

addbtn.addEventListener("click", addtask);

window.onload = () => {
    taskcount = 0;
    displaycount(taskcount);
    newtask.value = "";
}