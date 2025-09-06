import { Account, Car, Author } from "./class.js";
import { Human, Dog } from "./Animal.js";

let account1 = new Account("Ikenna", 1234567890, 1000000);
account1.deposite(500000)
account1.withdraw(200000)
console.log(account1.balance)

let car1 = new Car("BMW", "Red", 1000000);
car1.start()
car1.drive()
car1.stop()

//Author class
//properties - name, books[], age, country
//methods - write, read, publish

let author1= new Author("Philip", 45, "Nigeria", ["Time Travel","Never Again"])
author1.write("Home Coming");

author1.publish()
author1.read("Ije Uwa")

let human1 = new Human("Ikenna", "Black", 25, "Igbo")
human1.talk()
human1.walk()
human1.eat()
human1.sleep()

let dog1 = new Dog("Max", "White", 5, "German Shepherd")
dog1.bark()
dog1.walk()
dog1.eat()
dog1.sleep()