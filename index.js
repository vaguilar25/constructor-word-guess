var Word = require("./Word.js");
var inquirer = require("inquirer");
//Have an array of words

var words = ["Led Zeppelin", "Aerosmith", "Green Day", "Pink Floyd" , "Black Sabbath" , "Red Hot Chili Peppers"];

//do a function to create a word object and letters objects

var count = 0;
var countGuess = 0;
var numWords = words.length;
console.log(`
=================================================================
    HANGMAN GAME - TEST YOUR GUESS SKILLS  - GUESS ROCK BANDS - 

               ♪ ♬ ♪ ♬ ♪ ♬    ¯\_(ツ)_/¯   ♪ ♬ ♪ ♬ ♪ ♬   
    
=================================================================
`);

word(words[count]);


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
        console.log();
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
            var countCharGuesses = newWord.guessCharacter(response.userInput.toLowerCase());

            //Print what is guess so far
            console.log();
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
                    console.log("\x1b[33m\nYou Win!! - Try another word \n \x1b[37m");

                    //Reset the counter of letters guessed for the new word
                    countGuess = 0;

                    //Create another word object
                    word(words[count]);
                } else {
                    //If no more words just exit
                    console.log("\x1b[33m\nYou Win!! - No more words\n\x1b[37m");
                }

            } else {
                // IF NO GUESS - decrease guess remaining .. 
                if (countCharGuesses === 0) {
                    console.log("\x1b[31m\nIncorrect!!!");

                    guessRemaining--
                    console.log("Guess Remaining: " + guessRemaining + "\n");

                    // If no more characters remainings create new word

                    if (guessRemaining === 0) {
                        count++
                        if (count != numWords) {
                           
                    console.log("Guess Remaining: " + guessRemaining + "\n");
                            console.log("\x1b[31m\nYou Lost -- Try next Word\x1b[37m\n");
                            countGuess = 0;
                            word(words[count]);
                            return;
                        } else {
                            //If no more words - just exit
                           
                            console.log("\nYou Lost -- No more words\x1b[37m \n");
                            return;
                        }

                    }
                } else {
                  
                    console.log("\x1b[36m\nCorrect!!!");
                    console.log("\x1b[36mGuess Remaining: " + guessRemaining + "\n");
                    

                  

                }

                inquireUser(newWord, words[count], guessRemaining);

            }



        });
}

function countWordChar(wordToGuess) {
    countWord = wordToGuess.replace(/\s/g, '');
    return countWord
}

