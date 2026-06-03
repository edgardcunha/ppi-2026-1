/**
 * Exemplo didático de Função Tipada sob os padrões da Engenharia de Software.
 * @param nota1 Primeira nota parcial do estudante (number)
 * @param nota2 Segunda nota parcial do estudante (number)
 * @returns A média aritmética calculada (number)
 */
function calcularMediaSI(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
}

// Execução perfeitamente válida e tipada
const mediaEstudante = calcularMediaSI(8.5, 9.0);
console.log(`Média do aluno de SI: ${mediaEstudante}`);

/* O GUARDIÃO EM AÇÃO:
  Se você tentar descomentar a linha abaixo, o TypeScript (ou o Quokka.js inline) 
  impedirá a compilação imediatamente acusando o erro em tempo de desenvolvimento!
*/
// const erroProposital = calcularMediaSI(7.0, "10.0");