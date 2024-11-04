let userScore = 0 ;
let computerScore = 0 ;

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
    let winner;
    let draw = false ; 

    if(getHumanChoice == getComputerChoice) {
        alert(`${getHumanChoice} and ${getComputerChoice} makes a draw!`)
        draw = true
        
    }

    else if(
        ((getHumanChoice == "rock" && getComputerChoice =="scissors")) || 
        ((getHumanChoice == "paper" && getComputerChoice == "rock")) || 
        ((getHumanChoice == "scissors" && getComputerChoice == "paper "))) {
        winner = true 
    }

   
    else {
        winner = false 
    
    }

    if(winner == true) {
        alert(`Congratulations you won! ${getHumanChoice} beats ${getComputerChoice}`)
        userScore++
    }

    else if(winner == false & draw == false){
        alert(`Unlucky you lost! ${getComputerChoice} beats ${getHumanChoice}`)
        computerScore++
    }
    

   



    alert(`User's Score:${userScore}
        Computers Score:${computerScore}`)

    }



function playGame(playRound) {
    for(userScore = userScore, computerScore = computerScore; userScore < 2 && computerScore < 2; userScore = userScore, computerScore = computerScore) {
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
