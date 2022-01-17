const   buttonDefault = document.querySelector('.button-default'),
        buttonHex =     document.querySelector('.button-hex'),
        buttonRGB =     document.querySelector('.button-rgb'),
        defaultColor =  document.querySelector('.default-color'),
        hexColor =      document.querySelector('.hex-color'),
        rgbColor =      document.querySelector('.rgb-color');

const defaultColorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gray',
                            'white', 'lime', 'navy', 'aqua'];
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let localCurrentDefaultColor = localStorage.getItem('defaultColor');
let localCurrentHexColor = localStorage.getItem('hexColor');
let localCurrentRgbColor =  localStorage.getItem('rgbColor');

function getRandomHex() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[Math.floor(Math.random() * 15)];
    }
    return hexColor;
}
function getRandomRgb() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ', ' +
                    Math.floor(Math.random() * 255) + ', ' +
                    Math.floor(Math.random() * 255) + ')';
}

function setColor(element, color) {
    if( color === 'black' || color === 'purple' || color === 'navy'){
        element.style.color = 'white';
    } else {
        element.style.color = 'black';
    }
    element.style.backgroundColor = color;
    element.textContent = color;
}

if(localCurrentDefaultColor) setColor(defaultColor, localCurrentDefaultColor);
if(localCurrentHexColor) setColor(hexColor, localCurrentHexColor);
if(localCurrentRgbColor) setColor(rgbColor, localCurrentRgbColor);

buttonDefault.addEventListener('click', function (){
    let randomNum = Math.floor(Math.random() * (defaultColorsArray.length - 1));
    setColor(defaultColor, defaultColorsArray[randomNum]);
    localStorage.setItem('defaultColor', defaultColorsArray[randomNum]);
})

buttonHex.addEventListener('click', function () {
    let currentHex = getRandomHex();
    setColor(hexColor, currentHex);
    localStorage.setItem('hexColor', currentHex);
})

buttonRGB.addEventListener('click', function (){
    let currentRgb = getRandomRgb();
    setColor(rgbColor, currentRgb);
    localStorage.setItem('rgbColor', currentRgb)
})
