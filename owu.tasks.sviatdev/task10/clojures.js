class HistoryLog {

    constructor(operationType, credits, operationTime) {
        this.operationType = operationType || null;
        this.credits = credits || null;
        this.operationTime = operationTime || null;
    }

    getOperationType() {
        return this.operationType;
    }
    getCredits() {
        return this.credits;
    }
    getOperationTime() {
        return this.operationTime;
    }
    setOperationType(operationType) {
        this.operationType = operationType;
    }
    setCredits(credits) {
        this.credits = credits;
    }
    setOperationTime(operationTime) {
        this.operationTime = operationTime;
    }
    getAllOptions(){
        return `${this.getOperationType()} ${this.getCredits()} ${this.getOperationTime()}`;
    }
}

class UserCard  {
    constructor(balance, transactionLimit, historyLogs, key) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs.getAllOptions();
        this.key = key || 'No key';
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
        this.historyLogs = new HistoryLog('Transaction limit change', this.getTransactionLimit(), 'Date.now().toString()');
    }

    setHistoryLogs(historyLogs) {
        this.historyLogs = historyLogs;
    }

    setKey(key) {
        this.key = key;
    }

    getCardOptions() {
        console.log('Баланс: ');
        return `Balance: ${this.getBalance()}$\nTransaction Limit: ${this.getTransactionLimit()}$\nHistory Log: ${this.getHistoryLogs()}\nKey: ${this.getKey()}`
    }

    putCredits(credits) {
        console.log(`Кладем на карту ${credits}$`);
        this.setBalance(this.balance + credits);
        this.historyLogs = new HistoryLog('Received credits', credits, Date.now().toString());
        return this.historyLogs;
    }

    takeCredits(credits) {
        if (credits >= this.transactionLimit && credits >= this.balance) {
            console.log(`Снятие ${credits}$...`)
            this.balance -= credits;
            this.historyLogs = new HistoryLog('Withdrawal of credits', credits, Date.now().toString());
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

function userCard(...nums) {
    const userCard = new UserCard(100, 100, '', nums);
    return userCard;
}

const userCard1 = userCard(1);
console.log(userCard1.getCardOptions());
userCard1.takeCredits(100);
console.log(userCard1.getCardOptions());

userCard1.putCredits(300);
console.log(userCard1.getCardOptions());
userCard1.setTransactionLimit(1000);
console.log(userCard1.getCardOptions());

const userCard2 = userCard(2);
console.log(userCard2.getCardOptions());
userCard1.transferCredits(100, userCard2);
console.log(userCard2.getCardOptions());


