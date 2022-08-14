// regular expressions

let zipcode = new RegExp('\\d{5}');                 //    \d for digit, {5} for five of them
                                                    // (the first \ was used to excape 
                                                    // the string to write the other \)
let result = zipcode.exec('Beverly Hills 90210');   // executes the regex on the string
console.log(result);                                // true, 5 consecutive digits is in the string once
console.log(result.length);

// note the result from RegExp.exec is an array of ONE, not three (which it looks like)

// regexes can be made by writing their code inside forward slashes

console.log();
zipcodeLiteral = /\d{5}/;

let s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles.";
s += " 91125 is another ZIP code in the Los Angeles area.";

console.log(s.match(zipcodeLiteral));       // Only one matching string is found.
zipcodeLiteral = /\d{5}/g;                  // Add g after the last / in the regex to find them all.

console.log();
console.log(s.match(zipcodeLiteral));              

console.log();
animals = 'ant bat cat duck';
animalsArray = animals.split(' ');              // easier split
console.log(animalsArray);

animals2 = 'armadillo basilisk cow dragon';
animals2Regex = /\s+/;
animals2Array = animals2.split(animals2Regex);  // more robust split
console.log(animals2Array);

animals3 = 'chicken\nmoose\t\tflamingo    \n\tgoose';
console.log(animals3.split(animals2Regex));     // regex split works to clear 
                                                // variable amounts of white space

console.log();
console.log('64179-8456'.match(/\d{5}[-]\d{4}/g));

console.log();
const sonnet = 
`Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.`
console.log(sonnet);
console.log(sonnet.split(/[\n]/g));