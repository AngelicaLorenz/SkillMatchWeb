# 📋 Guia de Requisitos:  SkillMatch Web

## 1. Prazos e Entregáveis
* **Prazo final:** 20 de julho de 2026 (segunda-feira), até às 22h.
* O projeto é estritamente **individual**.
* Links que devem ser enviados no AVA:
  * Link do repositório público no GitHub.
  * Link do quadro Kanban (Trello ou similar).
  * Link do vídeo de apresentação (Google Drive público ou YouTube "não listado").

---

## 2. Estrutura do Sistema
* A aplicação deve ser um *Single Page* em HTML, CSS e JavaScript puro rodando no navegador via Live Server.
* A estrutura obrigatória de arquivos e pastas:
  * `index.html` (na raiz do projeto).
  * `README.md` (na raiz do projeto).
  * Pasta `assets/styles/` contendo `index.style.css`.
  * Pasta `assets/scripts/` contendo `main.js` (`type="module"`), `motor.js`, `ui.js` e `dados.js`.
  * Pasta `assets/dados/` contendo `vagas.json`.
  * Pasta `assets/img/` para ícones e logo.

---

## 3. Requisitos Funcionais Obrigatórios

### Grupo A: Motor SkillMatch (Regras de Negócio)
* **RF01:** O perfil do candidato deve ser um objeto contendo nome, área, habilidades e experiência em meses.
* **RF02:** O catálogo deve possuir pelo menos 4 vagas estruturadas em formato de objetos. Estas vagas devem ser carregadas via fetch.
* **RF03:** O sistema deve calcular o percentual de compatibilidade e listar quais habilidades foram encontradas e quais estão faltantes.
* **RF04:** As vagas devem ser classificadas como Alta (80–100%), Média (50–79%) ou Baixa (0–49%).
* **RF05:** Identificar qual é a melhor vaga e gerar uma recomendação de estudos.
* **RF06:** Utilizar no mínimo três dos seguintes métodos de array: `map`, `filter`, `find`, `every`, `reduce`.
* **RF07:** Implementar Programação Orientada a Objetos com pelo menos uma classe contendo construtor e `this`, além de uma classe que aplique herança com motivo claro (ex: sobrescrever um método ou adicionar atributo).
* **RF08:** Utilizar pelo menos um *callback* e uma *closure* no projeto.

### Grupo B: Interface e Layout
* **RF09:** Desenvolver HTML semântico (usando landmarks como header, main, footer), acessível (foco, label/for, aria-label, tag lang) e otimizado para SEO (title e meta description).
* **RF10:** Criar formulário de perfil com eventos do DOM (`addEventListener`), prevenir o recarregamento com `preventDefault` e validar campos com feedback de erro acessível.
* **RF11:** Os cards de vaga devem ser construídos dinamicamente pelo JavaScript usando `createElement` e `classList`, e estruturados na tela usando Flexbox.
* **RF12:** O layout deve ser *mobile-first* (responsivo), utilizando media queries e unidades fluidas para adaptar do celular ao desktop.

### Grupo C: Dados e Persistência
* **RF13:** Utilizar `fetch` e `async/await` no catálogo de vagas JSON, com tratamento de três estados específicos usando `try/catch` e `response.ok`: *carregando*, *vazio* e *erro*.
* **RF14:** Persistir o perfil usando `localStorage`, convertendo os dados com `JSON.stringify`/`JSON.parse` e tratando possíveis valores `null` na primeira visita.

### Grupo D: Organização de Código
* **RF15:** Dividir o JavaScript em módulos locais usando ES modules (`import`/`export`).
* **RF16:** Aplicar *Clean Code* através de nomes intuitivos para variáveis, funções e identificadores.

---

## 4. Repositório, Kanban e README
* O projeto deve possuir um `README.md` bem estruturado descrevendo o problema, solução, tecnologias e como executar a aplicação.
* Utilizar o Git/GitHub estruturando os processos nas branches `main`, `develop` e `feature branches` baseadas no Kanban.
* Não apagar as branches após fazer o *merge* para a `main` e utilizar mensagens descritivas de commit.

---

## 5. Vídeo de Apresentação
* O vídeo deve possuir no máximo 7 minutos, mostrando o seu rosto de forma clara em um ambiente iluminado.
* É necessário demonstrar a aplicação funcionando, explicar como o sistema deve ser executado, qual o objetivo geral e justificar a organização de tarefas/branches do Git.
* Seja transparente e pontue o que poderia ser melhorado e/ou detalhe se/onde fez o uso validado de IA.

---

## 🚫 Restrições Severas 
* **Tecnologias proibidas:** React, Vue, Angular, TypeScript, compiladores (Vite/Babel/Webpack), CSS Grid, Sass, Bibliotecas de fetch externas (axios/jQuery) e integração com Bancos de Dados ou Back-end.
