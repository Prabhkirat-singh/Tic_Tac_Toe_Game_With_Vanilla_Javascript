let sign = "X";
let turn = document.querySelector(`h2`);
turn.innerText = "X First Turn";
// let trueCount = 0;
// when user click on box run this fucntion ⬇
function BoxClicked(Clicked_id) {
  let box = document.getElementById(Clicked_id);
  if (box.innerText == "") {
    Winner(Clicked_id)
    box.innerHTML = sign;
    box.classList.add(`done`)
    checkingsign(Clicked_id);
  }
}

// changing sign turn by turn first turn is for X
function checkingsign(Clicked_id) {
  let box = document.getElementById(Clicked_id);

  if (sign == "X") {
    sign = "o";
    turn.innerText = "o Turn";
    box.style.color = "green";
    turn.style.color = "rgb(243, 99, 15)";
  } else {
    sign = "X";
    turn.innerText = "X Turn";
    turn.style.color = "green";
    box.style.color = "rgb(243, 99, 15)";
  }
  Winner(Clicked_id)
}
// Chossing Winner
function Winner(id) { 
  // initialization of all boxes
  let box1 = document.getElementById("Box1").innerHTML;
  let box2 = document.getElementById("Box2").innerHTML;
  let box3 = document.getElementById("Box3").innerHTML;
  let box4 = document.getElementById("Box4").innerHTML;
  let box5 = document.getElementById("Box5").innerHTML;
  let box6 = document.getElementById("Box6").innerHTML;
  let box7 = document.getElementById("Box7").innerHTML;
  let box8 = document.getElementById("Box8").innerHTML;
  let box9 = document.getElementById("Box9").innerHTML;

  // Checking X is Winner or not
  if (box1 == "X" && box2 == "X" && box3 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box4 == "X" && box5 == "X" && box6 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box7 == "X" && box8 == "X" && box9 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box1 == "X" && box4 == "X" && box7 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box2 == "X" && box5 == "X" && box8 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box3 == "X" && box6 == "X" && box9 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box1 == "X" && box5 == "X" && box9 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  } else if (box3 == "X" && box5 == "X" && box7 == "X") {
    turn.innerText = "X Won The Match";
    turn.style.color = "white";
  }

  // Checking o is Winner or not
  else if (box1 == "o" && box2 == "o" && box3 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box4 == "o" && box5 == "o" && box6 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box7 == "o" && box8 == "o" && box9 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box1 == "o" && box4 == "o" && box7 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box2 == "o" && box5 == "o" && box8 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box3 == "o" && box6 == "o" && box9 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box1 == "o" && box5 == "o" && box9 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  } else if (box3 == "o" && box5 == "o" && box7 == "o") {
    turn.innerText = "o Won The Match";
    turn.style.color = "white";
  }

  // If o or X will won the match so never show the sign on user click
 if(turn.innerText == "o Won The Match" || turn.innerText == "X Won The Match"){
     sign = "";
    } 
  else {
    Draw()
  }
}

// Reset the game when user's click on Reset button in DOM
function reset (){
  // Click on reseting all boxes innerText to blank so user can play again
  let boxes = document.querySelectorAll(".gameBox");
  boxes.forEach((element) => {
    element.innerText = ""
    // trueCount = 0;
    element.classList.remove("done");
  });

// changing lower text to back again
  turn = document.querySelector(`h2`);
  turn.innerText = "X First Turn";
  sign = "X";
  turn.style.color = "white";
}

// fucntion for Draw
function Draw (){
    let boxes = document.querySelectorAll(".gameBox")
    boxes.forEach((elements) => {
      if(elements.classList == "done") {
        console.log("draw")
      }
    })
}