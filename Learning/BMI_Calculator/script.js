function load() {
    start = document.querySelector("input#weight").focus();
    document.querySelector("input#weight").value = "50";
    document.querySelector("input#height").value = "175";
    res.innerHTML = ``;
}

function calculate() {
    let weight = Number(document.querySelector("input#weight").value);
    let height = Number(document.querySelector("input#height").value);
    height = height / 100;
    let bmi = weight / height ** 2;
    let diagnosis = "";
    let res = document.querySelector("div#res");

    if (bmi < 18.5) {
        diagnosis = "1";
    } else if (bmi <= 24.9) {
        diagnosis = "2";
    } else if (bmi < 29.9) {
        diagnosis = "3";
    } else if (bmi < 34.9) {
        diagnosis = "4";
    } else if (bmi < 39.9) {
        diagnosis = "5";
    } else {
        diagnosis = "6";
    }

    res.innerHTML = `<p class="result">Your BMI is: <b>${bmi.toFixed(2)}</b></p>
    <p class="result">Diagnosis: <b>${diagnosis}</b></p>`;

    console.log("calc");
}

function reset() {
    load();
    console.log("clear");
}