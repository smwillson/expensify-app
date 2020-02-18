/************************************************ Array Destructuring  *****************************************************************/


const item = ['Coffee(hot)', '$2.00', '$2.50' , '$2.75']

const [itemName, ,mediumCost] =  item;

console.log(`A medium ${itemName} costs ${mediumCost}`)

/************************************************ Object Destructuring  *****************************************************************/
// const person = {
//     name: 'Sama',
//     age:31,
//     location: {
//         city: 'STL',
//         temp: '10C'
//     }
// }

// const person1 = {
//     age:31,
//     location: {
//         city: 'STL',
//         temp: '1C'
//     }
// }
// const {name : fisrtName= 'anonymous', age} = person;
// const {name1 = 'anonymous', age1} = person1;
// console.log(`${name} is ${age} years old.`);


// console.log(`${name1} is ${age1} years old.`);
// const {city, temp: termperature} = person.location;

// console.log(`Its ${termperature} in ${city}`)

// const book ={
//     title: "Some title",
//     author: "Some author",
//     publisher:{
       
//     }


// }

// const {name:publisherName = 'Self published'} = book.publisher;


// console.log(publisherName);

