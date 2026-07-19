// ==========================================
// UI
// Responsável por:
// - Ler os campos do formulário;
// - Validar os dados;
// - Exibir os resultados na tela.
// ==========================================

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
        .map(habilidade => habilidade.trim() .toUpperCase())
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

    const cor =
        melhorVaga.compatibilidade === "Alta"
            ? "#22c55e"
            : melhorVaga.compatibilidade === "Média"
            ? "#facc15"
            : "#ef4444";

    destaque.innerHTML = `

        <div class="card-vaga melhor-vaga">

            <div class="selo">

                ⭐ Melhor Vaga

            </div>

            <div class="card-topo">

                <div class="card-info">

                    <h3>${melhorVaga.cargo}</h3>

                    <p class="empresa">

                        🏢 ${melhorVaga.empresa}

                    </p>

                </div>

                <div class="card-compatibilidade">

                    <div
                        class="progress-ring"
                        style="
                            --progress:${melhorVaga.porcentagem};
                            --cor:${cor};
                        "
                    >

                        <span>${melhorVaga.porcentagem}%</span>

                    </div>

                    <span class="badge ${melhorVaga.compatibilidade.toLowerCase()}">

                        ${melhorVaga.compatibilidade}

                    </span>

                </div>

            </div>

            <hr>

            <div class="card-detalhes">

                <div>

                    <span>📍</span>

                    <p>Modalidade</p>

                    <strong>${melhorVaga.modalidade}</strong>

                </div>

                <div>

                    <span>💰</span>

                    <p>Salário</p>

                    <strong>R$ ${melhorVaga.salario}</strong>

                </div>

                <div>

                    <span>🎓</span>

                    <p>Nível</p>

                    <strong>${melhorVaga.nivel}</strong>

                </div>

            </div>

            <hr>

            <div class="card-habilidades">

                <h4>

                    🚀 Para aumentar sua compatibilidade estude:

                </h4>

                <div class="chips">

                    ${
                        melhorVaga.faltantes.length

                            ? melhorVaga.faltantes
                                  .map(habilidade =>
                                      `<span class="chip">${habilidade}</span>`
                                  )
                                  .join("")

                            : `<span class="chip completo">
                                    Nenhuma 🎉
                               </span>`
                    }

                </div>

            </div>

        </div>

    `;

}

export function mostrarListaVagas(relatorios) {

    const lista = document.querySelector("#lista-vagas");

    lista.innerHTML = "";

    relatorios.forEach(relatorio => {

        const card = document.createElement("article");
        card.classList.add("card-vaga");

        const cor =
            relatorio.compatibilidade === "Alta"
                ? "#22c55e"
                : relatorio.compatibilidade === "Média"
                ? "#facc15"
                : "#ef4444";

        card.innerHTML = `

            <div class="card-topo">

                <div class="card-info">

                    <h3>${relatorio.cargo}</h3>

                    <p class="empresa">
                        🏢 ${relatorio.empresa}
                    </p>

                </div>

                <div class="card-compatibilidade">

                    <div
                        class="progress-ring"
                        style="
                            --progress:${relatorio.porcentagem};
                            --cor:${cor};
                        "
                    >

                        <span>${relatorio.porcentagem}%</span>

                    </div>

                    <span class="badge ${relatorio.compatibilidade.toLowerCase()}">

                        ${relatorio.compatibilidade}

                    </span>

                </div>

            </div>

            <hr>

            <div class="card-detalhes">

                <div>

                    <span>📍</span>

                    <p>Modalidade</p>

                    <strong>${relatorio.modalidade}</strong>

                </div>

                <div>

                    <span>💰</span>

                    <p>Salário</p>

                    <strong>R$ ${relatorio.salario}</strong>

                </div>

                <div>

                    <span>🎓</span>

                    <p>Nível</p>

                    <strong>${relatorio.nivel}</strong>

                </div>

            </div>

            <hr>

            <div class="card-habilidades">

                <h4>

                    📚 Habilidades para alcançar 100%

                </h4>

                <div class="chips">

                    ${
                        relatorio.faltantes.length

                            ? relatorio.faltantes
                                  .map(habilidade =>
                                      `<span class="chip">${habilidade}</span>`
                                  )
                                  .join("")

                            : `<span class="chip completo">
                                    Nenhuma 🎉
                               </span>`
                    }

                </div>

            </div>

        `;

        lista.appendChild(card);

    });

}

export function mostrarRecomendacao(recomendacao) {

    const area = document.querySelector("#recomendacao-estudos");

    area.innerHTML = "";

    const titulo = document.createElement("h3");

    titulo.textContent = "Recomendação de Estudos";

    area.appendChild(titulo);

    const texto = recomendacao
        .replace("Recomendamos estudar: ", "")
        .replace(".", "");

    const habilidades = texto
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    const chips = document.createElement("div");

    chips.classList.add("chips");

    habilidades.forEach(habilidade => {

        const chip = document.createElement("span");

        chip.classList.add("chip");

        chip.textContent = habilidade;

        chips.appendChild(chip);

    });

    area.appendChild(chips);

}