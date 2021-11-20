
/// Chapter 35-38 ///

///Q1////

function my_function(){
var date = new Date ()
return date

}

document.write(date)

 //Q2///
function name(){
    var firstName = +prompt("enter your firstname")
    var lastName = +prompt("enter your lastname")
    var add = (firstName + lastName)

}
alert(add)

//Q3/////

function foo( num1 , num2 ){
var num1 = +prompt("ENTE NUM 1")
 var num2 = +prompt("ENTE NUM 2")

 add( num1 , num2 , "ADDITIOn"  )
 return num1+num2

}

alert(num1 + num2)

 
    ////Q5////
function sq(n){
    var res=n;
    for(i=1; i<n; i++)
    res+=n;
    return res;
 }

///Q6//

var userInput;
var num;
var fact;

function myFactor(num) {

    var i = 1;
    fact = num * i;
    for (i; i <= num; i++) {
        fact = fact * i;

        return fact;
    }

    
}
userInput = prompt("Enter Value:", "");
num = parseInt(userInput);
var result = myFactor(num);

alert(result);










