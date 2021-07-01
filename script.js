const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const nav_links = document.querySelectorAll(".nav_link");

const cards_container = document.querySelectorAll(".cards_container");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
}

console.log(projects);
