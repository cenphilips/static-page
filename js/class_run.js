import { Account, Car } from "./class.js";

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