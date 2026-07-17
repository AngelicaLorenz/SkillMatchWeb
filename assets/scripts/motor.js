// ==========================================
// MOTOR DE COMPATIBILIDADE
// ==========================================

export function analisarVagas(candidato, listaVagas) {

    const relatorios = listaVagas.map(vaga => {

        const habilidadesCorrespondentes = vaga.requisitos.filter(requisito =>
            candidato.habilidades.includes(requisito)
        );

        const habilidadesFaltantes = vaga.requisitos.filter(requisito =>
            !candidato.habilidades.includes(requisito)
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

            porcentagem,

            compatibilidade,

            faltantes: habilidadesFaltantes

        };

    });

    return relatorios;

}