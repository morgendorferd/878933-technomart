// index.html
// переменные, связанные с формой обращения
var contactsLink = document.querySelector(".main-contacts-link"),
contactsPopup = document.querySelector(".modal-write-us"),
contactsBtnClose = contactsPopup.querySelector(".modal-write-us-close"),
contactsForm = contactsPopup.querySelector("form"),
contactsName = contactsPopup.querySelector("input[name=Имя]"),
contactsEmail =contactsPopup.querySelector("input[name=Почта]"),
contactsTextarea =contactsPopup.querySelector("textarea[name=Комментарий]");

// переменные, связанные с картой
var mapLink = document.querySelector(".contacts-map"),
mapPopup = document.querySelector(".modal-map"),
mapClose = mapPopup.querySelector(".modal-map-close");

// переменные, используемые в catalog.html
var cartPopup = document.querySelector(".modal-cart"),
cartClose = document.querySelector(".modal-cart-close"),
cartLinkElements = document.querySelectorAll(".cart-link");

// попап с формой обращения
if (contactsLink, contactsPopup, contactsBtnClose, contactsForm, contactsName, contactsEmail, contactsTextarea) {
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
}

// попап с картой
if (mapLink, mapPopup, mapClose) {
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
}

// слайдер
(function () {

var btnPrev = document.querySelector(".promo-slider-toggle--prev"),
    btnNext = document.querySelector(".promo-slider-toggle--next");
var images = Array.prototype.slice.call(document.querySelectorAll(".promo-slide"));
var shownImage = document.querySelector(".shown");
var shownPoint = document.querySelector(".promo-slider-control--active");
var pointsArray = document.querySelectorAll(".promo-slider-control");
var counter = images.indexOf(shownImage);

btnPrev.addEventListener("click", function() {

    if (counter === 0) {
      images[counter].classList.remove("shown");
      pointsArray[counter].classList.remove("promo-slider-control--active");
      counter = images.length - 1;
    } else {
      images[counter].classList.remove("shown");
      pointsArray[counter].classList.remove("promo-slider-control--active");
      counter--;
    }

    images[counter].classList.add("shown");
    pointsArray[counter].classList.add("promo-slider-control--active");
});

btnNext.addEventListener("click", function() {

    if (counter === images.length - 1) {
        images[counter].classList.remove("shown");
        pointsArray[counter].classList.remove("promo-slider-control--active");
        counter = 0;
    } else {
      images[counter].classList.remove("shown");
      pointsArray[counter].classList.remove("promo-slider-control--active");
      counter++;
    }

    images[counter].classList.add("shown");
    pointsArray[counter].classList.add("promo-slider-control--active");
});

let slideThroughPoints = function () {
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener("click", function (evt) {
      if (index === counter) {
          evt.preventDefault();
          return;
      } else {
          pointsArray[counter].classList.remove("promo-slider-control--active");
          images[counter].classList.remove("shown");
          counter = index;
          images[index].classList.add("shown");
          point.classList.add("promo-slider-control--active");
            btnNext.disabled = false;
            btnPrev.disabled = false;
      }
    });
  });
};

slideThroughPoints();

})();

// catalog.html

if (cartLinkElements, cartClose, cartPopup) {

  for (var i = 0; i < cartLinkElements.length; i++) {
    var cartLink = cartLinkElements[i];
    cartLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });
  };

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartPopup.classList.contains("modal-show")) {
        cartPopup.classList.remove("modal-show");
      }
    }
  });
}
