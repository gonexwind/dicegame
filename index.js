var randomNumberP1 = Math.floor(Math.random() * 6) + 1;
var randomPic1 = "images/dice" + randomNumberP1 + ".png";
var imageP1 = document.querySelector(".img1").setAttribute("src", randomPic1);

var randomNumberP2 = Math.floor(Math.random() * 6) + 1;
var randomPic2 = "images/dice" + randomNumberP2 + ".png";
var imageP2 = document.querySelector(".img2").setAttribute("src", randomPic2);

if (randomNumberP1 > randomNumberP2) {
    document.querySelector(".heading").innerHTML = "Player 1 Wins! 😁";
} else if (randomNumberP2 > randomNumberP1){
    document.querySelector(".heading").innerHTML = "Player 2 Wins! 😆";
} else {
    document.querySelector(".heading").innerHTML = "Draw 🤷‍";
}
