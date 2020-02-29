function inputArray(length) {
    let tenInt = [];
    for (let i = 0; i < length; i++) {
        tenInt[i] = prompt("Nhap vao phan tu thu " + (i + 1) + ":");
    }
    return tenInt;
}

function isInt(n) {
    return n % 1 === 0;
}





