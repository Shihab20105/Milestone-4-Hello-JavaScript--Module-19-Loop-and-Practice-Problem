/*                                  Practice Problem 2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04 
*/

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks =99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
/* Output:
355.2 */

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks =99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
console.log(average);
/* Output:
355.2
71.03999999999999 */

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks =99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);
/* Output:
355.2
71.04 */

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks =99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var average = average.toFixed(2);
console.log(average);
/* Output:
355.2
71.04 */