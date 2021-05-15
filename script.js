const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".link");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
}
