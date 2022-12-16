let rps = ["rock", "paper", "scissors"];
let random = rps[(Math.random() * rps.length) | 0];

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let humans = document.querySelector(".humancounter");
let aliens = document.querySelector(".alienscounter");

let player;

let playerscore = 0;
let computerscore = 0;

while (playerscore<5 || computerscore<5) {
    rock.addEventListener('click', function() {
        player = rock.toLowerCase();
    });

    paper.addEventListener('click', function() {
        player = paper.toLowerCase();
    });
    
    scissors.addEventListener('click', function() {
        player = scissors.toLowerCase();
    });

    "rock" > "scissors" == true;
    "paper" > "rock" == true;
    "scissors" > "paper" == true;

    if(player > random) {
        playerscore += 1;
    } 
    else if (random > player){
        computerscore += 1;
    } else {
        playerscore = playerscore;
        computerscore = computerscore;
    }
    humans.innerHTML = playerscore.toString();
    aliens.innerHTML = computerscore.toString();
};

