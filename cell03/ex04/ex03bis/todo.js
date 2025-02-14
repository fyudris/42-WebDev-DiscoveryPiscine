$(document).ready(function () {
	const storageKey = "todo_list";
	let todos = getTodos();

	// Load stored tasks on page load
	renderList();

	// Add a new task
	$("#newTaskBtn").on("click", function () {
		let value = prompt("Enter a new task:");
		if (!value) return;

		if (todos.includes(value)) {
			alert("This task already exists!");
			return;
		}

		todos.unshift(value);
		saveTodos();
		renderList();
		console.log("Current Todos:", getTodos());
	});

	// Remove a task using event delegation
	$("#ft_list").on("click", "li", function () {
		const value = $(this).text();
		if (confirm(`Do you want to remove "${value}"?`)) {
			todos = todos.filter(todo => todo !== value);
			saveTodos();
			renderList();
		}
		console.log("Current Todos:", getTodos());
	});

	// Render the list dynamically
	function renderList() {
		$("#ft_list").empty(); // Clear the list
		todos.forEach(todo => {
			$("#ft_list").append(`<li>${todo}</li>`);
		});
	}

	// Save tasks to localStorage
	function saveTodos() {
		localStorage.setItem(storageKey, JSON.stringify(todos));
	}

	// Retrieve tasks from localStorage
	function getTodos() {
		return JSON.parse(localStorage.getItem(storageKey)) || [];
	}
});
