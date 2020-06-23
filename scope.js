//let bonus=1;
function sum(num1,num2){
    let result= num1+num2;
    if(result>50){
        const mood="Happy";
        console.log(mood);
    }
    return result;

}
const output=sum(30,50);
console.log(output);