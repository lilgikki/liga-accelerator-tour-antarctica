const menu = document.getElementById('menu');

const benefits = document.getElementById('benefits');
const catalog = document.getElementById('catalog');
const travel = document.getElementById('travel');
const contacts = document.getElementById('contacts');

const benefitsLink = document.getElementById('benefits-link');
const catalogLink = document.getElementById('catalog-link');
const travelLink = document.getElementById('travel-link');
const contactsLink = document.getElementById('contacts-link');

const benefitsLinkFooter = document.getElementById('benefits-link-footer');
const catalogLinkFooter = document.getElementById('catalog-link-footer');
const travelLinkFooter = document.getElementById('travel-link-footer');
const contactsLinkFooter = document.getElementById('contacts-link-footer');

const closeMenu = () => {
  if (menu.classList.contains('main-header--opened')) {
    menu.classList.add('main-header--closed');
    menu.classList.remove('main-header--opened');
    document.body.style.overflow = 'visible';
  }
};

const scroll = (block) => {
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const scrollToBenefits = () => {
  if (benefits && benefitsLink) {
    benefitsLink.addEventListener('click', () => {
      scroll(benefits);
      closeMenu();
    });
  }
  if (benefits && benefitsLinkFooter) {
    benefitsLinkFooter.addEventListener('click', () => {
      scroll(benefits);
      closeMenu();
    });
  }
};

const scrollToCatalog = () => {
  if (catalog && catalogLink) {
    catalogLink.addEventListener('click', () => {
      scroll(catalog);
      closeMenu();
    });
  }
  if (catalog && catalogLinkFooter) {
    catalogLinkFooter.addEventListener('click', () => {
      scroll(catalog);
      closeMenu();
    });
  }
};

const scrollToTravel = () => {
  if (travel && travelLink) {
    travelLink.addEventListener('click', () => {
      scroll(travel);
      closeMenu();
    });
  }
  if (travel && travelLinkFooter) {
    travelLinkFooter.addEventListener('click', () => {
      scroll(travel);
      closeMenu();
    });
  }
};

const scrollToContacts = () => {
  if (contacts && contactsLink) {
    contactsLink.addEventListener('click', () => {
      scroll(contacts);
      closeMenu();
    });
  }
  if (contacts && contactsLinkFooter) {
    contactsLinkFooter.addEventListener('click', () => {
      scroll(contacts);
      closeMenu();
    });
  }
};

const scrollTo = () => {
  scrollToBenefits();
  scrollToCatalog();
  scrollToContacts();
  scrollToTravel();
};

export {scrollTo};
