function Ex1() {
    let A = inputArray(10);
    let display = '';
    let greaterThan10 = '';
    let count10 = 0;
    for (let i = 0; i < A.length; i++) {
        display += A[i] + " ";
        if (isInt(A[i]) && A[i] >= 10) {
            count10++;
            greaterThan10 += A[i] + " ";
        }
    }
    document.getElementById('displayArray').innerHTML =
        "Mang nhap vao : [" + display + "]";
    document.getElementById('displayArray1').innerHTML =
        "Trong day co " + count10 + " so nguyen lon hon hoac bang 10 trong day do la : " + greaterThan10;
}

function Ex2() {
    let arr = inputArray(10);
    let arrMax = 0;
    let count;
    let posMax = '';
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
        if (arr[i] >= arrMax) arrMax = arr[i];
        sumArr += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arrMax) {
            posMax += i + 1 + " ";
        }
    }
    document.getElementById('displayEx2').innerHTML = "Gia tri lon nhat trong mang la : "
        + arrMax + "<br>O vi tri thu :" + posMax;
    document.getElementById('displayEx3').innerHTML = "Gia tri trung binh cua mang la : "
        + sumArr / arr.length;
}

function Ex4() {
    let arr = inputArray(10);
    let display = '';
    let displayRe = '';
    for (let i = 0; i < arr.length; i++) {
        display += arr[i] + " ";
    }
    let reverseArr = arr.reverse();
    for (let i = 0; i < reverseArr.length; i++) {
        displayRe += reverseArr[i] + " ";
    }
    document.getElementById('displayArray4').innerHTML = "Mang nhap vao : [" + display + "]";
    document.getElementById('displayReArray').innerHTML = "Dao nguoc mang : [" + displayRe + "]";
}

function Ex5() {
    let arr = inputArray(10);
    let display = '';
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        display += arr[i] + " ";
        if (parseFloat(arr[i]) < 0 && isInt(arr[i])) count++;
    }
    document.getElementById('displayArray5').innerHTML = "Mang nhap vao : [" + display + "]";
    document.getElementById('display<0').innerHTML = "So nguyen am trong chuoi la : " + count;
}

function Ex6() {
    let A = inputArray(10);
    let Vinput = prompt("Nhap 1 so tu ban phim");
    let resultV;
    let display = '';
    let displayVarr = '';
    let splice;
    let Varray = A;
    for (let i = 0; i < A.length; i++) {
        display += A[i] + " ";
        if (Vinput === A[i]) {
            resultV = true;
            Varray.splice(i, 1);
        }
    }

    for (let i = 0; i < Varray.length; i++) {
        displayVarr += Varray[i] + " ";
    }
    console.log(A);
    console.log(Varray);
    document.getElementById('displayArray6').innerHTML =
        "Mang nhap vao : [" + display + "].Phan tu V nhap vao la : " + Vinput;
    if (resultV) {
        document.getElementById('resultV').innerHTML = Vinput + ' is in the array';
        document.getElementById('resultEx7').innerHTML = "Ham duoc viet lai :[" + displayVarr + "]";
    } else {
        document.getElementById('resultV').innerHTML = Vinput + ' is not in the array';
    }
}

function Ex8() {
    let arr = inputArray(10);
    document.getElementById('displayArray8').innerHTML = "Mang nhap vao :" + arr;
    arr.sort(function (a, b) {
        return b - a
    });
    document.getElementById('displaySortArray').innerHTML = "Mang sau khi sap xep : " + arr;

}

function Ex9() {
    let arrA = inputArray(10);
    let arrB = inputArray(10);
    let j;
    // let stringArrA=arrA.join(",");
    // let stringArrB=arrB.join(",");
    // let arrC=arrB+''+arrA;
    let arrC=[];
    for (i=0;i<arrB.length;i++){
        arrC[i]=arrB[i];
    }
    for(i=0,j=arrB.length;i<arrA.length;i++,j++){
        arrC[j]=arrA[i];
    }
    console.log(arrA);
    console.log(arrC);
    document.getElementById('displayArrA').innerHTML = "Mang A : [" + arrA+"]";
    document.getElementById('displayArrB').innerHTML = "Mang B : [" + arrB+"]";
    document.getElementById('displayArrC').innerHTML = "Mang C : [" + arrC+"]";
}

