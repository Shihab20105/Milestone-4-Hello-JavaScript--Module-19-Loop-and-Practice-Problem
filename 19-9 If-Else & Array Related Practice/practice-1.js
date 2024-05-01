/*                                          Practice Problem 1 

You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
b) Remove 'Orange' and add 'Watermelon'. 
*/


var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
/* Output:
1 */

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[1] = 'Mango'
console.log(fruits);
/* Output:
[ 'Apple', 'Mango', 'Orange' ] */

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
/* Output:
[ 'Apple', 'Mango', 'Orange' ] */

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
/* Output:
[ 'Apple', 'Mango', 'Orange' ]
[ 'Apple', 'Mango' ] */

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
/* Output:
[ 'Apple', 'Mango', 'Orange' ]
[ 'Apple', 'Mango' ]
[ 'Apple', 'Mango', 'Watermelon' ] */