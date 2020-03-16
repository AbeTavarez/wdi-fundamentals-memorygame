console.log('ready')

const cards = [
    {
        rank : "queen",
        suit : "hearts",
        cardImage : "images/queen-of-hearts.png"
    },
    {
        rank : "queen",
        suit : " diamonds",
        cardImage : "images/queen-of-diamonds.png"
    },
    {
        rank : "king",
        suit : "hearts",
        cardImage : "images/king-of-hearts.png"
    },
    {
        rank : "king",
        suit : "diamonds",
        cardImage : "images/king-of-diamonds.png"
    }
];

//store cards flipped by the user
let cardsInPlay = [];

//func will check if for a match
const checkForMatch = function(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert('You found a match');
        } 
        else {
            alert('<--- Sorry. try again --->');
        };
    }
       
};


//push cards flipped by user and calls checkForMatch();
const flipCard = function(){
    let cardID = this.getAttribute('data-id');

    console.log(cardID);
    console.log(`User flipped ${cards[cardID].rank}`);
    console.log(cards[cardID].cardImage);
    console.log(cards[cardID].suit);

    cardsInPlay.push(cards[cardID].rank);
    this.setAttribute('src', cards[cardID].cardImage);

    //set time out for card to fully flip
   setTimeout(checkForMatch, 100);
};


const createBoard = function(){
    for (let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        let gameBoard = document.getElementById('game-board');
        gameBoard.appendChild(cardElement);
    }
};

//Reset game function
const resetGame = function(){
    location.reload();
}

//reset Button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

//User Score
    //display user current score

    //update user score

//Shuffle Cards
    //

createBoard();
