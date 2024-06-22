function Calculator() {
    this.read = function() {
        this.a = +prompt( "give me a value for a ");
        this.b = +prompt( "give me a value for b ");
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );