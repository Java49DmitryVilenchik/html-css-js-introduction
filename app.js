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
console.log(person.address.city);
function getAppartments() {
    return "appartments";
}
const name2=getAppartments();
console.log(person.address[name2]);
function displayOccurrences(strings) {
    const occurrences={};
    strings.forEach(element => {
       if (occurrences[element]) {
        occurrences[element]++;
       }
       else {occurrences[element]=1;
    }
    });
    //console.log(occurrences);
    //console.log(Object.entries(occurrences));
    const occurrencesAr=Object.entries(occurrences);
    occurrencesAr.sort((e1,e2)=> e2[1]-e1[1])
    console.log(occurrencesAr);
}
const x={};
const string="abc";
x[string]=1;
console.log(x);
x[string]++;
console.log(x);

const strings=["a","lmn","abc","lmn","lmn","abc","a", "opr"];
displayOccurrences(strings);

// yellow = welloy -true this is annogramm