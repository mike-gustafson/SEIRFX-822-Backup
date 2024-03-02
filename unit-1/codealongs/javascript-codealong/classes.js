console.log('classes');

class User {
    constructor(name, location) {
        this.name = name;
        this.age = 30;
        this.location = location;
    }

    sayHi() {
        alert(this.name);
    }

    isOldEnough() {
        return this.age >= 21;
    }
}

// create an instance of the class User
const john = new User("John", "Los Angeles");
john.sayHi();
console.log(john.name); // John
console.log(john.age); // 30

// another user instance
const keya = new User('Keya', 'Brazil');

// check to see if it's a User constructor
console.log('check for User', User === User.prototype.constructor); // true


// object
// const userJohn = {
//     name: 'John',
//     sayHi: function() {
//         alert(this.name);
//     },
//     location: 'San Francisco'
// }

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }
}

const firstProblem = new Calculator(4, 4);
console.log('add 4 + 4', firstProblem.add());
console.log('add 4 - 4', firstProblem.subtract());

// function Clock({ template }) {

//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


class Clock {
    constructor(template) {
        this.timer;
        this.template = template;

        this.render = function() {
            let date = new Date();
    
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
    
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
    
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
    
            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
    
            console.log(output);
        }
    }
    
    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    };
}

let clock = new Clock('h:m:s');
clock.start();

// Class Inheritance
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

const animal = new Animal('kuzco');
animal.run(40);
animal.stop();

class Cheetah extends Animal {
    attack() {
        console.log(`${this.name} attacks!`);
    }

    stop() {
        super.stop();
        console.log('finished eating other animal');
    }
}

const charles = new Cheetah('Charles');
charles.run(70);
charles.attack();
charles.stop();



// Make a BankAccount class
    // transaction
    // account number
    // checking, savings, credit card
    // demographics - first, middle, last
    // phone number
    // routing number
    // balance
    // deposit
class BankAccount {
    constructor(firstName, middleName, lastName, phoneNumber, balance, accountType, pin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.phoneNumber = phoneNumber;
        this.accountNumber = Math.floor(Math.random() * 100000000);
        this.routingNumber = 10810855;
        this.balance = balance;
        this.accountType = accountType;
        this.pin = pin
    }

    checkBalance(pinNumber) {
        // print to screen
        if (this.pin === pinNumber) {
            console.log(this.accountType, ':', this.balance);
        }
        
    }
    transaction(amount) {
        if (amount <= this.balance) {
            // complete transaction
            this.balance = this.balance - amount;
        } else {
            console.log('Insufficient funds... Please try again.')
        }
    }
    printAccountHolderInfo(pinNumber) {
        if (this.pin === pinNumber) {
            console.table({ 
                firstName: this.firstName,
                middleName: this.middleName, // string
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                accountNumber: this.accountNumber,
                routingNumber: this.routingNumber
            })
        } else {
            console.log('PIN number is incorrect. Please try again');
        }
    }
    deposit(amount, pinNumber) {
        if (this.pin === pinNumber) {
            // make a deposit
            let newBalance = this.balance + amount;
            this.balance = newBalance;
            console.log('New balance', this.balance);
        } else {
            console.log('PIN number is incorrect. Please try again');
        }
    }
}

// We got a bank and we going to take our first client
const jimmyHendrix = new BankAccount('Jimmy', 'N/A', 'Hendrix', '404-741-9988', 500000, 'checking', 4455);
// make first transaction
jimmyHendrix.transaction(10000);
// wants to check his balance 
jimmyHendrix.checkBalance(4455);
// check account info
jimmyHendrix.printAccountHolderInfo(4455);
// got paid for tour - 125000
jimmyHendrix.deposit(125000, 4455);
