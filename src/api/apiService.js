const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(page = 1, name = "", status = "") {

    let url = `${BASE_URL}?page=${page}`;

    if (name) {
        url += `&name=${encodeURIComponent(name)}`;
    }

    if (status) {
        url += `&status=${status}`;
    }

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.error("API Error:", error);

        throw error;

    }

}