/*
3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
*/
var currentplayer = 0;
var plusedNum = [0,0];
var winner = null;
var current = 0;
var dice2 = 0;
var dice1 = 0;
var scoreSet = 100;
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
 document.querySelector('#current-0').textContent = 0;
 document.querySelector('#current-1').textContent = 0;
  //delay display 1s
 
 dice1 = 0;
 dice2 = 0;
}

document.querySelector('.btn-set').addEventListener('click',function(){
    setNum = document.querySelector('.final-score').value;
    if (setNum > 0) {
        scoreSet = setNum;
    }
}
)    


document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice = Math.floor(Math.random() * 6)+1;
    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // if dice  1 or not
    if (dice === 1) {
        document.querySelector('#current-' + currentplayer).textContent = 1;
        lostScore()
    } else {
        current += dice;
        console.log(current);
        document.querySelector('#current-' + currentplayer).textContent = current;
    }
    // record dice1 or dice2 
    if (dice1 === 0 && dice2 === 0) {
        dice2 = dice;
    } else {
        dice1 = dice2;
        dice2 = dice;
        if ( dice1 === 6 && dice2 === 6) {
            //lose score
            lostScore();
        }
    }
}
);

function lostScore(){
    current = 0;
    document.querySelector('#score-' + currentplayer).textContent = current;
    nextPlayer();
}


document.querySelector('.btn-hold').addEventListener('click',function(){
    plusedNum[currentplayer] += current;
    document.querySelector('#score-'+currentplayer).textContent = plusedNum[currentplayer];
    if (plusedNum[currentplayer] >= scoreSet) {
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

