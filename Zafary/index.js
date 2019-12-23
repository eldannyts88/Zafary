boton.addEventListener('click', ingresar);
const boton = window.document.querySelector('#boton');


function ingresar(){
const input1 = window.document.querySelector('#email');
const textoInput = input1.value;
const input2 = window.document.querySelector('#contraseña');
const textoInput2 = input2.value;
boton.addEventListener('click', ingresar);
const boton = window.document.querySelector('#boton');
if (textoInput === 'danieljaraviana@gmail.com'&& textoInput2 === '12345'){
    console.log('Puedes ingresar al sistema')

}else{
    console.log('No puedes ingresar al sistema')
}
console.log(botonIng);
}

