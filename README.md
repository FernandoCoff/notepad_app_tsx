# Notepad App (Frontend)

Este é o repositório para o frontend da aplicação **Notepad**, uma interface simples e moderna para criar, visualizar, editar e deletar notas. A aplicação foi desenvolvida com React, TypeScript e Styled Components.


## ▶️ Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados na sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* O **servidor backend** do Notepad deve estar em execução. Este projeto é apenas o frontend e precisa da API para funcionar.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/FernandoCoff/notepad_app_tsx.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd notepad_app_tsx
    ```

3.  **Instale as dependências:**
    * Usando NPM:
        ```bash
        npm install
        ```
    * Ou usando Yarn:
        ```bash
        yarn install
        ```

4.  **Configuração da API (Opcional):**
    Este projeto se conectará por padrão à API no endereço `http://localhost:3333`. Se a sua API estiver rodando em um endereço diferente, siga as instruções na seção **Variáveis de Ambiente**.

5. **formate o código**
   * Usando NPM:
        ```bash
        npm run format
        ```
    * Ou usando Yarn:
        ```bash
        yarn format
        ```

7.  **Inicie o servidor de desenvolvimento:**
    * Usando NPM:
        ```bash
        npm start
        ```
    * Ou usando Yarn:
        ```bash
        yarn start
        ```

8.  Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) (ou a porta que for indicada no seu terminal) para ver a aplicação.

---

## ⚙️ Variáveis de Ambiente (.env)

A comunicação com o backend é configurada através de variáveis de ambiente.

Este passo é **opcional**. Se você não criar um arquivo `.env`, a aplicação usará o valor padrão `http://localhost:3333` para se conectar à API.

Para configurar um endereço de API diferente, crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
REACT_APP_API_URL=http://sua-api-aqui:3000
```

Substitua `http://sua-api-aqui:3000` pela URL base do seu servidor backend.

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)**: Biblioteca para construir a interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
* **[Styled Components](https://styled-components.com/)**: Para estilização CSS-in-JS.
* **[Axios](https://axios-http.com/)**: Cliente HTTP para fazer requisições à API.
* **[ESLint](https://eslint.org/)**: Para linting e padronização de código.

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode rodar:

* `npm start`: Inicia a aplicação em modo de desenvolvimento.
* `npm run build`: Compila a aplicação para produção na pasta `build`.
* `npm test`: Executa os testes em modo interativo.
