// var a = 5;
// var b = 10;
// var c = "i am a";


// a = a + 1;
// b = b + 5;
// c = c + " String";

// console.log(a)
// console.log(b)
// console.log(c)
// console.log("STOP STOP")

// var myVar = 87;
// myVar = myVar + 1; // increment by 1
// myVar++; // faster increment by 1
// console.log(myVar) // score is 89, because we have 2 increments

// var myVar = 11;
// myVar = myVar - 1;
// myVar--;
// console.log(myVar)

// var remainder;
// remainder = 11 % 5;
// console.log(remainder)
// console.log("STOP STOP")
// var a = 5;
// a += 5;
// console.log(a)
// console.log("STOP STOP")
// var myStr1 = "literal 'quote' test";
// var myStr2 = 'literal "quote" test';
// var myStr3 = "literal \"quote\\\" test";
// console.log(myStr1)
// console.log(myStr2)
// console.log(myStr3)
// console.log("STOP STOP")

// myStr = "test backspace \b\nTest new line \rTest";
// console.log(myStr)
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr)
// console.log("---------")
// var myName = "Martin";
// var myStr = "My name is " + myName + ", and i am well!";
// console.log(myStr)
// console.log("-----------------")

// var firstName = "Marcin"
// var sureName = " Martin"
// firstName += sureName
// console.log(firstName)
// console.log("-----------------")
// var firstNameLength = 0;
// var firstName = "Ada";
// firstName = firstName.length
// console.log(firstName.length)
// console.log("-----------------")
// var firstLetterOfName = "";
// var firstName = "Martin";
// firstLetterOfName = firstName[0];
// console.log(firstLetterOfName)
// var firstName = "Martin";
// lastLetterOfName = firstName[firstName.length - 1];
// console.log(lastLetterOfName)
// console.log("-----------------")
// function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
//     return result;
// }
// console.log(worldBlanks("dog", "big", "ran", "quickly"))
// console.log(worldBlanks("bike", "pink", "ran", "slowly"))

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
// var myData = myArray[3][0][2];
// console.log(myData)
// var ourArray = ["Simpson", "J", "cat"];
// ourArray.push("happy", "joy");
// console.log(ourArray)

// var ourArray = ["Simpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// console.log(removedFromOurArray)
// var ourArray = ["Simpson", "J", "cat"];
// ourArray.shift(); // removes "Simpson"
// ourArray.unshift("Happy");
// console.log(ourArray)

// function ourReusableFunction() {
//     console.log("Hello World");
// }
// ourReusableFunction();

// function ourReusableFunction() {
//     console.log("Hello World");
// }
// return ourReusableFunction();

// function ourFunctionWithArgs(a, b) {
//     console.log(a-b);
// }
// ourFunctionWithArgs(10,5);

// var outerWear = "Shirt";
// function myOutfit() {
//     var outerWear = "pants";
//     return outerWear
// }
// console.log(myOutfit())

// function minusSeven(num) {
//     return num -7;
// }
// console.log(minusSeven(10));

// function timesFive(num) {
//     return num *5;
// }
// console.log(timesFive(5));
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);