// console.log("ARRAY")
// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's he code for my project",
//     "I've just relaunched my portfolio"
// ]

// let newMessage = "Same here!"
// featuredPosts.push(newMessage)
// console.log(featuredPosts.length)
// console.log(featuredPosts)

// featuredPosts.pop(newMessage)
// console.log(featuredPosts.length)
// console.log(featuredPosts)


// console.log("----------------------")

// let mySelf = ["Martin", 30, true]

// let cards = [7, 4]

// cards.push(6)
// console.log(cards)

// FOR LOOP
// console.log("for loop")

// for (let count = 1; count< 11; count += 1 ) {
//     console.log(count)
// }

// for( let count = 10; count<= 100; count += 10) {
//     console.log(count)
// }
// FOR LOOP AND ARRAY
// console.log("for loop and array")

// let message = [
//     "Hey, how's it going",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "Yes!"

// ]
// // DRY - Don't repeat yourself
// // console.log(message[0])
// // console.log(message[1])
// // console.log(message[2])
// // console.log(message[3])

// //Instead

// for (let i = 0; i < message.length; i += 1) {
//     console.log(message[i])
// }
//  let cards = [1, 3, 9, 5, 8]

//  for (let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i])
//  }
// RANDOM
// console.log("RANDOM")

// let x = Math.random()
// console.log(x)
// console.log("---------------")

// let y = Math.random() * 10
// console.log(y)
// let flooredNumberY = Math.floor(y)
// console.log(flooredNumberY)
// console.log("---------------")

// let q = Math.random() * 100
// console.log(q)
// let flooredNumberQ = Math.floor(q)
// console.log(flooredNumberQ)
// console.log("---------------")

// function rollDice() {
//     let a = Math.floor(Math.random() * 6) + 1
//     return a
// }
// console.log(rollDice())
// console.log("---------------")
// console.log("Logical and operators")

// let hasCompletedCourse = true
// let giveCertificate = false

// if (hasCompletedCourse === true && giveCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate...")

//     // if (hasCompletedCourse === true && giveCertificate === true) {
//     //     return "Generating certificate..."
//     // }
// }
// // console.log(generateCertificate())
// console.log("---------------")

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolutions()
}

function showSolutions() {
    console.log("Showing the solution...")
}