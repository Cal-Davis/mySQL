//1. Create a new array - cards - that contains firstCard and secondCard
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

let player = {
  jina:"Caldavis: ",
  pay:200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.jina + ": $" + player.pay
// function rolldice(){ 
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1 -------->  Math object
//     return randomNumber}


// 1. Create a function, getRandomCard(), that always returns the number 5 ---> CHANGED TO RETURN A RANDOM NUMBER BBETWEEN 1-13
function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1 
 
    if (random > 10) {
      return 10
  } else if (random === 1) {
      return 11
  } else {
      return random
  } 

   
}




// Create a new function called startGame() that calls renderGame()
function startGame() {
  isAlive = true
  
    // Generate two random numbers
    let one = getRandomCard()
    let two = getRandomCard()

    // Re-assign the cards and sum variables so that the game can start
    cards = [one , two]
    sum = one + two

    renderGame()
    console.log("Initializing the game")
}




function renderGame() {
     //The line below renders out firstCard and secondCard only!!
    cardEl.textContent ="Cards: " 

      // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++){
        console.log(cards[i])
        cardEl.textContent += cards[i] + " "
      }
    

    sumEl.textContent ="Sum: " +  sum
    if (sum <= 20){
            isAlive = true
            hasBlackJack = false
            message = "Do you want to draw a new card?"
           
            
    }else if (sum === 21){
            hasBlackJack = true
            message = "You've got Blackjack! "
            
    }else{
            hasBlackJack = false
            isAlive = false
            message = "You're out of the game!"
          
    }
messageEl.textContent = message

// console.log(message)
}




function newCard() {

  if (isAlive === true && hasBlackJack === false ){
        // console.log("Drawing a card from the deck!")
        let card = getRandomCard()
        sum += card
        renderGame()
        cards.push(card)
        // console.log(cards)
        cardEl.textContent  = "Cards: " + cards
        
        }
}

    
function reSet(){
    cardEl.textContent ="Cards: "+ 0
    sumEl.textContent = "Sum: "+ 0
    


}
