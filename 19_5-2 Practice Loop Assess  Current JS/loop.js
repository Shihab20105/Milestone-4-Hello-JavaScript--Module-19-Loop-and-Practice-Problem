/*                          Practice Loop And Assess Your Current JS Level


1. Display "I'm not feeling it today" 39 times? 
2. Display numbers between 58 to 98? 
3. Show all even numbers from 412 to 456?
4. Show all odd numbers 581 to 623?
5. Difference between while loop and for loop?
6. Declare an array for all the topics that you have learned last few days display them as output?
7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop?
8. Run a loop from 30 to 86. This loop will stop if the values get higher than 44? 
9. Write the price of the books that you have. Display the prices if the prices is lower than 200*/



/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          1. Display "I'm not feeling it today" 39 times? */ 

var count = 0;
while(count < 39) {
    console.log('I am not feeling it today');
    count++;
}
/* Output:
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
I am not feeling it today
*/
var count = 0;
while(count <= 39) {
    console.log(count);
    console.log('I am not feeling it today');
    count++;
}
/* Output:
0
I am not feeling it today
1
I am not feeling it today
2
I am not feeling it today
3
I am not feeling it today
4
I am not feeling it today
5
I am not feeling it today
6
I am not feeling it today
7
I am not feeling it today
8
I am not feeling it today
9
I am not feeling it today
10
I am not feeling it today
11
I am not feeling it today
12
I am not feeling it today
13
I am not feeling it today
14
I am not feeling it today
15
I am not feeling it today
16
I am not feeling it today
17
I am not feeling it today
18
I am not feeling it today
19
I am not feeling it today
20
I am not feeling it today
21
I am not feeling it today
22
I am not feeling it today
23
I am not feeling it today
24
I am not feeling it today
25
I am not feeling it today
26
I am not feeling it today
27
I am not feeling it today
28
I am not feeling it today
29
I am not feeling it today
30
I am not feeling it today
31
I am not feeling it today
32
I am not feeling it today
33
I am not feeling it today
34
I am not feeling it today
35
I am not feeling it today
36
I am not feeling it today
37
I am not feeling it today
38
I am not feeling it today
39
I am not feeling it today
*/

/* -------------------------------------------------------------------------------------------------------------------------- */
/*                          2. Display numbers between 58 to 98? */

var count = 58;
while(count <= 98) {
    console.log(count);
    count++;
}
/* Output:
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                      3. Show all even numbers from 412 to 456? */


var number = 412;
while (number <= 456) {
    console.log(number);
    number = number + 2;
}
/* Output:
412
414
416
418
420
422
424
426
428
430
432
434
436
438
440
442
444
446
448
450
452
454
456 */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          4. Show all odd numbers 581 to 623? */

var number = 581;
while (number <= 623) {
    console.log(number);
    number = number + 2;
}
/* Output:
581
583
585
587
589
591
593
595
597
599
601
603
605
607
609
611
613
615
617
619
621
623 */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          5. Difference between while loop and for loop? 

Here's a simple explanation of the difference between a while loop and a for loop:

while Loop:
Usage: Repeats a block of code as long as a specified condition is true.
Structure:
Initialization happens before the loop.
The condition is checked at the beginning of each iteration.
The update is usually done inside the loop body.

Example: */
var number = 1;  // Initialization
while (number <= 5) {  // Condition
    console.log(number);  // Code to execute
    number++;  // Update
} 

/* for Loop:
Usage: Repeats a block of code a specific number of times, combining initialization, condition, and update in one line.
Structure:
Initialization, condition, and update are all handled in the loop declaration.
Example: */
for (var number = 1; number <= 5; number++) {  // Initialization, Condition, Update
    console.log(number);  // Code to execute
}

/* Key Differences:
while Loop: Good for loops where the number of iterations isn't known beforehand.
for Loop: Good for loops with a known number of iterations and where initialization, condition, and update are straightforward.
Both loops achieve similar outcomes but are suited to different situations based on the clarity and structure of the code. 
*/

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          6. Declare an array for all the topics that you have learned last few days display them as output? */


var topics = ['While Loop', 'For Loop', 'Subtraction', 'If', 'Else', 'Debug', 'Odd Numbers', 'Even Numbers', 'Break', 'Continue', 'Shorthand'];
console.log(topics);
/* Output:
[
  'While Loop',  'For Loop',
  'Subtraction', 'If',
  'Else',        'Debug',
  'Odd Numbers', 'Even Numbers',
  'Break',       'Continue',
  'Shorthand'
] */

var topics = ['While Loop', 'For Loop', 'Subtraction', 'If', 'Else', 'Debug', 'Odd Numbers', 'Even Numbers', 'Break', 'Continue', 'Shorthand'];
console.log('Topics learned in the last few days');
for (var i = 0; i < topics.length; i ++){
    console.log((i + 1) + '. ' + topics[i]);
}
/* Output:
Topics learned in the last few days
1.While Loop
2.For Loop
3.Subtraction
4.If
5.Else
6.Debug
7.Odd Numbers
8.Even Numbers
9.Break
10.Continue
11.Shorthand */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop? */

var mobilePhones = ['Samsung', 'iPhone', 'Nokia', 'Google Pixel', 'Sony Xperia', 'Motorola', 'Honor', 'Xiaomi'];
var i = 0;
console.log('List of Mobile Phones');
while(i < mobilePhones.length){
    console.log((i + 1) + '. ' + mobilePhones[i]);
    i++;
}
/* Output:
List of Mobile Phones
1.Samsung
2.iPhone
3.Nokia
4.Google Pixel
5.Sony Xperia
6.Motorola
7.Honor
8.Xiaomi */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          8. Run a loop from 30 to 86. This loop will stop if the values get higher than 44? */

for(var i = 30; i <= 86; i++){
    if(i > 44){
        break;
    }
    console.log(i);
}
/* Output:
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44 */

/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          9. Write the price of the books that you have. Display the prices if the prices is lower than 200 */


var booksPrices = ['Bangla-100', 'Arabic-110', 'English-120', 'Spanish-115', 'French-130', 'American-150', 'African-210', 'Malaysian-220', 'Turkish-240'];
for (var i = 0; i < booksPrices.length; i++) {
    var book = booksPrices[i];
    var price = parseInt(book.split('-')[1]);
    if (price < 200) {
        console.log(book);
    }
}
/* Output:
Bangla-100
Arabic-110
English-120
Spanish-115
French-130
American-150 */



