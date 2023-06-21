let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slidesIndex = 1;
showSlidess(slidesIndex);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slidesIndex += n);
}

// Thumbnail image controls
function currentSlides(n) {
  showSlidess(slidesIndex = n);
}

function showSlidess(n) {
  let i;
  let slidess = document.getElementsByClassName("mySlidess");
  let dotss = document.getElementsByClassName("dots");
  if (n > slidess.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slidesIndex-1].style.display = "block";
  dotss[slidesIndex-1].className += " active";
}

let sslideIndex = 1;
showsSlides(sslideIndex);

// Next/previous controls
function plussSlides(n) {
  showsSlides(sslideIndex += n);
}

// Thumbnail image controls
function scurrentSlidess(n) {
  showsSlides(slidessIndex = n);
}

function showsSlides(n) {
  let i;
  let sslide = document.getElementsByClassName("mySlidesss");
  let sdot = document.getElementsByClassName("sdots");
  if (n > sslide.length) {sslideIndex = 1}
  if (n < 1) {sslideIndex = sslide.length}
  for (i = 0; i < sslide.length; i++) {
    sslide[i].style.display = "none";
  }
  for (i = 0; i < sdot.length; i++) {
    sdot[i].className = sdot[i].className.replace(" active", "");
  }
  sslide[sslideIndex-1].style.display = "block";
  sdot[sslideIndex-1].className += " active";
}

