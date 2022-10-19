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
        diagnosis = "Underweight";
    } else if (bmi <= 24.9) {
        diagnosis = "Healthy Weight";
    } else if (bmi < 29.9) {
        diagnosis = "Overweight";
    } else if (bmi < 34.9) {
        diagnosis = "Obesity level 1";
    } else if (bmi < 39.9) {
        diagnosis = "Obesity level 2";
    } else {
        diagnosis = "Obesity level 3";
    }

    res.innerHTML = `<p class="result">Your BMI is: <b>${bmi.toFixed(2)}</b></p>
    <p class="result">Diagnosis: <b>${diagnosis}</b></p>`;

    console.log("calc");
}

function reset() {
    load();
    console.log("clear");
}