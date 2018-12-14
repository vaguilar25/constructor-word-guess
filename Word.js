var Letter = require("./Letter.js");

// Word constructor to store word as an array of letter objects
var Word = function () {
    this.arrayLetters = [];
    //create the object letter
    this.stringWord = function (wordToGuess) {

        var splitWord = wordToGuess.split('');

        for (i = 0; i < wordToGuess.length; i++) {
            this.arrayLetters.push(new Letter(splitWord[i].toLowerCase()));
        }
    };

    //return the format of the word to guess
    this.returnString = function () {


        var concatenateWord = "";
        for (i = 0; i < this.arrayLetters.length; i++) {
            concatenateWord = concatenateWord + " " + this.arrayLetters[i].toString();

        }
        console.log(concatenateWord);
        return concatenateWord
    }

    //update the letter key if the character has been guessed
    this.guessCharacter = function (character) {
        var countGuesses = 0;

        for (i = 0; i < this.arrayLetters.length; i++) {

            if (this.arrayLetters[i].string.toLowerCase() === character.toLowerCase() && !this.arrayLetters[i].guessed) {
                this.arrayLetters[i].updateGuessed(character);

                countGuesses++

            }

        }

        return countGuesses;

    }



}

module.exports = Word;


