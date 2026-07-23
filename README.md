# Dynamic API Explorer

## About the Project

This project is a Dynamic API Explorer built using HTML, CSS, and JavaScript. It connects to the Rick and Morty API and allows users to search characters, filter them by status, and browse through different pages of results.

The main purpose of this project was to practice working with REST APIs and improve my understanding of advanced JavaScript concepts such as closures, prototypes, error handling, debouncing, and modular code.

---

## Features

- Search characters by name
- Filter characters by status
- Previous and Next page navigation
- Loading spinner while fetching data
- Error message if no data is found
- Responsive layout for desktop, tablet, and mobile
- Debounced search input
- Throttled scroll event
- Clean modular JavaScript structure

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Vite
- Rick and Morty API

---

## Project Structure

```
Dynamic-API-Explorer
│
├── index.html
├── style.css
├── package.json
├── README.md
│
└── src
    ├── main.js
    ├── api
    │   └── apiService.js
    ├── components
    │   ├── cards.js
    │   └── character.js
    ├── utils
    │   ├── debounce.js
    │   ├── errorHandler.js
    │   ├── pagination.js
    │   └── throttle.js
```

---

## How to Run the Project

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Dynamic-API-Explorer.git
```

Move into the project folder:

```bash
cd Dynamic-API-Explorer
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## API Used

This project uses the public Rick and Morty API.

https://rickandmortyapi.com/api/character

---

## JavaScript Concepts Used

During this project I implemented and practiced:

- Closures (Debounce)
- Prototypes
- Global, Function and Block Scope
- Async / Await
- Fetch API
- JSON Parsing
- try...catch Error Handling
- HTTP Status Handling
- Debouncing
- Throttling
- ES6 Modules

---

## Challenges I Faced

While building the project I faced a few issues, especially with pagination and handling different API responses. I also had to make sure searching and filtering worked together correctly. Fixing these problems helped me better understand asynchronous JavaScript and API integration.

---

## What I Learned

This project helped me understand how to:

- Work with public REST APIs
- Organize JavaScript into separate modules
- Handle API errors properly
- Improve performance using debounce and throttle
- Build responsive layouts
- Structure a small JavaScript project in a cleaner way

---

## Future Improvements

Some features that could be added later include:

- Sorting characters
- Multiple filters
- Dark mode
- Better animations
- Favorite characters
- Infinite scrolling

---

## Live Demo

Will be added after deployment.

---

## GitHub Repository

https://github.com/ZainAwan-47/Dynamic-API-Explorer.git
---

## Author

Developed by **Muhammad Zain Awan**