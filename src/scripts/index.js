const reserveTableBtn = document.querySelector('.reserve-table__btn-reserve');
const statusElement = document.querySelector('.popup__status');
const form = document.querySelector('form');
const field = form.querySelectorAll('.form__field');


new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const popup = new Popup('.popup');
popup.setEventListeners();

function openPopup() {
  statusElement.textContent = '';

  popup.open();
}


function sendForm(evt) {
  evt.preventDefault();

  statusElement.textContent = '';

  let data = {}

  field.forEach(item => {
    data[item.name] = item.value;
  });

  api.setData(data)
  .then(res => {
    console.log(res);
    statusElement.textContent = 'Ok!';
  })
  .catch(err => {
    console.log(err);
    statusElement.textContent = 'Err';
  })
}


reserveTableBtn.addEventListener('click', openPopup);
form.addEventListener('submit', sendForm);
