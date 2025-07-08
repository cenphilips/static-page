// this is the begining of our class
/**
 * This
 * is
 * multi line comment
 */
let x = 10;
const pi = 3.142;
let y = 5;
let firstname = "Ikenna" 
let lastname = "Remigius"

console.log(firstname +" "+ lastname)
console.log(typeof(x))
console.log(typeof(pi))
console.log(typeof(2))
/**
 * String
 * Number
 * Bigint
 * Boolean
 * Undefined
 * Null
 * Symbol
 * Object
 * array
 */
let gender = "";
console.log(`My firstname is: ${firstname} and my last name is: ${lastname}`)

let fruits = ["apple", "mango", "banana", "pineaple"]
console.log(fruits[3])
console.log(firstname.charAt(2))
console.log(firstname.at(-2))

let newArr = firstname.concat(" ", lastname)
console.log(newArr)

let k = firstname.substring(0, 4)
console.log(k)
console.log(lastname.slice(3, 5))

console.log(firstname.toUpperCase())
let name = "    NewName   "
console.log(name.trim())

console.log(firstname.repeat(2))

let str = "today is Tuesday is"
// console.log(str.replace(" ", "-"))
// console.log(str.replaceAll(' ', '-'))
// console.log(str.replace(/a/g, "4"))
console.log(str.split(" "))

//string search
console.log(str.indexOf("is"))
console.log(str.lastIndexOf('is'))
console.log(str.search(/is/g))
console.log(str.match(/tuesday/gi))
console.log(str.startsWith("today"))
console.log(str.includes("for"))
