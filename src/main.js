import { fetchCharacters } from "./api/apiService.js";
import { renderCharacters } from "./components/cards.js";
import { debounce } from "./utils/debounce.js";
import { showError } from "./utils/errorHandler.js";
import { updatePagination } from "./utils/pagination.js";
import { throttle } from "./utils/throttle.js";

let currentPage = 1;
let totalPages = 1;
let isLoading = false;

async function loadCharacters() {
if (isLoading) return;

isLoading = true;
    const searchValue = document
        .getElementById("searchInput")
        .value
        .trim();

    const statusValue = document
        .getElementById("statusFilter")
        .value;

    const loading = document.getElementById("loading");

    loading.classList.remove("hidden");

    try {

        const data = await fetchCharacters(
            currentPage,
            searchValue,
            statusValue
        );

        totalPages = data.info.pages;

        renderCharacters(data.results);

        updatePagination(currentPage, totalPages);

    } catch (error) {

        showError("No characters found.");

    } finally {

        loading.classList.add("hidden");
isLoading = false;
    }

}
document
    .getElementById("statusFilter")
    .addEventListener("change", () => {

        currentPage = 1;

        loadCharacters();

    });

const debouncedSearch = debounce(() => {

    currentPage = 1;

    loadCharacters();

}, 500);

document
    .getElementById("searchInput")
    .addEventListener("input", debouncedSearch);

document
    .getElementById("searchBtn")
    .addEventListener("click", () => {

        currentPage = 1;

        loadCharacters();

    });

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            loadCharacters();

        }

    });

document
    .getElementById("prevBtn")
    .addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            loadCharacters();

        }

    });
    const throttledScroll = throttle(() => {

    console.log("Scrolling...");

}, 300);

window.addEventListener("scroll", throttledScroll);

loadCharacters();