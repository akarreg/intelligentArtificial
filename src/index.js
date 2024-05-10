function displayRecipe(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function ingredient(event) {
  event.preventDefault();
  let userProduct = document.querySelector("#ingredient");
  let apiKey = "bc0c992ff01fe3156bt9ead9dob31418";
  let prompt = `  Generated a recipe  includng the ${userProduct.value} as a ingredient`;

  let context =
    "You have the best recipes in the world ,you are an expert in the classic culinary world.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Searching for the best recipe.....");

  axios.get(apiUrl).then(displayRecipe);
}

let pressButton = document.querySelector("#search");
pressButton.addEventListener("click", ingredient);
