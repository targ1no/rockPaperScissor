
//ESCOLHA DO USUÁRIO
const getUserChoice = (userInput) => {
    userInput = prompt('Rock, paper or scissor').toLowerCase()

    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissor') {

        //ESCOLHA DA MÁQUINA
        const getComputerChoice = () => {
            random = Math.floor(Math.random() * 3)

            if (random == 0) {
                random = 'rock'
            } else if (random == 1) {
                random = 'paper'
            } else if (random == 2) {
                random = 'scissor'
            }
        }

        getComputerChoice()

        //COMPARA JOGO
        const determineWinner = (userChoice, computerChoice) => {
            if (userChoice == computerChoice) {
                alert('Tie.')
            } else if (userChoice == 'rock' && computerChoice == 'scissor') {
                alert('Rock wins!')
            } else if (userChoice == 'rock' && computerChoice == 'paper') {
                alert('Paper wins!')
            } else if (userChoice == 'scissor' && computerChoice == 'rock') {
                alert('Scissor wins!')
            } else if (userChoice == 'scissor' && computerChoice == 'paper') {
                alert('Scissor wins!')
            } else if (userChoice == 'paper' && computerChoice == 'rock') {
                alert('Paper wins!')
            } else if (userChoice == 'paper' && computerChoice == 'scissor') {
                alert('Scissor wins!')
            }
        }

        //PLACAR
        const playGame = () => {
            let userChoice = userInput
            let computerChoice = random
            console.log(userChoice)
            console.log(random)

            console.log(determineWinner(userChoice, computerChoice))
        }

        playGame()

    } else {
        alert('A opção informada não está correta.')
        console.log('A opção informada não está correta.')
    }
}


getUserChoice()
/*
const getComputerChoice = () => {
    random = Math.floor(Math.random() * 3)

    if (random == 0) {
        alert('rock')
    } else if (random == 1) {
        alert('paper')
    } else if (random == 2) {
        alert('scissor')
    } 

    
}

getComputerChoice()


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        alert('eh')
    } else {
        alert('n eh')
    }
}


const playGame = () => {
    let userChoice = userInput
    let computerChoice = random
    console.log(userChoice)
    console.log(random)

    
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
*/

