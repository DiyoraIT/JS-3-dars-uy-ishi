document.addEventListener('DOMContentLoaded', function () {

    let counterDisplay = document.getElementById('counter-display');
    let increment = document.getElementById('increment');
    let decrement = document.getElementById('decrement');

    let counterValue = 0;
    counterDisplay.textContent = counterValue;

    increment.addEventListener('click', function () {
        counterValue++;
        counterDisplay.textContent = counterValue;
    });

    decrement.addEventListener('click', function () {
        if (counterValue > 0) {
            counterValue--;
            counterDisplay.textContent = counterValue;
        } else {
            alert("sizning soningiz 0 dan pas bola olmaydi");
        }
    });
});
