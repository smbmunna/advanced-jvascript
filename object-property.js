const students=[
    {id:21, name:'Omar sunny'},
    {id:31, name:'Manna'},
    {id:41, name:'Mahiya Mahi'},
    {id:44, name:'Deepjol'}

];
// const names=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     names.push(element.name);
// }
const names= students.map(s=>s.name);
const ids= students.map(s=>s.id);
const ids40up= students.find(s=>s.id>40); 
//console.log(names);
//console.log(ids);
console.log(ids40up);
