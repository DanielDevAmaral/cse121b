//add tow numbers
a = 2 + 3;
console.log(a);

// Multiply two numbers
b = 2* 3;
console.log(b);

// subtract one from a number
c = 1- 10;
console.log(c);

//concatinate two strings together
obj = "lamp";
act = "trow ";
movie = act + obj
console.log(movie);

//assing a value to a variable
nothing = "";
nothing = 0;
console.log(nothing);

//incremente the value ina a variable by 3
v = 3;
x = v + 3
console.log(x);

//Compare tow values to see if they are the same
y = 3;
z = 8;
console.log(y === z);

//check to see if one number is less than another number
h = 8
l = 4
console.log(h < l);

//check to see if two values are not equal
ç = 5
q = 8
console.log(!(ç===q));

//check to see if a value is less than 10 and greater than 0
r= 10;
u= 1;
console.log(10 > r || u > 0);

//array
let scores = [100, 72, 83, 94, 88, 87];
console.log(`Classic for ${scores}`)
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }

console.log("foreach")
scores.forEach(function(score) {
    console.log(score);
  });