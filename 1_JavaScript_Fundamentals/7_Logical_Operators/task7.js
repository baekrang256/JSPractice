let age = +prompt('How old are you?', 18);

if (!(age >= 14 && age <= 90)) {
    alert('age not in range');
} else {
    alert('age in range');
}

//another variant
if (age < 14 || age > 90) {
    alert('age not in range');
} else {
    alert('age in range');
}
