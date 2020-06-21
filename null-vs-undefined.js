let pakhi;
console.log(pakhi);

function addNum(num1, num2){
    console.log(num1+num2);
}
let result= addNum(2,3);
console.log(result);        //undefined

function addNum(num1, num2){
    console.log(num1, num2);
}
const result= addNum(2);
console.log(result);         // undefined

const premik= {name:"Smart", phone:11233};
console.log(premik.address); //undefined


let fun =undefined;
console.log(fun);//undefined
