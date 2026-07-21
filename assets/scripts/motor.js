// ==========================================
// MOTOR DE COMPATIBILIDADE
// ==========================================

export function analisarVagas(candidato, listaVagas) {

<<<<<<< HEAD
    // Filtra somente as vagas da área escolhida
    const vagasFiltradas = listaVagas.filter(vaga =>
        vaga.area === candidato.area
    );

    const relatorios = vagasFiltradas.map(vaga => {

        // Padroniza para maiúsculas
        const requisitos = vaga.requisitos.map(item => item.toUpperCase());

        const habilidadesCandidato = candidato.habilidades.map(item =>
            item.toUpperCase()
        );

        const habilidadesCorrespondentes = requisitos.filter(requisito =>
            habilidadesCandidato.includes(requisito)
=======
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
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a
        );

        const habilidadesFaltantes = requisitos.filter(requisito =>
            !habilidadesCandidato.includes(requisito)
        );

        const totalRequisitos = requisitos.length;

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

<<<<<<< HEAD
            nivel: vaga.nivel,

            modalidade: vaga.modalidade,

            salario: vaga.salario,

            porcentagem,
=======
        nivel: vaga.nivel,
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a

        modalidade: vaga.modalidade,

        salario: vaga.salario,

        porcentagem,

        compatibilidade,

        faltantes: habilidadesFaltantes

    };

    });

    return relatorios;

}

<<<<<<< HEAD
// ==========================================
// MELHOR VAGA
// ==========================================

export function encontrarMelhorVaga(relatorios) {

    if (relatorios.length === 0) {

        return null;

    }

    return relatorios.reduce((melhor, atual) =>

        atual.porcentagem > melhor.porcentagem
            ? atual
            : melhor

    );

}

// ==========================================
// RECOMENDAÇÃO DE ESTUDOS
// ==========================================

export function gerarRecomendacaoEstudos(relatorios) {

    let habilidades = [];

    relatorios.forEach(relatorio => {

        habilidades = habilidades.concat(relatorio.faltantes);

    });

    // Remove duplicados
    habilidades = [...new Set(habilidades)];

    if (habilidades.length === 0) {

        return "Parabéns! Você atende todos os requisitos das vagas.";

    }

    return `Recomendamos estudar: ${habilidades.join(", ")}.`;
=======
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
>>>>>>> 66250cb597587306f1e05a876e06095d629abc1a

}