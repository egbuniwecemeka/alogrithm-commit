/* 
= Assignment operator
=== and !== comparison operators
=== comparison operator EQUAL TO 
> greater than
< less than 
<= less than or equal to 
>= greater than or equal
*/

/* CONDITIONALS
if (condition){
    'Set of code to run if condition is true'
NB: When a variable is called, it refers to its value.
Otherwise else condition is displayed.
}*/
//QUESTION 1
var a = 115
var b = "String"
let i = a || b
if (i === Number(a)) {
    var convertFahrToCelsius = ((a || b) - 32) * 5 / 9
    console.log(convertFahrToCelsius.toFixed(4))
} else {
    console.log(i + ' ' + 'is not a valid number but a/an' + " " + typeof(i.valueOf(a | b)))
}



function checkYuGiOh(n) {
    if (n >= 1) {
        var prime_num1 = [],
            prime_num2 = [];
        for (var i = 0; i <= n; i++) {
            prime_num2.push(true);
        }
        for (var i = 2; i <= n; i++) {
            if (prime_num2[i]) {
                prime_num1.push(i);
                for (var j = 1; i * j <= n; j++) {
                    prime_num2[i * j] = false;
                }
                console.log(`${n} is a prime number`);
            }
        }
        return prime_num1;
    } else {
        console.log(`${n} is a not prime number`)
    }
}
console.log(checkYuGiOh(40))