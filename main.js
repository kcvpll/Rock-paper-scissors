let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoise(){
	const choises = ['r', 'p', 's'];
	const randomNumber = (Math.floor(Math.random()*3));
	return choises[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoise, computerChoise){
	userScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoise_div = document.getElementById(userChoise);
	const smallUserWord = " user".fontsize(3).sub();
	const smallCompWord = " comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoise)} ${smallUserWord} beats ${convertToWord(computerChoise)} ${smallCompWord}.  You win!`;
	userChoise_div.classList.add('green-glow');
	setTimeout(() => userChoise_div.classList.remove('green-glow'), 500);
}


function lose(userChoise, computerChoise){
	computerScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoise_div = document.getElementById(userChoise);
	const smallUserWord = " user".fontsize(3).sub();
	const smallCompWord = " comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoise)} ${smallUserWord} loses to ${convertToWord(computerChoise)} ${smallCompWord}.  You lost!`;
	userChoise_div.classList.add('red-glow');
	setTimeout(() => userChoise_div.classList.remove('red-glow'), 500);
}
function draw(userChoise, computerChoise){
	const userChoise_div = document.getElementById(userChoise);
	const smallUserWord = " user".fontsize(3).sub();
	const smallCompWord = " comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoise)} ${smallUserWord} equals ${convertToWord(computerChoise)} ${smallCompWord}.  Its a draw!`;
	userChoise_div.classList.add('grey-glow');
	setTimeout(() => userChoise_div.classList.remove('grey-glow'), 500);
	}


function game(userChoise){
	const computerChoise = getComputerChoise(); 
	switch(userChoise + computerChoise) {
		case "rs":			
		case "pr":
		case "sp":
			win(userChoise, computerChoise);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoise, computerChoise);
			break;
		case "rr":			
		case "pp":
		case "ss":
			draw(userChoise, computerChoise);
			break;
	}
}

function main(){
rock_div.addEventListener('click', function(){
	game("r");
})
paper_div.addEventListener('click', function(){
	game("p");
})
scissors_div.addEventListener('click', function(){
	game("s");
})
}

main();