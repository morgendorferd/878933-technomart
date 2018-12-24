var contactsLink = document.querySelector(".main-contacts-link"),
contactsPopup = document.querySelector(".modal-write-us"),
contactsBtnClose = contactsPopup.querySelector(".modal-write-us-close"),
contactsForm = contactsPopup.querySelector("form"),
contactsName = contactsPopup.querySelector("input[name=Имя]"),
contactsEmail =contactsPopup.querySelector("input[name=Почта]"),
contactsTextarea =contactsPopup.querySelector("textarea[name=Комментарий]"),
mapLink = document.querySelector(".contacts-map"),
mapPopup = document.querySelector(".modal-map"),
mapClose = document.querySelector(".modal-map-close"),
cartLink = document.querySelector(".cart-link"),
cartPopup = document.querySelector(".modal-cart");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    contactsName.value = storage;
    contactsEmail.focus();
  } else {
    contactsName.focus();
  }
});

contactsBtnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function(evt) {
  if (!contactsName.value || !contactsEmail.value || !contactsTextarea.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactsName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactsPopup.classList.contains("modal-show")) {
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
