# PPI - Programação para Internet - 2026/1

Repositório base para a disciplina **PPI - Programação para Internet (2026/1)** do curso **Sistemas de Informação  - Multivix Cachoeiro**.

## 🚀 Guia de Configuração de Ambiente

Este repositório centraliza as diretrizes e os passos práticos para a configuração do ecossistema de desenvolvimento da disciplina. 

O objetivo principal deste guia é fornecer soluções arquiteturais e contornos técnicos para configurar o **Node.js**, **NPM** e **TypeScript** em ambientes restritos de laboratório (computadores com Windows sem privilégios de Administrador).

## 🛠️ O Ecossistema da Disciplina: Motor vs. Painel de Testes

Antes de escolher sua abordagem, entenda o papel de cada ferramenta no desenvolvimento moderno:

* **Node.js (O Motor):** É o ambiente de execução que permite rodar código JavaScript/TypeScript fora do navegador (no terminal ou servidor). Sem ele, sua aplicação não ganha vida.
* **NPM (O Distribuidor):** O gerenciador de pacotes padrão que vem com o Node. Ele baixa bibliotecas, frameworks e utilitários (como o próprio compilador do TypeScript).
* **Quokka.js (O Painel de Corrida):** Uma extensão para o editor de código que executa o JavaScript/TypeScript em tempo real *ao lado de cada linha escrita*. **Atenção:** Ele não substitui o Node.js; ele usa o Node.js nos bastidores para lhe dar feedback instantâneo.

## 🔀 Escolha sua Estratégia de Desenvolvimento

Disponibilizamos duas abordagens distintas. Escolha a que melhor se adapta ao seu momento:

1. **[Estratégia Local] Node.js Binário/Portátil:** Roda nativamente na máquina física do laboratório, sem precisar de internet constante para codificar e sem exigir privilégios de administrador do Windows.
2. **[Estratégia Nuvem] GitHub Codespaces + Quokka.js:** Roda em um contêiner virtualizado Linux na nuvem do GitHub. Dispensa qualquer instalação local e já vem com as ferramentas prontas.

## 💻 Estratégia 1: Abordagem Local (Node.js Binário/Portátil)

Esta abordagem tira proveito das variáveis de ambiente do escopo do **Usuário** no Windows, contornando a necessidade de credenciais de Administrador da instituição.

### Passo 1: Download da Versão Portátil
1. Acesse o site oficial: [nodejs.org](https://nodejs.org/).
2. Vá até a seção de **Downloads** e role até encontrar a tabela de binários.
3. Baixe a opção **Windows Binary (.zip)** x64 (Versão LTS estável).

### Passo 2: Extração e Organização
1. Abra o Explorador de Arquivos e navegue até a pasta de Documentos do seu usuário local: `C:\Users\SEU_USUARIO\Documents`.
2. Crie uma pasta chamada `node-local`.
3. Extraia todo o conteúdo do arquivo `.zip` baixado diretamente para dentro desta pasta `node-local`.

### Passo 3: Mapeamento no PATH do Usuário (Sem Admin)
1. Pressione a tecla `Windows` no teclado e digite: **"Editar as variáveis de ambiente para sua conta"** (Esta janela específica não solicita senha de administrador).
2. Na caixa superior chamada **"Variáveis de usuário para [SeuNome]"**, localize a variável chamada `Path` e dê um clique duplo.
3. Clique no botão **Novo** do lado direito.
4. Cole o caminho exato onde você extraiu o Node.js (Exemplo: `C:\Users\SEU_USUARIO\Documents\node-local`).
5. Clique em **OK** em todas as janelas abertas para salvar.

### Passo 4: Validação do Ambiente
Abra um **novo** terminal (Prompt de Comando ou PowerShell) e execute os comandos abaixo para certificar-se de que o sistema operacional reconhece as ferramentas:

```bash
# Verifica se o motor do Node está acessível
node -v

# Verifica se o gerenciador NPM está ativo
npm -v
```

## ☁️ Estratégia 2: Abordagem Nuvem (GitHub Codespaces + Quokka.js)

Esta abordagem utiliza contêineres virtuais baseados em Linux direto no seu navegador através do ecossistema do GitHub.

### Passo 1: Criação/Acesso ao Repositório
1. Faça login na sua conta do GitHub.
2. No repositório do seu projeto da disciplina, clique no botão verde "Code" situado no canto superior direito.
3. Alterne para a aba "Codespaces" e clique em "Create codespace on main".

### Passo 2: O Ambiente Virtual
O GitHub abrirá uma instância completa do VS Code diretamente no seu navegador.
- **Por que funciona?** O ambiente já possui o ecossistema Node.js e NPM pré-instalados de fábrica.
- **Vantagem de SI:** No terminal integrado deste ambiente virtualizado, você possui privilégios totais de superusuário (`sudo`) se precisar instalar algo no Linux da nuvem.

### Passo 3: Turbinando o Aprendizado com Quokka.js
Para visualizar os resultados do seu código instantaneamente na tela sem precisar rodar comandos repetitivos no terminal:
1. Dentro do Codespaces, vá até a barra lateral esquerda e clique em Extensions (ou pressione `Ctrl + Shift + X`).
2. Digite "Quokka.js" na barra de pesquisa e clique em Install.
3. Para ativar a ferramenta em um arquivo de script:
   - Abra um arquivo TypeScript (ex: aula.ts).
   - Pressione `Ctrl + Shift + P` (ou `F1`) para abrir a Paleta de Comandos.
   - Digite `Quokka.js: Start on Current File` e pressione `Enter`.

## 🚀 Prática de Inicialização: Seu Primeiro Projeto TypeScript

Independentemente da estratégia escolhida (Local ou Nuvem), o fluxo de inicialização profissional de um projeto em Sistemas de Informação utilizando os padrões modernos do **ECMAScript 2025 (ES16)** segue este roteiro no terminal:

### 1. Inicializar o Gerenciador de Pacotes

Cria a certidão de nascimento do projeto (`package.json`).

```bash
npm init -y
```

### 2. Instalar o TypeScript de Forma Segura e Local

Como não temos acesso de administrador global na máquina local, instalamos o compilador estritamente como dependência de desenvolvimento do projeto:

```bash
npm install typescript --save-dev
```

> **Nota (2026/1):** Este projeto utiliza o **TypeScript 6** (`^6.0.3`), a versão mais recente do compilador, com suporte completo ao **ECMAScript 2025 (ESNext)**.

### 3. Inicializar o "Cérebro" do Compilador (`tsconfig.json`)

Como o TypeScript está instalado localmente na pasta do projeto, usamos o prefixo `npx` para executar o binário interno:

```bash
npx tsc --init
```

### 4. Automatizando o Desenvolvimento com Scripts NPM

Abra o seu arquivo `package.json` criado no passo 1 e configure a propriedade `"scripts"` para automatizar o seu ciclo de compilação sem precisar digitar comandos complexos:

```json
"scripts": {
  "start": "npm run build && node build/index.js",
  "build": "tsc",
  "watch": "tsc --watch"
}
```

- `npm run build`: Varre o projeto, valida os tipos estáticos e gera os arquivos `.js` na pasta `build/` de uma só vez.
- `npm run watch`: Cria um observador em tempo real — recompila automaticamente a cada arquivo `.ts` salvo.
- `npm start`: Atalho completo que executa `build` e, em seguida, roda `node build/index.js`.

## 📝 Exemplo Didático para Testes (`index.ts`)

Crie um arquivo chamado `index.ts` para testar seu ambiente com tipagem forte e validações seguras:

```ts
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
```

## 📁 Estrutura do Projeto

Após executar `npm run build`, a estrutura do repositório fica assim:

```text
ppi-2026-1/
├── index.ts           ← código-fonte TypeScript
├── package.json       ← metadados e scripts do projeto
├── tsconfig.json      ← configuração do compilador TypeScript
└── build/             ← artefatos gerados pelo compilador (não editar manualmente)
    ├── index.js       ← JavaScript compilado (CommonJS)
    ├── index.js.map   ← source map para depuração no editor
    ├── index.d.ts     ← declarações de tipos exportados
    └── index.d.ts.map ← source map das declarações
```

## ⚙️ Configuração Avançada do `tsconfig.json`

O `tsconfig.json` deste projeto vai além das opções padrão geradas por `npx tsc --init`, incorporando boas práticas recomendadas para projetos TypeScript 6 modernos:

| Opção | Valor | Finalidade |
|---|---|---|
| `outDir` | `./build` | Pasta de destino dos arquivos compilados |
| `target` | `esnext` | Gera JavaScript moderno (ES2025+) |
| `module` | `nodenext` | Resolução de módulos compatível com Node.js (ESM/CJS) |
| `strict` | `true` | Ativa todas as verificações estritas de tipo |
| `declaration` | `true` | Gera arquivos `.d.ts` de declaração de tipos |
| `sourceMap` | `true` | Gera `.map` para depuração no editor |
| `verbatimModuleSyntax` | `true` | Exige `import type` para importações apenas de tipo |
| `isolatedModules` | `true` | Compatível com transpiladores rápidos (esbuild, SWC) |
| `noUncheckedIndexedAccess` | `true` | Acesso a arrays/objetos retorna `T \| undefined` |
| `exactOptionalPropertyTypes` | `true` | Propriedades opcionais não aceitam `undefined` explícito |
| `noUncheckedSideEffectImports` | `true` | Valida imports de efeito colateral *(novidade do TS 5.6+)* |
| `moduleDetection` | `force` | Trata todos os arquivos como módulos ES |
| `skipLibCheck` | `true` | Ignora erros em `.d.ts` de bibliotecas externas |

