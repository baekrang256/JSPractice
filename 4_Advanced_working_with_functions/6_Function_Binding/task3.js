function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

alert( bound.test ); // undefined. bounded function is a new object, not having original property.