const formBooking = document.getElementById('booking-form');

const nameBooking = document.getElementById('name');
const phoneBooking = document.getElementById('tel');
const emailBooking = document.getElementById('email');

const submitForm = (name, tel, email) => {
  localStorage.setItem('username', name);
  localStorage.setItem('phone', tel);
  localStorage.setItem('email', email);
};

const submitFormBooking = () => {
  if (formBooking) {
    formBooking.addEventListener('submit', (evt) => {
      if (!nameBooking.value || !phoneBooking.value) {
        evt.preventDefault();
      } else {
        evt.preventDefault();
        submitForm(nameBooking.value, phoneBooking.value, emailBooking.value);
        formBooking.reset();
      }
    }
    );
  }
};

export {submitFormBooking};
