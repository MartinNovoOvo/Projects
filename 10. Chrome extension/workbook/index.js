// let boxEl = document.getElementById("box-el")

// boxEl.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

//TEMPLATE STRINGS/LITERALS

const recipient = "James"
const sender = "Martin"

// const email = "Hey " + recipient + "! How is it going? Cheers Mart"
const email = 
    `Hey ${recipient}!
    How is it going?
    Cheers ${sender}
    `

console.log(email)