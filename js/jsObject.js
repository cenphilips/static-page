const Person = {
    name: "Ikenna",
    age: 25,
    gender: "Male",
    height: 1.8,
    weight: 70,
    complexion: "Fair",
    eyeColor: "Brown",
    hairColor: "Black",
    // talk: function(){
    //     return "Hello"
    // }
}
Person.address = "123 Main Street"
for(let key in Person){
    console.log(`${key}: ${Person[key]}`)
}