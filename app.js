var playerOneResult = document.getElementById("pOne");
var playerTwoResult = document.getElementById("pTwo");
var finalResult = document.getElementById("result");
var photoDirectory = "images/";
var diceArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var animationTime = 3;
var animationTimeCount = 0;

function diceRollAnimation() {
    var randomAnimationPhotoOne = Math.floor(Math.random() * diceArray.length);
    var randomAnimationPhotoTwo = Math.floor(Math.random() * diceArray.length);

    if (animationTimeCount == animationTime) {
        showResult();
        animationTimeCount = 0;
    } else {
        setTimeout(diceRollAnimation, 500);
        animationTimeCount++;
        playerOneResult.src = photoDirectory + diceArray[randomAnimationPhotoOne];
        playerTwoResult.src = photoDirectory + diceArray[randomAnimationPhotoTwo];
    }
}

function showResult() {
    var getPlayerOnePoint = playerOneResult.src.split("/");
    var getPlayerTwoPoint = playerTwoResult.src.split("/");

    getPlayerOnePoint = getPlayerOnePoint[getPlayerOnePoint.length - 1].split(".")[0];
    getPlayerTwoPoint = getPlayerTwoPoint[getPlayerTwoPoint.length - 1].split(".")[0];

    var getPlayerOnePointInNumber = parseInt(getPlayerOnePoint[getPlayerOnePoint.length - 1]);
    var getPlayerTwoPointInNumber = parseInt(getPlayerTwoPoint[getPlayerTwoPoint.length - 1]);

    var getResult = getPlayerOnePointInNumber - getPlayerTwoPointInNumber;

    if (getResult > 0) {
        finalResult.innerHTML = "Player One WIN ! ! ! !";
    } else if (getResult == 0) {
        finalResult.innerHTML = "DRAW ! ! !";
    } else {
        finalResult.innerHTML = "Player Two WIN ! ! ! !";
    }

}


