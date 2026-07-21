// Arquivo principal da aplicação
// Responsável por iniciar o sistema

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
    limparFormulario // Importado para corrigir o botão limpar
} from "./ui.js";

import { buscarVagas } from "./dados.js";

import {
    analisarVagas,
    encontrarMelhorVaga,
    gerarRecomendacaoEstudos
} from "./motor.js";

const formulario = capturarFormulario();
const botaoLimpar = document.querySelector("#btn-limpar");

// Executa ao carregar a página para preencher dados salvos
carregarFormulario();

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
            alert("Nenhuma vaga encontrada para esta área.");
            return;
        }

        const melhorVaga = encontrarMelhorVaga(relatorios);
        const recomendacao = gerarRecomendacaoEstudos(relatorios);

        mostrarMelhorVaga(melhorVaga);
        mostrarListaVagas(relatorios);
        mostrarRecomendacao(recomendacao);

    } catch (erro) {
        console.error("Erro ao processar vagas:", erro);
    }
});

// Evento do botão limpar corrigido
botaoLimpar.addEventListener("click", () => {
    localStorage.removeItem("candidato"); // Limpa o local storage de forma nativa
    limparFormulario(); // Limpa os campos visualmente
    limparResultados(); // Limpa os cards de resultados da tela
});