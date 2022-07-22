// DOM
const dado1 = document.querySelector("#dado1");
const dado2 = document.getElementById("dado2");
const resultado = document.querySelector("#resultado");
const dados = document.getElementById("dados"); //  id del section

// Math.random  => geenera un numero entre 0 y 1 el cual, ej: 0.3545
const arrojarDados = () => {
  let d1 = Math.round(Math.random() * 5 + 1);
  let d2 = Math.round(Math.random() * 5 + 1);
  // console.log(d1, d2)
  return [d1, d2];
};

let suerte;
let tirar = prompt("quiere tirar los dados?");

if (tirar == "si") {
  suerte = arrojarDados(); // suerte se convierte en un array
  console.log(suerte);
}

dado1.innerText = suerte[0];
console.log(suerte[0]);
dado2.innerText = suerte[1];
console.log(suerte[1]);

let total = suerte.reduce((acc, dado) => acc + dado, 0);

if (total == 7 || total == 11) {
  resultado.innerText = "GANASTE";
} else {
  resultado.innerText = "PERDISTE";
}

// innerHTML nos permite utilizar etiquetas, se utiliza backsticks `` alt + 96 || alt gr + }
const sumaDados = document.createElement("div");
sumaDados.innerHTML = `<h2>La suma de los dados es: <span>${suerte[0] + suerte[1]}</span></h2>`;
dados.appendChild(sumaDados);

// repaso de clases anteriores a DOM

class Dulce {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const arrayDulces = [];

arrayDulces.push(new Dulce(1, "rocklets", 250));
arrayDulces.push(new Dulce(2, "Bon o bon", 150));
arrayDulces.push(new Dulce(3, "cadbury de frutilla", 450));
arrayDulces.push(new Dulce(4, "cadbury de frutilla", 320));
console.log(arrayDulces);

// filter, find, sort
let filtro = arrayDulces.filter((dulce) => dulce.precio == 450);
console.log(filtro);

let encontrar = arrayDulces.find((dulce) => dulce.precio == 450);
console.log(filtro);

let ordenar = arrayDulces.sort((a, b) => b.precio - a.precio);
console.log(ordenar);
