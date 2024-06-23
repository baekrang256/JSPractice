//note that 'obj' is the returned object of reduce
//and value is the array element for each iteration

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}