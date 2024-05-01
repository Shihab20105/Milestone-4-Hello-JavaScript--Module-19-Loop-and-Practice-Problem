/*                      Practice Problem 4
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */


var firstSideOfTriangle = 9;
var secondSideOfTriangle = 8;
var thirdSideOfTriangle = 9;

if ((firstSideOfTriangle == secondSideOfTriangle) || (firstSideOfTriangle == thirdSideOfTriangle) || (secondSideOfTriangle == thirdSideOfTriangle)) {
    console.log('The Triangle is Isosceles');
}
else { 
    console.log('The Triangle is not Isosceles');
}
/* Output: 
The Triangle is Isosceles */


var firstSideOfTriangle = 9;
var secondSideOfTriangle = 8;
var thirdSideOfTriangle = 9;

if (firstSideOfTriangle == secondSideOfTriangle || firstSideOfTriangle == thirdSideOfTriangle || secondSideOfTriangle == thirdSideOfTriangle) {
    console.log('The Triangle is Isosceles');
} 
else { 
    console.log('The Triangle is not Isosceles');
}
/* Output: 
The Triangle is Isosceles */


var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
} 
else{
    console.log('not isosceles');
}
/* Output:
isosceles */

