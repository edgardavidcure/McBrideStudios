const circles = document.querySelectorAll(".circle");


window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}

window.addEventListener('load', centerItem);

function centerItem() {
  var items = document.querySelectorAll('.move');
  var viewportWidth = window.innerWidth;
  for (let item of items){
    var itemWidth = item.offsetWidth + 7;
    let leftPosition = (viewportWidth - itemWidth) / 2;
    let rightPosition = (viewportWidth - itemWidth) / 2;
    items[0].style.left = leftPosition + 'px';
    items[1].style.right = rightPosition + 'px';
  }

  
}
setTimeout(() => {
    const firstCircle = document.querySelector(".first");
    const secondCircle =  document.querySelector(".last");
    const logo = document.querySelector(".fixed img");
    firstCircle.style.opacity = "0";
    secondCircle.style.opacity = "0";
    logo.style.opacity = "1";
    
}, 4000);
// Initial centering
centerItem();

setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition3");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
}, 5000);


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function plusGallery(n) {
    const container = document.querySelector(".imageContainer")
    const pixels = n + 200
    container.scrollBy(pixels, 0);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "flex";
}