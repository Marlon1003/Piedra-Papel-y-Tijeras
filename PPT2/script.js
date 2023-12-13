let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScoreScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const resetButton = document.getElementById("#reset");


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    switch (letter){
        case "r": return "Piedra";
        case "p": return "Papel";
        case "s": return "Tijera";
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    computerScoreScore_span.innerText = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vence a ${convertToWord(computerChoice)}${smallCompWord} ¡Ganaste!`;
};
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerText = userScore;
    computerScoreScore_span.innerText = computerScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vs ${convertToWord(computerChoice)}${smallCompWord} ¡Perdiste!`;
};
function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vs ${convertToWord(computerChoice)}${smallCompWord} Es un empate`;
};



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}

function main(){
    rock_div.addEventListener("click", () => {
        game("r");
    })

    paper_div.addEventListener("click", () => {
        game("p");
    })

    scissors_div.addEventListener("click", () => {
        game("s");
    })
}

main();



const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});