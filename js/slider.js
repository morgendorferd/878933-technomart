(function () {

var btnPrev = document.querySelector(".promo-slider-toggle--prev"),
    btnNext = document.querySelector(".promo-slider-toggle--next");


var images = Array.from(document.querySelectorAll(".promo-slide"));

var shownImage = document.querySelector(".shown");
var shownPoint = document.querySelector(".promo-slider-control--active");

var pointsArray = document.querySelectorAll('.promo-slider-control');


var counter2 = images.indexOf(shownImage);

var counter = 0;

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



// Another 4 ways to make it work in IE

// 1) const naturalPointsArr = Array.from(pointsArray);
// 2) const naturalPointsArr = Array.prototype.slice.call(pointsArray);
// он же - const naturalPointsArr = [].slice.call(document.querySelectorAll('.promo__slider-control'), 0);
// 3) const naturalPointsArr = [...document.querySelectorAll('.promo__slider-control')];
// 4) using standart cycle "for";




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
