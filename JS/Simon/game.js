// alert("Fook!");

let userClickedPatter = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let started = false;
var level = 0;


$(document).keypress(function() {
    if (!started) {
        
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
});
$(".btn").click(function() {
    let userChosenColor = this.id;
    // console.log(userChosenColor);
    userClickedPatter.push(userChosenColor);
    console.log(userClickedPatter);
    // let audiox = new Audio("sounds/" + userChosenColor + ".mp3");
    // audiox.play();
        var audiox = new Audio("sounds/"+ userChosenColor + ".mp3");
        audiox.play(); 
        checkAnswer(userClickedPatter.length-1);
});
function checkAnswer(currentLevel) {
  if (userClickedPatter[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPatter.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else {
    console.log("wrong");
    var audioy = new Audio("sounds/wrong.mp3");
    audioy.play();

    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 100);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}
    function nextSequence() {
      userClickedPatter = [];
      level++;
      $("h1").text("Level "+level);
      let randomNumber = Math.floor(Math.random() * 4);
      // console.log(randomNumber);
      let randomChosenColor = buttonColors[randomNumber];
      console.log(randomChosenColor);
      gamePattern.push(randomChosenColor);
      $("#" + randomChosenColor).hide(20);
      $("#" + randomChosenColor).show(60);
      var audiox = new Audio("sounds/" + randomChosenColor + ".mp3");
      audiox.play();
    }

    $(".btn").on("click", function () {
      $(this).addClass("pressed");
      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
    });
    
    function startOver() {
      level = 0;
      started = false;
      gamePattern = [];
    }



// console.log(indexOfLast);
// $(".btn").on("click", function () {
//   var indexOfLast = userClickedPatter.length-1;
//   checkAnswer(indexOfLast);
//   console.log(indexOfLast);
// })