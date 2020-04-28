class UserCard {
    constructor(balance,
                transactionLimit,
                historyLogs, key) {

        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs || 'No logs';
        this.key = key || 'No key';
    }

    getCardOptions() {
        return `Balance: ${this.balance}\nTransaction Limit: ${this.transactionLimit}\nHistory Log: ${this.historyLogs}\nKey: ${this.key}`
    }

    putCredits(credits) {
        this.balance += credits;
    }

    takeCredits(credits) {
        if (credits > this.transactionLimit && credits > this.balance) {
            this.balance -= credits;
        } else {
            throw new Error('Not enough money or limit is low');
        }
    }
    setTransactionLimit(limit) {
        this.transactionLimit += limit;
    }
    transferCredits(creditNum, userCard){
        if(this.balance > creditNum && this.transactionLimit > creditNum){
            creditNum = creditNum - creditNum*0.5;
            userCard = this.balance


        }
    }
}


function userCard(...nums) {
    const userCard = new UserCard(100, 100, 'Log', nums);
    return userCard;
}

const user1 = userCard(3);
const userCard2 = userCard(2);
console.log(user1);
console.log(user1.getCardOptions());
user1.putCredits(100);

try {
    user1.takeCredits(120);

} catch (err) {
    console.log(err);
}
user1.setTransactionLimit(1000);


const opt = user1.getCardOptions();
user1.transferCredits(100, userCard2);
const op = userCard2.getCardOptions();
console.log(opt);
console.log(op);