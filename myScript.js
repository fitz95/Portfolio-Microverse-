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
