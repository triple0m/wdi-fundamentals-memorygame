

var cards = ["queen","queen","king","king"];

var cardsInPlay = [];
var card0ne = [cards.lenght - 4 ];
cardsInPlay.push(card0ne);
console.log("User flipped queen")
var cardTwo = [cards.lenght - 2];
cardsInPlay.push(cardTwo);
console.log("User flipped King")
if(cardsInPlay.length === 2){

if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");

} else {alert("sorry, try again");

}

}
