var Word = require("./Word.js");
var inquirer = require("inquirer");
//Have an array of words

var words = ["test2", "anotherword", "test4"];

//do a function to create a word object and letters objects

var count = 0;
var countGuess = 0;
var numWords = words.length;

word(words[count]);
console.log(`
=================================================
       HANGMAN GAME - TEST YOUR GUESS SKILLS
=================================================
`);

// Function to create new Word
function word(wordToGuess) {
    //Initialice Guesses reamaining
    var guessRemaining = countWordChar(wordToGuess).length + 3;

    // Compare de number of words of the game against the ones already try
    if (count < numWords) {

        //create new word
        var newWord = new Word();
        newWord.stringWord(wordToGuess);
        newWord.returnString();

        //prompt the user for letter guess 
        inquireUser(newWord, wordToGuess, guessRemaining);
    } else {
        return;
    }
}

function inquireUser(newWord, wordToGuess, guessRemaining) {

    inquirer.prompt([
        // Here we create a basic text prompt for the letter.
        {
            type: "input",
            message: "Enter a letter to guess",
            name: "userInput"
        }
    ])
        .then(function (response) {

            //Set true or false is the letter is guess
            var countCharGuesses = newWord.guessCharacter(response.userInput);

            //Print what is guess so far
            newWord.returnString();

            //Count how many guess
            countGuess = countGuess + countCharGuesses;

            //Here we count how many characters are in the word to Guess
            countWord = countWordChar(wordToGuess);

            //Compare if we have guessed all the letters
            if (countGuess === countWord.length) {
                //increase the counter that handles the index of the array we are into
                count++

                //compare if there are words to guess in the array
                if (count != numWords) {
                    console.log("You Win - Try another word");

                    //Reset the counter of letters guessed for the new word
                    countGuess = 0;

                    //Create another word object
                    word(words[count]);
                } else {
                    //If no more words just exit
                    console.log("You Win - No more words");
                }

            } else {
                // IF NO GUESS - decrease guess remaining .. 
                if (countCharGuesses === 0) {
                    console.log("Incorrect!!!");

                    guessRemaining--
                    console.log("Guess Remaining: " + guessRemaining);

                    // If no more characters remainings create new word

                    if (guessRemaining === 0) {
                        count++
                        if (count != numWords) {
                            console.log("You Lost -- Try next Word");
                            countGuess = 0;
                            word(words[count]);
                            return;
                        } else {
                            //If no more words - just exit
                            console.log("You Lost -- No more words");
                            return;
                        }

                    }
                } else {
                    console.log("Correct!!!");

                }

                inquireUser(newWord, words[count], guessRemaining);

            }



        });
}

function countWordChar(wordToGuess) {
    countWord = wordToGuess.replace(/\s/g, '');
    return countWord
}

