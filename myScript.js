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
    image: ['./assets/img/project2.png', './assets/img/project2.png','./assets/img/project2.png', './assets/img/project2.png'],
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

const project1 = document.getElementById('proj1');
const project2 = document.getElementById('proj2');
const project3 = document.getElementById('proj3');
const project4 = document.getElementById('proj4');
const project5 = document.getElementById('proj5');
const project6 = document.getElementById('proj6');
const mobilePopup = document.getElementById('mobile-popup');

function project1content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[0].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[0].technologies[0]}</button>
          <button class="popuptopbutton">${arr[0].technologies[1]}</button>
          <button class="popuptopbutton">${arr[0].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[0].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[0].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[0].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[0].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[0].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[0].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[0].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[0].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project1.addEventListener('click', project1content);

function project2content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[1].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[1].technologies[0]}</button>
          <button class="popuptopbutton">${arr[1].technologies[1]}</button>
          <button class="popuptopbutton">${arr[1].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[1].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[1].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[1].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[1].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[1].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[1].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[1].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[1].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project2.addEventListener('click', project2content);

function project3content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[2].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[2].technologies[0]}</button>
          <button class="popuptopbutton">${arr[2].technologies[1]}</button>
          <button class="popuptopbutton">${arr[2].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[2].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[2].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[2].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[2].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[2].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[2].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[2].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[2].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project3.addEventListener('click', project3content);

function project4content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[3].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[3].technologies[0]}</button>
          <button class="popuptopbutton">${arr[3].technologies[1]}</button>
          <button class="popuptopbutton">${arr[3].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[3].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[3].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[3].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[3].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[3].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[3].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[3].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[3].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project4.addEventListener('click', project4content);

function project5content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[4].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[4].technologies[0]}</button>
          <button class="popuptopbutton">${arr[4].technologies[1]}</button>
          <button class="popuptopbutton">${arr[4].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[4].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[4].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[4].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[4].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[4].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[4].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[4].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[4].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project5.addEventListener('click', project5content);

function project6content() {
  mobilePopup.innerHTML = `
  <div id="overlay" ></div>
      <div id="popup">
        <div class="popupcontrols">
          <span id="popupclose">X</span>
        </div>
        <div class="popupcontent">
          <h1>${arr[5].name}</h1>
        
        <div class="button-area">
          <button class="popuptopbutton">${arr[5].technologies[0]}</button>
          <button class="popuptopbutton">${arr[5].technologies[1]}</button>
          <button class="popuptopbutton">${arr[5].technologies[2]}</button>
        </div>

        <div class="projectpreview">
          <img src=${arr[5].image[0]} alt="project1" class="mainpopupimage"/>
          <div class="mobile-popup">
            <img src=${arr[5].image[0]} alt="project1" class="subpopupimages" />
            <img src=${arr[5].image[1]} alt="project1" class="subpopupimages" />
            <img src=${arr[5].image[2]} alt="project1" class="subpopupimages" />
            <img src=${arr[5].image[3]} alt="project1" class="subpopupimages" />
          </div>
        </div>
        <p class="paragraphpopup">
        ${arr[5].description}
        </p>
        <div class="popupbottombtn">
          <button href=${arr[5].livelink}>
            See Live <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
        <div class="popupbottombtn">
          <button href=${arr[5].sourcelink}>
            See Source <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
      </div>
  `;

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  const buttonClose = document.getElementById('popupclose');
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }

  buttonClose.addEventListener('click', closePopup);
}

project6.addEventListener('click', project6content);

const firstPopup = document.getElementById('project-popup');
const secondPopup = document.getElementById('project-popup2');

// const closePopup = document.getElementById('popupclose');
const overlay = document.getElementById('overlaydesktop');
const popup = document.getElementById('popupdesktop');
const button = document.getElementById('button');

function closePopup () {
  overlay.style.display = 'none';
  popup.style.display = 'none';
}

firstPopup.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
};

firstPopup.addEventListener('click', function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
})