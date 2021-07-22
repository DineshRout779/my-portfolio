const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const nav_links = document.querySelectorAll(".nav_link");
const levelZeroProjects = document.querySelector(".levelZero");
const personalProjects = document.querySelector(".personal");

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

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const tabIndicator = document.querySelector(".active-indicator");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    removeActive(); //remove all active classes
    switchTab(i); //add active to current tab
  });
}

const removeActive = () => {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    contents[i].classList.remove("active");
  }
};

const switchTab = (i) => {
  tabs[i].classList.add("active");
  contents[i].classList.add("active");
  tabIndicator.style.left = `${(100 / tabs.length) * i}%`;
};

window.addEventListener("load", () => {
  switchTab(0);
  fetchData();
});

const allPersonalCards = document.createElement("div");

const fetchData = () => {
  const url = "./data.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      createPersonalCards(data);
      createLevelZeroCards(data);
    })
    .catch((e) => console.log(e));
};

const createPersonalCards = (data) => {
  const { personal } = data[0];
  // console.log(personal);

  for (let i = 0; i < personal.length; i++) {
    const card = document.createElement("div");
    const card_img = document.createElement("div");
    const img = document.createElement("img");
    const card_desc = document.createElement("div");
    const card_tech_list = document.createElement("ul");
    const card_heading = document.createElement("h4");
    const cta_container = document.createElement("div");
    const live_link = document.createElement("a");
    const github_link = document.createElement("a");

    img.src = personal[i].image;
    img.alt = personal[i].name;
    card_heading.textContent = personal[i].name;
    live_link.textContent = "Live";
    live_link.href = personal[i].live;
    live_link.target = "_blank";
    github_link.innerHTML = "<i class='fa fa-github'></i> Code";
    github_link.href = personal[i].github;
    github_link.target = "_blank";

    const techs = personal[i].techs;

    techs.map((tech) => {
      const list_item = document.createElement("li");
      list_item.textContent = tech;
      card_tech_list.appendChild(list_item);
    });

    card.classList.add("card");
    card_img.classList.add("card_img");
    card_desc.classList.add("card_desc");
    cta_container.classList.add("cta_container");
    live_link.classList.add("cta");
    github_link.classList.add("cta", "cta_rev");

    card_img.appendChild(img);
    card_desc.appendChild(card_tech_list);
    card_desc.appendChild(card_heading);
    cta_container.appendChild(live_link);
    cta_container.appendChild(github_link);
    card_desc.appendChild(cta_container);
    card.appendChild(card_img);
    card.appendChild(card_desc);
    personalProjects.appendChild(card);
  }
  // console.log(personalProjects);
};

const createLevelZeroCards = (data) => {
  const { levelZero } = data[0];
  // console.log(levelZero);

  for (let i = 0; i < levelZero.length; i++) {
    const card = document.createElement("div");
    const card_img = document.createElement("div");
    const img = document.createElement("img");
    const card_desc = document.createElement("div");
    const card_tech_list = document.createElement("ul");
    const card_heading = document.createElement("h4");
    const cta_container = document.createElement("div");
    const live_link = document.createElement("a");
    const github_link = document.createElement("a");

    img.src = levelZero[i].image;
    img.alt = levelZero[i].name;
    card_heading.textContent = levelZero[i].name;
    live_link.textContent = "Live";
    live_link.href = levelZero[i].live;
    live_link.target = "_blank";
    github_link.innerHTML = "<i class='fa fa-github'></i> Code";
    github_link.href = levelZero[i].github;
    github_link.target = "_blank";

    const techs = levelZero[i].techs;

    techs.map((tech) => {
      const list_item = document.createElement("li");
      list_item.textContent = tech;
      card_tech_list.appendChild(list_item);
    });

    card.classList.add("card");
    card_img.classList.add("card_img");
    card_desc.classList.add("card_desc");
    cta_container.classList.add("cta_container");
    live_link.classList.add("cta");
    github_link.classList.add("cta", "cta_rev");

    card_img.appendChild(img);
    card_desc.appendChild(card_tech_list);
    card_desc.appendChild(card_heading);
    cta_container.appendChild(live_link);
    cta_container.appendChild(github_link);
    card_desc.appendChild(cta_container);
    card.appendChild(card_img);
    card.appendChild(card_desc);
    levelZeroProjects.appendChild(card);
  }
  console.log(levelZeroProjects);
};
