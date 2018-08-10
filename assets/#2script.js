// psychic game js

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var Wins = 0;
var Losses = 0;

//letting js know that there will be guesses coming (see line 61) within a function that will run outside the document.onkeyup function (line16)
var Guesses;
var computerChoice;

//CAPTURING THE PLAYERS INPUT
//used jQuery to create a fuction that worked the same way the non-jQuery fuction worked...
$(document).onkeyup(function(event){

    //when the player hits a key the "event" is registered becuase function(event) was stated above
    var playerGuess = event.key;

    //used jquery to assign the id onKey to the html with the string + the var player guess. Should be the interactive feature of the buttons on the keyboard
    $("#onKey").html("Your Guess: " + playerGuess);

    //correct answer 3 equals here because the player and the computer are exactly the same 
    if (playerGuess === computerChoice) {
        //should add 1 to wins
        Wins++;
        //this links the function down on 57 here, should reset guesses used and a new computer guess is generated
        gameStart();
    }

    //this is if guesses are go to zero...you lose and game starts over
    else if (Guesses < 0) {
        Losses++;
         //this links the function down on 57 here, should reset guesses used and a new computer guess is generated
        gameStart();
    }

    //incorrect guess by player
    else {
        //decreases guesses by one up until 0
        Guesses--;

    }

    //this says to go tag the element within the $() for assingment to = a "string" + a global var within JS
  $('#wins').html('Wins'+ Wins);
  $('#losses').html('Losses: ' + Losses);
  $('#counter').html('Guesses Remaining: ' + Guesses);
//remember that the ) must go on the outside of the } because you are using jQuery for the fuction above on line 16
}) 

//so that it will launch as soon as the page loads, notice it is outside the function
gameStart();

//global scope function, this could be placed towards the top or bottom
function gameStart() {
    Guesses = 10; //sets guesses to 10 starting, not zero like the other vars
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)
}