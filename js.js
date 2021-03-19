let playerScore = 0;
let computerScore = 0;
let moves = 0;
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const playerOptions = [rockBtn,paperBtn,scissorBtn];
const computerOptions = ['rock','paper','scissors'];
function playGame() {
  playerOptions.forEach(e => {
      e.addEventListener('click', function () {
           const movLeft=document.querySelector('.movesleft');
           moves++;
           movLeft.innerText=`Moves Left : ${10-moves}` ;
           const choiceNum=Math.floor(Math.random()*3); /*Math.random return value >0 & <1 // *3 to get one index of array*/
          const computerChoise=computerOptions[choiceNum];
          // To check whom wins
          winner(this.innerText,computerChoise);/*this return button text*/
          if(moves == 10){
              gameOver(playerOptions,movLeft);
          }
      });
  });
}
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const playerchoiseBoard = document.querySelector('.p_choise');
        playerchoiseBoard.textContent=player;
        const computerScoreBoard = document.querySelector('.c-count');
        const computerchoiseBoard = document.querySelector('.c-choise');
        computerchoiseBoard.textContent=computer;
        player = player.toLowerCase();
        computer = computer.toLowerCase();/*to check equal to lower case*/
        if(player === computer){
            result.textContent = 'تعادل'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'يفوز الكمبيوتر ، شغل مخك اخوووووي!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            }else{
                result.textContent = 'لقد فزت ، مباااااااااااااارك أخوي ! '
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'يفوز الكمبيوتر ، شغل مخك اخوووووي!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'لقد فزت ، مباااااااااااااارك أخوي ! ';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'يفوز الكمبيوتر ، شغل مخك اخوووووي!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'لقد فزت ، مباااااااااااااارك أخوي ! ';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = ' انتهت اللعبة *_*'
        movesLeft.style.display = 'none';

        if(playerScore > computerScore){
            result.style.fontSize = '20px';
            result.innerText = 'معرفتكاش وانت كفوووو ! مبروووك الفوز اخوي !'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '20px';
            result.innerText = 'مش مشكلة علامااات دنيا ! حظا اوفر';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '20px';
            result.innerText = 'ريحة البر ولا عدمه ، تعادل أهون من خسارة !';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    // Calling playGame function inside game
    window.onload(playGame());



// Calling the game function
game();
