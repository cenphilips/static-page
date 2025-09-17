const myNumbers = [4, 1, -20, -7, 5, 9, -6]

function removeNeg(numbers, callback){
    const myArray = []
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x)
        }
    }
    return myArray;
}

const newFunct = (a) => a >= 0

const positiveNumbers = removeNeg(myNumbers, newFunct)
console.log(positiveNumbers)