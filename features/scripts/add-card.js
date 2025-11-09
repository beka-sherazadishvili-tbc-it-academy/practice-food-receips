const addBtn = document.querySelector(".add__circle");

function addCard() {
  addBtn.addEventListener("click", (event) => {
    const createBackground = document.createElement("div");
    const createNewCard = document.createElement("div");
    createBackground.className = "transparent-bg";
    createNewCard.className = "popupOverlay";
    createNewCard.innerHTML = `
    <div class="popup__content">
      <h2>Add new card</h2>
      <button class="btn btn__close">Close</button>
    </div>
  `;

    document.body.appendChild(createBackground);
    document.body.appendChild(createNewCard);

    closeBtn = createNewCard.querySelector(".btn__close");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(createBackground);
    document.body.removeChild(createNewCard);
  });

  createBackground.addEventListener("click", () => {
    document.body.removeChild(createBackground);
    document.body.removeChild(createNewCard);
  });
  });
}

addCard();
