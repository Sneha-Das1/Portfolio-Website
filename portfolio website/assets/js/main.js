/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
if(navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
});



<script>
const container = document.getElementById('beyond-tags');
let dragged = null;

container.addEventListener('dragstart', function(e) {
  if (e.target.classList.contains('tag')) {
    dragged = e.target;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => e.target.classList.add('dragging'), 0);
  }
});

container.addEventListener('dragend', function(e) {
  if (dragged) {
    dragged.classList.remove('dragging');
    dragged = null;
  }
});

container.addEventListener('dragover', function(e) {
  e.preventDefault();
  const afterElement = getDragAfterElement(container, e.clientX, e.clientY);
  if (afterElement == null) {
    container.appendChild(dragged);
  } else {
    container.insertBefore(dragged, afterElement);
  }
});

function getDragAfterElement(container, x, y) {
  const draggableElements = [...container.querySelectorAll('.tag:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}














</script>






















/*=============== EMAIL JS ===============*/
// Your email JS code here (if any)

/*=============== SHOW SCROLL UP ===============*/
// Your scroll up code here (if any)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Your scroll active link code here (if any)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Your scroll reveal animation code here (if any)
