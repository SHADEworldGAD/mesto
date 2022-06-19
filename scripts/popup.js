let popupElement = document.querySelector('.popup');
let popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
let profileElement = document.querySelector('.profile');
let profileButtonAddElement = profileElement.querySelector('.profile__button-add');


function openPopup() {
  popupElement.classList.add('popup__opened');
}

profileButtonAddElement.addEventListener('click', openPopup);


function closePopup() {
  popupElement.classList.remove('popup__opened');
}

popupButtonCloseElement.addEventListener('click', closePopup);


let popupOverlay = document.querySelector('.popup__overlay');

function closePopupByClickOnOverlay() {
  popupElement.classList.remove('popup__opened');
}

popupOverlay.addEventListener('click', closePopupByClickOnOverlay);

let popupButtonSaveElement = popupElement.querySelector('.popup__button-save');
popupButtonSaveElement.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__content');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__aboutme-input');

let nameProfileElement = profileElement.querySelector('.profile__title');
let aboutmeProfileElement = profileElement.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  nameInput.value;
  jobInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  nameProfileElement.textContent = nameInput.value;
  aboutmeProfileElement.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);