import 
    { capturarFormulario, 
    processarFormulario 
    } from "./ui.js";

import { buscarVagas } from "./dados.js";

import 
    { analisarVagas, 
    encontrarMelhorVaga, 
    gerarRecomendacaoEstudos 
    } from "./motor.js";

const formulario = capturarFormulario();

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const candidato = processarFormulario();

    if (!candidato) {
        return;
    }

    console.log("Candidato:");
    console.log(candidato);

    const vagas = await buscarVagas();

    console.log("Vagas:");
    console.log(vagas);

    const relatorios = analisarVagas(candidato, vagas);

    const melhorVaga = encontrarMelhorVaga(relatorios);

    console.log("Relatórios:");
    console.log(relatorios);
    
    console.log("Melhor vaga:");
    console.log(melhorVaga);

    const recomendacao = gerarRecomendacaoEstudos(relatorios);

    console.log("Recomendação:");
    console.log(recomendacao);
    
});