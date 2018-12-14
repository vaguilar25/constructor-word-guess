var Word = require("./Word.js");
var inquirer = require("inquirer");
//Have an array of words

var words = ["test2", "anotherword", "test4"];

//do a function to create a word object and letters objects

var count = 0;
var countGuess = 0;
var numWords = words.length;

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

            if (countGuess === countWord.length) {


                count++
                ///      console.log("Count: " + count);
                //   console.log("count: " + count);
                //  console.log("numWords: " + numWords );
                if (count != numWords) {
                    console.log("You Win - Try another word");
                    //    console.log("Word in the next position: ", words[count]);
                    countGuess = 0;
                    word(words[count]);
                } else {
                    console.log("You Win - No more words");
                }

            } else {
                if (countCharGuesses === 0) {
                    console.log("Incorrect!!!");
                    guessRemaining--
                    console.log("Guess Remaining: " + guessRemaining);
                    if (guessRemaining === 0) {

                        count++
                        // console.log("Count in lost: " + count);
                        if (count != numWords) {
                            console.log("You Lost -- Try next Word");
                            //  console.log("Word in the next position: ", words[count]);
                            countGuess = 0;
                            word(words[count]);
                            return;
                        } else {
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

