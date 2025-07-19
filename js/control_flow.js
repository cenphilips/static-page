/**
 * if(condition){
 *  statement;
 * }
 * for loop
 * while loop
 * do while loop
 */

let x = 20;
let y = 20;
if(x < y){
    console.log("x is less than y")
}else if(x === y){
    console.log("x is equal to y")
}
else{
    console.log("x is greater than y")
}

//switch statement
let day = "saturday"
switch (day) {
    case "monday":
        console.log("Today is Monday")
        break;
    case "tuesday":
        console.log("Today is Tuesday")
        break;
    case "wednesday":
        console.log("Today is Wednesday")
        break;
    case "thursday":
        console.log("Today is Thursday")
        break;
    case "friday":
        console.log("Today is Friday")
        break;
    case "saturday":
        console.log("Today is Saturday")
        break;
    case "sunday":
        console.log("Today is Sunday")
        break;
    default:
        console.log("Invalid day")
        break;
}

//for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//while loop
let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}

let u = 5;
console.log(u++)

//do while loop
let j = 0;
do {
    console.log(j)
    j++;
} while (j > 10)



