// 1
const portillos = document.getElementById(`portillos`);

// 2
const images = document.getElementsByTagName(`img`);

// 3
const centered = document.getElementsByClassName(`center`);

// 4
const ginosEast = document.querySelector(`#ginos`);

// 5
const pTags = document.querySelectorAll(`p`);

// 6a
const h1 = document.querySelector(`h1`);

// 6b
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago`;

// 7a
const others = document.querySelector(`#others`);

// 7b
others.innerHTML = `<h3>Other favorites</h3>`;

// 8a
const aTag = document.querySelector(`a`);

// 8b RETURN
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);

// 11b
h4.innerText = `CHICAGO: A great place to eat!`;

// 11c
document.body.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = `See you in the Windy City sometime!`;

// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
document.querySelector(`ul>li`).remove();

// BONUS

// 14a
const divs = document.getElementsByTagName(`div`);

// 14b
for (d of divs){
    d.classList.toggle(`background`);
}

// 15a
const hungry = [
    `Thanks`,
    `A`,
    `Lot`,
    `Now`,
    `I`,
    `Am`,
    `Hungry`
];

// 15b
const end = document.querySelector(`body`);
for (a of hungry){
    const span = document.createElement(`span`);
    span.innerHTML = `${a}`;
    end.append(span);
}