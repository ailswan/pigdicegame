/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//connect to png: dice , current 1 or 2 , pulsed 1 or 2 , current player
var currentplayer = 0;
var plusedNum = [0,0];
var winner = null;
var current = 0;
 // active == player0


function nextPlayer() {
    current = 0;
 if (currentplayer === 0) {
     // active change
     currentplayer = 1;
 } else {
    currentplayer = 0;
      // active change
 }
  //delay display 1s
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice = Math.floor(Math.random() * 6)+1;
    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // if dice  1 or not
    if (dice === 1 ) {
        current = 0;
        document.querySelector('#current-' + currentplayer).textContent = 1;
        document.querySelector('#score-' + currentplayer).textContent = current;
        nextPlayer();
    } else {
        current += dice;
        console.log(current);
        document.querySelector('#current-' + currentplayer).textContent = current;
    }
}
);


document.querySelector('.btn-hold').addEventListener('click',function(){
    plusedNum[currentplayer] += current;
    document.querySelector('#score-'+currentplayer).textContent = plusedNum[currentplayer];
    if (plusedNum[currentplayer] >= 100) {
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#name-'+currentplayer).textContent = 'WINNER!';
        // active remove
        document.querySelector('.player-' + currentplayer + '-panel active').classList.remove('active');
    } else if (current !== 0) {
        nextPlayer(); 
    }
       
});

document.querySelector('.btn-new').addEventListener('click',function(){
    currentplayer = 0;
    plusedNum = [0,0];
    current = 0;
    winner = null;
     // active payer0;


    document.querySelector('#name-0').textContent = 'player1';
    document.querySelector('#name-1').textContent = 'player2';

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('.dice').style.display = 'none';
});

