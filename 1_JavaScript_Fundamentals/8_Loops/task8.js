let num = +prompt('Enter a number', 0);

nextPrime:
for (let i = 2; i <= num; ++i) {
    for (let j = 2; j < i; ++j) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}