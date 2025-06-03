
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

    
    return result;
}

function playGame(){
 let humanScore = 0;
 let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {   
    humanChoice = button.textContent;
    playRound()
    console.log("Human chose "+humanChoice)
    let computerChoice = getComputerChoice();
    result = playRound(computerChoice, humanChoice);
     if(result == "Human Wins"){
            humanScore++;
        }  else if (result == "Computer Wins") {
            computerScore++;
        } else if (result == "Tie"){
            result += "! No points awarded"
        } else {
            winner.textContent = "Something went wrong";
        }
        console.log("Current Scores; Human: "+humanScore+" Computer: "+computerScore);
        hChoice.textContent = "Human chooses "+humanChoice;
        cChoice.textContent = "Computer chooses: "+computerChoice;
        winner.textContent = result+ ": Current Scores; Human: "+humanScore+" Computer: "+computerScore;
        
        if(humanScore >= 5 || computerScore >= 5){
            winner.textContent = 
            humanScore > computerScore
            ? "Human wins! Final Score: Human " + humanScore + ", Computer " + computerScore
            : humanScore < computerScore
                ? "Computer wins! Final Score: Human " + humanScore + ", Computer " + computerScore
                : "It's a tie! Final Score: Human " + humanScore + ", Computer " + computerScore;

            humanScore = 0;
            computerScore = 0;
         }
        
  });
});
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
rock.classList.add("btn");
rock.id = "rockBtn";

paper.textContent = "Paper";
paper.classList.add("btn");
paper.id = "paperBtn";

scissors.textContent = "Scissors";
scissors.classList.add("btn");
scissors.id = "scissorsBtn";

const results = document.createElement("div");
const hChoice = document.createElement("p");
const cChoice = document.createElement("p");
const winner = document.createElement("p");


document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(results);

results.appendChild(hChoice);
results.appendChild(cChoice);
results.appendChild(winner);

const buttons = document.querySelectorAll(".btn");


playGame();

// function getHumanChoice(choice){

//     choice = choice.toLowerCase();
//     if (choice != "rock" && choice != "scissors" && choice != "paper"){
//         choice = null;
//         console.log("Human choice was invalid");
//         return null;
//     }

//     result = choice.charAt(0).toUpperCase() + choice.slice(1);

//     console.log("Human chooses: "+result);
//     return result;
// }