// For screen button click

var numberOfDrums = document.querySelectorAll(".drum").length;

/*
We can also use function like this
var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(b) { b.addEventListener("click", handle_click) });

function handle_click() {
  alert('Got clicked')
}
*/

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// For keyboard key press

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

// For playing correct sound
function playSound(character) {
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(character);
      break;
  }
}

// Animation

function buttonAnimation(currentKey) {
  // currentKey only gives innerhmtl or key pressed (i.e character)
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // Remove the pressed style so that it looks like we pressed the button'
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
