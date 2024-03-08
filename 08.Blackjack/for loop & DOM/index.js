let sentence  = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}