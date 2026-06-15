
let inputTask = document.getElementById("inputTask");


let list = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let deleteAllBtn = document.getElementById("deleteAllBtn");


if (list.children.length <= 0) {
    list.innerHTML = `<h3 class="text-center">No Task Added Yet</h3>`;
}



function addTodo() {

    let inputVal = inputTask.value;

    if (!inputVal.trim()) {
        return sweety("error","Oops!","Please Enter a Task!"
        );
    }

    
    if (list.children[0]?.tagName === "H3") {
        list.innerHTML = "";
    }

    let createLI = document.createElement("li");
    let pTag = document.createElement("p");

    let parentSpan = document.createElement("span");
    let editSpan = document.createElement("span");
    let deleteSpan = document.createElement("span");

    pTag.innerText = inputVal;

    editSpan.innerText = "Edit";
    deleteSpan.innerText = "Delete";

    parentSpan.classList.add("iconsParent");
    editSpan.classList.add("edit");
    deleteSpan.classList.add("delete");

    editSpan.setAttribute("onclick", "editElem(this)");
    deleteSpan.setAttribute("onclick", "singleElem(this)");

    parentSpan.appendChild(editSpan);
    parentSpan.appendChild(deleteSpan);

    createLI.appendChild(pTag);
    createLI.appendChild(parentSpan);

    list.appendChild(createLI);

    inputTask.value = "";

    sweety("success","Task Added","Task Added Successfully!"
    );
}


function singleElem(e) {

    let li = e.parentNode.parentNode;

    list.removeChild(li);

    if (list.children.length <= 0) {
        list.innerHTML = `<h3 class="text-center">No Task Added Yet</h3>`;
    }

    sweety("success","Task Deleted","Task Deleted Successfully!"
    );
}


async function editElem(e) {

    let li = e.parentNode.parentNode;

    let oldText = li.firstElementChild.innerText;

    const { value: updatedText } = await Swal.fire({
        title: "Edit Task",
        input: "text",
        inputValue: oldText,
        inputPlaceholder: "Update your task",
        showCancelButton: true,
        confirmButtonText: "Update",
        cancelButtonText: "Cancel",
        inputValidator: (value) => {
            if (!value.trim()) {
                return "Please Enter a Task!";
            }
        }
    });

    if (updatedText) {

        li.firstElementChild.innerText = updatedText;

        sweety("success","Task Updated","Task Updated Successfully!"
        );
    }
}

// Delete All Todos
function deleteAll() {

    if (list.children.length <= 0 ||
        list.innerHTML.includes("No Task Added Yet")) {

        return sweety("info","No Tasks","There are no tasks to delete!"
        );
    }

    Swal.fire({
        title: "Are you sure?",
        text: "All tasks will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete All",
        cancelButtonText: "Cancel"
    }).then((result) => {

        if (result.isConfirmed) {

            list.innerHTML = `<h3 class="text-center">No Task Added Yet</h3>`;

            sweety("success","Deleted!","All Todos Deleted Successfully!"
            );
        }
    });
}

function sweety(icon, title, text) {
    return Swal.fire({icon: icon,title: title,text: text,
    });
}


addBtn.addEventListener("click", addTodo);
deleteAllBtn.addEventListener("click", deleteAll);