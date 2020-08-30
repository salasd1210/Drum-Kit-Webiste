alert("You Are Entering The Website Made By Salas!");

// Listen to the button clicks

for ( var i = 0 ; i < 7 ; i++ )
{
  document.querySelectorAll(".drum")[i].addEventListener( "click" , function () {

    var x = this.innerHTML;

    makeSound(x);

    buttonAnimation(x);

  } );

}

// Listen to the Keyboard Strokes

document.addEventListener( "keydown" , function( event ) {

  var x = event.key;

  makeSound(x);

  buttonAnimation(x);

} );

// Play The Sounds

function makeSound(x) {

  switch (x)
  {
    case 'w':
      var audio = new Audio("sounds/tom-3.mp3");
      break;

    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      break;

    case 's':
      var audio = new Audio("sounds/tom-4.mp3");
      break;

    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      break;

    case 'j':
      var audio = new Audio("sounds/kick-bass.mp3");
      break;

    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      break;

    case 'l':
      var audio = new Audio("sounds/snare.mp3");
      break;

    }

    audio.play();
}

function buttonAnimation(prdKey) {

  var activeBtn = document.querySelector("." + prdKey);

  activeBtn.classList.add("pressed");

  setTimeout( function () {
    activeBtn.classList.remove("pressed");
  } , 100 );

}
