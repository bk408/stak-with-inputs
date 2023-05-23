let data = [];
let currentSize = data.length;
let max = 5;

function push() {
    let newVal = document.getElementById('newEl').value;
    if (currentSize >= max) {
        alert("stack is full you can not add" + newVal)
    } else {
        data[currentSize] = newVal
        currentSize += 1;
        document.getElementById('newEl').value = ""
        console.log("value added")
    }

}


function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        alert("stack is already empty")
    }
}


function display() {
    for (let i = 0; i <= currentSize - 1; i++) {
        console.log("stack element no", i, "and value is", data[i])
    }
}