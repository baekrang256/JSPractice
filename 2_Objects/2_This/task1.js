function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // undefined leads to error in this code...