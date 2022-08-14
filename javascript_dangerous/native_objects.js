console.log(1 + 1);
console.log(5 / 7);
console.log(2 * 3);
console.log(10 / 5);
console.log(1.0 / 2.0);
console.log(Math.PI);
console.log(Math.pow(2,3));
console.log(Math.sqrt(4));
console.log(Math.cos(2 * Math.PI));
console.log(Math.E);
console.log(Math.log(Math.E));       // if you want ln, type Math.log
console.log(Math.log10(1000000));    // if you want log, type Math.log10

34.6546.toString();         // casting float to a string
String(6000);               // also doable, also works for integers
Number('7894');             // casting number to a string

console.log(String(Number('1.24e6')));  // scientific notation

console.log(Math.sqrt(-1));     // NaN not a number
console.log(!!Math.sqrt(-1));   // NaN is false

console.log('\n Making objects:\n');

let s = new String('A man, a plan, a canal.');  // let s = '' is preferred
console.log(s);

let a = new Array();                            // let a = [] is preferred
a.push(3);
a.push(4);
a.push('hello');
console.log(a);
console.log(a.pop());

let now = new Date();
console.log(now);
let moonLanding = new Date('July 20, 1969 20:18');
console.log(moonLanding);
console.log(now - moonLanding);     // The number of ms between now and the date given (moon landing)

console.log(now.getFullYear());
console.log(now.getMonth());        // off-by-one (Jan is month 0)
console.log(now.getDay());          // off-by-one (Sunday is day 0)

myBirthday = new Date('Jul 22 1984');
console.log(myBirthday.getDay())