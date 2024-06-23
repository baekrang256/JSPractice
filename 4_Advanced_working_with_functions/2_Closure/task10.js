function makeArmy() {

    let shooters = [];

    //for can make it's own lexical environment
    for(let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
            alert( i ); // should show its number
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

//below is also possible
function makeArmy2() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // shooter function
            alert( j ); // should show its number
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army2 = makeArmy2();

  // Now the code works correctly
  army2[0](); // 0
  army2[5](); // 5