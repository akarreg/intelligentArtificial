function ingredient(event) {
  event.preventDefault();
  new Typewriter("#result", {
    strings: "Searching for the best recipe....",
    autoStart: true,
    delay: 400,
    cursor: "",
  });
}

let pressButton = document.querySelector("#search");
pressButton.addEventListener("click", ingredient);
