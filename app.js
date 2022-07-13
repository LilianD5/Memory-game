// Body
const body = document.querySelector('body')

// Boardgame
const boardgame = document.getElementById('container')

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

let cardSet
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

// Card Creation
function cardCreation(){
    cardSet.forEach(cardValue => {
        cardTemplate(cardValue)
    })
}

cardCreation()

// Card Flip
function cardFlip(array){
    array.forEach(element => {
        element.classList.toggle('flipcard')
    })
}

// Card Test Setup
function cardTestSetup(element){
    elementChild = element.childNodes
    element.classList.toggle('pointer-none')
    cardFlip(elementChild)
}

// Card Flip Back
function cardFlipBack(element){
    elementChild = element.childNodes
                
    elementChild.forEach(child => {
        child.classList.toggle('flipcard')
    })

    element.classList.toggle('pointer-none')
}

// Victory Pop up 
function popUp(){
    let modal = document.createElement('div')
    let congrats = document.createElement('p')

    congrats.innerHTML = 'Congratulations !! You won !!'

    modal.classList.add('popup')

    body.prepend(modal)
    modal.prepend(congrats)
}

// Card Comparison

let arrayTest = []
let arrayPairs = []

const cards = Array.from(document.getElementsByClassName('card'))

function cardComparison(){
    cards.forEach(card => {

        card.addEventListener('click', function () {
            console.log(arrayPairs.length)
            if(arrayPairs.length === 10){
                cardTestSetup(card)
                setTimeout(() => {
                    popUp()
                }, 1000);
            } else {
                
                if (arrayTest.length < 2) {

                    cardTestSetup(card)
                    arrayTest.push(this)
                    
                } else if(arrayTest.length == 2){

                    if (arrayTest[0].innerText !== arrayTest[1].innerText) {

                        cardFlipBack(arrayTest[0])
                        cardFlipBack(arrayTest[1])

                        arrayTest = []

                        cardTestSetup(card)
                        arrayTest.push(this)

                    } else {
                        arrayPairs.push(arrayTest[0], arrayTest[1])

                        arrayTest = []

                        // console.log(arrayPairs.length);

                        // if(arrayPairs.length === 12){
                        //     popUp()
                        // }

                        cardTestSetup(card)
                        arrayTest.push(this)
                    }
                }
            }
        })
    })
}

cardComparison()
