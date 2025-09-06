class Animal{
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

export class Human extends Animal{
    constructor(name, color, age, language){
        super(name, color, age);
        this.language = language;
    }
    eat(){
        console.log(`${this.name} is eating with a fork and knife`)
    }
    talk(){
        console.log(`${this.name} is talking`)
    }
    walk(){
        console.log(`${this.name} is walking on 2 legs`)
    }
}

export class Dog extends Animal{
    constructor(name, color, age, breed){
        super(name, color, age);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
    walk(){
        console.log(`${this.name} is walking on 4 legs`)
    }
}

