/* Although native JavaScript objects can be used as hashes/associative arrays, 
they do have their weaknesses, such as slower performance and limited support for extracting keys and values. 
JavaScript comes with a dedicated Map object to address these limitations, 
with set and get methods for setting and getting values using keys. */

const sonnet =
`Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
   If this be error and upon me proved,
   I never writ, nor no man ever loved.`;

console.log(sonnet);

let uniques_1 = new Object();
let words = sonnet.match(/\w+'\w+|\w+/g);

for (let i = 0; i < words.length; i++) {            // using a basic Object()
    let word = words[i];
    if (uniques_1[word]) {
        uniques_1[word] += 1;
    } else {
        uniques_1[word] = 1;
    }
}

let uniques_2 = new Map();                          // using a Map()
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques_2.has(word)) { 
        uniques_2.set(word, uniques_2.get(word) + 1);
    } else {
        uniques_2.set(word, 1);
    }
}

console.log(uniques_2);