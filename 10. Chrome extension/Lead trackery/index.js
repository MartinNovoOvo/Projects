let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

 inputBtn.addEventListener("click", function() {
   myLeads.push(document.getElementById("input-el").value);
   console.log(myLeads);
 })