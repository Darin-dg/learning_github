console.log(1 == '1');    // true in JavaScript

console.log(1 === '1');   // false; use === for the more expected "is equal to" behaviour

let password = 'hunter6'

if (password.length < 10){
    console.log('password is too short');
} else {
    console.log('password it long enough');
}
console.log();

console.log(1 === 1 && 'x' === 'x');     // True
console.log(1 === 1 && 'x' === 'y');     // False
console.log(1 === 2 && 'x' === 'x');     // False
console.log(1 === 2 && 'x' === 'y');     // False

console.log();

console.log(1 === 1 || 'x' === 'x');     // True
console.log(1 === 1 || 'x' === 'y');     // True
console.log(1 === 2 || 'x' === 'x');     // True
console.log(1 === 2 || 'x' === 'y');     // False

console.log();

console.log(!true);      // False
console.log(1 !== 1);    // False
console.log(1 == 1);     // True
console.log(1 !== '1');  // True (as expected for "is not equal to" behaviour

console.log();

console.log(!!false);        // False
console.log(!(5 === 4));     // True
console.log((5 !== 4));      // True, same as, but more conventional than, above

console.log(); 

console.log(!!'');           // An empty string is False
console.log(!!'hi');         // An assigned string variable is True

console.log() ;

let x = 'foo';
let y = '';
if (x && y){
    console.log('x && y is true');
} else {
    console.log('x && y is false');
}
console.log(!!x && !!y);

console.log();
x = 'foo';
y = '';
if (x || y){
    console.log('x || y is true');
} else {
    console.log('x || y is false');
}
console.log(!!x || !!y);