const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');

if (menu) {
  menu.classList.remove('main-header--no-js');
}

const openMenu = () => {
  menu.classList.remove('main-header--closed');
  menu.classList.add('main-header--opened');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  menu.classList.add('main-header--closed');
  menu.classList.remove('main-header--opened');
  document.body.style.overflow = 'visible';
};

const clickToggle = () => {
  if (menu.classList.contains('main-header--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const activateMenu = () => {
  if (menu) {
    menuToggle.addEventListener('click', clickToggle);
  }
};

export {activateMenu};
