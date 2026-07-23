import { Character } from "./character.js";

export function renderCharacters(characters) {

    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    characters.forEach(characterData => {

        const character = new Character(characterData);

        const card = document.createElement("div");

        card.className = "character-card";

        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">

            <div class="card-content">

                <h2>${character.name}</h2>

                <p><strong>Status:</strong> ${character.getStatusBadge()}</p>

                <p><strong>Species:</strong> ${character.species}</p>

                <p><strong>Gender:</strong> ${character.gender}</p>

            </div>
        `;

        resultsContainer.appendChild(card);

    });

}