/**
 * while(条件表达式){
 *      语句;
 * }
 * 
do{
    console.log(n);
    n++
}while(n<=10){
    console.log(n);
} 
 */


// while (n <= 10) {
//     console.log(n);
//     n++;
// }
var year=0;
var n = 1000;

while(true){
    n*=1.05;
    year++;
    if(n>=5000){
        console.log(year)
        break;
    }
}
