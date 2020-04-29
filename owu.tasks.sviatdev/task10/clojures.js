class UserCard {
    constructor(balance, transactionLimit, historyLog, key) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = [];
        this.key = key;
    }

    getDateTime() {
        const date = new Date();
        const datetime = date.getDate() + "/"
            + (date.getMonth() + 1) + "/"
            + date.getFullYear() + " , "
            + date.getHours() + ":"
            + date.getMinutes() + ":"
            + date.getSeconds();
        return datetime;
    }

    getBalance() {
        return this.balance;
    }

    getTransactionLimit() {
        return this.transactionLimit;
    }

    getHistoryLogs() {
        return this.historyLogs;
    }

    getKey() {
        return this.key;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    setTransactionLimit(transactionLimit) {
        this.transactionLimit = transactionLimit;
        this.historyLogs.push({
            operationType: 'Transaction limit change ',
            credits: this.getTransactionLimit(),
            operationTime: this.getDateTime()
        });
    }

    setHistoryLogs(historyLogs) {
        this.historyLogs = historyLogs;
    }

    setKey(key) {
        this.key = key;
    }

    getCardOptions() {
        console.log('Баланс: ');
        return this;
    }

    putCredits(credits) {
        console.log(`Кладем на карту ${credits}$`);
        this.setBalance(this.balance + credits);
        this.historyLogs.push({
            operationType: 'Received credits ',
            credits: credits,
            operationTime: this.getDateTime()
        });

        return this.historyLogs.toString();
    }

    takeCredits(credits) {
        if (credits >= this.transactionLimit && credits >= this.balance) {
            console.log(`Снятие ${credits}$...`)
            this.balance -= credits;
            this.historyLogs.push({
                operationType: 'Withdrawal of credits ',
                credits: credits,
                operationTime: this.getDateTime()
            });
        } else {
            throw new Error('Not enough money or limit is low');
        }
        return this.historyLogs;
    }

    transferCredits(creditNum, userCard) {
        if (this.balance > creditNum && this.transactionLimit > creditNum) {
            creditNum = creditNum - (creditNum * 0.5) / 100;
            userCard.balance += creditNum;
        }
    }
}

function userCard(nums) {
    const userCard = new UserCard(100, 100, '', nums);
    return userCard;
}

const userCard1 = userCard(1);
console.log(userCard1.getCardOptions());
userCard1.takeCredits(100);
console.log(userCard1.getCardOptions());
console.log('--------------');
userCard1.putCredits(300);
console.log(userCard1.getCardOptions());
userCard1.setTransactionLimit(1000);
console.log(userCard1.getCardOptions());
console.log('--------------');
const userCard2 = userCard(2);
console.log(userCard2.getCardOptions());
console.log('--------------');

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(card) {
        !card.length <= 3 ? this.cards.push(card) : console.log('Max card num is 3');
    }

    getCardByKey(key) {
        this.cards.forEach(item => item.key === key
            ? console.log(item)
            : console.log('There is no card with this key')
        );
    }
}

const userAcc = new UserAccount('Sviat');
userAcc.addCard(userCard1);
userAcc.addCard(userCard2);
console.log(userAcc);
userAcc.getCardByKey(3);


