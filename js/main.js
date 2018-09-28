var link = document.querySelector(".contacts__link");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");
var login = popup.querySelector(".popup-form__input--name");
var form = popup.querySelector("form");
var textarea = popup.querySelector(".popup-form__textarea");
var email = popup.querySelector(".popup-form__input--email");
var storageName = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup--active");
  if (storageName) {
    login.value = storageName;
    email.focus();
  } else {
    login.focus();
  }
  if (storageEmail) {
    email.value = storageEmail;
    textarea.focus();
  } else {
    email.focus();
  }
});
popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup--active");
}); 
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    console.log("Вам нужно заполнить форму");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("popup--active")) {
      popup.classList.remove("popup--active");
    }
  }
});