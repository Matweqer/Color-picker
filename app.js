let buttonDefault = document.querySelector('.button-default'),
    buttonHex =     document.querySelector('.button-hex'),
    defaultColor =  document.querySelector('.default-color'),
    hexColor =      document.querySelector('.hex-color');

const defaultColorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gray', 'white'];
const hexArray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let localCurrentDefaultColor = localStorage.getItem('defaultColor');
let localCurrentHexColor = localStorage.getItem('hexColor')

function getRandomHex() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
       hexColor += hexArray[Math.floor(Math.random() * 15)];
    }
    return hexColor;
}

function setColor(element, color) {
    if( color === 'black' || color === 'purple'){
        element.style.color = 'white';
    } else {
        element.style.color = 'black';
    }
    element.style.backgroundColor = color;
    element.textContent = color;
}

if(localCurrentDefaultColor) setColor(defaultColor, localCurrentDefaultColor);
if(localCurrentHexColor) setColor(hexColor, localCurrentHexColor);

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