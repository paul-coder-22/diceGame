var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //getting the random no from 1 to 6

var randomImage = "dice" + randomNumber1 + ".png"; //taking the image from files which ever no come into

var randomImageSource = "images/" + randomImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

// random values
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// given reward to the player
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}
