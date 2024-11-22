const rPSBTN = document.querySelectorAll('.rpsbutton');
const Playerboard = document.getElementById('playerscoreboard');
const computerBoard = document.getElementById('compscoreboard')
const GameBoard = document.getElementById('gamechoice');
const resultBoard = document.getElementById('resultcontainer');
const stopGameBtn = document.getElementById('endgamebtn'); 

const totalScore = {'computerScore': 0, 'playerScore': 0};

const getComputerChoice = () => {
    let rpsArray = ['Rock', 'Paper', 'Scissors']
    let randomChoice = Math.floor(Math.random() * rpsArray.length)
    return rpsArray[randomChoice]
}

const playGame = () => {
    rPSBTN.forEach((button) => {
        button.addEventListener('click', () => {
            OnclickRPS(button.value);
        })
    })
}

playGame();


const getResults = (playerchoice, computerchoice) => {
    let score;

    if(playerchoice == computerchoice){
        score = 0
    }else if(playerchoice == 'Paper' && computerchoice === 'Rock'){
        score = 1
    }else if(playerchoice === 'Scissors' && computerchoice === 'Paper'){
        score = 1
    }else if(playerchoice === 'Rock' && computerchoice === 'Scissors'){
        score = 1
    }else{
        score = -1
    }

    return score;
}

const showResults = (score, playerchoice, computerchoice) => {
    if(score == 0){
        resultBoard.innerText = `Tie Game!!!`
    }else if(score == 1){
        resultBoard.innerText = 'You Win!!!'
    }else{
        resultBoard.innerText = 'You lose!!!'
    }

    Playerboard.innerText = `Player : ${totalScore['playerScore']}`
    computerBoard.innerText = ` Computer : ${totalScore['computerScore']}`
    GameBoard.innerText = `👨chose ${playerchoice} vs 🤖 chose ${computerchoice}`
}

const OnclickRPS = (playerchoice) => {
    const computerchoice = getComputerChoice();
    const score = getResults(playerchoice, computerchoice);
    totalScore['playerScore'] += score
    totalScore['computerScore'] -= score
    showResults(score, playerchoice, computerchoice);
}


stopGameBtn.onclick = () => clearBoard();

function clearBoard() {
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;
    resultBoard.innerText = '';
    Playerboard.innerText = '';
    computerBoard.innerText = '';
    GameBoard.innerText = '';
}