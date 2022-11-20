const person= {id: 123, first_name: 'Vasya', last_name: 'Ivanov',
year: 2000, address: {city: 'Lod', street: 'Sokolov', appartments: 100}
};
const yearExp="ye"+"ar";
console.log(person.year);
console.log(person[yearExp]);
const personArr=[123, 'Vasya', 'Ivanov', 2000, 
['Lod', 'Sokolov', 100]];
console.log(personArr[3]);
const name1='first_name';
console.log(person[name1]);
console.log(person["first_name"]);
console.log(person.first_name);