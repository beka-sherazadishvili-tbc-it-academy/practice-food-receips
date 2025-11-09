const input = document.querySelector("#search");
let currentRecipe = [];
let searchRecipe = "";

input.addEventListener("input", (e) => {
    searchRecipe = e.target.value.trim();

    if (searchRecipe) {
        currentRecipe = myRecipes.find((item) => item.title.toLowerCase().includes(searchRecipe.toLowerCase()));
        console.log(currentRecipe);
    } else {
        currentRecipe = myRecipes;
    }

})
