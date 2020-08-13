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
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');

 document.querySelector('#current-0').textContent = 0;
 document.querySelector('#current-1').textContent = 0;
  //delay display 1s

}

document.querySelector('.btn-set').addEventListener('click',function(){
    setNum = document.querySelector('.final-score').value;
    if (setNum > 0) {
        scoreSet = setNum;
    }
}
)    


document.querySelector('.btn-roll').addEventListener('click',function(){
    if (plusedNum[0] >= scoreSet || plusedNum[1] >= scoreSet) {
        //newGame();如何不重复newgame
    // currentplayer = 0;
    // plusedNum = [0,0];
    // current = 0;
    // winner = null;
    // document.querySelector('#name-0').textContent = 'player1';
    // document.querySelector('#name-1').textContent = 'player2';

    // document.querySelector('#current-0').textContent = 0;
    // document.querySelector('#current-1').textContent = 0;

    // document.querySelector('#score-0').textContent = 0;
    // document.querySelector('#score-1').textContent = 0;

    // document.querySelector('#diceA').style.display = 'none';
    // document.querySelector('#diceB').style.display = 'none';
    
    } else {
        var diceA = Math.floor(Math.random() * 6)+1;
        var diceB = Math.floor(Math.random() * 6)+1;
        //display the result
        var diceDOMa = document.querySelector('#diceA');
        var diceDOMb = document.querySelector('#diceB');
   
        diceDOMa.style.display = 'block';
        diceDOMa.src = 'dice-' + diceA + '.png';
        diceDOMb.style.display = 'block';
        diceDOMb.src = 'dice-' + diceB + '.png';
        // if dice  1 or not
        if (diceA === 1 || diceB === 1) {
        document.querySelector('#current-' + currentplayer).textContent = diceA + diceB;
        lostScore()
        } else {
        current += (diceA + diceB);
        console.log(current);
        document.querySelector('#current-' + currentplayer).textContent = current;
        }   
        if ( diceA === 6 && diceB === 6) {
            //lose score
            lostScore();
        }
    }

}
    
);

function lostScore(){
    current = 0;
    plusedNum[currentplayer] = 0;
    document.querySelector('#score-' + currentplayer).textContent = current;
    document.querySelector('#score-' + currentplayer).textContent = current;
    nextPlayer();
}


document.querySelector('.btn-hold').addEventListener('click',function(){
    if (plusedNum[0] >= scoreSet || plusedNum[1] >= scoreSet) {
        //newGame();
    } else {
        plusedNum[currentplayer] += current;
        document.querySelector('#score-'+currentplayer).textContent = plusedNum[currentplayer];
        if (plusedNum[currentplayer] >= scoreSet) {
            document.querySelector('#diceA').style.display = 'none';
            document.querySelector('#diceB').style.display = 'none';
            document.querySelector('#name-'+currentplayer).textContent = 'WINNER!';
            // active remove
            document.querySelector('.player-' + currentplayer + '-panel active').classList.remove('active');
        } else if (current !== 0) {
            nextPlayer(); 
        }    
    } 
});

document.querySelector('.btn-new').addEventListener('click',function(){
    if (currentplayer === 1) {
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
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

    document.querySelector('#diceA').style.display = 'none';
    document.querySelector('#diceB').style.display = 'none';
    
});



