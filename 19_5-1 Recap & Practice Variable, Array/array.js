/*                      Array 

1. What is the purpose of an Array?
2. How to declare an Array in JavaScript?
3. Number of elements in an Array?
4. What is Index in JavaScript?
5. Find the value of an element by Index?
6. Change or Update or Set an element by index?
7. Get the index of an element by the value?
8. What does it mean when you get undefined while getting the value of an element by index?
9. How can you add an element to an array at the last position?
10. How can you remove the last element from array?
11. Add an element at the first position of an array?
12. Remove the first element of an array?
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          1. What is the purpose of an Array? 


In JavaScript, an array is one of the most commonly used data types. It stores multiple values and elements in one variable. These values can be of any data type — meaning you can store a string, number, boolean, and other data types in one variable.


In JavaScript, an array serves the same fundamental purpose as in other programming languages: it's a data structure used to store a collection of elements. JavaScript arrays can hold elements of any data type, and they provide methods for adding, removing, and accessing elements.

Arrays in JavaScript are dynamic, meaning their size can change dynamically as elements are added or removed. This flexibility makes them widely used for various tasks such as storing lists of items, managing data collections, and implementing algorithms and data structures like stacks and queues.

JavaScript arrays also come with built-in methods for common operations like iterating over elements, searching for elements, and sorting. Additionally, arrays can be nested within each other, allowing for the creation of multidimensional arrays to represent more complex data structures. Overall, arrays in JavaScript are versatile and essential for many programming tasks. */


/* Creating an array to store a list of fruits */
var fruits = ['apple', 'banana', 'orange', 'kiwi'];

/* Accessing elements in the array */
console.log(fruits[0]); 
/* Output: 
apple */
console.log(fruits[2]); 
/* Output: 
orange */

/* Modifying elements in the array */
fruits[1] = 'grape'; // Changing 'banana' to 'grape'
console.log(fruits);
/* Output:
[ 'apple', 'grape', 'orange', 'kiwi' ] */

/* Adding elements to the array */
fruits.push('pineapple'); // Adding 'pineapple' to the end
console.log(fruits);
/* Output:
[ 'apple', 'grape', 'orange', 'kiwi', 'pineapple' ] */

/* Removing elements from the array */
var removedFruit = fruits.pop(); // Removing the last element ('pineapple')
console.log(removedFruit); 
/* Output:
pineapple */
console.log(fruits); 
/* Output: 
['apple', 'grape', 'orange', 'kiwi'] */

/* Iterating over the elements of the array */
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/* Output:
apple
grape
orange
kiwi */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          2. How to declare an Array in JavaScript? 


Array:
To declare an array with literal notation you just define a new array using empty brackets. It looks like this: var numbers =[1, 2, 3, 4, 5]; You will place all elements within the square brackets and separate each item or element with a comma.


What will you do if you need to work with more than one number?

This is not array:
var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
        

This is an array: */
var numbers =[1, 2, 3, 4, 5];
    

/* Array Structure:

Array:
(A B C D)-Element
(0 1 2 3)-Index

Array Length=4
First Index=0
Last Index=3 */

/* It is wise to use arrays with similar data types. */

[2, a, 5, b, white]; /* You don't do this */
/* Integer array */ [1, 3, 7, 8, 10];
/* Char array */ ['d', 'f', 'r', 't', 't'];
/* String array */ ['Bob', 'Rob', 'Jane', 'Peter'];


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          3. Number of elements in an Array? 

The number of elements in an array in JavaScript can vary depending on how you define and populate the array. It could be any non-negative integer value. If you have an array (numbers) with 5 elements: */

var numbers = [45, 68, 78, 56, 89, 98];
/*The number of elements in this array is 6. You can retrieve the number of elements using the (length) property: */
console.log(numbers.length);
/* Output: 
6 */
console.log("Number of elements in the array:",numbers.length);
/* Output:
Number of elements in the array: 6 */

/* So, the number of elements in an array in JavaScript depends on the specific array you are working with. */


/* Array Structure:
Array: ( [45, 68, 78, 56, 89, 98]; )
Index:     0    1   2   3   4   5 
Elements: 45, 68, 78, 56, 89, 98
Array Length: 6
First Index: 0
Last Index: 5
*/


/* 1. Get element value by index: */
var numbers = [45, 68, 78, 56, 89, 98];
console.log(numbers);
/* Output:
[ 45, 68, 78, 56, 89, 98 ] */
console.log(numbers[0]);
/* Output:
45 */
console.log(numbers[3]);
/* Output:
56 */
console.log(numbers[2]);
/* Output:
78 */

var elements = numbers[1];
console.log(elements);
/* Output:
68 */

/* 2. Set element value by index: */
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);
/* Output:
[ 45, 77, 78, 44, 89, 98 ] */

/* 3. Find index of an element: */
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
/* Output:
4 */
var positionIndex = numbers.indexOf(188);
console.log(positionIndex);
/* Output:
-1 */


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          4. What is Index in JavaScript? 


In JavaScript, an index typically refers to the position of an element within an array or a string.

For arrays, the index represents the numeric position of an element within the array, starting from 0 for the first element, 1 for the second element, and so on. For example: */
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);
/* Output:
 apple */
console.log(fruits[1]);
/* Output: 
banana */
console.log(fruits[2]);
/* Output: 
orange */

/* For strings, the index represents the position of a character within the string, again starting from 0. For example: */
var str = 'hello';
console.log(str[0]);
/* Output: 
h */
console.log(str[1]);
/* Output: 
e */
console.log(str[2]);
/* Output: 
l */

/* Array: ( [45, 68, 78, 56, 89, 98]; )
Index:     0    1   2   3   4   5 
First Index: 0
Last Index: 5
 */

/* Get element value by index: */
var numbers = [45, 68, 78, 56, 89, 98];
console.log(numbers);
/* Output:
[ 45, 68, 78, 56, 89, 98 ] */
console.log(numbers[0]);
/* Output:
45 */
console.log(numbers[3]);
/* Output:
56 */
console.log(numbers[2]);
/* Output:
78 */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          5. Find the value of an element by Index?


/* Get element value by index: */
var numbers = [45, 68, 78, 56, 89, 98];
console.log(numbers);
/* Output:
[ 45, 68, 78, 56, 89, 98 ] */
console.log(numbers[0]);
/* Output:
45 */
console.log(numbers[3]);
/* Output:
56 */
console.log(numbers[2]);
/* Output:
78 */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          6. Change or Update or Set an element by index? */ 


/* Set element value by index: */
var numbers = [45, 68, 78, 56, 89, 98];
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);
/* Output:
[ 45, 77, 78, 44, 89, 98 ] */

/* Find index of an element: */
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
/* Output:
4 */
var positionIndex = numbers.indexOf(188);
console.log(positionIndex);
/* Output:
-1 */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          7. Get the index of an element by the value? */ 


/* Find index of an element: */
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
/* Output:
4 */
var positionIndex = numbers.indexOf(188);
console.log(positionIndex);
/* Output:
-1 */

/* In the first case, the indexOf() method returns 4 because 89 is found at index 4 in the numbers array. In the second case, the indexOf() method returns -1 because 188 is not present in the numbers array. So, -1 indicates that the value was not found in the array. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          8. What does it mean when you get undefined while getting the value of an element by index? 

In JavaScript, when you try to access an element of an array using an index that is out of bounds or does not exist, you will get undefined as the result. This indicates that the element at that index is not defined or does not exist in the array.

For example: */
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[10]);
/* Output: 
undefined */
/* Here, numbers array has elements at indices 0 through 4. Accessing numbers[10] tries to access an element beyond the bounds of the array, resulting in undefined. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          9. How can you add an element to an array at the last position? 


You can add an element to the end of an array in JavaScript using the push() method. Here's an example: */
var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
/* Output: 
[1, 2, 3, 4, 5] */

/* In this example, push(5) adds the element 5 to the end of the numbers array.

Another way to add an element to the end of an array is by using the array's length property. Here's an example: */
var numbers = [1, 2, 3, 4];
numbers[numbers.length] = 5;
console.log(numbers);
/* Output: 
[1, 2, 3, 4, 5] */

/* In this example, numbers.length returns the current length of the array (which is 4), so numbers[numbers.length] = 5 adds the element 5 at index 4, effectively adding it to the end of the array. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          10. How can you remove the last element from array? 


You can remove the last element from an array in JavaScript using the pop() method. Here's an example: */
var numbers = [1, 2, 3, 4, 5];
var removedElement = numbers.pop();
console.log(numbers);
/* Output: 
[1, 2, 3, 4] */
console.log("Removed Element:", removedElement);
/* Output: 
Removed Element: 5 */

/* In this example, pop() removes the last element (5) from the numbers array and returns it. After the operation, the array becomes [1, 2, 3, 4], and the removed element is stored in the removedElement variable. 


Alternatively, you can also use the length property to remove the last element by setting the length of the array to one less than its current length. Here's an example:*/
var numbers = [1, 2, 3, 4, 5];
numbers.length = numbers.length - 1;
console.log(numbers);
/* Output: 
[1, 2, 3, 4] */

/* In this example, setting numbers.length to numbers.length - 1 effectively removes the last element (5) from the numbers array. */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          11. Add an element at the first position of an array? 

/* The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array. */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
/* Output: 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] */
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
/* Output: 
[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ] */


/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          12. Remove the first element of an array? */

/* Shift (remove) the first element of the array: */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
/* Output: 
[ 'Orange', 'Apple', 'Mango' ] */