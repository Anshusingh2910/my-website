const BASE_URL = "https://api.potterdb.com";
let CHARACTER_ENDPOINT = "/v1/characters?page[size]=28&page[number]=1";
let pageNumber = 1;

// image,name,gender,species
function createCharacterCard({
    image,
    name,
    gender,
    species,
}) {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    // cover (background image)
    const charactercover = document.createElement("img");
    charactercover.classList.add("character-cover");
    charactercover.src = image ||"https://potterdb.com/images/missing_character.svg";
    characterCard.appendChild(charactercover);

    // name
    const characterName = document.createElement("h3");
    characterName.classList.add("character-name");
    characterName.innerText = name;
    characterCard.appendChild(characterName);

    // gender
    const characterGender = document.createElement("p");
    characterGender.innerText = "Gender: " + (gender || "Unknown");
    characterCard.appendChild(characterGender);

    // species
    const characterSpecies = document.createElement("p");
    characterSpecies.innerText = "Species: " + (species || "Unknown");
    characterCard.appendChild(characterSpecies);

    //btn
    const redirectionBtn = document.createElement("button");
    redirectionBtn.classList.add("redirection-btn");
    redirectionBtn.innerHTML = "View character"; ``
    characterCard.appendChild(redirectionBtn);

    document.getElementById("section-container").appendChild(characterCard);
}

// 🔹 get data
async function getCharacterData() {
    const loader = document.getElementById("loader");

    loader.style.display = "block"; // 🔵 show loader

      CHARACTER_ENDPOINT = `/v1/characters?page[size]=28&page[number]=${pageNumber}`;
    
    const { data } = await (
        await fetch(BASE_URL + CHARACTER_ENDPOINT)
    ).json();

    data.forEach(({ attributes }) => {
        const { image, name, gender, species } = attributes;

        createCharacterCard({
            image,
            name,
            gender,
            species,
        });
    });
    loader.style.display = "none"; // 🔴 hide loader
}

// 🔹 first load
getCharacterData();

// 🔹 load more
document.getElementById("load-more").addEventListener("click", () => {
    pageNumber++;
    getCharacterData();
});
