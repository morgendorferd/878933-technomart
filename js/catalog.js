var cartPopup = document.querySelector(".modal-cart"),
cartClose = document.querySelector(".modal-cart-close"),
cartLinkElements = document.querySelectorAll(".cart-link");
for (var i = 0; i < cartLinkElements.length; i++) {
  var cartLink = cartLinkElements[i];
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  })
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
