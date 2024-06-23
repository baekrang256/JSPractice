//this asks us to 'actually' modify the array
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

      //removal
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--; //need to decrease to see the next element
        }
    }
}