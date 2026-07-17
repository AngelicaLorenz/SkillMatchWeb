import { capturarFormulario, processarFormulario } from "./ui.js";
import { buscarVagas } from "./dados.js";
import { analisarVagas } from "./motor.js";

const formulario = capturarFormulario();

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const candidato = processarFormulario();

    if (!candidato) {
        return;
    }

    console.log("Candidato:");
    console.log(candidato);

    const vagas = await buscarVagas();

    console.log("Vagas:");
    console.log(vagas);

    const relatorios = analisarVagas(candidato, vagas);

    console.log("Relatórios:");
    console.log(relatorios);

});