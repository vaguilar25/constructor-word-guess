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
    if (count < numWords) {
        var newWord = new Word();
        newWord.stringWord(wordToGuess);
        newWord.returnString();
        inquireUser(newWord, wordToGuess);
    } else {
        return;
    }
}

function inquireUser(newWord, wordToGuess) {
    //newWord.returnString();
    inquirer.prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Enter a letter to guess",
            name: "userInput"
        }
    ])
        .then(function (response) {
            count++
            console.log(response.userInput);
            var countCharGuesses = newWord.guessCharacter(response.userInput);
            newWord.returnString();
            //            var returnStringGuess=newWord.returnString();
            //        newWord.returnString();
            // console.log("String: " + returnStringGuess);
            console.log("GuessTrueFalse: ", countCharGuesses);
            countGuess = countGuess + countCharGuesses;
            countWord = wordToGuess.replace(/\s/g, '');
            //if ( guessTrueFalse ) {
            console.log("count word:" + countWord);
            console.log("countGuess: " + countGuess);
            console.log("wordToGuess: " + wordToGuess);

            //countGuess++
            if (countGuess === countWord.length) {
              
                console.log("You Win");
            } else {
                console.log("Incorrect");
                inquireUser(newWord, wordToGuess);

            }
            //        word(words[count]);

            //} else {


            //  inquireUser(newWord,wordToGuess);
            //}


        });
}

///var wordComplete = new Word();
//console.log(wordComplete.arrayLetters);
///wordComplete.stringWord("Hala");
///wordComplete.returnString();

///var guessChar = "a";
///wordComplete.guessCharacter(guessChar);
///wordComplete.returnString();


//console.log(wordComplete.arrayLetters.string);
//console.log("Log: " + JSON.stringify(wordComplete.arrayLetters, null, 1) + "\n");
//console.log(wordToGuess.arrayLetters.string);