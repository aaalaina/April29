//1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };

const arrowMyFunction = (num1, num2) => {
    return num1 + num2
}
console.log(arrowMyFunction(7,8));
//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//    return money + 100;
// };

 const arrowAdd100 = (money) => money + 100;
 console.log(arrowAdd100(50));



//3 Create an arrow function that takes TWO arguments, a string and a single letter.  
//The function will count the number of times the specified letter occurs in the string. **Not case sensitive
//Examples
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

//Time to google how to use charat......

const countLetters = (string, letter) => {
    let letterC = 0;
    //Trying to make it not case sensitive(?)
    let newstring = string.toLowerCase();
    for(a = 0; a < newstring.length; a++){
        // if(newstring.charAt(a)== letter){
        //     letterC += 1;
        // }
        //trying if-else statement with ternary operator
        
        newstring.charAt(a) == letter ? letterC +=1 : "Something's wrong with code";
    }
    console.log(`${string}, ${letterC}`);
}


countLetters('She sells seashells by the seashore', 's');