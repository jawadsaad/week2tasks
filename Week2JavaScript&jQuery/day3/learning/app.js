//var array = [1, 2, 3];
//
//console.log(array);

var array = [1, "This is a string", {name: 'Jawad', class1: 'JavaScript'}, false, function(class1) {var talk = "Hello "; console.log(talk + class1)}];

console.log(array);

array[4](array[2].class1);