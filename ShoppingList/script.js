var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("ul > li");
var deleteButton = document.querySelectorAll("del");
var defaultItems = [
	'Notebook',
	'Yogurt',
	'Pizza',
	'Salad',
	'Pineapple',
	'Kiwis'
];

for (var i = 0; i < defaultItems.length; i++) {
	createListElement(defaultItems[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement(itemText) {
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(itemText));
	newLi.addEventListener("click", setDone);

	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode(' x '));
	deleteButton.addEventListener('click', deleteItem )
	newLi.appendChild(deleteButton);

	ul.appendChild(newLi);
	input.value = "";
}

function addListAfterClick() {
	console.log(inputLength());
	if (inputLength() > 0) {
		createListElement(input.value);
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement(input.value);
	}
}

function setDone(event) {
	event.srcElement.classList.toggle('done');
}

for (var l = 0; l < list.length; l++) {
	list[l].addEventListener("click", setDone)
}

function deleteItem(event) {
	event.srcElement.parentElement.remove();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress) 