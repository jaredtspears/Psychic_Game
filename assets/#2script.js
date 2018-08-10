//attempting again to start from scratch and figure this code out...

var Wins = 0;
var Losses = 0;
var Guesses = 0;


//seting up the vars for the alphabet and the computer choice random...
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var randomLetter = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var s;
var count = 0;
//empty array to store the guesses
var answerArray = [];

//fill the answer array with under scores
//the number of underscores matches the letters in the randomly choosen word
function startUp() {
    // this loop is to allow for the answerArray index to be added to the randoWords array.
    for (var i = 0; i < randomLetter.length; i++) {
        answerArray[i] = "_";
    }

    //this puts them in a string
    s = answerArray.join(" ");
    document.getElementById("currentGuess").innerHTML = s;
}
function Letter() {
    //the letter that the user typed in, in the box
    var letter = document.getElementById("letter").value;

    //have a guess (more checks can be made here, only letters etc)
    if (letter.length > 0) {
        for (var i = 0; i < randomWord.length; i++) {
            //if the randomword contains a letter that the user typed in
            if (randomLetter[i] === letter) {
                //assign it to letter
                answerArray[i] = letter;
            }
        }
        //here is how many times it takes to guess
        count++;
        document.getElementById("counter").innerHTML = "# of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    //just a thing to annoy 
    if (count > 5) {
        document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now";
    }

}