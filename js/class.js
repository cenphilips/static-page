
class Car{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
        this.isOn = false;
    }
    start(){
        this.isOn = true;
        console.log(`${this.name} started`)
    }
    stop(){
        if(this.isOn === false){
            console.log(`${this.name} is already stopped`)
            return;
        }
        console.log(`${this.name} stopped`)
    }
    drive(){
        if(this.isOn === false){
            console.log(`${this.name} is not started`)
            return;
        }
        console.log(`${this.name} is driving`)
    }
}

let car1 = new Car("BMW", "Red", 1000000);
console.log(car1.name)
console.log(car1.color)
console.log(car1.price)

let car2 = new Car("Mercedes", "Black", 2000000);
console.log(car2.name)
console.log(car2.color)
console.log(car2.price)

let car3 = new Car("Audi", "Blue", 3000000);
console.log(car3.name)
console.log(car3.color)
console.log(car3.price)

car1.start()
car2.start()
car3.stop()
car1.stop()
car3.drive()
car2.drive()

// create a class of Account
// properties - name, balance, accountNumber
// methods - deposit, withdraw, checkBalance
