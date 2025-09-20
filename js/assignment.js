

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

function palindrome(string){
    let len = string.length

    for(let i=0; i<len/2; i++){
        if(string[i] !== string[len - 1 - i]){
            return 'It is not a palindrome'
        }
    }
    return 'It is a palindrome'
}

//console.log(palindrome('palindromeemordnilap'))

const myNumbers = [4, 1, -2, 7, 16, 9, -6]

function evenNum(numbers, callback){
    const myArray = []
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x)
        }
    }
    return myArray;
}

const isEven = function(a){
    return a % 2===0
}

// const isEven = (a) => a%2 === 0

const evenNumbers = evenNum(myNumbers, isEven)
console.log(evenNumbers)

