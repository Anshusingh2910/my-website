const companies = [
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/amazon.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/geeky-ants.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/magic-ed-tech.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/quest.png",

  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/web-glaze.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/freecharge1.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/vama.png",

  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/kiddopia.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/wells-fargo.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/google.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/microsoft.png",
  ,
  "https://static-skillsyard.b-cdn.net/skills-yard-static/public/images/company-slider/accenture.png",
  ,
];

const carousel = document.querySelector(".carousel");

companies.forEach((company, idx) => {
  const image = document.createElement("img");
  image.src = company;
  image.classList.add("image-inside-carousel");

  carousel.append(image);
});

const clonedCarousel = carousel.cloneNode();
clonedCarousel.innerHTML = carousel.innerHTML;

carousel.parentElement.appendChild(clonedCarousel);