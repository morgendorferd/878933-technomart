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
cartPopup = document.querySelector(".modal-cart"),
btnPrev = document.querySelector(".promo-slider-toggle--prev"),
btnNext = document.querySelector("promo-slider-toggle--next"),
images = document.querySelector("promo-slide"),
pointsArray = document.querySelectorAll("promo-slider-control");
var counter = 0;
btnPrev.disabled = true;

btnPrev.addEventListener('click', function() {
    images[counter].classList.remove('shown');
    pointsArray[counter].classList.remove('promo-slider-control--active');
    counter--;
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('promo-slider-control--active');
    btnNext.disabled = false;

    if (counter === 0) {
      btnPrev.disabled = true;
    }
});

btnNext.addEventListener('click', function() {
    images[counter].classList.remove('shown');
    pointsArray[counter].classList.remove('promo-slider-control--active');
    counter++;
    images[counter].classList.add('shown');
    pointsArray[counter].classList.add('promo-slider-control--active');
    console.log(btnPrev.disabled);
    btnPrev.disabled = false;

    if (counter === images.length - 1) {
      btnNext.disabled = true;
    }
});

let slideThroughPoints = function () {
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener('click', function (evt) {
      if (index === counter) {
          evt.preventDefault();
          return;
      } else {
        pointsArray[counter].classList.remove('promo-slider-control--active');
          images[counter].classList.remove('shown');
          counter = index;
          images[index].classList.add('shown');
          point.classList.add('promo-slider-control--active');

          if (counter === images.length - 1) {
            btnNext.disabled = true;
            btnPrev.disabled = false;
          } else if (counter === 0) {
            btnNext.disabled = false;
            btnPrev.disabled = true;
          } else {
            btnNext.disabled = false;
            btnPrev.disabled = false;
          }
      }
    });
  });
};

slideThroughPoints();

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
