
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

//console.log(reversedString("TundeEdnut"))

/**
 * x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * len = 10
 * k = 4
 */

function binarySearch(x, k){
    let s = 0;
    let e = x.length-1;
    while(s <= e){
        let mid = Math.floor((s+e)/2)
        if(x[mid] === k){
            return mid
        }else if(k > x[mid]){
            s = mid + 1
        }else{
            e = mid - 1
        }
    }
    return -1
}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let k = 0
// console.log(binarySearch(x, k))

// recursion
function factorial(n){
    if(n === 0){
        return 1
    }
    return n * factorial(n-1)
}
/**
 * factorial(5) = 5 * factorial(4) = 5 * 24 = 120
 * factorial(4) = 4 * factorial(3) = 4 * 6 = 24
 * factorial(3) = 3 * factorial(2) = 3 * 2 = 6
 * factorial(2) = 2 * factorial(1) = 2 * 1 = 2
 * factorial(1) = 1 * factorial(0) = 1 * 1 = 1
 * factorial(0) = 1
 */

// console.log(factorial(8))

function recBinarySearch(x, k, s, e){
    if(s > e){
        return -1
    }
    let mid = Math.floor((s+e)/2)
    if(x[mid] === k){
        return mid
    }
    else if(k > x[mid]){
        return recBinarySearch(x, k, mid+1, e)
    }
    else{
        return recBinarySearch(x, k, s, mid-1)
    }
}
let j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let l = 6
console.log(recBinarySearch(j, l, 0, j.length-1))