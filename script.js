function game() {
    function getComputerChoice() {
        const rps = ["rock", "paper", "scissors"];
        const choice = rps[(Math.random() * rps.length) | 0];

        return choice;
    }

    let random = getComputerChoice();


    let player = prompt("We are playing 'Rock! Paper! Scissors!'! What do you want to play? ").toLowerCase();

    while (player == "") {
        player = prompt("We are playing 'Rock! Paper! Scissors!'! What do you want to play? ").toLowerCase();
    }

    while (player != "rock" && player != "paper" && player != "scissors") {
        player = prompt("Try again! ").toLowerCase();
    }

    while (player == random) {
        console.log(`Ah! It's a tie! You both played ${player}!`);
        player = prompt("Play again! ").toLowerCase();
        random = getComputerChoice();
    }

    while (player != random) {
        "rock" > "scissors" == true;
        "paper" > "rock" == true;
        "scissors" > "paper" == true;

        if(player > random) {
            let result = `Congratulations! You won! You played ${player} while the computer played ${random}.`;
        }
        else {
            let result = `Too bad, you lost! You played ${player} while the computer played ${random}.`;
        }
    }

    return console.log(result);
}

console.log(game());

let replay = prompt("Do you want to play again? ").toLowerCase();

if (replay =="yes") {
    console.log(game())
} else {console.log("Thanks for playing!")}