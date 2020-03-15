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
            console.log('<--- Sorry. try again --->');
        }
    };
}


//push cards flipped by user and calls checkForMatch();
const flipCard = function(cardID){
console.log(`User flipped ${cards[cardID].rank}`);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
cardsInPlay.push(cards[cardID].rank);
checkForMatch();
};

flipCard(0);
flipCard(2);


