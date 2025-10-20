# 🍳 Quiz de Culinária

Este é um projeto de um simples quiz de culinária desenvolvido com Next.js, TypeScript e Tailwind CSS. O objetivo principal foi praticar e aplicar conceitos fundamentais do React, como gerenciamento de estado, componentização e renderização condicional.

## 📸 Demonstração

Aqui está uma visão de como o aplicativo funciona:

Tela de Pergunta:
<img width="1033" height="896" alt="image" src="https://github.com/user-attachments/assets/254d2804-fa4d-498d-86b8-7532fc4ce043" />

Tela de Resultado:
<img width="1136" height="897" alt="image" src="https://github.com/user-attachments/assets/26774974-d02c-4cb6-ba85-57a96caf45c5" />

*(**Nota:** Para que as imagens apareçam, faça o upload delas para o seu repositório e substitua as `URL_DA_SUA_IMAGEM...` pelo caminho real, por exemplo: `./demo/quiz.jpg`)*

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor e geração de sites estáticos.
* **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e responsiva.

## 🧠 Conceitos Aplicados

O foco deste projeto foi a aplicação prática de conceitos-chave do ecossistema React/TypeScript:

* **Gerenciamento de Estado**: Uso do hook `useState` para controlar a pergunta atual (`currentQuestion`), armazenar as respostas do usuário (`answers`) e alternar para a tela de resultado (`showResult`).
* **Componentização**: A aplicação foi dividida em componentes reutilizáveis:
    * `Card`: Componente principal que orquestra o estado e a lógica do quiz.
    * `Questions`: Componente para exibir a pergunta e as opções.
    * `Result`: Componente para exibir o resultado final.
    * `Button`: Componente de botão genérico.
* **Renderização Condicional**: Utilização de operadores lógicos (`&&`) e condicionais ternárias dentro do TSX para exibir o componente `Questions` ou `Result` com base no estado `showResult`.
* **Passagem de Props**: Comunicação de dados (ex: `question`) e funções (ex: `onClick={handleAnswered}`) de componentes pais para filhos.
* **Tipagem com TypeScript**: Aplicação de tipos para `props`, estados (`useState<number[]>`) e dados (ex: `listQuiz`).
* **Manipulação de Eventos**: Captura de cliques do usuário (`onClick`) para processar respostas e reiniciar o quiz.
* **Imutabilidade (Operador Spread)**: Uso do operador spread (`...`) na função `handleAnswered` para adicionar uma nova resposta ao array de estado de forma imutável:
    ```typescript
    setAnswers([...answers, answer]);
    ```

## 🚀 Como Executar o Projeto

Basta acessar meu deploy: https://quiz-with-next-app.vercel.app/
