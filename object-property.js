const student = [
    {id:83, name:"Rokibul santo"},
    {id:84, name:"Rokibul parves"},
    {id:85, name:"Mahdi hasan"},
    {id:86, name:"Maisha fairoz"}
];

// const friends =[];
// for(let i=0; i<student.length; i++){

//     const element = student[i].name;
//     friends.push(element);
    
// }
// console.log(friends);

const names = student.map(s => s.name);
console.log(names);
const ids = student.map(s => s.id);
console.log(ids);
const ids1 = student.filter(s => s.id>84);
console.log(ids1);

const ids2 = student.find(s => s.id>85);
console.log(ids2);