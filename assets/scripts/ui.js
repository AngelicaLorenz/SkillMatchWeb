// Responsável por:
// - Ler os campos do formulário;
// - Mostrar mensagens;
// - Criar os cards;
// - Mostrar a melhor vaga.

export function capturarFormulario() {
    const formulario = document.querySelector("#candidate-form");
    return formulario;
}

export function obterDadosFormulario() {

    const nome = document.querySelector("#nome").value;

    const area = document.querySelector("#area").value;

    const habilidades = document
        .querySelector("#habilidades")
        .value
        .split(",")
        .map(habilidade => habilidade.trim());

    const experienciaMeses = Number(
        document.querySelector("#experiencia").value
    );

    const candidato = {
        nome,
        area,
        habilidades,
        experienciaMeses
    };

    return candidato;
}