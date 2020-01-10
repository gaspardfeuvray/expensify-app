// const person = {
//   age: 24,
//   location: {
//     city: 'Lausanne',
//     temp: 13
//   }
// };

// const { name='anonymous', age, location } = person;
// const { city, temp: temperature } = location;


// console.log(`${name} is in ${city} where it is ${temperature}`);

const address = ['1229 S Juniper St.', 'Philly', 'Pennsylvania', '28376']

const [ street, city, state, zip ] = address;

console.log(street, city, state, zip);