var Word = require("./Word.js");
var inquirer = require("inquirer");
//Have an array of words

var words = ["test1", "test2", "This is a lot"];

//do a function to create a word object and letters objects

var count = 0;
var numWords = words.length;
word(words[count]);

function word(wordToGuess) {
    console.log("Count: " + count);
    console.log(wordToGuess);
    if (count < numWords) {
        var newWord = new Word();
        newWord.stringWord(wordToGuess);
       newWord.returnString();
        inquireUser( newWord);
    } else {
        return;
    }
}

function inquireUser(newWord) {
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
            console.log(response.userInput);
            newWord.guessCharacter(response.userInput);
            newWord.returnString();
//            var returnStringGuess=newWord.returnString();
  //        newWord.returnString();
          // console.log("String: " + returnStringGuess);
    //        if ( returnStringGuess.trim() === words[count] ) {
      //          count++
        //        word(words[count]);

          //  } else {
                inquireUser(newWord);
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