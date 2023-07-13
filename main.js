import './style.css'

const COLOR_PALETTE = {
  '#FFBE0B': 'Amber',
  '#FB5607': 'Orange (Pantone)',
  '#FF006E': 'Rose',
  '#8338EC': 'Blue violet',
  '#3A86FF': 'Azure',
};



const addOptiosnToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#colorPicker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#colorPicker');
  const colorName = document.querySelector('#colorName')
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const pickedColorNameAndHEX = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? pickedColorNameAndHEX : '-';
  })
}

addOptiosnToColorPicker();
addEventListenerToColorPicker()

//CREAR UN INPUT DE COLOR Y CAMBIAR EL FONDO DE ACUERDO A ESE VALOR
  //ESTARIA BIEN CREAR UNA MEZCLA DE COMPOSICIONES DE COLOR