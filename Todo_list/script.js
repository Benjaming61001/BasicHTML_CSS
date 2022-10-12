let taskList = [];

function addTask() {
    const taskAdd = newTask.value;

    taskList.push(taskAdd);

    showList();
}

function showList() {
    list.innerHTML = createList()
}

function createList() {
    let ul = `<ul>`

    taskList.forEach((task, index) => {
        ul += `<li>${task}
                    <button onclick="remove(${index})" class="fa-solid fa-minus btn-remove"></button>
                </li>`
    })

    return ul + `</ul>`
}

function remove(removeIndex) {
    taskList = taskList.filter((item, index) => {
        return index !== removeIndex
    })

    showList();
}