// var num=10;
// var count=1;

// for(i=2;i<num;i++){
//     if(num%i==0){
//         count++;
//     }
// }
// if(count==1){
//     console.log("num is prime")
// }
// else{
//     console.log("num is not prime");
// }

function isPrime(num){
    for(i=num-1;i>1;i--){
        if(num%i==0){
            return "num is not prime";
        }
    }
    return "num is prime";
}
console.log(isPrime(2));