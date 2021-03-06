class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.image = new Image()
        this.image.src = '/Images/cards/' + this.suit + '-' + this.rank + '.jpg'
    }
}
class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck() {
        let suits = ['red', 'green', 'blue', 'yellow'];
        let ranks = ['jester', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'wizard'];
        let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        $("#drawbtn").click(function() {
            var myCard = drawCard();
            if (mayCard) {
                makeCard(myCard.suit, myCard.rank);
            } else {
                alert("no more cards in the deck");
            }
        })
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
        }
    }
    }
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        ;(function () {
            const canvas = document.getElementById('Spielbrett')
            const ctx = canvas.getContext('2d')
        })
    }
}
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 30);
        this.players[1].playerCards = d.cards.slice(30, 60);
    }
}
let gameBoard = new Board();
gameBoard.start('Mario', 'Luigi');
console.log(gameBoard.players);