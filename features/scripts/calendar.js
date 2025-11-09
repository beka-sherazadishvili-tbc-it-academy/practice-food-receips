const calendar = document.querySelector("#calendar");
const days = calendar.querySelectorAll(
    ".calendar__section__wrapper__calendar__day"
);

function fetchDishesToCal() {
    for (let dish of myRecipes) {
        days.forEach((day) => {
            const dayTittle = day.querySelector(
                ".calendar__section__wrapper__calendar__day__title"
            );

            if (
                dayTittle.innerText.toLowerCase() === dish.weekDay.toLowerCase()
            ) {
                const mealBlock = day.querySelector(
                    `[data-type="${dish.type}"]`
                );
                if (mealBlock) {
                    const mealItem = document.createElement("div");

                    mealItem.innerHTML = `
                    <img src="${dish.imageURL}"
                              alt=""
                            />
                    <p>${dish.title}</p>
                    `;
                    mealBlock.appendChild(mealItem);
                }
            }
        });
    }
}
fetchDishesToCal();
