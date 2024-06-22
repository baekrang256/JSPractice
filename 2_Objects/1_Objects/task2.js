function isEmpty(obj) {
    let cnt = 0;
    for (let key in obj) {
        cnt++;
        break;
    }
    return cnt == 0 ? true : false;
}

//tutorial solution
// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//         return false;
//     }
//     return true;
// }