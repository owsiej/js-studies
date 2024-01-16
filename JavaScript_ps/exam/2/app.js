/*
EXAM Create a solution that will tell us what poker set we have. 
The solution is to deal us 5 cards from the standard 52 card deck at random. 
Based on cards on our hand the program should tell us what is the best poker set. 
Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart
*/

const {
  createDeckOfCards,
  shuffleDeckAndDraw5Cards,
} = require("./deck-creations");

const {
  areCardsSameSuit,
  areCardsSequential,
  isRoyalFlush,
  groupCardsByFace,
  findDuplicates,
} = require("./poker-schemas");

function findCardLineUp(cards) {
  if (areCardsSequential(cards)) {
    if (areCardsSameSuit(cards)) {
      if (isRoyalFlush(cards)) {
        return "I-N-C-R-E-D-I-B-L-E. You got the highest of all. ROYAL FLUSH.";
      } else {
        return "Seriously? It's freaking STRAIGHT FLUSH.";
      }
    } else {
      return "BRO, yooo. It's STRAIGHT.";
    }
  } else {
    const areDuplicates = findDuplicates(groupCardsByFace(cards));
    if (areDuplicates) {
      return areDuplicates;
    } else {
      return areCardsSameSuit(cards)
        ? `YAY. It's FLASH with suit ${cards[0].suit}.`
        : `Maybe next time. It's only HIGH CARD with ${cards.pop().face}.`;
    }
  }
}

const testCards = [
  { face: "3", suit: "diamonds" },
  { face: "3", suit: "hearts" },
  { face: "3", suit: "spades" },
  { face: "6", suit: "diamonds" },
  { face: "3", suit: "clubs" },
];

const deckOfCards = createDeckOfCards();
// const drawnCards = shuffleDeckAndDraw5Cards(deckOfCards);
const drawnCards = testCards;
console.log("Your cards: ");
drawnCards.forEach((card) => console.log(`${card.face}, ${card.suit}`));

console.log(findCardLineUp(drawnCards));
