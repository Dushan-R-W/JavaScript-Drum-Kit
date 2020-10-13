//mouse click
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++){
  var currentButton = document.querySelectorAll(".drum")[i];
  currentButton.addEventListener("click", function(){
    var buttonPressed = this.innerHTML;
    playSound(buttonPressed);
    animationClicks(buttonPressed);
  });
}

//key press
document.addEventListener("keypress", function(event){
  playSound(event.key);
  animationClicks(event.key);
})

//playing music
function playSound(pressedButton){
  switch (pressedButton) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    default:console.log(pressedButton);
  }
}

//animations
function animationClicks(whichKeyPressed){
  var activeButton = document.querySelector("." + whichKeyPressed);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
