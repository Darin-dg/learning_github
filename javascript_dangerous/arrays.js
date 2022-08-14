let splitWords1 = 'ant cat bat'.split(' ');     // makes an array
console.log(splitWords1);

console.log();

let words = 'carandavanandabus';
let splitWords2 = [];
splitWords2 = words.split('anda');              // makes an array
splitWords2.reverse();
console.log(splitWords2);

console.log();

console.log('badger'.split(''));                // makes an array

console.log();

a = ['car', 34, [1, 2]];

for (let i = 0; i < a.length + 1; i++) {
    console.log(a[i]);                    // arrays can have mixed types
}                                         // going out of bounds in an array returns undefined

console.log();

console.log(!!a[3]);    // False (undefined is false)

console.log();

a = [3, 4, 75, 38, 20, 9];
console.log(a.slice(1));     // slice from the second index forward
console.log(a.slice(1, 3));  // slice from the second index up to (not including) the third
console.log(a.slice(-2));    // slice the last two indicies

console.log();

console.log(a.sort());       // sorts alphabetically (even numbers) unless its compareFn is used

console.log();
console.log('Pushing and popping:');
a = [23, 9]

console.log(a);
a.push(35);                     // use array.unshift() to 'push' at index[0]
console.log(a);
a.push(77);
console.log(a);
poppedNumber = a.pop();         // use array.shift() to 'pop' at index[0]
console.log(a, poppedNumber);

console.log
let c = ['ant', 'bat', 'cat'];      // make an array
let cJoined = c.join(',');
console.log(cJoined);               // make a string
let cSplit = cJoined.split(',');    // make an array
console.log(cSplit);