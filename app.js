// Boardgame

const boardgame = document.getElementById('container')

// Card Deck
    // Deck Creation

function createCardsSet(){
    const cardsType = ['♟','♞','♝','♜','♛','♚']
    const cardDeck = cardsType.concat(cardsType)

    shuffle(cardDeck)

    return cardDeck
}

    // Deck Shuffle

function shuffle(array){
    array.sort(() => Math.floor(Math.random() - 0.5))
}

cardSet = createCardsSet()

// Card Template

function cardTemplate(cardValue){
    let card = document.createElement('div')
    let recto = document.createElement('div')
    let verso = document.createElement('div')

    card.classList.add('card')
    recto.classList.add('recto')
    verso.classList.add('verso')

    recto.innerHTML = cardValue

    card.prepend(recto, verso)
    boardgame.append(card)
}

function cardCreation(){
    cardSet.forEach(cardValue => {
        cardTemplate(cardValue)
    });
}

cardCreation();

