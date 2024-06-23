function printNumbers(from, to) {
    let current = from;
    console.log(current);
    if (current >= to) return;
    current++;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);