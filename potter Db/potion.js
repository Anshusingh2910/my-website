const FIRST_URL = "https://api.potterdb.com";
let pageNumber = 1;

function createPotionsCard({
    slug,
    characteristics,
    difficulty,
    effect,
    image,
    title,
}) {
    const potionsCard = document.createElement("div");
    potionsCard.classList.add("potions-card");

    // cover image
    const potionCover = document.createElement("img");
    potionCover.classList.add("potions-cover");
    potionCover.src =image || "https://potterdb.com/images/missing_character.svg";
    potionCover.alt = title;
    potionsCard.appendChild(potionCover);

    // title
    const potionName = document.createElement("h3");
    potionName.classList.add("potions-title");
    potionName.innerText = title;
    potionsCard.appendChild(potionName);

    // difficulty
    const potionDifficulty = document.createElement("p");
    potionDifficulty.innerText = difficulty;
    potionsCard.appendChild(potionDifficulty);

    // effect
    const potionEffect = document.createElement("p");
    potionEffect.innerText = effect;
    potionsCard.appendChild(potionEffect);

    // characteristics
    const potionChar = document.createElement("p");
    potionChar.innerText = characteristics;
    potionsCard.appendChild(potionChar);

    // button
    const redirectionBtn = document.createElement("button");
    redirectionBtn.classList.add("redirection-btn");
    redirectionBtn.innerHTML = "View Potion";
    potionsCard.appendChild(redirectionBtn);

    document.getElementById("section-container").appendChild(potionsCard);
}

// 🔹 function banaya (IIFE hata diya simple ke liye)
async function getPotionsData() {
        const loader = document.getElementById("loader");

    loader.style.display = "block"; // 🔵 show loader

    const response = await fetch(
        FIRST_URL + "/v1/potions?page[size]=20&page[number]=" + pageNumber
    );

    const result = await response.json();

    result.data.forEach(({ attributes }) => {
        const {
            slug,
            characteristics,
            difficulty,
            effect,
            image,
            name,
        } = attributes;

        createPotionsCard({
            slug,
            characteristics,
            difficulty,
            effect,
            image,
            title: name,
        });
    });
    loader.style.display = "none"; // 🔴 hide loader
}

// 🔹 first load
getPotionsData();

// 🔹 load more
document.getElementById("load-more").addEventListener("click", () => {
    pageNumber++;
    getPotionsData();
});
