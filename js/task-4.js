const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const email = loginForm.elements.email.value;
	const password = loginForm.elements.password.value;

	if (!email || !password) {
		alert("Please fill in all fields.");
		return;
	}

	const formData = {
		email,
		password,
	};

	console.log("Previously entered login details : ", formData);
	alert(
		"Login details accepted, you can check them in the console.\n\nCan enter next login details..."
	);

	loginForm.reset();
});
