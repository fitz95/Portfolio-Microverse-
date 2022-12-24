const hamburger = document.getElementById('hamburgericon');
const closebutton = document.getElementById('close-icon');

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

hamburger.addEventListener('click', openNav);
closebutton.addEventListener('click', closeNav);
const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('.mobile');

function activeMenu() {
  let len = sec.length;

  // eslint-disable-next-line no-plusplus
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {
    li[0].classList.add('active');
  }
  li.forEach((item) => item.classList.remove('active'));
}
activeMenu();
window.addEventListener('scroll', activeMenu);
const arr = [
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project1.png', './assets/img/project1.png', './assets/img/project1.png', './assets/img/project1.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project6.png', './assets/img/project6.png', './assets/img/project6.png', './assets/img/project6.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project2.png', './assets/img/project2.png', './assets/img/project2.png', './assets/img/project2.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project3.png', './assets/img/project3.png', './assets/img/project3.png', './assets/img/project3.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project4.png', './assets/img/project4.png', './assets/img/project4.png', './assets/img/project4.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
  {
    name: 'project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: ['./assets/img/project5.png', './assets/img/project5.png', './assets/img/project5.png', './assets/img/project5.png'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    livelink: 'www.google.com',
    sourcelink: 'www.github.com',
  },
];

const mobileprojects = document.getElementById('projects');
const desktopprojects = document.getElementById('popupdesktopd');
arr.forEach((project) => {
  const {
    name,
    technologies,
    image,
    description,
    livelink,
    sourcelink,
  } = project;
  mobileprojects.innerHTML += `
  <div class="project">
  <div class="projectimg">
    <img src=${image[0]} />
  </div>
  <div class="projectdetails">
    <h3>${name}</h3>
    <ul class="projectbuttons">
      <li>${technologies[0]}</li>
      <li>${technologies[0]}</li>
      <li>${technologies[0]}</li>
    </ul>
    <div class="viewbutton" id="proj1" href=${livelink}>
      <p>See this project</p>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>
</div>
<div id="overlay" ></div>
      <div class="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${technologies[0]}</button>
          <button class="popuptopbutton">${technologies[1]}</button>
          <button class="popuptopbutton">${technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${image[0]} alt="project1" class="subpopupimages" />
            <img src=${image[1]} alt="project1" class="subpopupimages" />
            <img src=${image[2]} alt="project1" class="subpopupimages" />
            <img src=${image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${description}
        </p>
        <div class="popupbottombtn">
          <button href=${livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
  desktopprojects.innerHTML += `
<div class="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${name}</h1>
        <i class="fa-solid fa-x popupclosedesktop" ></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${technologies[0]}</button>
        <button class="btnpopupd">${technologies[1]}</button>
        <button class="btnpopupd">${technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${image[0]} />
      <div class="mobile-popup">
        <img src=${image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph" id='desktopdp'>
        ${description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${sourcelink}>
            <p>See Source</p>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div class="slider-control">
          <div class="controlss">
            <i class="fa-solid fa-arrow-left"></i>
            <p class="paragraph">Previous Page</p>
          </div>
          <div class="controlss">
            <p class="paragraph">Next Page</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
});

const popupMobile = document.querySelectorAll('.popup');
const openPopupBtn = document.querySelectorAll('.viewbutton');
const closePopupBtn = document.querySelectorAll('.popupcontrols');

openPopupBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupMobile[index].style.display = 'block';
  });
});

closePopupBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupMobile[index].style.display = 'none';
  });
});

const popupDesktop = document.querySelectorAll('.popupdesktop');
const popupDesktopOpen = document.querySelectorAll('.popupdesktopbtn');
const popupDesktopclose = document.querySelectorAll('.popupclosedesktop');

popupDesktopOpen.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupDesktop[index].style.display = 'block';
  });
});

popupDesktopclose.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupDesktop[index].style.display = 'none';
  });
});

const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  const reg = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  const messages = [];
  localStorage.setItem('email', email);
  if (reg.test(email.value) === false) {
    messages.push('Email is not valid make sure all the letters are in small case');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
    errorElement.style.display = 'flex';
  }
});

const emaild = document.getElementById('emaild');
const formd = document.getElementById('formd');
const errorElementd = document.getElementById('errord');

formd.addEventListener('submit', (e) => {
  const regd = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  const messagesd = [];
  localStorage.setItem('emaild', emaild);
  if (regd.test(emaild.value) === false) {
    messagesd.push('Email is not valid make sure all the letters are in small case');
  }
  if (messagesd.length > 0) {
    e.preventDefault();
    errorElementd.innerText = messagesd.join(', ');
    errorElementd.style.display = 'flex';
  }
});

const formdata = document.querySelectorAll('.data');

const data = {
  name: formdata[0].value,
  email: formdata[1].value,
  message: formdata[2].value,
};

formdata.forEach((input) => {
  input.addEventListener('change', () => {
    data.name = formdata[0].value;
    data.email = formdata[1].value;
    data.message = formdata[2].value;
    localStorage.setItem('data', JSON.stringify(data));
  });
});

const dataretrieve = () => {
  const dataget = JSON.parse(localStorage.getItem('data'));
  if (dataget) {
    formdata[0].value = dataget.name;
    formdata[1].value = dataget.email;
    formdata[2].value = dataget.message;
  }
};

window.addEventListener('DOMContentLoaded', dataretrieve);

const formdatadesktop = document.querySelectorAll('.datadesktop');

const datadesk = {
  name: formdatadesktop[0].value,
  email: formdatadesktop[1].value,
  message: formdatadesktop[2].value,
};

formdatadesktop.forEach((input) => {
  input.addEventListener('change', () => {
    datadesk.name = formdatadesktop[0].value;
    datadesk.email = formdatadesktop[1].value;
    datadesk.message = formdatadesktop[2].value;
    localStorage.setItem('datad', JSON.stringify(datadesk));
  });
});

const dataretrieved = () => {
  const datagetd = JSON.parse(localStorage.getItem('datad'));
  if (datagetd) {
    formdatadesktop[0].value = datagetd.name;
    formdatadesktop[1].value = datagetd.email;
    formdatadesktop[2].value = datagetd.message;
  }
};

window.addEventListener('DOMContentLoaded', dataretrieved);