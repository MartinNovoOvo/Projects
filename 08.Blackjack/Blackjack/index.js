let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

console.log(cards)

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
        if (randomCard > 10) {
            return 10
        } else if (randomCard === 1) {
            return 11
        } else {
          return randomCard
        }
    }
    
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wahoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum

    cardEl.innerText = "Cards: " 
    for ( let i = 0; i <cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
}

function newCard() {
    let card = getRandomCard()
    sum += card
    renderGame()
    cards.push(card)
    
   
}