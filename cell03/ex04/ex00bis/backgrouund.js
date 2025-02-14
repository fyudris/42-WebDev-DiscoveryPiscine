$(document).ready(function() {
	function random_color() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function change_color() {
		$("body").css("background-color", random_color());
	}

	$("#change-color").on("click", change_color);
});
