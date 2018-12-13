var Letter = require("./Letter.js");

var Word = function() {
    this.arrayLetters = [];
    this.stringWord= function(wordToGuess) {
        //this.arrayLetters.push("hola");

        var splitWord = wordToGuess.split('');

        for (i=0; i<wordToGuess.length;i++) {
            
            this.arrayLetters.push(new Letter(splitWord[i]));
        }

       
    };
    this.returnString = function() {

        //var test =  this.arrayLetters['string'];
        var concatenateWord ="";
        for (i=0; i<this.arrayLetters.length;i++) {
            concatenateWord=concatenateWord + " " + this.arrayLetters[i].toString();
           // console.log(this.arrayLetters[i].toString());
        }
        console.log(concatenateWord);
        return concatenateWord
    }

    this.guessCharacter = function(character) {

        // console.log("entra" + character);
        for (i=0; i<this.arrayLetters.length;i++) {
            // console.log(this.arrayLetters[i].string);
             if (this.arrayLetters[i].string === character) {
                 this.arrayLetters[i].updateGuessed(character);
               //  return true
             } //else {
                 //return false
            // }
            // console.log(this.arrayLetters[i].toString());
         }

    }

   

}

module.exports= Word;


