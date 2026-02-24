const BASE_URL = "https://api.potterdb.com";
let pageNumber = 1;
const PAGE_SIZE = 32;

// image ,category,name,slug,incantation

function createSpellCard({
    image,
    category,
    name,
    slug,
    incantation,
}) {
    const spellCard = document.createElement("div");
    spellCard.classList.add("spell-card");

    // cover image
    const spellcover = document.createElement("img");
    spellcover.classList.add("spell-cover");
    spellcover.src = image || "https://potterdb.com/images/missing_character.svg";
    spellcover.alt = name + " image";
    spellCard.appendChild(spellcover);

    // name
    const spellName = document.createElement("h3");
    spellName.classList.add("spell-name");
    spellName.innerText = name;
    spellCard.appendChild(spellName);

    // incantation
    const spellIncantation = document.createElement("p");
    spellIncantation.classList.add("spell-incantation");
    spellIncantation.innerText = incantation;
    spellCard.appendChild(spellIncantation);

    // category
    const spellcategory = document.createElement("p");
    spellcategory.classList.add("spell-category");
    spellcategory.innerText = category;
    spellCard.appendChild(spellcategory);

    // btn
    const redirectionBtn = document.createElement("button");
    redirectionBtn.classList.add("redirection-btn");
    redirectionBtn.innerText = "View Spell";
    spellCard.appendChild(redirectionBtn);

    document.getElementById("section-container").appendChild(spellCard);
}

// 🔹 function to fetch spells
async function getSpellData() {
    const loader = document.getElementById("loader");

    loader.style.display = "block"; // 🔵 show loader
    const url = `${BASE_URL}/v1/spells?page[size]=${PAGE_SIZE}&page[number]=${pageNumber}`;

    const response = await fetch(url);
    const result = await response.json();

    result.data.forEach(({ attributes }) => {
        const { image, name, category, slug, incantation } = attributes;

        createSpellCard({
            image,
            name,
            category,
            slug,
            incantation,
        });
    });
    loader.style.display = "none"; // 🔴 hide loader
}

// 🔹 first load
getSpellData();

// 🔹 load more button
document.getElementById("load-more").addEventListener("click", () => {
    pageNumber++;
    getSpellData();
});
