// Arquivo principal da aplicação
// Responsável por iniciar o sistema

import {
    capturarFormulario,
    obterDadosFormulario,
    validarFormulario
} from "./ui.js";

const formulario = capturarFormulario();

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const candidato = obterDadosFormulario();

    const erro = validarFormulario(candidato);

    if(erro){
        alert(erro);
        return;
    }

    console.log(candidato);

});