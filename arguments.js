function addNum(num1, num2){
    console.log([...arguments]);
}
const result=addNum(10,20,30,40,50);
console.log(result);