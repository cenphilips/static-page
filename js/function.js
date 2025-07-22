/**
 * function function_name()
 * {
 *  statement;
 * }
 */

/* function add(){
    let x = 10;
    let y = 20;
    return x + y;
    }
    let sum = add()
    console.log(sum)
*/

function addNum(x, y){
    return x + y;
    }
    let add = addNum(20, 10);
    //console.log(add)


function subNum(x, y){
    return x - y;
    }
    let sub= subNum(40, 30);
    //console.log(sub)


function mulNum(x, y){
    return x*y;
    }
    let mul= mulNum(6, 4);
    //console.log(mul)

function divNum(x, y){
    return x/y;
}
    let div= divNum(19, 4);
    //console.log(div);

function remainderNum(x, y){
    return x%y;
}
    let remainder= remainderNum(19, 4);
    //console.log(remainder)

function exponentNum(x, y){
    return x**y;
}
    let exponent= exponentNum(3, 2)
    //console.log(exponent)

function fizzbuzz(s, e){
    for(let i=s; i<=e; i++){
        if(i%15 === 0){
            console.log("FIZZBUZZ")
        }
        else if(i%5 === 0){
            console.log("BUZZ")
        }
        else if(i%3 === 0){
            console.log("FIZZ")
        }
        else{
            console.log(i)
        }
    }
}

fizzbuzz(1, 100)