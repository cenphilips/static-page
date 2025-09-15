const Person = {
    firstname: "Ikenna",
    lastname: "Remigius",
    age: 25,
    gender: "Male",
    height: 1.8,
    weight: 70,
    complexion: "Fair",
    eyeColor: "Brown",
    hairColor: "Black",
    fullname: "",
    // talk: function(){
    //     return "Hello"
    // }
    get getGender(){
        return this.gender
    },
    set setFullname(myname){
        this.fullname = myname
    }
}
Person.address = "123 Main Street"
for(let key in Person){
    console.log(`${key}: ${Person[key]}`)
}
let jsonPerson = JSON.stringify(Person)
console.log(jsonPerson)

//desctructuring
let { name, age, gender } = Person;
console.log(name)
console.log(age)


const obj = { counter: 0};

Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0
    }
})

Object.defineProperty(obj, "increment", {
    get: function(){
        return this.counter++
    }
})

Object.defineProperty(obj, "decrement", {
    get: function(){
        return this.counter--
    }
})

Object.defineProperty(obj, "add", {
    set: function(value){
        this.counter += value
    }
})

Object.defineProperty(obj, "subtract", {
    set: function(i){
        this.counter -= i
    }
})

obj.add = 5
console.log(obj.counter)
obj.subtract = 2
console.log(obj.counter)
obj.reset;
console.log(obj.counter)