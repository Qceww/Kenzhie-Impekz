let slides = document.getElementsByClassName('carousel-item')

var slideIndex = 1;
slide()
autoSlide()

function autoSlide(){
    setInterval(() => {
        slide(slideIndex)
        slideIndex = (slideIndex + 1) % 6
    }, 5000);   
}

const menu = document.querySelector('#menuBar');
    const menuLinks = document.querySelector('.dropdown');

    menu.addEventListener('click', function() {
        menu.classList.toggle("fa-xmark");
        menu.classList.toggle('is-active');
        menu.classList.toggle("fa-bars");
        menuLinks.classList.toggle('active');
    });

function slide(n) {
    let i;
    
    if (n > slides.length){
      slideIndex = 1;
    }
  
    if (n < 1){
      slideIndex = slides.length
    }
  
    for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none"
    }
    
    slides[slideIndex-1].style.display = 'block'
    
}
  
const characters = [   
  "Images/Character-Amber-show.png",
  "Images/Character-Beidou-show.png",
  "Images/Character-Dehya-show.png",
  "Images/Character-Heizou-show.png",
  "Images/Character-Jean-show.png",
  "Images/Character-Nahida-show.png",
  "Images/Character-Sara-show.png",
  "Images/Character-Xiao-show.png"
]

const characterList = document.querySelectorAll('.character-head')
const characterImage = document.querySelector('#character-active')

characterList.forEach((character, index) => {
  character.addEventListener('click', () => {
    const characterSelected = document.querySelector('.character-highlight') 
    characterImage.src = characters[index]
    character.classList.add('character-highlight')
    characterSelected.classList.remove('character-highlight')

  })
})

const mondstatButton = document.querySelector('.mondstat')
const liyueButton = document.querySelector('.liyue')
const inazumaButton = document.querySelector('.inazuma')
const sumeruButton = document.querySelector('.sumeru')
const regionActive = document.querySelector('.region-active')

function resetActive(){
  characterList.forEach( (character) => {
    character.classList.remove('character-deactive')
  });
}


mondstatButton.addEventListener('click', (event) => {

  if(mondstatButton.classList.contains('mondstat-active')){
    mondstatButton.classList.remove('mondstat-active')
    resetActive()
    return
  }
  
  mondstatButton.classList.add('mondstat-active')
  liyueButton.classList.remove('liyue-active')
  inazumaButton.classList.remove('inazuma-active')
  sumeruButton.classList.remove('sumeru-active')

  resetActive()
  
  characterList.forEach( (character) => {
    if(!character.classList.contains('mondstat')) character.classList.add('character-deactive')
  })
  
  // mondstat.style.color = '#C6F0EC'
})

liyueButton.addEventListener('click', (event) => {
  
  if(liyueButton.classList.contains('liyue-active')){
    liyueButton.classList.remove('liyue-active')
    resetActive()
    return
  }
  
  mondstatButton.classList.remove('mondstat-active')
  liyueButton.classList.add('liyue-active')
  inazumaButton.classList.remove('inazuma-active')
  sumeruButton.classList.remove('sumeru-active')
  
  resetActive()
  
  characterList.forEach( (character) => {
    if(!character.classList.contains('liyue')) character.classList.add('character-deactive')
  })
  
  
  // liyue.style.color = '#F7BD6A'
})


inazumaButton.addEventListener('click', (event) => {
  
  if(inazumaButton.classList.contains('inazuma-active')){
    inazumaButton.classList.remove('inazuma-active')
    resetActive()
    return
  }

  mondstatButton.classList.remove('mondstat-active')
  liyueButton.classList.remove('liyue-active')
  inazumaButton.classList.add('inazuma-active')
  sumeruButton.classList.remove('sumeru-active')
  
  resetActive()
  
  characterList.forEach( (character) => {
    if(!character.classList.contains('inazuma')) character.classList.add('character-deactive')
  })
  // inazuma.style.color = '#E87AEA'
})



sumeruButton.addEventListener('click', (event) => {
  
  if(sumeruButton.classList.contains('sumeru-active')){
    sumeruButton.classList.remove('sumeru-active')
    resetActive()
    return
  }
  
  mondstatButton.classList.remove('mondstat-active')
  liyueButton.classList.remove('liyue-active')
  inazumaButton.classList.remove('inazuma-active')
  sumeruButton.classList.add('sumeru-active')
  
  resetActive()
  
  characterList.forEach( (character) => {
    if(!character.classList.contains('sumeru')) character.classList.add('character-deactive')
  })

  // sumeru.style.color = '#29EC61'
})




