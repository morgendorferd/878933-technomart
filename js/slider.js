(function () {

var btnPrev = document.querySelector(".promo-slider-toggle--prev"),
    btnNext = document.querySelector(".promo-slider-toggle--next");


var images = Array.from(document.querySelectorAll(".promo-slide"));

var shownImage = document.querySelector(".shown");
var shownPoint = document.querySelector(".promo-slider-control--active");

var pointsArray = document.querySelectorAll('.promo-slider-control');


var counter2 = images.indexOf(shownImage);

btnPrev.addEventListener('click', function() {

    if (counter2 === 0) {
      images[counter2].classList.remove("shown");
      pointsArray[counter2].classList.remove("promo-slider-control--active");
      counter2 = images.length - 1;
    } else {
      images[counter2].classList.remove("shown");
      pointsArray[counter2].classList.remove('promo-slider-control--active');
      counter2--;
    }

    images[counter2].classList.add('shown');
    pointsArray[counter2].classList.add('promo-slider-control--active');
});

btnNext.addEventListener('click', function() {

    if (counter2 === images.length - 1) {
        images[counter2].classList.remove('shown');
        pointsArray[counter2].classList.remove('promo-slider-control--active');
        counter2 = 0;
    } else {
      images[counter2].classList.remove('shown');
      pointsArray[counter2].classList.remove('promo-slider-control--active');
      counter2++;
    }

    images[counter2].classList.add('shown');
    pointsArray[counter2].classList.add('promo-slider-control--active');
});

let slideThroughPoints = function () {
  [].forEach.call(pointsArray, function(point, index) {
    point.addEventListener('click', function (evt) {
      if (index === counter2) {
          evt.preventDefault();
          return;
      } else {

          pointsArray[counter2].classList.remove('promo-slider-control--active');
          images[counter2].classList.remove('shown');
          counter2 = index;
          images[index].classList.add('shown');
          point.classList.add('promo-slider-control--active');

            btnNext.disabled = false;
            btnPrev.disabled = false;

      }
    });
  });
};

slideThroughPoints();

})();
