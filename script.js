let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget (){
    let randomNum = Math.floor(Math.random()* 9 + 1);
    return randomNum;
}

//console.log(generateTarget());

//valor absoluto e o mesmo numero sem levar em conta o sinal (positivo ou negativo)
//the distance from zero
const compareGuesses = (humanGuess, computGuess, targetNumber) => {
    
    //how to get the difference between 2 numbers in JS? is Math.abs
    alertNumber(humanGuess)
    alertNumber(computGuess)

    // letuserGuess = getAbsoluteDistance (humanGuess - targetGuess)
    let userGuess = Math.abs(humanGuess - targetNumber);

    // let computerGuess = getAbsoluteDistance (computGuess - targetGuess)
    let computerGuess = Math.abs(computGuess - targetNumber);


    if (userGuess <= computerGuess){
        return true
    } else {
        return false
    }
    //or if (userGuess < computerGuess){
    //     return true
    // } else{
    //     return false
    // }
} 
console.log(compareGuesses(18, 22, 26))

function updateScore(winner){
    if (winner === 'human'){
        humanScore = humanScore + 1;
    }
    else if(winner === 'computer'){
        computerScore = computerScore + 1;
    }
}

function advanceRound(){
    currentRoundNumber = currentRoundNumber + 1;
}


const getAbsoluteDistance = (num1, num2) => {
    let distance = Math.abs(num1 - num2)
    return distance
}

function alertNumber(num){
 if ((num < 0) || (num > 9)){
    return alert('The number is out range');
 }
}




