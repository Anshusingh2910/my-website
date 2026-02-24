const BASE_URL = "https://api.potterdb.com";
const MOVIE_ENDPOINT = "/v1/movies";

// poster, title, rating, running_time, release_date, slug

function createMovieCard({
  poster,
  running_time,
  title,
  slug,
  release_date,
  rating,
}) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  // cover image
  const movieCover = document.createElement("img");
  movieCover.classList.add("movie-cover");
  movieCover.src = poster;
  movieCover.alt = title + "'s poster";
  movieCard.appendChild(movieCover);

  // title
  const movieTitle = document.createElement("h3");
  movieTitle.classList.add("movie-title");
  movieTitle.innerText = title;
  movieCard.appendChild(movieTitle);

  // content
  const movieContent = document.createElement("ul");
  movieTitle.classList.add("movie-content");

  //   release data
  const releaseDateLi = document.createElement("li");
  releaseDateLi.innerText = release_date;
  movieContent.appendChild(releaseDateLi);
  //   pages count
  const ratingLi = document.createElement("li");
  ratingLi.innerText = rating;
  movieContent.appendChild(ratingLi);
  //   author
  const durationLi = document.createElement("li");
  durationLi.innerText = running_time;
  movieContent.appendChild(durationLi);

  movieCard.appendChild(movieContent);

  //   btn
  const redirectionBtn = document.createElement("button");
  redirectionBtn.classList.add("redirection-btn");
  redirectionBtn.innerHTML = "View Book";
  movieCard.appendChild(redirectionBtn);

  document.getElementById("section-container").appendChild(movieCard);
}



(async function getMoviesData() {
  const { data } = await (await fetch(BASE_URL + MOVIE_ENDPOINT)).json();

  data.forEach(({ attributes }) => {
    console.log(attributes);
    const { poster, title, running_time, release_date, slug, rating } =
      attributes;
    createMovieCard({
      poster,
      title,
      running_time,
      release_date, 
      slug,
      rating,
    });
  });
})();

// let obj = {
//   name: "dheeraj",
//   std: 10,
//   subject: ["math", "science"],
// };

// const { name, std } = obj;

// function a({name,std}){

// }

// a(obj)
