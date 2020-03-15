console.log('ready')

const cards = ['queen', 'queen', 'king', 'king'];

//store cards flipped by the user
let cardsInPlay = [];

//func will check if for a match
const checkForMatch = function(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert('You found a match');
        } 
        else {
            console.log('Sorry. try again');
        }
    };
}


//push cards flipped by user and calls checkForMatch();
const flipCard = function(cardID){
console.log(`User flipped ${cards[cardID]}`);
cardsInPlay.push(cards[cardID]);
checkForMatch();
};

flipCard(0);
flipCard(2);
