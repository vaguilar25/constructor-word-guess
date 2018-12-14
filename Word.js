var Letter = require("./Letter.js");

var Word = function() {
    this.arrayLetters = [];
    this.stringWord= function(wordToGuess) {
        //this.arrayLetters.push("hola");

        var splitWord = wordToGuess.split('');
        //console.log("Split Word: " + splitWord);
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
        var countGuesses = 0 ;
        // console.log("entra" + character);
        for (i=0; i<this.arrayLetters.length;i++) {
            // console.log(this.arrayLetters[i].string);
             if (this.arrayLetters[i].string === character) {
                 this.arrayLetters[i].updateGuessed(character);
                 console.log("letter: ",this.arrayLetters[i].string );
                 countGuesses++
                // return true
             } 
            // console.log(this.arrayLetters[i].toString());
         }

         if (countGuesses>0) {
             return countGuesses
         } else {
             return countGuesses
         }

    }

   

}

module.exports= Word;


