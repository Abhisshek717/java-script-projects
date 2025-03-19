const display = document.getElementById("display"); // display element
const inp = document.getElementById("in"); // input element
const button = document.getElementById("btn");

function check(number) {
    if (number.length === 0) return false; // Empty input is invalid
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== '0' && number[i] !== '1') {
            return false;
        }
    }
    return true;
}

function convert(bin) {
    let decimal = 0;
    let len = bin.length;

    for (let i = 0; i < len; i++) {
        let bit = parseInt(bin[i]); // Get each bit (0 or 1)
        let power = Math.pow(2, len - 1 - i); // Correct power calculation
        decimal += bit * power; // Sum up contributions
    }

    return decimal;
}


inp.addEventListener("input", () => {
    let bin = inp.value;
    if (check(bin) || bin === '') {
        inp.style.border = "1px solid black";
    } else {
        inp.style.border = "3px solid red";
    }
});

button.addEventListener("click", () => {
    let bin = inp.value;
    if (check(bin)) {
        display.textContent = convert(bin);
    } else {
        display.textContent = "Invalid input!";
    }
});
