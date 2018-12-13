var Letter = function (string) {
    this.string = string,
        this.guessed = false,
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
    this.updateGuessed = function (character) {
        console.log("this.string" + this.string)
        console.log("this.guessed" + this.guessed);
        console.log("Character" + character);

        if (character === this.string) {
            this.guessed = true;

        }
    }
}

module.exports = Letter;