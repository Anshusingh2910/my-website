const BASE_URL = "https://api.potterdb.com";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

function fetchBook() {
  fetch(`${BASE_URL}/v1/books/${slug}?include=chapters`)
    .then(res => res.json())
    .then(data => {

      const book = data.data.attributes;

      // Simple logic: included me se sirf chapters le lo
      const chapters = data.included
        ? data.included
            .filter(item => item.type === "chapters")
            .map(item => ({
              title: item.attributes.title,
              summary: item.attributes.summary
            }))
        : [];

      showBook(book, chapters);
    });
}

function showBook(book, chapters) {
  const container = document.getElementById("book-detail");

  container.innerHTML = `
    <div class="book-container">
      <img src="${book.cover}" alt="${book.title}" class="book-cover">

      <div class="book-info">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Release Date:</strong> ${book.release_date}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>

        <h3>Summary</h3>
        <p>${book.summary || "No summary available."}</p>
      </div>
    </div>

    <div class="chapters-container">
      <h2>Chapters</h2>
      ${
        chapters.length > 0
          ? chapters.map((ch, i) => `
              <div class="chapter">
                <div class="chapter-title" onclick="toggle(${i})">
                  ${i + 1}. ${ch.title}
                </div>
                <div class="chapter-summary" id="summary-${i}">
                  ${ch.summary || "No Summary Available"}
                </div>
              </div>
            `).join("")
          : "<p>No Chapters Available</p>"
      }
    </div>
  `;
}

function toggle(i) {
  const summary = document.getElementById(`summary-${i}`);
  summary.classList.toggle("show");
}

fetchBook();
