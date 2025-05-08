let wins = sessionsStorage.getItem("wins") || 0;
let losses = sessionStorage.getItem("losses") || 0;
let ties = sessionStorage.getItem("ties").textContent = ties;

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById ("ties").textContent = ties;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        wins++;
    } else {
        result = "You lose!";
        losses++;
    }

    sessionStorage.setItem("wins", wins);
    sessionStorage.setItem("losses", losses);
    sessionStorage.setItem("ties", ties);

    document.getElementById("result").textContent = You chose ${playerChoice}. Computer chose ${computerChoice}. ${result} ;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties"). textContent = ties;
}
