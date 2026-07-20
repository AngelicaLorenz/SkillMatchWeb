// ==========================================
// ARQUIVO PRINCIPAL
// ==========================================

import {
    capturarFormulario,
    obterDadosFormulario,
    validarFormulario,
    limparResultados,
    mostrarMelhorVaga,
    mostrarListaVagas,
    mostrarRecomendacao,
    salvarFormulario,
    carregarFormulario,
    limparFormulario,
    limparLocalStorage,
    mostrarMensagemVazia
} from "./ui.js";

import { buscarVagas } from "./dados.js";

import {
    analisarVagas,
    encontrarMelhorVaga,
    gerarRecomendacaoEstudos
} from "./motor.js";

const formulario = capturarFormulario();

carregarFormulario();

const botaoLimpar = document.querySelector("#btn-limpar");

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    limparResultados();

    const candidato = obterDadosFormulario();

    const erro = validarFormulario(candidato);

    if (erro) {
        alert(erro);
        return;
    }

    salvarFormulario(candidato);

    try {

        const vagas = await buscarVagas();

        const relatorios = analisarVagas(candidato, vagas);

        if (relatorios.length === 0) {

            mostrarMensagemVazia();

            return;

        }

        const melhorVaga = encontrarMelhorVaga(relatorios);

        const recomendacao = gerarRecomendacaoEstudos(relatorios);

        mostrarMelhorVaga(melhorVaga);

        mostrarListaVagas(relatorios);

        mostrarRecomendacao(recomendacao);

    } catch (erro) {

        console.error(erro);

    }

});

botaoLimpar.addEventListener("click", () => {

    limparLocalStorage();

    limparFormulario();

});