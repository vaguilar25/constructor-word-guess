//constructor to create the object letter

var Letter = function (string) {
    this.string = string,
        this.guessed = false,
        //Return the format of the letter space
        this.toString = function () {
            if (this.guessed === true) {
                return this.string
            } else {
                if (this.string != ' ') {
                    var underscore = "_";
                    return underscore
                } else {
                    var blankspace = " ";
                    return blankspace
                }
            }
        }
    //update the guessed character
    this.updateGuessed = function (character) {


        if (character === this.string) {
            this.guessed = true;

        }
    }
}

module.exports = Letter;