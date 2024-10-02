const btnAgregarcerveza = document.querySelector("#boton1")
const btnAgregartequila = document.querySelector("#boton2")
const btnAgregarvino = document.querySelector("#boton3")

const precioTotal = document.getElementById("precioTotal")

const productos = [

    {nombre: "Cerveza", precio: 1200},
    {nombre: "Tequila", precio: 2000},
    {nombre: "Vino", precio: 1800}

]

let preciocerveza = 1200;
let preciotequila = 2000;
let preciovino = 1800;

let preciosuma = 0;

btnAgregarcerveza.addEventListener("click", () => {
    precioTotal.innerText = preciosuma + preciocerveza;
});

btnAgregartequila.addEventListener("click", () => {
    precioTotal.innerText = preciosuma + preciotequila;
});

btnAgregarvino.addEventListener("click", () => {
    precioTotal.innerText = preciosuma + preciovino;
});