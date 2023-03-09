var options = ["R", "P", "S"];
var wins = 0;
var losses = 0;
var ties = 0;

//prompt user to play
var playGame = function() {
    // Ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S:");
  
    // If user pressed Cancel, immediately end function
    if (!userChoice) {
      return;
    }

    //convert to uppercase
    userChoice = userChoice.toUpperCase();

    // Get random index from array of options
    var index = Math.floor(Math.random() * options.length);
    var compChoice = options[index];

    // If choices are the same, it’s a tie
    if (userChoice === compChoice) {
        ties++;
        window.alert("The computer chose " + compChoice + ". It was a tie!");
    }

    // Check every win condition for the player
    else if (
        (userChoice === "R" && compChoice === "S") || 
        (userChoice === "P" && compChoice === "R") || 
        (userChoice === "S" && compChoice === "P")
    )
        {
            wins++;
            window.alert("You win!");
        }

    // If above conditions failed, assume player lost
    else {
        losses++;
        window.alert("The computer chose " + compChoice + ". You lost!");
    }

    // Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
      );
    // Ask user to play again
    var playAgain = window.confirm("Play again?");

    // Ask user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
};

// Run the game for the first time
playGame();

