//it's because 'map.keys' return iterable
//so we need to make an array out of it, and than push it.
let keys = Array.from(map.keys());
//...