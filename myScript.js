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

const project1 = document.getElementById('proj1');
const project2 = document.getElementById('proj2');
const project3 = document.getElementById('proj3');
const project4 = document.getElementById('proj4');
const project5 = document.getElementById('proj5');
const project6 = document.getElementById('proj6');
const mobilePopup = document.getElementById('mobile-popup');
// function closePopup() {
//   // overlay.style.display = 'none';
//   popup.style.display = 'none';
// }

// function openPopup() {
//   // overlay.style.display = 'block';
//   popup.style.display = 'block';
// }

// buttonsArray.forEach((item) => {
//   item.addEventListener('click', openPopup);
// });
// closePopupButton.addEventListener('click', closePopup);

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
          <i class="fa-solid fa-x" id="popupclose"></i>
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
const secondPopup = document.getElementById('laptopimage');
const thirdPopup = document.getElementById('project-popup2');
const fourthPopup = document.getElementById('projectimg1');
const fifthPopup = document.getElementById('projectimg4');

const desktopPopup = document.getElementById('popupdesktopd');

function project1dcontent() {
  desktopPopup.innerHTML = `
  <div id="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${arr[0].name}</h1>
        <i class="fa-solid fa-x" id="popupclosedesktop" onclick='closePopup1()'></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${arr[0].technologies[0]}</button>
        <button class="btnpopupd">${arr[0].technologies[1]}</button>
        <button class="btnpopupd">${arr[0].technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${arr[0].image[0]} />
      <div class="mobile-popup">
        <img src=${arr[0].image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[0].image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[0].image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[0].image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph">
        ${arr[0].description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${arr[0].livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${arr[0].sourcelink}>
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
  document.getElementById('popupdesktop').style.display = 'block';
  const buttonClose1 = document.getElementById('popupclosedesktop');
  function popupdesktopclose() {
    document.getElementById('popupdesktop').style.display = 'none';
  }

  buttonClose1.addEventListener('click', popupdesktopclose);
}

firstPopup.addEventListener('click', project1dcontent);

function project2dcontent() {
  desktopPopup.innerHTML = `
  <div id="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${arr[1].name}</h1>
        <i class="fa-solid fa-x" id="popupclosedesktop" onclick='closePopup1()'></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${arr[1].technologies[0]}</button>
        <button class="btnpopupd">${arr[1].technologies[1]}</button>
        <button class="btnpopupd">${arr[1].technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${arr[1].image[0]} />
      <div class="mobile-popup">
        <img src=${arr[1].image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[1].image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[1].image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[1].image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph">
        ${arr[1].description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${arr[1].livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${arr[1].sourcelink}>
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
  document.getElementById('popupdesktop').style.display = 'block';
  const buttonClose1 = document.getElementById('popupclosedesktop');
  function popupdesktopclose() {
    document.getElementById('popupdesktop').style.display = 'none';
  }

  buttonClose1.addEventListener('click', popupdesktopclose);
}

secondPopup.addEventListener('click', project2dcontent);

function project3dcontent() {
  desktopPopup.innerHTML = `
  <div id="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${arr[4].name}</h1>
        <i class="fa-solid fa-x" id="popupclosedesktop" onclick='closePopup1()'></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${arr[4].technologies[0]}</button>
        <button class="btnpopupd">${arr[4].technologies[1]}</button>
        <button class="btnpopupd">${arr[4].technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${arr[4].image[0]} />
      <div class="mobile-popup">
        <img src=${arr[4].image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[4].image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[4].image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[4].image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph">
        ${arr[4].description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${arr[4].livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${arr[4].sourcelink}>
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
  document.getElementById('popupdesktop').style.display = 'block';
  const buttonClose1 = document.getElementById('popupclosedesktop');
  function popupdesktopclose() {
    document.getElementById('popupdesktop').style.display = 'none';
  }

  buttonClose1.addEventListener('click', popupdesktopclose);
}

thirdPopup.addEventListener('click', project3dcontent);

function project4dcontent() {
  desktopPopup.innerHTML = `
  <div id="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${arr[2].name}</h1>
        <i class="fa-solid fa-x" id="popupclosedesktop" onclick='closePopup1()'></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${arr[2].technologies[0]}</button>
        <button class="btnpopupd">${arr[2].technologies[1]}</button>
        <button class="btnpopupd">${arr[2].technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${arr[2].image[0]} />
      <div class="mobile-popup">
        <img src=${arr[2].image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[2].image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[2].image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[2].image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph">
        ${arr[2].description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${arr[2].livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${arr[2].sourcelink}>
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
  document.getElementById('popupdesktop').style.display = 'block';
  const buttonClose1 = document.getElementById('popupclosedesktop');
  function popupdesktopclose() {
    document.getElementById('popupdesktop').style.display = 'none';
  }

  buttonClose1.addEventListener('click', popupdesktopclose);
}

fourthPopup.addEventListener('click', project4dcontent);

function project5dcontent() {
  desktopPopup.innerHTML = `
  <div id="popupdesktop">
  <div class="popupcontentd">
    <div class="popup-border">
      <div class="popupcontrols">
        <h1 id="popupheader">${arr[3].name}</h1>
        <i class="fa-solid fa-x" id="popupclosedesktop" onclick='closePopup1()'></i>
      </div>
      <div class="button-area">
        <button class="btnpopupd">${arr[3].technologies[0]}</button>
        <button class="btnpopupd">${arr[3].technologies[1]}</button>
        <button class="btnpopupd">${arr[3].technologies[2]}</button>
      </div>
      <img id='popupmainimg' class="mainpopupimaged" src=${arr[2].image[0]} />
      <div class="mobile-popup">
        <img src=${arr[3].image[0]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[3].image[1]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[3].image[2]}  class="subpopupimages1" alt="project1" />
        <img src=${arr[3].image[3]}  class="subpopupimages1" alt="project1" />
      </div>
      <div class="popupcontentcon">
        <p class="paragraph">
        ${arr[3].description}
        </p>
        <div class="popupbtndiv">
          <div class="popupbtnd" href=${arr[3].livelink}>
            <p>See Live </p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <div class="popupbtnd" ${arr[3].sourcelink}>
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
  document.getElementById('popupdesktop').style.display = 'block';
  const buttonClose1 = document.getElementById('popupclosedesktop');
  function popupdesktopclose() {
    document.getElementById('popupdesktop').style.display = 'none';
  }

  buttonClose1.addEventListener('click', popupdesktopclose);
}

fifthPopup.addEventListener('click', project5dcontent);