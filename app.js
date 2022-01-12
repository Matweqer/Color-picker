let buttonDefault = document.querySelector('.button-default'),
    buttonHex =     document.querySelector('.button-hex'),
    defaultColor =  document.querySelector('.default-color'),
    hexColor =      document.querySelector('.hex-color');

let defaultColorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gray', 'white'];
let hexArray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let localCurrentDefaultColor = localStorage.getItem('defaultColor');
let localCurrentHexColor = localStorage.getItem('hexColor')

function getRandomHex() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
       hexColor += hexArray[Math.floor(Math.random() * 15)];
    }
    return hexColor;
}

function setColor(color) {
    console.log(11)
    if( color === 'black' || color === 'purple'){
        this.style.color = 'white';
    } else {
        this.style.color = 'black';
    }
    this.style.backgroundColor = color;
    this.textContent = color;
}

if(localCurrentDefaultColor) setColor.bind(defaultColor, localCurrentDefaultColor)();
if(localCurrentHexColor) setColor.bind(hexColor, localCurrentHexColor)();

buttonDefault.addEventListener('click', function (){
    console.log(2)
    let randomNum = Math.floor(Math.random() * (defaultColorsArray.length - 1));
    localStorage.setItem('defaultColor', defaultColorsArray[randomNum]);
    localCurrentDefaultColor = localStorage.getItem('defaultColor')
    setColor.bind(defaultColor, localCurrentDefaultColor)();

})

buttonHex.addEventListener('click', function (){
    console.log(1)
    let currentHex = getRandomHex();
    setColor.bind(hexColor, currentHex)();
    localStorage.setItem('hexColor', currentHex);
});