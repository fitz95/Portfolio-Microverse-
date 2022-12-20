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
const li= document.querySelectorAll(".links");
const sec = document.querySelectorAll('section');

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 92 < sec[len].offsetTop){
    li.forEach(liitem => liitem.classList.remove("active"));
    li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);
}


