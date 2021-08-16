const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const nav_links = document.querySelectorAll('.nav_link');
const levelZeroProjects = document.querySelector('.levelZero');
const personalProjects = document.querySelector('.personal');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
}

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const tabIndicator = document.querySelector('.active-indicator');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    removeActive(); //remove all active classes
    switchTab(i); //add active to current tab
  });
}

const removeActive = () => {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    contents[i].classList.remove('active');
  }
};

const switchTab = (i) => {
  tabs[i].classList.add('active');
  contents[i].classList.add('active');
  tabIndicator.style.left = `${(100 / tabs.length) * i}%`;
};

const allPersonalCards = document.createElement('div');

const fetchData = (length) => {
  const url = './data.json';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // display at most 4 projects in the homepage
      createPersonalCards(data, length);
      createLevelZeroCards(data, length);
    })
    .catch((e) => console.log(e));
};

const createPersonalCards = (data, len = data[0].personal.length) => {
  const { personal } = data[0];
  // console.log(personal);

  for (let i = 0; i < len; i++) {
    const techs = personal[i].techs;

    const tech_list = `<ul>
      ${techs.map((tech) => `<li>${tech}</li>`).join(' ')}
    </ul>`;
    const card = `
      <div class="card">
        <div class="card_img">
          <img src="${personal[i].image}" alt=${personal[i].name}>
        </div>
        <div class="card_desc">
          <div>${tech_list}</div>
          <h1>${personal[i].name}</h1>
          <small>${personal[i].finishedAt}</small>
          <div class="cta_container">
            <a href="${personal[i].live}" target="_blank" class="cta">Live</a>
            <a href="${personal[i].github}" target="_blank" class="cta cta_rev"><i class='fa fa-github'></i> Code</a>
          </div>
        </div>
      </div> 
    `;

    personalProjects.innerHTML += card;
  }
};

const createLevelZeroCards = (data, len = data[0].levelZero.length) => {
  const { levelZero } = data[0];

  if (len > levelZero.length) {
    len = levelZero.length;
  }

  for (let i = 0; i < len; i++) {
    const techs = levelZero[i].techs;
    const marks = levelZero[i].marks;

    const tech_list = `<ul>
      ${techs.map((tech) => `<li>${tech}</li>`).join(' ')}
    </ul>`;
    const mark_list = `<ul>
      ${marks.map((mark) => `<li class="mark">${mark}</li>`).join(' ')}
    </ul>`;
    const card = `
      <div class="card">
        <div class="card_img">
          <img src="${levelZero[i].image}" alt=${levelZero[i].name}>
        </div>
        <div class="card_desc">
          <div>${tech_list}</div>
          <h1>${levelZero[i].name}</h1>
          <small>${levelZero[i].finishedAt} ${mark_list}</small>
          <div class="cta_container">
            <a href="${levelZero[i].live}" target="_blank" class="cta">Live</a>
            <a href="${levelZero[i].github}" target="_blank" class="cta cta_rev"><i class='fa fa-github'></i> Code</a>
          </div>
        </div>
      </div> 
    `;

    levelZeroProjects.innerHTML += card;
  }
};
