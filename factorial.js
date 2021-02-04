// var num = 4;
// var fact=1;
// for(i=1;i <= num; i++){
//     fact=fact*i;
// }
// console.log(fact)

function factorial(num){
    var fact=1;
    for(i=1;i <= num; i++){
        fact=fact*i;
    }
return fact;
}
var result= factorial(4);
console.log(result);