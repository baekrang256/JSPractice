alert( null || 2 && 3 || 4); //prints 3
//2 && 3 results to 3 (2 evaluated true, 3 evaluated true, return 3)
//null || 3 || 4 results to 3 (null is false, 3 is true, computation over returns 3)