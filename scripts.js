const resultadoRefri = document.getElementById("resultadoRefri");
const resultadoSuco = document.getElementById("resultadoSuco");
const resultadoPizza = document.getElementById("resultadoPizza");
const resultadoCoxinha = document.getElementById("resultadoCoxinha");
const resultadoSalada = document.getElementById("resultadoSalada");

const QuantidadeRefri = document.getElementById("QuantidadeRefri");
const QuantidadeSuco = document.getElementById("QuantidadeSuco");
const QuantidadePizza = document.getElementById("QuantidadePizza");
const QuantidadeCoxinha = document.getElementById("QuantidadeCoxinha");
const QuantidadeSalada = document.getElementById("QuantidadeSalada");

const ValorRefri = 5.00;
const ValorSuco = 5.00;
const ValorPizza = 10.00;
const ValorCoxinha = 7.00;
const ValorSalada = 5.00;

let totalRefri = 0;
let totalSuco = 0;
let totalPizza = 0;
let totalCoxinha = 0;
let totalSalada = 0;

let valorQuantidadeRefri = 0;
let valorQuantidadeSuco = 0;
let valorQuantidadePizza = 0;
let valorQuantidadeCoxinha = 0;
let valorQuantidadeSalada = 0;

const PedidoFinal = document.getElementById("PedidoFinal");
let linha1 = document.getElementById("linhaRefri");
let linha2 = document.getElementById("linhaSuco");
let linha3 = document.getElementById("linhaPizza");
let linha4 = document.getElementById("linhaCoxinha");
let linha5 = document.getElementById("linhaSalada");
let ValorTotal = document.getElementById("ValorTotal");

resultadoRefri.textContent = totalRefri.toFixed(2);
resultadoSuco.textContent = totalSuco.toFixed(2);
resultadoPizza.textContent = totalPizza.toFixed(2);
resultadoCoxinha.textContent = totalCoxinha.toFixed(2);
resultadoSalada.textContent = totalSalada.toFixed(2);

QuantidadeRefri.textContent = valorQuantidadeRefri;
QuantidadeSuco.textContent = valorQuantidadeSuco;
QuantidadePizza.textContent = valorQuantidadePizza;
QuantidadeCoxinha.textContent = valorQuantidadeCoxinha;
QuantidadeSalada.textContent = valorQuantidadeSalada;

function adicionarRefri() {
    totalRefri += ValorRefri;
    resultadoRefri.textContent = totalRefri.toFixed(2);
    QuantidadeRefri.textContent = valorQuantidadeRefri += 1;
}

function adicionarSuco() {
    totalSuco += ValorSuco;
    resultadoSuco.textContent = totalSuco.toFixed(2);
    QuantidadeSuco.textContent = valorQuantidadeSuco += 1;
}

function adicionarPizza() {
    totalPizza += ValorPizza;
    resultadoPizza.textContent = totalPizza.toFixed(2);
    QuantidadePizza.textContent = valorQuantidadePizza += 1;
}

function adicionarCoxinha() {
    totalCoxinha += ValorCoxinha;
    resultadoCoxinha.textContent = totalCoxinha.toFixed(2);
    QuantidadeCoxinha.textContent = valorQuantidadeCoxinha += 1;
}

function adicionarSalada() {
    totalSalada += ValorSalada;
    resultadoSalada.textContent = totalSalada.toFixed(2);
    QuantidadeSalada.textContent = valorQuantidadeSalada += 1;
}

function removerRefri() {
    if(totalRefri > 0){
    totalRefri -= ValorRefri;
    resultadoRefri.textContent = totalRefri.toFixed(2);
    QuantidadeRefri.textContent = valorQuantidadeRefri -= 1;
    }
}

function removerSuco() {
    if(totalSuco > 0){
    totalSuco -= ValorSuco;
    resultadoSuco.textContent = totalSuco.toFixed(2);
    QuantidadeSuco.textContent = valorQuantidadeSuco -= 1;
    }
}

function removerPizza() {
    if(totalPizza > 0){
    totalPizza -= ValorPizza;
    resultadoPizza.textContent = totalPizza.toFixed(2);
    QuantidadePizza.textContent = valorQuantidadePizza -= 1;
    }
}

function removerCoxinha() {
    if(totalCoxinha > 0){
    totalCoxinha -= ValorCoxinha;
    resultadoCoxinha.textContent = totalCoxinha.toFixed(2);
    QuantidadeCoxinha.textContent = valorQuantidadeCoxinha -= 1;
    }
}

function removerSalada() {
    if(totalSalada > 0){
    totalSalada -= ValorSalada;
    resultadoSalada.textContent = totalSalada.toFixed(2);
    QuantidadeSalada.textContent = valorQuantidadeSalada -= 1;
    }
}

function ResumoDoPedido() {
    PedidoFinal.style.display = "block";
    let valor1 = Number(totalRefri);
    let valor2 = Number(totalSuco);
    let valor3 = Number(totalPizza);
    let valor4 = Number(totalCoxinha);
    let valor5 = Number(totalSalada);
    let ResultadoFinal = valor1 + valor2 + valor3 + valor4 + valor5;
    linha1.textContent = "Você pediu " + valorQuantidadeRefri + " refri(s), " + "e o total a pagar é: " + totalRefri.toFixed(2);
    linha2.textContent = "Você pediu " + valorQuantidadeSuco + "suco(s), " + "e o total a pagar é: " + totalSuco.toFixed(2);
    linha3.textContent = "Você pediu " + valorQuantidadePizza + "pizza(s), " + "e o total a pagar é: " + totalPizza.toFixed(2);
    linha4.textContent = "Você pediu " + valorQuantidadeCoxinha + "coxinhas(s), " + "e o total a pagar é: " + totalCoxinha.toFixed(2);
    linha5.textContent = "Você pediu " + valorQuantidadeSalada + "salada(s), " + "e o total a pagar é: " + totalSalada.toFixed(2); 
    ValorTotal.textContent = "O valor total a pagar é: " + ResultadoFinal + "R$";
}