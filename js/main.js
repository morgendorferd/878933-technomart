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
cartPopup = document.querySelector(".modal-cart");
var cartClose = document.querySelector(".modal-cart-close"),
cartLinkElements = document.querySelectorAll(".cart-link");

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
  };

  if (contactsPopup == "undefined") {
    console.log ("Undefined")
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

(function () {

var btnPrev = document.querySelector(".promo-slider-toggle--prev"),
    btnNext = document.querySelector(".promo-slider-toggle--next");
var images = Array.prototype.slice.call(document.querySelectorAll(".promo-slide"));
var shownImage = document.querySelector(".shown");
var shownPoint = document.querySelector(".promo-slider-control--active");
var pointsArray = document.querySelectorAll(".promo-slider-control");
var counter2 = images.indexOf(shownImage);

btnPrev.addEventListener("click", function() {

    if (counter2 === 0) {
      images[counter2].classList.remove("shown");
      pointsArray[counter2].classList.remove("promo-slider-control--active");
      counter2 = images.length - 1;
    } else {
      images[counter2].classList.remove("shown");
      pointsArray[counter2].classList.remove("promo-slider-control--active");
      counter2--;
    }

    images[counter2].classList.add("shown");
    pointsArray[counter2].classList.add("promo-slider-control--active");
});

btnNext.addEventListener("click", function() {

    if (counter2 === images.length - 1) {
        images[counter2].classList.remove("shown");
        pointsArray[counter2].classList.remove("promo-slider-control--active");
        counter2 = 0;
    } else {
      images[counter2].classList.remove("shown");
      pointsArray[counter2].classList.remove("promo-slider-control--active");
      counter2++;
    }

    images[counter2].classList.add("shown");
    pointsArray[counter2].classList.add("promo-slider-control--active");
});

let slideThroughPoints = function () {
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener("click", function (evt) {
      if (index === counter2) {
          evt.preventDefault();
          return;
      } else {
          pointsArray[counter2].classList.remove("promo-slider-control--active");
          images[counter2].classList.remove("shown");
          counter2 = index;
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
