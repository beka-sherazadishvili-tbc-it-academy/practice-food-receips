const cardsWrapper = document.querySelector(".recipes__section__wrapper");
function createCards() {
  cardsWrapper.innerHTML = "";

  for (let item of myRecipes) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "recipes__section__card";
    cardDiv.setAttribute("data-title", item.title);

    cardDiv.innerHTML = `<div class="recipes__section__wrapper">
          <div class="recipes__section__card">
            <div class="recipes__section__card__top"></div>
            <div class="recipes__section__card__bottom">
              <span class="recipes__card__title">${item.title}</span>

              <div class="recipes__card__info">
                <div class="info__item">
                  <div class="time__icon"></div>
                  <span class="recipe__time">${item.duration}</span>
                </div>
                <div class="info__item">
                  <div class="difficulty__icon"></div>
                  <span class="recipe__difficulty">${item.difficulty}</span>
                </div>
              </div>

              <div class="recipes__card__actions">
                <button class="btn btn__view">View</button>
                <button class="btn btn__edit">Edit</button>
              </div>
            </div>
          </div>`;

    cardsWrapper.appendChild(cardDiv);
  }
}

cardsWrapper.addEventListener("click", (event) => {
  const button = event.target.closest(".btn__view, .btn__edit");

  if (!button) return;

  const recipeTitle = button.getAttribute("data-title");

  if (button.classList.contains("btn__view")) {
    viewRecipe(recipeTitle);
  } else if (button.classList.contains("btn__edit")) {
    editRecipe(recipeTitle);
  }
});

createCards();

function viewRecipe(title) {
  const transparentBg = document.createElement("div");
  transparentBg.className = "transparent-bg";

  const popupOverlay = document.createElement("div");
  popupOverlay.className = "popupOverlay";
  popupOverlay.innerHTML = `
    <div class="popup__content">
      <h2>${title}</h2>
      <button class="btn btn__close">Close</button>
    </div>
  `;

  document.body.appendChild(transparentBg);
  document.body.appendChild(popupOverlay);

  const closeBtn = popupOverlay.querySelector(".btn__close");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(transparentBg);
    document.body.removeChild(popupOverlay);
  });

  transparentBg.addEventListener("click", () => {
    document.body.removeChild(transparentBg);
    document.body.removeChild(popupOverlay);
  });
}
