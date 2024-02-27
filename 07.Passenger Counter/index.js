let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    let countStr = count + " - "
    console.log(count);
    saveEL.innerText += countStr
    console.log(count)
}
