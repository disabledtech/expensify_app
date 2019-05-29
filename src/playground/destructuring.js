/* const person = {
    name: "Taylor",
    age: 24,
    location: {
        city: "Vancouver",
        temp: 22
    }
};

// const name = person.name;
// const age = person.age;

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`)

const { temp: temperature, city } = person.location;

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
} */

/* const book = {
    title: "Ego",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher

console.log(publisherName); */


// Array Destructuring

/* const address = ['555 K Blueberry Street', 'Surrey', 'BC', 'V5S 9G2'];

const [, city, province = 'Ontario', ] = address;

console.log(`You are in ${city}, ${province}.`) */

const item = ['Coffee', '$2.00', '$3.00', '$4.00'];

const [itemName, , medium] = item

console.log(`A ${itemName} cost ${medium}.`)