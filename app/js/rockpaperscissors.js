////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    console.log("You chose ")
    return prompt();
}
/*Code added to function below to test what the randomPlay output is. (Used to confirm winner.)*/
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        console.log("The computer chose rock");
        return "rock";
    } else if (randomNumber < 0.66) {
        console.log("The computer chose paper");
        return "paper";
    } else {
        console.log("The computer chose scissors");
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression*/  move?move:getInput();
}
/*Or if you were to comment out the above statement: (return \/* Your Expression*\/  move?move:getInput();
}) the switch statement below would work.
*/
/*
    switch (move) {
        case move = "rock":
             return "rock";
        case move = "paper":
            return "paper";
        case move = "scissors":
            return "scissors";
        default:
            return getInput();
    }
}
*/
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */move?move:randomPlay();
}
/* Or switch statement below could be used in lieu of return expression above: */
/*
switch (move) {
        case move = "rock":
             return "rock";
        case move = "paper":
            return "paper";
        case move = "scissors":
            return "scissors";
        default:
            return randomPlay();
    }
}
*/
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}


function playToFive(placeholder) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.*/
      /* YOUR CODE HERE */
      var newGame;
      while ((computerWins<5)&&(playerWins<5)) {
        newGame=getWinner(getPlayerMove(),getComputerMove());
        if (newGame === "computer") {
        computerWins=computerWins + 1;
       }
       else if (newGame === "player") {
           playerWins=playerWins + 1;
       }
       else {
           computerWins = computerWins;
           playerWins = playerWins;
       }
       console.log("Computer wins: " + computerWins);
       console.log("Player wins: " + playerWins);
    }
    var thanks = "Thanks for playing!";
    if (computerWins > playerWins) {
        console.log("The computer beat you " + computerWins + " to " + playerWins + ". " + thanks);
        }
        else {
        console.log("You beat the computer " + playerWins + " to " + computerWins + "! " + thanks);
        }
    function playAgain() {
    console.log("Would you like to play again?.")
    return prompt();
}
    if (playAgain()==="yes") {
        playToFive();
    }
    else {
        console.log('Thanks for playing. Good-bye.');
    }
}
playToFive();