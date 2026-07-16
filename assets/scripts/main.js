// Arquivo principal da aplicação
// Responsável por iniciar o sistema

import {
    capturarFormulario,
    obterDadosFormulario
} from "./ui.js";

const formulario = capturarFormulario();

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const candidato = obterDadosFormulario();

    console.log(candidato);

});