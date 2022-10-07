/** section 👉 control statement -
 * *
 * *👉 If .. Else statement */
// The if staement executes a stement if a specified condition is truthly.
// If the condition is falsy, another statement can be executed.

//if raining = raincoat
//else no raincoat

/*var tomr = 'rain';

if(tomr == 'rain'){
    console.log('take a raincoat');
}else{
    console.log('No need to take a raincoat');
} */

//👉Challenging Time
//Write a program that works out wheather if a given year is a leap year or not?
// A normal year has 365 days, leap years have 365, with an extra day day in february.

var year = 2024;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 == 0){
            console.log("The year " + year + " is a leap year");
        } else{
            console.log("The year " + year + " is not a leap year");
        }
        }else{
            console.log("the year " + year + " is a leap year");
        
    }
}else{
    console.log("The year " + year + " is not a leap year");
}