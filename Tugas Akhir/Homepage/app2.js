let background = document.querySelector('#background');
// let aether = document.querySelector('#aether')
let aetherDepan = document.querySelector('#aether-depan')
let title = document.querySelector('#title');
let parallax = document.querySelector('.parallax')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    // console.log(value*2)
    
    
    if(value*2 <= aetherDepan.clientHeight){
      aetherDepan.style.top = value * -0.4 + 'px'
      title.style.top = value * 1.15 + 'px'
    }
    
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('container-3')
  
  if (n > slides.length){
    slideIndex = 1;
  }

  if (n < 1){
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none"
  }
  
  slides[slideIndex-1].style.display = 'flex'
}

var slideIndexCharacter = 1;
showSlidesCharacter(slideIndexCharacter);

function plusSlidesCharacter(nc) {
  showSlidesCharacter(slideIndexCharacter += nc);
}

function showSlidesCharacter(nc) {
  let j;
  let slidesCharacter = document.getElementsByClassName('character-slider')
  
  if (nc > slidesCharacter.length){
    slideIndexCharacter = 1;
  }

  if (nc < 1){
    slideIndexCharacter = slidesCharacter.length
  }

  for (j = 0; j < slidesCharacter.length; j++){
    slidesCharacter[j].style.display = "none"
  }
  
  slidesCharacter[slideIndexCharacter-1].style.display = 'block'
}