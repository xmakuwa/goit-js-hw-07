function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const destroyButton = document.querySelector("[data-destroy]");
const createButton = document.querySelector("[data-create]");
const boxes = document.querySelector("#boxes");


destroyButton.addEventListener("click", () => {
	destroyBoxes();
});

function destroyBoxes() {
	boxes.innerHTML = "";
	document.querySelector("#controls input").value = "";
}

createButton.addEventListener("click", () => {
	const amount = Number(controls.querySelector("input").value);
	createBoxes(amount);
});

// Create Boxes
function createBoxes(amount) {
	const boxSize = 30;
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < amount; i++) {
		const size = boxSize + i * 10;
		const div = document.createElement("div");
		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
		fragment.appendChild(div);
	}

	boxes.appendChild(fragment);
}
