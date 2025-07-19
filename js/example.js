
function checkNum(x, y){
    return x === y
}
let check = checkNum(16, 10);
//console.log(check)

function printNum(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
}
// printNum()
function printEven(s, e){
    for(let i = s; i <= e; i++){
        if(i % 2 === 0){
            console.log(i)
        }else{
            console.log("Not even")
        }
    }
}

//printEven(10, 50)

function printOdd(s, e){
    for(let i = s; i <= e; i++){
        if(i % 2 === 1){
            console.log(i)
        }      
    }
}

printOdd(1, 20)