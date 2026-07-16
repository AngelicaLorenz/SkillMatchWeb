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
        .map(habilidade => habilidade.trim())
        .filter(habilidade => habilidade !== "");

    const experiencia = document.querySelector("#experiencia").value;

    const experienciaMeses = experiencia === ""
        ? null
        : Number(experiencia);

    const candidato = {
        nome,
        area,
        habilidades,
        experienciaMeses
    };

    return candidato;
}

export function validarFormulario(candidato) {

    console.log("Entrou na validação.")

    if (!candidato.nome) {
        return "Informe seu nome.";
    }

    if (!candidato.area) {
        return "Selecione uma área.";
    }

    if (candidato.habilidades.length === 0) {
        return "Informe pelo menos uma habilidade.";
    }

    if (!candidato.experienciaMeses && candidato.experienciaMeses !== 0) {
        return "Informe sua experiência.";
    }

    return null;
}