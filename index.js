let count = 0 
function increment(){
    count++
    document.getElementById("count-num").innerText = count
}

function save(){
    document.getElementById("save-el").textContent += count + " - "
    document.getElementById("count-num").innerText = 0
    count = 0
}