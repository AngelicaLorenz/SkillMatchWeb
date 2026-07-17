// Responsável por:
// - Ler os campos do formulário;
// - Validar os dados;
// - Exibir os resultados na tela.

export function capturarFormulario() {
    return document.querySelector("#candidate-form");
}

export function obterDadosFormulario() {

    const nome = document.querySelector("#nome").value.trim();

    const area = document.querySelector("#area").value;

    const habilidades = document
        .querySelector("#habilidades")
        .value
        .split(",")
        .map(habilidade => habilidade.trim())
        .filter(habilidade => habilidade !== "");

    const experienciaMeses = Number(
        document.querySelector("#experiencia").value
    );

    return {
        nome,
        area,
        habilidades,
        experienciaMeses
    };
}

export function validarFormulario(candidato) {

    if (!candidato.nome) {
        return "Informe seu nome.";
    }

    if (!candidato.area) {
        return "Selecione uma área.";
    }

    if (candidato.habilidades.length === 0) {
        return "Informe pelo menos uma habilidade.";
    }

    if (isNaN(candidato.experienciaMeses)) {
        return "Informe sua experiência.";
    }

    return null;
}

export function limparResultados() {

    document.querySelector("#destaque-vaga").innerHTML = "";
    document.querySelector("#lista-vagas").innerHTML = "";
    document.querySelector("#recomendacao-estudos").innerHTML = "";

}

export function mostrarMelhorVaga(melhorVaga) {

    const destaque = document.querySelector("#destaque-vaga");

    destaque.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "⭐ Melhor Vaga";

    const empresa = document.createElement("p");
    empresa.textContent = `Empresa: ${melhorVaga.empresa}`;

    const cargo = document.createElement("p");
    cargo.textContent = `Cargo: ${melhorVaga.cargo}`;

    const compatibilidade = document.createElement("p");
    compatibilidade.textContent =
        `Compatibilidade: ${melhorVaga.porcentagem}%`;

    destaque.appendChild(titulo);
    destaque.appendChild(empresa);
    destaque.appendChild(cargo);
    destaque.appendChild(compatibilidade);

}

export function mostrarListaVagas(relatorios) {

    const lista = document.querySelector("#lista-vagas");

    lista.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "📋 Vagas Encontradas";

    lista.appendChild(titulo);

    relatorios.forEach(relatorio => {

        const card = document.createElement("div");

        card.classList.add("card-vaga");

        card.innerHTML = `
            <h4>${relatorio.cargo}</h4>
            <p><strong>Empresa:</strong> ${relatorio.empresa}</p>
            <p><strong>Compatibilidade:</strong> ${relatorio.porcentagem}%</p>
            <p><strong>Classificação:</strong> ${relatorio.compatibilidade}</p>
        `;

        lista.appendChild(card);

    });

}

export function mostrarRecomendacao(recomendacao) {

    const area = document.querySelector("#recomendacao-estudos");

    area.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "📚 Recomendação de Estudos";

    const texto = document.createElement("p");
    texto.textContent = recomendacao;

    area.appendChild(titulo);
    area.appendChild(texto);

}