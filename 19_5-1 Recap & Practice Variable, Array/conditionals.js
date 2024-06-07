/*                      Conditionals


1. Meaning of: >, <, >=, <=, ==, !=, ===, !== in JavaScript?
2. Meaning of && in JavaScript?
3. Meaning of  || in JavaScript?
4. How to write condition?
Let's say you have x amount of money.
If you have more than 80,000 then you will buy a Mack book
If you have more than 60,000 then you will buy a HP laptop
If you have more than 40,000 then you will buy a Acer laptop
If you have more than 20,000 then you will buy an used laptop
Otherwise, you will use your mobile phone
*/


/*                          1. Meaning of: >, <, >=, <=, ==, !=, ===, !== in JavaScript? */

/* Comparison Operators:

Operator ------------------------------------ Description
   
==       ------------------------------------ Equal to
===      ------------------------------------ Equal value and Equal type
!=       ------------------------------------ Not Equal
!==      ------------------------------------ Not Equal value or not Equal type
>        ------------------------------------ Greater than
<        ------------------------------------ Less than
>=       ------------------------------------ Greater than or Equal to
<=       ------------------------------------ Less than or Equal to */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          2. Meaning of && in JavaScript? 




In JavaScript, the && operator is the logical AND operator. It's used to combine two logical expressions and returns true if both expressions are true; otherwise, it returns false. */


var x = 5;
var y = 10;

if (x > 0 && y < 15) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false.");
}
/* Output:
Both conditions are true. */

/* In this example, both x > 0 and y < 15 are true, so "Both conditions are true." will be logged to the console. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          3. Meaning of  || in JavaScript? 


In JavaScript, the || operator is the logical OR operator. It's used to combine two logical expressions and returns true if at least one of the expressions is true; otherwise, it returns false. Here's how it works: */


var x = 5;
var y = 10;

if (x > 0 || y < 0) {
  console.log("At least one condition is true.");
} else {
  console.log("Both conditions are false.");
}
/* Output:
At least one condition is true. */

/* In this example, x > 0 is true, so "At least one condition is true." will be logged to the console without evaluating y < 0. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          4. How to write condition? 


In JavaScript, you can write conditions using the if, else if, and else statements. Here's the basic syntax: */

// var money = 100;
// var money = 10;
// var money = 30;
// var money = 40;
var money = 68;
var butterCroissantPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(butterCroissantPrice < money) {
    console.log('then i will have butter croissant');
}
else if (butterBread < money) {
    console.log('then i will have butter bread');
}
else if (toastBiscuit < money) {
    console.log('then i will have toast biscuit');
}
else {
    console.log('tea will be better option');
}
/* Output:
then i will have butter croissant */
/* Output:
tea will be better option */
/* Output:
then i will have toast biscuit */
/* Output:
then i will have butter bread */
/* Output:
then i will have butter croissant */



/* Let's say you have x amount of money.
If you have more than 80,000 then you will buy a Mack book
If you have more than 60,000 then you will buy a HP laptop
If you have more than 40,000 then you will buy a Acer laptop
If you have more than 20,000 then you will buy an used laptop
Otherwise, you will use your mobile phone */
var amountOfMyMoney = 10000;
var mackBookPrice = 80000;
var hpLaptopPrice = 60000;
var acerLaptopPrice = 40000;
var usedLaptopPrice = 20000;

if (amountOfMyMoney > mackBookPrice) {
  console.log('then I will buy a Mack book');
}
else if (amountOfMyMoney > hpLaptopPrice) {
  console.log('then I will buy a HP laptop');
}
else if (amountOfMyMoney > acerLaptopPrice) {
  console.log('then I will buy an Acer laptop');
}
else if (amountOfMyMoney > usedLaptopPrice) {
  console.log('then I will buy an used laptop');
}
else {
  console.log('Otherwise, I will use my mobile phone');
}


/* Output:
Otherwise, I will use my mobile phone */