var Word = require("./Word.js");

var wordComplete = new Word();
//console.log(wordComplete.arrayLetters);
wordComplete.stringWord("Hala");
wordComplete.returnString();

var guessChar = "a";
wordComplete.guessCharacter(guessChar);
wordComplete.returnString();


//console.log(wordComplete.arrayLetters.string);
//console.log("Log: " + JSON.stringify(wordComplete.arrayLetters, null, 1) + "\n");
//console.log(wordToGuess.arrayLetters.string);