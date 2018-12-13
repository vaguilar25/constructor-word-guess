var Word = require("./Word.js");
var inquirer = require("inquirer");
//Have an array of words

var words = ["This is a lot", "test2", "test3" ];

//do a function to create a word object and letters objects

var count = 0;
var countGuess = 0;
var numWords = words.length;

word(words[count]);

function word(wordToGuess) {
    console.log("Count: " + count);
    console.log(wordToGuess);
    var guessRemaining = countWordChar(wordToGuess).length + 3;
    if (count < numWords) {
        var newWord = new Word();
        newWord.stringWord(wordToGuess);
        newWord.returnString();
        inquireUser(newWord, wordToGuess,guessRemaining);
    } else {
        return;
    }
}

function inquireUser(newWord, wordToGuess,guessRemaining) {
    //newWord.returnString();
    console.log("Initial: " , guessRemaining);
    inquirer.prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Enter a letter to guess",
            name: "userInput"
        }
    ])
        .then(function (response) {
            
            console.log(response.userInput);
            var countCharGuesses = newWord.guessCharacter(response.userInput);
            newWord.returnString();
            //            var returnStringGuess=newWord.returnString();
            //        newWord.returnString();
            // console.log("String: " + returnStringGuess);
            console.log("GuessTrueFalse: ", countCharGuesses);
            countGuess = countGuess + countCharGuesses;
            countWord = countWordChar(wordToGuess);
            //if ( guessTrueFalse ) {
            console.log("count word:" + countWord);
            console.log("countGuess: " + countGuess);
            console.log("wordToGuess: " + wordToGuess);

            //countGuess++
            if (countGuess === countWord.length) {
              
                console.log("You Win");
            } else {
                if (countCharGuesses === 0 ) {
                    console.log ("Incorrect!!!");
                    guessRemaining--
                    console.log("Guess Remaining: " + guessRemaining);
                    if (guessRemaining === 0) {
                        console.log("You Lost");
                        count++
                        console.log("Count: " + count);
                        console.log("Word in the next position: " , words[count]);
                        word(words[count]);
                        //return;
                    }
                } else {
                    console.log ("Correct!!!");
                }

                //console.log("Nothing");
                inquireUser(newWord, wordToGuess,guessRemaining);

            }
            //        word(words[count]);

            //} else {


            //  inquireUser(newWord,wordToGuess);
            //}


        });
}

function countWordChar (wordToGuess) {
    countWord = wordToGuess.replace(/\s/g, '');
    return countWord
}

