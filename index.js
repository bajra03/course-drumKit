const numberOfButton = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll('.drum')
const tom1 = new Audio('sounds/tom-1.mp3');
const tom2 = new Audio('sounds/tom-2.mp3');
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');
const crash = new Audio('sounds/crash.mp3');
const kickBass = new Audio('sounds/kick-bass.mp3');
const snare = new Audio('sounds/snare.mp3');

function makeSound(key) {
  switch (key) {
    case "w":
        tom1.play();
      break;
    
    case "a":
        tom2.play();
      break;
    
    case "s":
      tom3.play();
      break;
    
    case "d":
      tom4.play();
      break;
    
    case "j":
      crash.play();
      break;
    
    case "k":
      kickBass.play();
      break;
    
    case "l":
      snare.play();
      break;
  
    default:
      break;
  }
}

for (let i = 0; i < numberOfButton; i++) {
  drums[i].addEventListener("click", function () {
    const buttonText = this.textContent;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

document.addEventListener('keypress', function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed')
  }, 100);
}

