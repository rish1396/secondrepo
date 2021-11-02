var numSquares = 6;
var colors = []
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode button event listeners
  for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares=3 : numSquares=6;
      reset();
    });
  }

  for(var i=0;i<squares.length;i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click event for squares
    squares[i].addEventListener("click",function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;

      //compare color to pick color
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  reset();
}



resetButton.addEventListener("click",function(){
  reset();
})

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //Remove messageDisplay
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  //change color of squares
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}



function changeColors(color){
  //loop through all squares
  for(var i=0;i<squares.length;i++){
  //change background of squares to match given color
  squares[i].style.backgroundColor = color;
  }
}



function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}



function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i=0;i<num;i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}



function randomColor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}


// easyBtn.addEventListener("click",function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for(var i=0;i<squares.length;i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }else{
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click",function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for(var i=0;i<squares.length;i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//
//   }
// });
