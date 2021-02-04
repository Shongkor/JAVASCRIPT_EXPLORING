/* falsy
false
0
""
undefined
null
NaN
*/
/* truthy
any positive or negative number except 0.
" ", '0',[],{}
*/
let something= 0;
if(something || something==0 ){
    console.log("condition is true")

}else{
    console.log("condition is false");
}