let userScore = 0 
let computerScore = 0

function getComputerChoice() {
   let num = Math.ceil(Math.random()*3)
   switch(num) {
    case 1: return "rock"
    case 2: return "paper"
    case 3: return "scissors"
   }
   
}


function getHumanChoice() {
    return String(prompt("Type in your choice of rock, paper or scissors.")).toLowerCase()

    
}


function playRound(getHumanChoice, getComputerChoice) {
    let winner
    let draw = false

    if(getHumanChoice == "rock" & getComputerChoice =="scissors") {
        winner = true 
    }

    else if(getHumanChoice == "paper" & getComputerChoice =="rock") {
        winner = true
    }

    else if(getHumanChoice == "scissors" & getComputerChoice =="paper") {
        winner = true
    }

    else if(getHumanChoice == "scissors" & getComputerChoice =="rock") {
        winner = false
    }

    else if(getHumanChoice == "rock" & getComputerChoice =="paper") {
        winner = false
    }

    else if(getHumanChoice == "paper" & getComputerChoice =="scissors") {
        winner = false
    }

    else {
        winner = false 
        draw = true
    }

    if(winner == true) {
        alert(`Congratulations you won! ${getHumanChoice} beats ${getComputerChoice}`)
        userScore++
    }

    else if( draw == false & winner == false ) {
        alert(`Unlucky you lost! ${getComputerChoice} beats ${getHumanChoice}`)
        computerScore++
    }

    else if(draw == true) {
      alert(`${getHumanChoice} and ${getComputerChoice} makes a draw!`)
    }



    alert(`User's Score:${userScore}
        Computers Score:${computerScore}`)

    }



function playGame(playRound) {
    for(i=1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        

        
    }

    
    if(userScore > computerScore) {
        alert(`You won ${userScore} - ${computerScore} `)
    }
    else if( userScore < computerScore) {
        alert(`You lost ${userScore} - ${computerScore} `)
    }
    else {
        alert(`You drew ${userScore} - ${computerScore} `)
    }
}

playGame(playRound)
