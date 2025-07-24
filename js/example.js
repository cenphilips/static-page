
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

// printOdd(1, 20)

function checkChar(str, char){
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] === char){
    //         return "Found"
    //     }
    // }
    let i = 0
    while(i < str.length){
        if(str[i] === char){
            return i
        }
        i++;
    }
    return -1
}

// console.log(checkChar("Hello", "l"))

function getAllChar(str, char){
    let i = 0;
    let index = [];
    while(i < str.length){
        if(str[i] === char){
            index.push(i)
        }
        i++;
    }
    return index;
}

// console.log(getAllChar("Hello", "k"))

function compareString(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let i = 0;
    while(i < str1.length){
        if(str1[i] !== str2[i]){
            return false
        }
        i++;
    }
    return true;
}

// console.log(compareString("Hello", "Hellol"))

// let str1 = "Hello world"
// let str2 = str1
// console.log(str1)
// console.log(str2)

function copyString(str){
    let newStr = "";
    let i = 0
    while (i < str.length){
        if(str[i] === 'o'){
            newStr += '0'
        }else if(str[i] === 'e'){
            newStr += '3'
        }
        else{
            newStr += str[i]
        }
        i++;
    }
    return newStr;
}

//console.log(copyString("Hello world"))


function reversedString(str){   
    let newStr = "";
    let i = str.length-1
    while (i >=0 ){
        newStr += str[i]
        i--;
    }
    return newStr;
}

console.log(reversedString("Tunde Ednut"))