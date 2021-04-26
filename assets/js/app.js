let playerScore = 0;
let computerScore = 0;
const playerScoreLabel = document.querySelector('.player-score');
const computerScoreLabel = document.querySelector('.computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result p');
const rock = document.querySelector('.b');
const paper = document.querySelector('.k');
const scissors = document.querySelector('.g');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const hands = document.querySelectorAll('.hands img');

function computerChoices() {
    const compChoice = ['b', 'g', 'k'];
    const randNumber = Math.floor(Math.random() * compChoice.length);
    return compChoice[randNumber];
}

function choiceConvert(letter) {
    if (letter == 'b') return 'Batu';
    if (letter == 'g') return 'Gunting';
    return 'Kertas';
}

function win(player, computer) {
    const playerChoices = document.querySelector('.' + player);
    playerScore++;
    playerScoreLabel.innerHTML = playerScore;
    computerScoreLabel.innerHTML = computerScore;
    result.innerHTML = `${choiceConvert(player)} vs ${choiceConvert(
		computer,
	)} | Kamu Menang`;
    playerHand.src = `../gunting-batu-kertas-game/assets/img/pemain${choiceConvert(
		player,
	)}.png`;
    computerHand.src = `../gunting-batu-kertas-game/assets/img/komputer${choiceConvert(
		computer,
	)}.png`;
    playerChoices.classList.add('green');
    setTimeout(() => playerChoices.classList.remove('green'), 300);
}

function lose(player, computer) {
    const playerChoices = document.querySelector('.' + player);
    computerScore++;
    playerScoreLabel.innerHTML = playerScore;
    computerScoreLabel.innerHTML = computerScore;
    result.innerHTML = `${choiceConvert(player)} vs ${choiceConvert(
		computer,
	)} | Kamu Kalah`;
    playerHand.src = `../gunting-batu-kertas-game/assets/img/pemain${choiceConvert(
		player,
	)}.png`;
    computerHand.src = `../gunting-batu-kertas-game/assets/img/komputer${choiceConvert(
		computer,
	)}.png`;
    playerChoices.classList.add('red');
    setTimeout(() => playerChoices.classList.remove('red'), 300);
}

function draw(player, computer) {
    const playerChoices = document.querySelector('.' + player);
    playerScoreLabel.innerHTML = playerScore;
    computerScoreLabel.innerHTML = computerScore;
    result.innerHTML = `${choiceConvert(player)} vs ${choiceConvert(
		computer,
	)} | Seri`;
    playerHand.src = `../gunting-batu-kertas-game/assets/img/pemain${choiceConvert(
		player,
	)}.png`;
    computerHand.src = `../gunting-batu-kertas-game/assets/img/komputer${choiceConvert(
		computer,
	)}.png`;
    playerChoices.classList.add('gray');
    setTimeout(() => playerChoices.classList.remove('gray'), 300);
}

function play(playerChoices) {
    const computerChoice = computerChoices();
    const playerChoice = playerChoices;

    playerHand.style.animation = 'playerShake 2s ease';
    computerHand.style.animation = 'computerShake 2s ease';

    hands.forEach((hand) => {
        hand.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    switch (playerChoice + computerChoice) {
        case 'bg':
        case 'gk':
        case 'kb':
            setTimeout(() => win(playerChoice, computerChoice), 2000);
            break;
        case 'bk':
        case 'gb':
        case 'kg':
            setTimeout(() => lose(playerChoice, computerChoice), 2000);
            break;
        case 'bb':
        case 'kk':
        case 'gg':
            setTimeout(() => draw(playerChoice, computerChoice), 2000);
            break;
    }
}

function main() {
    const playBtn = document.querySelector('.intro button');
    const playScreen = document.querySelector('.play');
    const introScreen = document.querySelector('.intro');

    playBtn.addEventListener('click', () => {
        introScreen.classList.toggle('fade-out');
        playScreen.classList.toggle('fade-in');
    });
    rock.addEventListener('click', function() {
        play('b');
    });

    paper.addEventListener('click', function() {
        play('k');
    });

    scissors.addEventListener('click', function() {
        play('g');
    });
}

main();