//Variables
let cuenta = 0;
let carrito = 0;
let antibacterial = 1;
let alcohol = 2;
let careta = 2;
let guantes = 2;
let oximetro = 5;
let tapabocas = 2;

//HTML
const boton1 = document.querySelector('#Antibacterial');
const boton2 = document.querySelector('#Alcohol');
const boton3 = document.querySelector('#Careta');
const boton4 = document.querySelector('#Guantes');
const boton5 = document.querySelector('#Oximetro');
const boton6 = document.querySelector('#Tapabocas');
const objetos = document.querySelector('#Objeto');
const precio = document.querySelector('#Precio');
const limpiar = document.querySelector('#limpiar');
const pagar = document.querySelector('#pagar');
let unset = document.querySelector('#unset');


//Evento
boton1.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + antibacterial;
    precio.innerText = `$` + carrito;
});

boton2.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + alcohol;
    precio.innerText = `$` + carrito;
});

boton3.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + careta;
    precio.innerText = `$` + carrito;
});

boton4.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + guantes;
    precio.innerText = `$` + carrito;
});

boton5.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + oximetro;
    precio.innerText = `$` + carrito;
});

boton6.addEventListener('click', () => {
    //objetos
    cuenta = cuenta + 1;

    objetos.innerText = cuenta;
    //Precio
    carrito = carrito + tapabocas;
    precio.innerText = `$` + carrito;
});

//Ultimos botones
limpiar.addEventListener('click', () => {
    //objetos
    cuenta = 0;

    objetos.innerText = 0;
    //Precio
    carrito = 0;
    precio.innerText = `$` + carrito;
});

pagar.addEventListener('click', () => {
    //Mostrando la cuenta
    unset = document.getElementById('unset').classList.remove('unset');

});