export function showError(message) {

    const results = document.getElementById("results");

    results.innerHTML = `
        <div class="error-box">
            <h2>⚠ ${message}</h2>
        </div>
    `;

}