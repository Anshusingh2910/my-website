const BASE_URL = "https://api.potterdb.com";
const BOOK_ENDPOINT = "/v1/books";
const COMPLETE_URL="https://api.potterdb.com/v1/books/";
const Id = window.location.href.split("=")[1];
const url = COMPLETE_URL + Id;

//cover,release_date,author,pages,slug,title

function createbook({
    cover,
    release_date,
    author,
    pages,
    slug,
    title,
}) {
    // book card
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // cover
    const bookcover = document.createElement("img");
    bookcover.classList.add("book-cover");
    bookcover.src = cover;
    bookcover.alt = title + " cover";
    bookCard.appendChild(bookcover);

    // book name (title)
    const bookName = document.createElement("h3");
    bookName.innerText = title;
    bookCard.appendChild(bookName);

    // release date
    const releaseDate = document.createElement("p");
    releaseDate.innerText = "Release: " + release_date;
    bookCard.appendChild(releaseDate);

    // page count
    const pageCount = document.createElement("p");
    pageCount.innerText = pages;
    bookCard.appendChild(pageCount);

    // author
    const bookauthor = document.createElement("p");
    bookauthor.innerText = author;
    bookCard.appendChild(bookauthor);

    // button link
const redirectionBtn = document.createElement("a");
redirectionBtn.classList.add("redirection-btn");
redirectionBtn.innerText = "View Book";
redirectionBtn.href = `books.html?slug=${slug}`;
bookCard.appendChild(redirectionBtn);

    // append
    document.getElementById("section-container").appendChild(bookCard);
}

(async function getBookData() {

    const { data } = await (await fetch(url)).json();
    console.log(data)

})();

(async function getBookdata() {
    const loader = document.getElementById("loader");

    loader.style.display = "block"; // 🔵 show loader

    const { data } = await (await fetch(BASE_URL + BOOK_ENDPOINT)).json();

    data.forEach(({ attributes }) => {
        console.log(attributes);
        const {
            cover,
            release_date,
            author,
            pages,
            slug,
            title,
        } = attributes;

        createbook({
            cover,
            release_date,
            author,
            pages,
            slug,
            title,
        });
    });
    loader.style.display = "none"; // 🔴 hide loader
})();
