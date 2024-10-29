
computerScore = 0
humanScore = 0


let getComputerChoice = () => 
{
    random_three = Math.floor(Math.random() * 3)
    if (random_three < 1) {
        return "paper"
    } else if (random_three < 2) {
        return "rock"
    } else {
        return "scissors"
    }
};

let getHumanChoice = () => 
{


    user_choice = prompt("Enter your choice: ")
    return user_choice
    

}

let playRound = (humanChoice, computerChoice) => {

    var weapons = {

        "rock":{ "weakTo": "paper", "strongTo": "scissors"},
        "paper": { "weakTo": "scissors", "strongTo": "rock"},
        "scissors": { "weakTo": "rock", "strongTo": "paper"},
    }

    if (weapons[humanChoice]["strongTo"] === computerChoice)  {
        console.log("Player wins!")
        humanScore ++
    } else if (weapons[computerChoice]["strongTo"] === humanChoice) {
        console.log("Computer wins!")
        computerScore ++
    } else {
        console.log("Tie!")
    }

}

let playgame = () => {

    for (i = 0 ; i < 5; i ++) {
        const humanSelection = getHumanChoice()
        console.log(humanSelection)
        const computerSelection = getComputerChoice()
        console.log(computerSelection)
        playRound(humanSelection, computerSelection)

    }

    console.log("Human scored ", humanScore)
    console.log("Computer scored ", computerScore)



}


playgame()












