let x = 1;

function func() {
    console.log(x); // error
    //the function's lexical environment do have an information about x
    //since it's defined later in the code
    //But in above timing, x is undefined. So it gives an error.

    let x = 2;
}

func();