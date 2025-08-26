

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

console.log(palindrome('palindromeemordnilap'))