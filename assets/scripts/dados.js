// ==========================================
// DADOS
// Responsável por buscar as vagas do JSON
// ==========================================

export async function buscarVagas() {

    try {

        const resposta = await fetch("assets/dados/vagas.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar as vagas.");
        }

        const vagas = await resposta.json();

        return vagas;

    } catch (erro) {

        console.error(erro);

        return [];

    }

}