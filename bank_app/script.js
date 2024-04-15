class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 500);

//Initial Account Information:
console.log("Initial Account Information:")
account1.displayAccountInfo();
console.log(""); // Add a line break
account2.displayAccountInfo();
console.log(""); // Add a line break

//Deposit and Withdrawal:
console.log("Deposit and Withdrawal:")
account1.deposit(200);
account1.withdraw(300);
console.log(""); // Add a line break

account2.deposit(1000);
account2.withdraw(700);
console.log(""); // Add a line break

//Updated Account Information:
console.log("Updated Account Information:")
account1.displayAccountInfo();
console.log(""); // Add a line break
account2.displayAccountInfo();

