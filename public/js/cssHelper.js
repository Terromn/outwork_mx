const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = mobileMenu.getElementsByTagName('a');

menuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
});

// Add event listeners to menu items
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    mobileMenu.classList.remove('show');
  });
}


