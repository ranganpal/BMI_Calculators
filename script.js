console.log("BMI Calculator");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (height < 0 || isNaN(height)) {
        result.innerText = "Please give a valid height";
    }
    else if (weight < 0 || isNaN(weight)) {
        result.innerText = "Please give a valid weight";
    }
    else {
        let state;
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            state = "Under Weight";
        }
        else if (bmi > 24.9) {
            state = "Over Weight";
        }
        else {
            state = "Normal Weight"
        }

        result.innerText = `BMI = ${bmi} (${state})`;
    }
})