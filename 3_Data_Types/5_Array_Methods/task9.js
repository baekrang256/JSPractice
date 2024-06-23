//use fisher-yates shuffle.
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
//In my knowledge, python also uses above shuffle function.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}