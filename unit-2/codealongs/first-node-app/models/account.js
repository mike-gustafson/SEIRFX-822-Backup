// class account{
//     constructor(accountName, accountNumber, amount, routingNumber, pin){
//         this.accountName = accountName;
//         this.accountNumber = accountNumber;
//         this.amount = amount;
//         this.routingNumber = routingNumber;
//         this.pin = pin;
//     }
// }

// module.exports = account;

class Account {
    constructor(accountName, accountNumber, amount, routingNumber, pin) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.routingNumber = routingNumber;
        this.pin = pin;
    }
}

module.exports = Account;