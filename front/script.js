const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', () => {
    if(input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.addEventListener('click', () => li.classList.toggle('done'));
        list.appendChild(li);
        input.value = "";
    }
});