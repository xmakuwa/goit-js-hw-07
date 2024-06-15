const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
	const categoryName = category.querySelector("h2").textContent;
	const categoryElem = category.querySelectorAll("li");
	console.log(`\n${categoryElem.length} elements in category: ${categoryName}`);
});
