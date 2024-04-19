import inquirer from 'inquirer';
console.log("*******Welcome To My Currency Converter*******");
const currency = {
    USD: 1, // Base Currency
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.55,
    PKR: 278.50
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number',
    }
]);
let usertoCurrency = user_answer.to;
let userfromCurrency = user_answer.from;
let fromAmount = currency[userfromCurrency];
let toAmount = currency[usertoCurrency];
let amount = user_answer.amount;
let BaseAmount = amount / fromAmount;
let convertedAmount = BaseAmount * toAmount;
console.log(convertedAmount);
