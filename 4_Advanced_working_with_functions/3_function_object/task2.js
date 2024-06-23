function sum(a) {

    let currentSum = a;

    function f(b) { //NFE
        //elaborates lexical environment to reinitialize currentSum
        //returns the function itself using NFE.
        currentSum += b;
        return f;
    }

    //below code is necessary
    //the final call will return a function
    //Then, alert will call the toString method for printing that function
    //toString method will return the value of currentSum
    f.toString = function() {
        return currentSum;
    };

    return f;
}