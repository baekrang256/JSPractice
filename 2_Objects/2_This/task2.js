let calculator = {
    read() {
        this.a = +prompt( "give me a value for a ");
        this.b = +prompt( "give me a value for b ");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );