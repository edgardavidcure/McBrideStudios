const circles = document.querySelectorAll(".circle");
const imgContainer = document.querySelector(".imageContainer")
const modalContainer = document.querySelector(".modal-content")


let slideIndex = 1;
window.onload = function addClass(){
    for (let circle of circles ) {
        circle.classList.add("move")
    }
}

window.addEventListener('load', centerItem);



function centerItem() {
  let items = document.querySelectorAll('.move');
  let viewportWidth = window.innerWidth;
  for (let item of items){
    let itemWidth = item.offsetWidth + 7;
    let leftPosition = (viewportWidth - itemWidth) / 2;
    let rightPosition = (viewportWidth - itemWidth) / 2;
    items[0].style.left = leftPosition + 'px';
    items[1].style.right = rightPosition + 'px';
  } 
}

async function getDataFromJson(){
    let jsonData = await fetch("/json/images.json");
    let data = await jsonData.json();
    return data;
}

async function getImages(type){
    let data = await getDataFromJson();
    switch (type) {
        case "portraits":
            cleanContent()
            displayModalImages(data.portraits)
            displayImages(data.portraits);
            break;
        case "cars":
            cleanContent()
            displayModalImages(data.cars)
            displayImages(data.cars);
            break;
        case "landscapes":
            cleanContent()
            displayModalImages(data.landscapes)
            displayImages(data.landscapes);
        default:
            break;
    }
    setTimeout(() => {
        const headerLinks = document.querySelectorAll(".align-image");
        for (let item of headerLinks){
            item.style.opacity = "1"
        }
    }, 500);
    
}
function cleanContent(){

    const divElements = imgContainer.getElementsByTagName('div');

    // Convert the HTMLCollection to an array for easier manipulation
    const divArray = Array.from(divElements);

    // Remove each div element
    divArray.forEach((div) => {
        div.remove();
    });

    const modalDivElements = modalContainer.getElementsByTagName('div');
    const modalDivArray = Array.from(modalDivElements);

    // Remove each div element
    modalDivArray.forEach((div) => {
        div.remove();
    });
}

const displayImages = (types) => {
    const leftArrow = imgContainer.querySelector(".prev");
    const rightArrow = imgContainer.querySelector(".next");
    leftArrow.style.display = "block";
    rightArrow.style.display = "block"

    types.forEach((type, i) => {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", type.path)
        imageElement.setAttribute("alt", `${type} by Terry McBride`);
        imageElement.classList.add("align-image");
        imageElement.classList.add("transition3");
        imageElement.setAttribute("onclick", `openModal(); currentSlide(${i+1})`);

        let div = document.createElement("div");
        div.classList.add("column")

        div.insertAdjacentElement("afterbegin", imageElement);

        imgContainer.insertAdjacentElement("beforeend", div)
    });
}
const displayModalImages = (types) => {
    types.forEach((type, i) => {
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", type.path)
        imageElement.setAttribute("alt", `${type} by Terry McBride`);
        //imageElement.classList.add("align-image");
        //imageElement.classList.add("transition3");
        //imageElement.setAttribute("onclick", `openModal();currentSlide(${i+1})`);

        let div = document.createElement("div");
        div.classList.add("mySlides");

        div.insertAdjacentElement("afterbegin", imageElement);

        modalContainer.insertAdjacentElement("beforeend", div)
    });
}
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    console.log(n)
    showSlides(slideIndex = n);
}
function plusGallery(n) {
    const pixels = n + 200
    imgContainer.scrollBy(pixels, 0);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}

setTimeout(() => {
    const firstCircle = document.querySelector(".first");
    const secondCircle =  document.querySelector(".last");
    const logo = document.querySelector(".fixed img");
    firstCircle.style.opacity = "0";
    secondCircle.style.opacity = "0";
    logo.style.opacity = "1";
    
}, 4000);

setTimeout(() => {
    const headerLinks = document.querySelectorAll(".transition3");
    for (let item of headerLinks){
        item.style.opacity = "1"
    }
}, 5000);




getImages()


