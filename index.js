const numberOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButton; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function () {
    const buttonText = this.textContent;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

document.addEventListener('keypress', function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
    
    case "a":
      const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;
    
    case "s":
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    
    case "d":
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    
    case "j":
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    
    case "k":
      const kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    
    case "l":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
  
    default:
      break;
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed')
  }, 100);
}

