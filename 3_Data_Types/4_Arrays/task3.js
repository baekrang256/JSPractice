let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // outputs array content, including the function code.