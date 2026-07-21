<<<<<<< HEAD
// ==========================================
// ARQUIVO PRINCIPAL
// ==========================================
=======
// Arquivo principal da aplicação
// Responsável por iniciar o sistema
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a

import {
    capturarFormulario,
    obterDadosFormulario,
    validarFormulario,
    limparResultados,
    mostrarMelhorVaga,
    mostrarListaVagas,
    mostrarRecomendacao,
    salvarFormulario,
<<<<<<< HEAD
    carregarFormulario,
    limparFormulario,
    limparLocalStorage,
    mostrarMensagemVazia
=======
    carregarFormulario
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a
} from "./ui.js";

import { buscarVagas } from "./dados.js";

import {
    analisarVagas,
    encontrarMelhorVaga,
    gerarRecomendacaoEstudos
} from "./motor.js";

const formulario = capturarFormulario();
const botaoLimpar = document.querySelector("#btn-limpar");
carregarFormulario();

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
<<<<<<< HEAD

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
=======
            if (relatorios.length === 0) {

            alert("Nenhuma vaga encontrada para esta área.");
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a

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

if(relatorios.length===0){

    mostrarMensagemVazia();

    return;

}