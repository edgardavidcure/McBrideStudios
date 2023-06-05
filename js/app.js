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

