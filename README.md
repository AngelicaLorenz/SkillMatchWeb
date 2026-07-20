# 🚀 SkillMatch

Encontre a vaga ideal para o seu perfil e descubra quais habilidades desenvolver para aumentar sua compatibilidade com o mercado de tecnologia.

---

## 📖 Sobre o projeto

O **SkillMatch** é uma aplicação web desenvolvida como projeto do desafio do módulo 1 do curso de desenvolvimento Front-End.

O sistema permite que o usuário informe seu perfil profissional e compare suas habilidades com um conjunto de vagas carregadas através de um arquivo JSON.

Ao final da análise, o sistema apresenta:

- ⭐ A vaga com maior compatibilidade;
- 📊 O percentual de compatibilidade com cada vaga;
- 📋 Lista completa das vagas analisadas;
- 📚 Recomendações de estudos com as habilidades que precisam ser desenvolvidas.

---

# ✨ Funcionalidades

- Cadastro do perfil do candidato
- Validação dos campos do formulário
- Leitura dos dados utilizando JavaScript
- Carregamento das vagas através de arquivo JSON
- Consumo dos dados utilizando **Fetch API**
- Processamento assíncrono com **async/await**
- Tratamento de erros com **try/catch**
- Comparação automática das habilidades do candidato
- Cálculo do percentual de compatibilidade
- Identificação da melhor vaga
- Exibição das habilidades faltantes
- Remoção de habilidades duplicadas utilizando **Set**
- Geração de recomendações de estudo
- Interface responsiva (Mobile First)

---

# 🛠 Tecnologias utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript (ES6 Modules)

## Recursos utilizados

- Fetch API
- Async/Await
- JSON
- DOM
- Eventos
- Flexbox
- Media Queries

---

# 📂 Estrutura do projeto

```text
SkillMatch/

│
├── assets/
│
├── dados/
│   └── vagas.json
│
├── img/
│
├── scripts/
│   ├── dados.js
│   ├── main.js
│   ├── motor.js
│   └── ui.js
│
├── styles/
│   └── style.css
│
├── index.html
└── README.md
```

---

# ⚙️ Como executar

1. Clone este repositório

```bash
git clone https://github.com/AngelicaLorenz/SkillMatchWeb.git
```

2. Abra o projeto no Visual Studio Code

3. Execute utilizando a extensão **Live Server**

4. Preencha o formulário

5. Clique em **Buscar vagas ideais**

---

# 📋 Funcionamento

O sistema realiza o seguinte fluxo:

1. O usuário informa:

- Nome
- Área de atuação
- Habilidades
- Tempo de experiência

↓

2. O sistema valida os dados

↓

3. As vagas são carregadas através do arquivo JSON

↓

4. Cada vaga é analisada

↓

5. É calculada a porcentagem de compatibilidade

↓

6. A melhor vaga é destacada

↓

7. São apresentadas recomendações de estudos

---

# 💡 Regras de negócio

A compatibilidade é calculada através da comparação entre:

- habilidades do candidato
- requisitos da vaga

Classificação:

| Compatibilidade | Resultado |
|-----------------|-----------|
| 80% ou mais | Alta |
| 50% até 79% | Média |
| abaixo de 50% | Baixa |

---

# 📱 Responsividade

A aplicação foi desenvolvida utilizando a abordagem **Mobile First**.

Foram utilizados:

- Flexbox
- Media Queries
- Layout fluido
- Unidades relativas

---


# 📚 Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- Organização em módulos
- Import/Export
- Manipulação do DOM
- Eventos
- Objetos
- Arrays
- Métodos de Arrays
- map()
- filter()
- reduce()
- concat()
- includes()
- Set
- Funções
- Template Strings
- Fetch API
- Async/Await
- Try/Catch
- Responsividade

---

# 🎯 Requisitos atendidos

✔ Cadastro do candidato

✔ Validação do formulário

✔ Carregamento de dados externos

✔ Processamento das vagas

✔ Compatibilidade automática

✔ Melhor vaga

✔ Lista de resultados

✔ Recomendações de estudo

✔ Responsividade

✔ Organização modular

---
# 🌱 Aprendizados

Durante o desenvolvimento deste projeto foi possível praticar:

- Organização de projetos em módulos JavaScript.
- Consumo de dados utilizando Fetch API.
- Programação assíncrona com async/await.
- Manipulação dinâmica do DOM.
- Validação de formulários.
- Comparação de dados utilizando Arrays e Set.
- Estruturação de código seguindo boas práticas de organização e legibilidade.
- Utilização do Git e GitFlow para controle de versão durante o desenvolvimento.

---

# 👩‍💻 Autora

**Angélica Daiane Lorenz**

GitHub:

https://github.com/AngelicaLorenz

LinkedIn: 

https://www.linkedin.com/in/ang%C3%A9lica-lorenz-7ba38328b/

---
Trello:

https://trello.com/invite/b/6a4c524448b312ce3639f387/ATTI4a664056020ce245f771c5677d43188a0E9254A4/desafio-modulo-1-sctec

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do desafio do curso de Desenvolvimento Front-End - SCTEC / SENAI.