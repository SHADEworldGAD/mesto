let popupElement = document.querySelector('.popup');
let popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
let profileElement = document.querySelector('.profile');
let profileButtonEditElement = profileElement.querySelector('.profile__button-edit');
let formElement = document.querySelector('.popup__content');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_aboutme');

let nameProfileElement = profileElement.querySelector('.profile__title');
let aboutmeProfileElement = profileElement.querySelector('.profile__subtitle');

function openPopup() {
  nameInput.value = nameProfileElement.textContent;
  jobInput.value = aboutmeProfileElement.textContent;
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = nameInput.value;
  aboutmeProfileElement.textContent = jobInput.value;
  closePopup();
}

profileButtonEditElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
