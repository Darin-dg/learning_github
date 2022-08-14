let user = {};                       // make an empty object (looks like a python dict)
user['firstName'] = 'Michael';       // ['key'] = 'value'
user['lastName'] = 'Eagle';

console.log(user['firstName']);      // same as below
console.log(user.firstName);         // same as above
console.log(user);

console.log();

userTwo = new Object({firstName: 'Foo', lastName: 'Bar'});
console.log(userTwo);