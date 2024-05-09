function ingredient(event) {
  event.preventDefault();

  let recipe = document.querySelector("#result");
  recipe.innerHTML = "Searching for the best recipe ...";
}
let pressButton = document.querySelector("#search");
pressButton.addEventListener("click", ingredient);
