for(var i = 1; i <= 20; i++){
    console.log(i);
}
/* Output:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20 */

for(var i = 1; i <= 20; i++){
    console.log(i);
    if(i > 10){
        break;
    }
}
/* Output:
1
2
3
4
5
6
7
8
9
10
11 */

var roastGiven = 0;
while(roastGiven < 10){
    console.log('Give the Roast I got the money');
    roastGiven++;
}
/* Output:
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money */

var roastGiven = 0;
while(roastGiven < 10){
    console.log('Give the Roast I got the money');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}
/* Output:
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money
Give the Roast I got the money */

var items = ['Bottle', 'Mouse', 'Sunglass', 'Pen', 'Mouse', 'Notebook'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}
/* Output:
Bottle
Mouse
Sunglass
Pen
Mouse
Notebook */

var items = ['Bottle', 'Mouse', 'Sunglass', 'Pen', 'Notebook'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'Pen'){
        break;
    }
    console.log(item);
}
/* Output:
Bottle
Mouse
Sunglass */

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}
/* Output:
45
87
89
56
32
51
25 */