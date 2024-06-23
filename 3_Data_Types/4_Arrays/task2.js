let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[midValuePos(styles)] = "Classics";
alert ( styles.shift() );
styles.unshift("Rap", "Reggae");

function midValuePos(arr) {
    return Math.floor(arr.length / 2);
}