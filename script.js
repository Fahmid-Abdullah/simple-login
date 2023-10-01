const btn = document.getElementById("login-btn");

btn.addEventListener("click", () => {
	let username = document.getElementById("inp-user");
	let password = document.getElementById("inp-pass");

	if ((username.value == "admin") && (password.value == "admin")) {
		console.log("SUCCESS!");
	}
});