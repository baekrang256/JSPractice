function makeCounter() {
    function counter() {
        return counter.count++;
    };

    counter.count = 0;
    counter.set = function(value) {
        counter.count = value;
    };
    counter.decrease = function() {
        counter.count--;
    };

    return counter;
}

let counter = makeCounter();
console.log( counter() ); //0
counter.set(10); 
console.log( counter() ); //10
counter.decrease();
counter.decrease();
console.log( counter() ); //9, since counter increments by one.

//book solution
// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     };
//     counter.set = value => count = value;

//     counter.decrease = () => count--;

//     return counter;
// }