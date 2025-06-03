
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    result = null;

    if (random == 0){
        result = "Rock";
    } else if (random == 1 ){
        result = "Paper";
    } else {
        result = "Scissors";
    }

    console.log("Computer chooses: "+result);
    return result;
}

function getHumanChoice(choice){

    choice = choice.toLowerCase();
    if (choice != "rock" && choice != "scissors" && choice != "paper"){
        choice = null;
        console.log("Human choice was invalid");
        return null;
    }

    result = choice.charAt(0).toUpperCase() + choice.slice(1);

    console.log("Human chooses: "+result);
    return result;
}

function playRound(computerChoice, humanChoice){
    let result = null;

    if(computerChoice == humanChoice){
        result = "Tie";
    } else if (computerChoice == "Paper" && humanChoice == "Rock"){
        result = "Computer Wins";
    } else if (computerChoice == "Rock" && humanChoice == "Scissors"){
        result = "Computer Wins";
    } else if (computerChoice == "Scissors" && humanChoice == "Paper"){
        result = "Computer Wins";
    } else if (computerChoice == "Paper" && humanChoice == "Scissors"){
        result = "Human Wins";
    } else if (computerChoice == "Rock" && humanChoice == "Paper"){
        result = "Human Wins";
    } else if (computerChoice == "Scissors" && humanChoice == "Rock"){
        result = "Human Wins";
    } else {
        result = "Invalid! Something went wrong"
    }

    console.log("Results for this round: "+result);
    return result;
}

function playGame(){
 let humanScore = 0;
 let computerScore = 0;
 for(i = 0; i < 5; i++){    
        console.log("Round "+(i + 1) )
        let humanChoice = getHumanChoice(window.prompt("Rock, Paper, or Scissors?"));
    if (humanChoice !== null) {
        let computerChoice = getComputerChoice();
        result = playRound(computerChoice, humanChoice);
        if(result == "Human Wins"){
            humanScore++;
        }  else if (result == "Computer Wins") {
            computerScore++;
        } else if (result == "Tie"){
            console.log("Tie! No points awarded")
        } else {
            console.log("Something went wrong")
        }
    } else {
        console.log("Skipping round due to invalid input.");
    }
}

console.log("Final Scores; Human: "+humanScore+" Computer: "+computerScore);
}


playGame();
