//not efficient, but needs set for efficient code.
//for now, we can only use this implementation.
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
