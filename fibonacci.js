// var arr=[0,1];
// for(i=2; i<=8;i++){
//     arr[i]=arr[i-1]+arr[i-2];
// }
// console.log(arr);
var arr=[0,1];
var num;
function fibo (num){
    for(i=2; i<=num;i++){
        arr[i]=arr[i-1]+arr[i-2];
        }
    return arr;
}
var result=fibo(8);
console.log(result);