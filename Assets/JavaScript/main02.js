

const valor01 = document.querySelector('#numero01');
const valor02 = document.querySelector('#numero02');
const valor03 = document.querySelector('#numero03');

const suma = () => {
    const sum = Number(valor01.value) + Number(valor02.value) + Number(valor03.value);
    if (sum == 1) {
        document.querySelector(".texto").innerHTML = "Llevas " + sum + " sticker.";
    } else if (sum > 10) {
        document.querySelector(".texto").innerHTML = "Llevas demasiados Stickers!!!";
    } else if (sum == 0) {
        document.querySelector(".texto").innerHTML = "";
    }
    else {
        document.querySelector(".texto").innerHTML = 'Llevas ' + sum + ' stickers.';
    }};

valor01.addEventListener('input', suma);
valor02.addEventListener('input', suma);
valor03.addEventListener('input', suma);