const toggleButton = document.getElementById('toggle');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open');
  toggleButton.classList.toggle('flip');
})