function ingredient(event) {
  event.preventDefault();
  let recipe = document.querySelector("#result");
  recipe.innerHTML = "hi";
}

let pressButton = document.querySelector("#search");
pressButton.addEventListener("click", ingredient);
