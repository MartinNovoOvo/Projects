let firstCard = 5
let secondCard = 3
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
// let sumEl = document.querySelector("#sum-el")

function startGame() {
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

    for (i = 0; i < cards.length; i = ) {
        cardEl.innerText += " " + cards[i]
    }

    // cardEl.innerText = "Cards: " + cards[0] +" and "+ cards[1]
}

function newCard() {
    console.log("Drawing new card from the deck")
    let card = 6
    sum += card
    renderGame()
    cards.push(card)
    cardEl.innerText = "Cards: " + cards[0] +" and "+ cards[1] + " and " + cards[2]
}