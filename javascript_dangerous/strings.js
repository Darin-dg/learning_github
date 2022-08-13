console.log('foo' + 'bar');

let firstName = "Mike";
let lastName = "Eagle";

console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);
let fullName = firstName + lastName;
console.log(fullName);

firstName = 'Henry';
console.log(firstName + ' is my first name.');

// backticks for template literals
firstName = 'Frank';
lastName = 'Lipschitz';
console.log(`${firstName} is my first name and ${lastName} is my last name.`);

console.log(firstName.length);
console.log(firstName.length >= 4);
console.log(firstName.length <= 4);