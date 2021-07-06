const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const nav_links = document.querySelectorAll(".nav_link");

const cards_container = document.querySelector(".cards_container");

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

projects.map((project) => {
  const card = document.createElement("div");
  const card_img = document.createElement("div");
  const img = document.createElement("img");
  const card_desc = document.createElement("div");
  const card_tech = document.createElement("div");
  const list = document.createElement("ul");
  const heading = document.createElement("h4");
  const cta_container = document.createElement("div");
  const cta = document.createElement("a");
  const cta_rev = document.createElement("a");

  card.classList.add("card");
  card_img.classList.add("card_img");
  card_desc.classList.add("card_desc");
  card_tech.classList.add("card_tech");
  cta_container.classList.add("cta_container");
  cta.classList.add("cta");
  cta_rev.classList.add("cta", "cta_rev");

  card.appendChild(card_img);
  card.appendChild(card_desc);
  card_img.appendChild(img);
  card_desc.appendChild(card_tech);
  card_tech.appendChild(list);
  card_desc.appendChild(heading);
  card_desc.appendChild(cta_container);
  cta_container.appendChild(cta);
  cta_container.appendChild(cta_rev);

  img.src = project.image;
  project.techs.map((tech) => {
    const list_item = document.createElement("li");
    list_item.textContent = tech;
    list.appendChild(list_item);
  });
  heading.textContent = project.name;
  cta.href = project.live;
  cta.textContent = "Live";
  cta.target = "_blank";
  cta_rev.href = project.github;
  cta_rev.innerHTML = '<i class="fa fa-github"></i> Code';
  cta_rev.target = "_blank";

  cards_container.appendChild(card);
});

const cards = document.querySelectorAll(".card");

console.log(cards);

console.log(cards.length);
