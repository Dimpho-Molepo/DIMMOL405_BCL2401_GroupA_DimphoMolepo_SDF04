/* This section of code is for the declaration and initializing of different types of variables and a class */
let player = {
    name: "Dimpho",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

/*In this section of the code we are accessing the contents of certain elements in the HTML document and initializing them to variables*/
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": R" + player.chips

/*This function is used to get random numbers between 1-13 and to check if the number is less then 10 to return 10, equal 1 to return 11 and between 2 & 10 to return that random number */
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

/*This funtion is activited when the "START GAME" button is clicked, when it is click it will set the isAlive bolean value to true and it will call the initialize the firstcard and secondCard to random value using the getRandomCard function and put the numbers in a empty array called cards. the function will sum up the firstCard and secondCard and will call the function renderGame */
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

/* This functions is activited when its called in the startGame function. It  sets the text content a HTML element. It displays the cards and their sum. It checks if the sum is less than or equal to 20, equal to 21 and over 21 and it will display a certain message  */
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

/* This function is activited when the "NEW CARD" button is clicked. It will check when the player isAlive and hasBlackJack if true then it will generate a new card using the getRandomCard function and add the card to the sum and it will call the renderGame funtion */
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

/*The one thing I struggled with the most is the writing the funtions and accessing and changing DOM elements was abit confusing. */