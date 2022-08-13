console.log('HONEY BADGER'.toLowerCase());

let firstName = 'Bob';
let lastName = 'Odensomething';

let userName = firstName.toLowerCase();
console.log(`${userName}@example.com`);

console.log(firstName.valueOf());

let soliloquy = 'To be or not to be, that is the question.';

console.log(soliloquy.includes('To be'));       // True
console.log(soliloquy.includes('TO BE'));       // False (case-senstive)

console.log(soliloquy.charAt(0));      // T
console.log(soliloquy.charAt(1));      // o
console.log(soliloquy.charAt(2));      //   
console.log(soliloquy.charAt(3));      // b
console.log(soliloquy[3]);      // could also just treat strings like arrays

console.log()

let N = soliloquy.length
for (let i = 0; i < N; i++){
    console.log(soliloquy[i])
}