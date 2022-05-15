const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  var li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  list.appendChild(li);
});
