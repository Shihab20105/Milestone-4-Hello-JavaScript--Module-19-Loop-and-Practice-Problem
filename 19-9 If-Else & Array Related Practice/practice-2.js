/*                                              Practice Problem 2 


You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score 56 and John's total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above d grade
39 or less => F grade
Write a program to find your and your friends grades using if-else. 
*/


var totalScoreMyself = 85;
var totalScoreTom = 66;
var totalScoreJane = 95;
var totalScorePeter = 56;
var totalScoreJohn = 40;


/*                                              Calculating My Grade */

if(totalScoreMyself >= 80){
        console.log('I have got A grade');
} 
else if (totalScoreMyself >= 60){
        console.log('I have got B grade');
}
else if (totalScoreMyself >= 50){
        console.log('I have got C grade');
}
else if (totalScoreMyself >= 40){
        console.log('I have got D grade');
}
else {
        console.log('I have got F grade');
}
/* Output: 
I have got A grade */


/*                                              Calculating Tom's grade */

if (totalScoreTom >= 80){
        console.log('Tom has got A grade');
}
else if (totalScoreTom >= 60){
        console.log('Tom has got B grade');
}
else if (totalScoreTom >= 50){
        console.log('Tom has got C grade');
}
else if (totalScoreTom >= 40){
        console.log('Tom has got D grade');
}
else {
        console.log('Tom has got F grade');
}
/* Output: 
Tom has got B grade */


/*                                              Calculating Jane's grade */

if (totalScoreJane >= 80){
        console.log('Jane has got A grade');
}
else if (totalScoreJane >= 60){
        console.log('Jane has got B grade');
}
else if (totalScoreJane >= 50){
        console.log('Jane has got C grade');
}
else if (totalScoreJane >= 40){
        console.log('Jane has got D grade');
}
else {
        console.log('Jane has got F grade');
}
/* Output: 
Jane has got A grade */


/*                                              Calculating Peter's grade */

if (totalScorePeter >= 80){
        console.log('Peter has got A grade');
}
else if (totalScorePeter >= 60){
        console.log('Peter has got B grade');
}
else if (totalScorePeter >= 50){
        console.log('Peter has got C grade');
}
else if (totalScorePeter >= 40){
        console.log('Peter has got D garde');
}
else {
        console.log('Peter has got F grade');
}
/* Output: 
Peter has got C grade */


/*                                              Calculating John's grade */

if (totalScoreJohn >= 80){
        console.log('John has got A grade');
}
else if (totalScoreJohn >= 60){
        console.log('John has got B grade');
}
else if (totalScoreJohn >= 50){
        console.log('John has got C grade');
}
else if (totalScoreJohn >= 40){
        console.log('John has got D grade');
}
else {
        console.log('John has got F grade');
}
/* Output: 
John has got D grade */