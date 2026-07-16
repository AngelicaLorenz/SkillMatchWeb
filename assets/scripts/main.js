// Arquivo principal da aplicação
// Responsável por iniciar o sistema

import {
    capturarFormulario,
    processarFormulario    
} from "./ui.js";

const formulario = capturarFormulario();

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const candidato = processarFormulario();

    if (!candidato) {
        return;
    }

    console.log(candidato);

});