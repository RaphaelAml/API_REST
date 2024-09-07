export const colaborador = [
    { id: 1, nome: "azul" },
    { id: 2, nome: "dev" },
    { id: 3, nome: "branco" }
];

export function buscarColaborador(id) {
    return colaborador.findIndex((colaborador) => colaborador.id === Number(id));
}
