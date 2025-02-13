let todos = [];
const storageKey = "todo_list";

// Load stored tasks on page load
window.onload = () => {
    const savedTodos = getTodos();
    if (savedTodos) {
        todos = savedTodos;
        renderList();
    }
};

// Add a new task
function newItem() {
    let value = prompt("Enter a new task:");
    if (!value) return;

    // Prevent duplicate entries
    if (todos.includes(value)) {
        alert("This task already exists!");
        return;
    }

    todos.unshift(value);
    saveTodos();
    renderList();
	console.log("Current Todos:", getTodos());
}

// Remove a task
function removeItem(event) {
    const value = event.target.textContent;
    const confirmDelete = confirm(`Do you want to remove "${value}"?`);

    if (confirmDelete) {
        todos = todos.filter(todo => todo !== value);
        saveTodos();
        renderList();
    }
	console.log("Current Todos:", getTodos());
}

// Render the list dynamically
function renderList() {
    const list = document.getElementById("ft_list");
    list.innerHTML = ""; // Clear the list

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        li.onclick = removeItem;
        list.appendChild(li);
    });
}

// Save tasks to localStorage
function saveTodos() {
    localStorage.setItem(storageKey, JSON.stringify(todos));
}

// Retrieve tasks from localStorage
function getTodos() {
    const storedTodos = localStorage.getItem(storageKey);
    return storedTodos ? JSON.parse(storedTodos) : [];
}
