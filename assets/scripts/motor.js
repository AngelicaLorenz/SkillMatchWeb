// ==========================================
// MOTOR DE COMPATIBILIDADE
// ==========================================

export function analisarVagas(candidato, listaVagas) {

    const habilidadesCandidato = candidato.habilidades.map(habilidade =>
    habilidade.toLowerCase()
);

    const vagasFiltradas = listaVagas.filter(vaga =>

        vaga.area === candidato.area

    );

    const relatorios = vagasFiltradas.map(vaga => {

        const habilidadesCorrespondentes = vaga.requisitos.filter(requisito =>
            candidato.habilidades.includes(requisito.toUpperCase())
        );

        const habilidadesFaltantes = vaga.requisitos.filter(requisito =>
            !candidato.habilidades.includes(requisito.toUpperCase())
        );

        const totalRequisitos = vaga.requisitos.length;

        const totalAcertos = habilidadesCorrespondentes.length;

        const porcentagem = Math.round(
            (totalAcertos / totalRequisitos) * 100
        );

        let compatibilidade = "";

        if (porcentagem >= 80) {

            compatibilidade = "Alta";

        } else if (porcentagem >= 50) {

            compatibilidade = "Média";

        } else {

            compatibilidade = "Baixa";

        }

        return {

        empresa: vaga.empresa,

        cargo: vaga.cargo,

        nivel: vaga.nivel,

        modalidade: vaga.modalidade,

        salario: vaga.salario,

        porcentagem,

        compatibilidade,

        faltantes: habilidadesFaltantes

    };

    });

    return relatorios;

}

export function encontrarMelhorVaga(relatorios) {

    if (relatorios.length === 0) {
        return null;
    }

    const melhorVaga = relatorios.reduce((melhor, atual) => {

        return atual.porcentagem > melhor.porcentagem
            ? atual
            : melhor;

    });

    return melhorVaga;

}

export function gerarRecomendacaoEstudos(relatorios) {

    let habilidadesFaltantes = [];

    for (const relatorio of relatorios) {

        habilidadesFaltantes = habilidadesFaltantes.concat(relatorio.faltantes);

    }

    const habilidadesUnicas = [
        ...new Set(
            habilidadesFaltantes.map(h => h.toUpperCase())
        )
    ];

    if (habilidadesUnicas.length === 0) {

        return "Parabéns! Você atende a todos os requisitos das vagas analisadas.";

    }

    return `Recomendamos estudar: ${habilidadesUnicas.join(", ")}.`;

}