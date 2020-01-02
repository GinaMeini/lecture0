$(document).ready(function() {	
    var spielbrett = document.getElementById('Spieltisch');
    spielfeld = spielbrett.getContext('2d');
    console.log(spielfeld);
    public class Deck {
        
        /**
         * array of 52 or 54 cards
         */
        private Card[] deck;
        
        /** 
         * Keeps track of the number of  cards that have been dealt from deck
         */ 
        private int cardsUsed;
        
        /**
         * constructs the deck
         * initially the cards are sorted
         * the shuffle() method can be called to randomize the order
         */
        public Deck() {
            this(false); //Just call the other constructor in this class
        }
    }
});