// function lion() {
//   let bankBalance = 100000;
//   function babySon() {
//     console.log("IAM Lion Son");
//     console.log(bankBalance);
//   }
//
//   function babyDau() {
//     console.log("Iam Lion Daughter...");
//     bankBalance = bankBalance - 5000;
//     console.log("lion have big hair in his head");
//   }
//
//   return { babySon, babyDau };
// }
//
// const { babySon, babyDau } = lion();
//
// babySon();
// babyDau();
//
// console.dir(babySon);
// console.dir(babyDau);
//
// babySon();

// function BankAccount(miniBalance) {
//   let balance = miniBalance;
//
//   function deposit(amount) {
//     balance = balance + amount;
//     console.log(`hello bro! your balanceis = ${balance}`);
//   }
//
//   function withDraw(amount) {
//     balance = balance - amount;
//     console.log(`hello bro! your balanceis = ${balance}`);
//   }
//   function myBalance() {
//     console.log(`hello bro! your balanceis = ${balance}`);
//   }
//   return [deposit, withDraw, myBalance];
// }
//
// const [depo, draw, balance] = BankAccount(10000);
// depo(5500);
// draw(5500);
// balance();
// console.dir(draw, draw, balance);

//memoization

// stale closures
// function Family() {
//   let savings = 100000;
//   let mySavings = `hello ! my savings is ${savings}`;
//
//   function restarent() {
//     savings = savings - 5000;
//     console.log("i spent 5000 for my faminly dinner !");
//   }
//   function afterMyMoney() {
//     return savings;
//   }
//   return { restarent, afterMyMoney };
// }
//
// const moneySpent = Family();
//
// moneySpent.restarent();
// moneySpent.restarent();
// moneySpent.restarent();
// moneySpent.restarent();
// moneySpent.restarent();
// console.log(moneySpent.afterMyMoney());

const products = [
    {
        id: 1,
        name: "mouse",
        price: 20,
    },
    {
        id: 2,
        name: "laptop",
        price: 900,
    },
    { id: 3, name: "keyboard", price: 40 },
];


c