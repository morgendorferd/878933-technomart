(function () {
var btnPrev = document.querySelector(".promo-slider-toggle--prev"),
btnNext = document.querySelector(".promo-slider-toggle--next"),
images = document.querySelectorAll(".promo-slide"),
pointsArray = document.querySelectorAll(".promo-slider-control");
var counter = 0;
btnPrev.disabled = true;

btnPrev.addEventListener("click", function() {
    images[counter].classList.remove("shown");
    pointsArray[counter].classList.remove("promo-slider-control--active");
    counter--;
    images[counter].classList.add("shown");
    pointsArray[counter].classList.add("promo-slider-control--active");
    btnNext.disabled = false;

    if (counter === 0) {
      btnPrev.disabled = true;
    }
});

btnNext.addEventListener("click", function() {
    images[counter].classList.remove("shown");
    pointsArray[counter].classList.remove("promo-slider-control--active");
    counter++;
    images[counter].classList.add("shown");
    pointsArray[counter].classList.add("promo-slider-control--active");
    console.log(btnPrev.disabled);
    btnPrev.disabled = false;

    if (counter === images.length - 1) {
      btnNext.disabled = true;
    }
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

})();
