//Create two variables, firstCard and secondCard
//Set their values to a random number between 2-11
//Create a variable, sum, and set it to the sum of the two cards

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard]; //array -ordered list of items
let player = {
  name: "Kauthar",
  chips: 300,
  sayHello: function() {
    console.log("KAURGRSDDV");
  }
};

let cards = []; //array -ordered list of items
let sum = 0;
// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let msg = " ";
let messageEl = document.getElementById("message-el");
//let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;

function renderGame() {
  if (sum <= 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "Wohoo! You've got blackjack";
    hasBlackJack = true;
  } else {
    msg = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = msg;
  sumEL.textContent = "Sum: " + sum;

  //Render out first card and second card
  cardsEL.textContent = "Cards: ";
  //render out all cards that we have instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  //Create a card variable, and harcode its value to a number (2-11)
  //Add the new card to the sum variable
  //Call startGame()

  //Only allow the player to get a new card if she is alive and does not have BlackJack

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();

    sum += card;
    //Push the card to the cards array

    cards.push(card);
    renderGame();
  }
}

function startGame() {
  isAlive = true;
  //Generate two random numbers
  //Reassign the cards and sum var so that the game can start
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

//Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
  //if 1 -> return 11
  //if 11-13 -> return 10
  // if (card === 1) {
  //   return 11;
  // } else if (card === 11 || card === 12 || card === 13) {
  //   return 10;
  // }
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

console.log(getRandomCard());

//Create two boolean variables, likesDocumentaries and likesStartups
//Use an OR statement (||) to call recommendedMovie() if either of those variables are true

// let likesDocumentaries = true
// let likesStartups = false

// if(likesDocumentaries === true || likesStartups === true) {
//   recommendedMovie()
// }

// function recommendedMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

//Create an if statement that check that both variables are false
//If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the solution....");
// }

//Logical Operators

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificates....");
// }

// console.log(generateCertificate());

// let randomNumber = Math.random() * 6 //It generates a random number between 0 and 1 (not inclusive of 1)

// let flooredNumber = Math.floor(12.4) //Rounds off the number

// console.log(flooredNumber);

// let randomNumber = Math.floor(Math.random() * 6) + 1

// console.log(randomNumber);

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1
//   return randomNumber
// }

// console.log(rollDice());

// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//      if(player1Time < player2Time) {
//       return player1Time

//      } else if(player2Time < player1Time) {
//       return player2Time

//      } else {
//       return player1Time
//      }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace);

//let fastestRace = getFastestRaceTime()
//console.log(fastestRace)

//Challenge
//Write a fucntion that returns the total race time
//calll/invoke the function and store the returned value in a new variable
//Finally, log the variable out

// function sumOfRaceTime() {
//   return player1Time + player2Time;
// }

// let totalTime = sumOfRaceTime();
// console.log(totalTime);

//Arrays - ordered lists of items
// let featuredPosts = [
//   "Check out my Netflix clone",
//   "Heres the code for my project",
//   "Ive just relaunced my portfolio",
// ];

// console.log(featuredPosts.length); //length is not 0 index

//Array -ordered lists of items - coposite data type / complex data types

// let me = ["Kauthar", 20, true];

//Push the newMessage to the messages array, and then log out the array

// let messages = [
//   "Hey, hows it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here",
//   "Great to hear",
// ];

// let newMessage = "Same Here!";

// messages.push(newMessage);

// messages.pop();

// console.log(messages);

//Counting in JS

//COUNT TO TEN
//WE NEED TO SPECIFY....
//WHERE SHOULD WE START COUNTING
//WHERE IS THE FINISH ;INE
//WHATS THE STEP SIZE WE SHOULD USE?

//   start          finish     step size
// for (let count = 1; count< 21;  count += 1) {
//  console.log(count);
// }

//create a for loop that counts from 10 to 100 in steps of 10
//use console.log to log out the numbers

// for (let i = 10; i <= 100; i += 10) {
//     console.log(i);
// }

//Create a for loop that logs out all the cards in the array
//Use cards.length to specify hopw long the loop should run
// let cardss = [6, 3, 9];

// for (let i = 0; i < cardss.length; i++) {
//   console.log(cardss[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEL = document.getElementById("greeting-el")

// Render the sentence in the greetingEL p using a for loop addEventListener.textCpntent

// for (let i = 0; i< sentence.length; i++ ) {
//   greetingEL.textContent += sentence[i] + " "
// }

//If-Else Conditionals

// if(sum <= 21) {
//    msg =  "Do you want to draw a new card"
// } else if(sum === 21) {
//    msg= "Wohoo! You've got blackjack"
//    hasBlackJack = true;
// } else {
//     msg= "You're out of the game"
//     isAlive = false
// }

// console.log(sum);

//Practice1 - If else conditionals

//Check if the person is old enough to enter the nightclub (21)
//Log a suitable message to the console in both cases

// let age = 4

//if less than 21 -> "you can not enter the club!"
// else ->"Welcome!"

// if(age <= 20) {
//     console.log("You can not enter the club");
// } else {
//     console.log("Welcome");
// }

//Practice2
//Check if the person is eleigible for a bday card from the king

//If less than 100 -> "not eligible"
//Else if exactly 100 -> "here is your bday card from the king"
//"Not eligible, you ahve already gotten one"

// if(age < 100) {
// console.log("not eligible");
// } else if(age === 100) {
// console.log("Here is your bday card from the king");
// } else {
// console.log("Not eligible, you have already gotten one");
// }

//Practice3
// if( age <= 20) {
//     console.log("Do you want to draw a new card?");
// } else if ( age === 21) {
// console.log("Wohoo! Youve got Blackjack");
// } else {
// console.log("You're out of the game");
// }

//Cash out
// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(msg);

// Practice4 - Boolean

// console.log(4 === 3); //False
// console.log(5> 2); //True
// console.log(12 > 12); //False
// console.log(3 < 0); //False
// console.log(3 >=3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); //False
