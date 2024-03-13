// // OBJECTS and FUNCTIONS
// const me = {
//     name: "Martin",
//     age: 38,
//     country: "Poland"
// }

// function logData1() {
//     return me.name + " is " + me.age + " years old and lives in " + me.country
// }

// console.log(logData1())
// // OR
// function logData2() {
//     console.log(me.name + " is " + me.age + " years old and lives in " + me.country)
// }

// logData2()

// IF ELSE

// let age = 17

// function passenger() {
//     if (age < 6)
//         return " Ticket is free"
//     else if (age < 18) 
//         return "Child discount"
//     else if (age < 27 )
//         return "Student discount"
//     else if (age < 67)
//         return "Full price"
//     else (age > 66)
//         return "Senior Citizen discount"
// }
// console.log(passenger())

    // if (age < 6) {
    //     console.log(" Ticket is free") 
    // } else if (age < 18) {
    //     console.log("Child discount") 
    // } else if (age < 27 ) {
    //     console.log("Student discount") 
    // } else if (age < 67) {
    //     console.log("Full price") 
    // } else  {
    //     console.log("Senior Citizen discount") 
    // }
// // LOOPS AND ARRAYS
// console.log("The 5 largest countries in the world:")
//  let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

//  for  ( let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
//  }

// // push, pop, unshift, shift
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// //Logical operators

// let dayOfMonth = 14
// let weekDay = "Friday"
//  if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("Yes")
//     } else {
//         console.log("No")
//     }

// // Random

// let hands = ["rock", "paper", "scissor"]

// function randomItem() {
//     console.log(hands[Math.floor(Math.random() * 3)])
// }
// randomItem()

// SORTING
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for ( i = 0; i < fruit.length; i++)
    if (fruit[i] === "🍎") {
        appleShelf.textContent += "🍎"
    } else {
        orangeShelf.textContent += "🍊"
    }
}
sortFruit()