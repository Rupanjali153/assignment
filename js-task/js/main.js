let array = [];
function updateDisplay() {
    let writeStream = document.getElementById("array");
    writeStream.innerText = array.join(', ');
}

document.getElementById("push").addEventListener("click", function() {
    let input = document.querySelector("input[type='text']").value;
    if (input.trim() !== '') {
        array.push(input);
        updateDisplay();
    }
});

document.getElementById("pop").addEventListener("click", function() {
    if (array.length > 0) {
        array.pop();
        updateDisplay();
    }
});

document.getElementById("shift").addEventListener("click", function() {
    if (array.length > 0) {
        array.shift();
        updateDisplay();
    }
});

document.getElementById("unshift").addEventListener("click", function() {
    let input = document.querySelector("input[type='text']").value;
    if (input.trim() !== '') {
        array.unshift(input);
        updateDisplay();
    }
});

updateDisplay();