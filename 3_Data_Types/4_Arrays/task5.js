function getMaxSubSum(arr) {
    let maxSum = -Infinity;
    let partialSum = 0;
    for (let i = 0; i < arr.length; ++i) {
        partialSum = Math.max(partialSum + arr[i], arr[i]);
        maxSum = Math.max(maxSum, partialSum);
    }

    return maxSum;

}