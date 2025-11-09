function search() {
  const input = document.querySelector("#search");

  input.addEventListener("input", (e) => {
    const searchRecipe = e.target.value.trim().toLowerCase();

    if (searchRecipe) {
      currentRecipes = myRecipes.filter((item) =>
        item.title.toLowerCase().includes(searchRecipe)
      );
    } else {
      currentRecipes = myRecipes;
    }

    createCards();
  });
}

search();
