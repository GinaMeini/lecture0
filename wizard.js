$(document).ready(function() {	
    var spielbrett = document.getElementById('Spieltisch');
    spielfeld = spielbrett.getContext('2d');
    console.log(spielfeld);
    let cardDeck =[];
    let Trump;
    let cardBack = 'gray_back'
    let cardStrock = [];
    let discardPile = [];

    let foolRankMask = [[N,N,N,N],[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4],[5,5,5,5],
    [6,6,6,6],[7,7,7,7],[8,8,8,8],[9,9,9,9],[10,10,10,10],[11,11,11,11],
    [12,12,12,12],[13,13,13,13],[W,W,W,W]];

    function renderStock(cardsDeck, divId, showTrump) {
        let div = document.getElementById(divId);
        div.innerHTML = '';
        div.replaceWith(div);
        let i = 0;
        if (showTrump) {
            let lastCard = document.createElement('Images');
            lastCard.src = '/Images/cards/' + cardDeck[0].name + '.jpg';
            lastCard.id = cardDeck[0].name;
            lastCard.className = 'Trump';
            div.append(lastCard);
            i = 1;
        }
        for (; i < cardDeck.length; i++) {
            let top = (-20 - i * 0.25) + 'px';
            let left = (40 + i * 0.25) + 'px';
            let cardId = 'card' + i;
            let lastCard = document.createElement('Images');
            lastCard.src = '/Images/backs/' + cardBack + '.jpg';
            lastCard.id = cardId;
            lastCard.className = 'cardInPack';
            lastCard.style = 'top: ' + top + '; left: ' + left + ';';
            div.append(lastCard);
        }
    }        
})
