/*                          Variable

1. What is JavaScript?
2. How does JavaScript works?
3. What is Variable?
4. How to declare a Variable?
5. Types of Variable? How can you find out type of a Variable?
6. Primitive and Non-Primitive data types?
7. Naming Convention of JavaScript Variables?
8. Math Operation: +, -, *, /, % ?
9. Shorthand: +=, -=, *=, /= ?
10. Shorthand: ++, -- ?
11. Purpose of parseInt and parseFloat?
12. Purpose of toFixed?
*/

/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          1. What is JavaScript?  

JavaScript:
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)


JavaScript:
JavaScript is a high level, interpreted programming language used to make web pages more interactive. It let's you implement complex and beautiful things/design on web pages.


Origin of JavaScript:
JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8.


Your Website:

HTML
What do you want on your website?

CSS
How do you want it to look?

JavaScript
What do you it to do?
*/


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          2. How does JavaScript works? 

**Definition:  JavaScript is a programming language commonly used to add interactivity and dynamic behavior to web pages. When you visit a website, your web browser downloads the JavaScript code along with the HTML and CSS. The browser then interprets and executes the JavaScript code, allowing the website to respond to user actions, manipulate content, and communicate with servers without reloading the page. In simple terms, JavaScript makes websites more interactive and engaging by enabling them to do things like validate forms, animate elements, and update content dynamically.



**Explanation: Imagine JavaScript as a chef in a kitchen. When you visit a webpage, the browser serves as the kitchen. The HTML gives the structure (like a recipe), the CSS adds style (like decoration), and JavaScript is the chef adding flavor and making things happen.

JavaScript works by following instructions written in its code. These instructions can be like telling the chef what ingredients to use, how to mix them, and what to do with the final dish.

When you interact with a webpage (like clicking a button or typing in a form), JavaScript springs into action, responding to your actions by changing what you see on the page. It can update text, move elements around, fetch new information from the internet, and much more—all to make your web experience more interactive and enjoyable.



**Explanation: JavaScript works by running code in your web browser. When you visit a webpage, the browser downloads HTML (for structure), CSS (for style), and JavaScript (for interactivity).

JavaScript can do a lot of things, like:

1. Manipulating HTML: It can change the content and structure of a webpage. For example, updating text, adding or removing elements.
2. Interacting with users: It can respond to user actions like clicks, keystrokes, or mouse movements. For example, showing pop-ups or validating forms.
3. Communicating with servers: It can send and receive data from servers in the background. For example, fetching new information without reloading the entire page.
Overall, JavaScript makes websites dynamic and interactive, enhancing the user experience.
*/


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          3. What is Variable? 

Definition:
A variable is a container or placeholder that holds a value that can change or vary over time. It's like a box where you can store different things, and you can replace the contents of the box whenever you need to. In programming or mathematics, variables are used to store data that can be manipulated or used in calculations.

Explanation:
Think of a variable as a box. You can put different things in the box, like numbers or words. And, you can change what's inside the box whenever you want. So, a variable is like a container that holds information, and you can use that information in your calculations or programs.

Explanation:
A variable is a symbol or name that represents a value or a piece of information in mathematics, logic, programming, or other contexts where data is manipulated. It's essentially a placeholder that can hold different values, and those values can change over time or in different situations. In programming, variables are used to store and manipulate data, making it easier to work with information in a program.
*/



/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          4. How to declare a Variable?

Variable

vary + able = variable
Var is key word.
To declare variable in JavaScript you need five things.
The var keyword was used in all JavaScript code from 1995 to 2015.
A variable is a value that can change, depending on conditions or on information passed to the program.
Variable
1. var:  The var statement declares a variable.
2. Variable name:   Variables must be identified with unique names.
3. Assignment Operator " = ":   Use an " = " operator to assign a value.
4. Value:   Specifies the value to assign to the variable.
5. Semicolon (;):   ;You got to put semi-colon (;) .

var price = 10;
1. (var):   ;The var statement declares a variable.
2. (price) Variable name:   Variables must be identified with unique names.
3. (=) Assignment Operator " = ":  Use an " = " operator to assign a value.
4. (10) Value:   Specifies the value to assign to the variable.
5. (;) Semicolon (;):   You got to put semi-colon (;) .

var age = 17;
1. (var):   The var statement declares a variable.
2. (age) Variable name:   Variables must be identified with unique names.
3. (=) Assignment Operator " = ":   Use an " = " operator to assign a value.
4. (17) Value:   Specifies the value to assign to the variable.
5. (;) Semicolon (;):   You got to put semi-colon (;) .</h3>
*/


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          5. Types of Variable? How can you find out type of a Variable? 


Types of Variable*/

/*Numeric: */
var price = 10;
var age = 17;
var temperature = 20;

/* String: */
var person = "Hasan Ahmed" ;
var location = "Red Bridge London" ;
var special = "Delwar Hussain Saydi" ;
var job = 'Working on Web Development' ;

/* Boolean: */
var serious = true;
var isFullMarks = true;
var isMarried = false;

/* String data types:
Zero or more characters written inside quotes.

Numeric data types:
Numbers can be written with or without decimals and without quotes.

Boolean data type:
It can only take the values true or false and written without quotes.

String:
A JavaScript string stores a series of characters like "John Doe". A string can be any text inside double or single quotes: let carName1 = "Volvo XC60"; let carName2 = 'Volvo XC60';

Numeric:
The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision.

Boolean:
In JavaScript, a boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function. It sounds extremely simple, but booleans are used all the time in JavaScript programming, and they are extremely useful.



JavaScript keyword, variable name, naming convention

1. Variable name can not be any keywords.
2. Variable name has to be in one word, no space.
3. Variable name can not have question.
4. Variable name can not starts with a number but can ends with a number.
5. How to use long names in Variable. */


/* Good Variable */

var price = 40;

/* You can not do this on JavaScript. */
vaR price = 40;
Var price = 40;
VAR price = 40

/* 1. Variable name can not be any keywords. */
var false = 95;
var return = true;

/* 2. Variable name has to be in one word. No space. */
var my home address = "London Ilford"

/* 3. Variable name can not have quotation. */
var "name" = "Tom Hanks";

/* 4. Variable name can not start with a number but can ends with a number. */
var 95club = 1995;
var club25 = 2025;  // you can do this .

/* 5. How to use long names. */
var user-name = "Salman Shah"; //Can not use dash.
var user home address = "Redbridge Essex London";
var userhomeaddress = "Redbridge Essex London";
var user_home_address = "Redbridge Essex London"; //Snake Case
var userHomeAddress = "Redbridge Essex London"; //Camel Case
var UserHomeAddress = "Redbridge Essex London"; //Pascal Case

/* We will use Camel Case. */


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                             6. Primitive and Non-Primitive data types? 


JavaScript Data Types

Primitive Data Type and Non Primitive Data Type

Primitive Data Type:
Number
String
Boolean
Undefined
Null

Non Primitive Data Type:
Object
Array
Function */


var price = 100;
console.log(price);
/* Output:
100 */ 

console.log(typeof price);
/* Output:
number */

var price = '100';
console.log(typeof price);
/* Output:
string */

var isHappy = true;
console.log(typeof isHappy);
/* Output:
boolean */

var romantic;
console.log(typeof romantic);
/* Output:
undefined */


/*                           Advanced  */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.30000000000000004 */

var num1 = 0.5;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.7 */

var num1 = 0.1;
var num2 = 0.3;
var sum = num1 + num2
console.log(sum)
/* Output
0.4 *

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.30000000000000004 */


var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);
/* Output:
0.30 */


var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(4);
console.log(sum);
/* Output:
0.3000 */


var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);
/* Output:
0.3 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);
/* Output:
0.3 */


/* -------------------------------------------------------------------------------------------------------------------------- */
/*                             7. Naming Convention of JavaScript Variables? 


/* number type variable  */
var sunglassPrice = 120;

/* string type variable */
var specialOneName = 'Jhose Morihioho';

/* boolean type variable */
var isSingle = true;

/* two types of number:
Integer: 120,
float, decimal: 3.65

variable naming convention: rules, best practice
1. single word
2. no gap or space
3. no quote
4. no keyword
5. can not star with a number
6. can not contain dash
7. should use camelCase
 

Math Operations: +, -, *, /
Shorthand: +=, -=, ++, --

Convert: parseInt, parseFloat

toFixed

remainder(vagshesh): %



/* -------------------------------------------------------------------------------------------------------------------------- */
/*                             8. Math Operation: +, -, *, /, % ? 
    
Arithmetic operators

Arithmetic operators are used for performing mathematical calculations in JavaScript:

Operator: +
Name: Addition
Purpose: Adds two numbers together.
Example: 6 + 9


Operator: -
Name: Subtraction
Purpose: Subtracts the right number from the left.
Example: 20 - 15


Operator: *
Name: Multiplication
Purpose: Multiplies two numbers together.
Example: 3 * 7


Operator: /
Name: Division
Purpose: Divides the left number by the right.
Example: 10 / 5


Operator: %
Name: Remainder (sometimes called modulo)
Purpose: Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number.
Example: 8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over)


Operator: **
Name: Exponent
Purpose: Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.
Example: 5 ** 2 (returns 25, which is the same as 5 * 5). */

/* -------------------------------------------------------------------------------------------------------------------------- */
/*                             9. Shorthand: +=, -=, *=, /= ? 

/* Add some value to the existing value */
price1 = price1 + 10;
console.log(price1);
/* Output:
41 */

/* Addition to the same variable shorthand
+= Means adding some value to the existing value */
price1 += 10;
console.log(price1);
/* Output:
51 */

price2 = price2 - 5;
/* Shorthand -= */

/* -= Means deducting some values from current value of the variable
price2 -= 5; */

/* *= */
price1 *= 5;
console.log(price1);
/* Output:
255 */

/* /= */
price1 /= 5;
console.log(price1);
/* Output:
51 */


var age = 15;
age = age +1;
/* ++ Means adding 1 to the existing value */
age ++;
    

var profit = 100;
profit = profit - 1;
/* -- Means you are deducting 1 from the existing value 
profit --; */


/* How to write shorthand mathematical operations? */

/* Full Form */
var price1 = price1 + 10;
var price1 = price1 - 10;
var price1 = price1 * 10;
var price1 = price1 / 10;

/* Shorthand */
var price1 += 10;
var price1 -= 10;
var price1 *= 10;
var price1 /= 10;

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                             10. Shorthand: ++, -- ? 

In JavaScript, ++ and -- are unary operators used for incrementing and decrementing variables by 1, respectively.

++ is the increment operator, and it adds 1 to the value of a variable. It can be used in two ways:

1. Prefix increment: ++variable increases the value of the variable by 1 and then returns the updated value.
2. Postfix increment: variable++ returns the current value of the variable and then increases it by 1.
For example: */
var price = 5;
console.log(++ price); // Outputs: 6
console.log(price ++); // Outputs: 6
console.log(price);   // Outputs: 7


/* -- is the decrement operator, and it subtracts 1 from the value of a variable. Similar to ++, it can be used in both prefix and postfix forms.
For example: */
var price = 10;
console.log(--price); // Outputs: 9
console.log(price--); // Outputs: 9
console.log(price);   // Outputs: 8

/* It's important to note that when used in more complex expressions, the position of ++ or -- (prefix or postfix) can affect the behavior of the expression due to differences in when the increment or decrement occurs in relation to the evaluation of the expression. */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                                   11. Purpose of parseInt and parseFloat? 


ParseInt and ParseFloat:

parseInt() and parseFloat() are functions in JavaScript used for converting strings to numbers.

ParseInt:
This function takes a string as input and parses it to an integer. It stops parsing when it encounters a character that is not a valid part of a number. It also allows you to specify the base of the numeral system (e.g., binary, octal, decimal, hexadecimal). If no base is provided, it assumes base 10.

ParseFloat:
This function parses a string argument and returns a floating point number. Unlike parseInt(), it parses the string until it encounters a character that is not a valid part of a floating-point number, such as a letter or a symbol other than period (.) or exponent notation (e or E).These functions are commonly used when dealing with user input, where data may be entered as strings and need to be converted to numbers for mathematical operations or other processing.*/

var gpa = '3.41';
var gpaNumber = parseInt(gpa);
console.log(gpaNumber);
/* Output:</h5>
3 (Number) */

var gpa = '3.41';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);
/* Output:</h5>
3.41 (Number) */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          12. Purpose of toFixed? 


Purpose of toFixed:
The toFixed() method in JavaScript is used to format a number with a fixed number of digits after the decimal point. It converts a number into a string, rounding the number to the specified number of decimal places and padding it with zeros if necessary to meet that length.
It's important to note that toFixed() returns a string representation of the number, not a number itself. Also, be cautious when using it with large numbers, as it may not provide accurate results due to floating-point precision issues. */


var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.30000000000000004 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);
/* Output:
0.30 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(4);
console.log(sum);
/* Output:
0.3000 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);
/* Output:
0.3 (String)*/

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);
/* Output:
0.3 (Number)*/