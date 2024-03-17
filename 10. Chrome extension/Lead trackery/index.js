let myLeads = `[]`
myLeads = JSON.parse(myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myLeads")

 inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   renderLeads()
   inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
 })

function renderLeads() {
    let listItems = ""
    for (let i = 0; i<myLeads.length; i++) {
      // listItems += "<li><a href='" + myLeads[i] + "' target= 'blank'>" + myLeads[i] + "</a></li>"
      listItems += 
        `<li>
            <a target='blank' href ='${myLeads[i]}'> 
              ${myLeads[i]}
            </a>
        </li>
        `
    }
    // }
    ulEl.innerHTML = listItems
}
