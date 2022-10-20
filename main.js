const toggleButton = document.getElementById('toggle');
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
let menuOpen = false;

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open');
  if(!menuOpen) {
    toggleButton.classList.add('flip');
    menuOpen = true;
  } else {
    toggleButton.classList.remove('flip');
    menuOpen = false;
  }
})