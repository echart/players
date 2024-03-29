# Gerenciador de jogadores
[![Netlify Status](https://api.netlify.com/api/v1/badges/34bea57d-df32-484b-a9c2-92009eada5c6/deploy-status)](https://app.netlify.com/sites/stoic-fermat-c73065/deploys)


<details>
  <summary>Tabela de Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias:</a></li>
        <li><a href="#tecnologias">Status:</a></li>
        <li><a href="#estrutura">Estrutura:</a></li>
      </ul>
    </li>
    <li>
      <a href="#como-usart">Como Usar</a>
      <ul>
        <li><a href="#instalação">Instalação:</a></li>
        <li><a href="#configuração">Configuração:</a></li>
        <li><a href="#iniciando">Iniciando:</a></li>
      </ul>
    </li>
    <li>
      <a href="#demonstração">Demonstração:</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Esse projeto é um teste de frontend realizado para processo seletivo com o intuito de avaliar os conhecimentos técnicos.

<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>

### Tecnologias

Este projeto foi criado com create-react-app.  Abaixo todas as tecnologias/ferramentas usadas para construir esse projeto:

* [React.js](https://reactjs.org/)
* [Sass](https://github.com/sass/node-sass)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [graphql-request](https://github.com/prisma-labs/graphql-request)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)

<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>

### Status

O projeto foi finalizado seguindo as especificações enviadas, e as seguintes features foram implementadas:

- [x] Pegar jogadores da API Graphql
- [x] Listar jogadores
- [x] Filtrar jogadores por nome, gols ou jogos de forma ascendente ou descendente
- [x] Buscar jogador por nome
- [x] Editar jogador

<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>

### Estrutura

A estrutura inicial do projeto foi criada a partir do create-react-app, limpando apenas o que não seria utilizado. A estrutura segue a organização a seguir:

- src/components

  Onde estão todos os componentes utilizados pela aplicação. Exemplo: Players, Button, Input, Header

- src/config

  Arquivos de configuração do client do graphql e de endpoint

- src/hooks

  Hooks criados para consumir e tratar lógicas referentes a consumo e manipulação de dados, e/ou facilitar o reaproveitamento.

- src/pages

  Arquivos de páginas da aplicação

- src/routes

  Arquivos relacionados as configurações de rotas

- src/styles

  Arquivos comuns de estilos da aplicação. Exemplo: Variáveis, Tipografia, etc. Arquivos relacionados a estilização de cada componente ficam presentes no respectivo diretorio do componente.


<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>

## Começando

### Instalação

Instale usando o npm:
  ```sh
  npm install
  ```
### Configuração

1. Acesso o arquivo .env
2. Adicione o endpoint da sua API Graphql como no exemplo abaixo
   ```sh
   REACT_APP_ENDPOINT_URL=http://youapi.com/graphql

### Iniciando
Para iniciar o projeto:
  ```sh
  npm start
  ```

### Testes
Alguns testes unitários foram realizados durante o desenvolvimento para garantir funcionando de alguns componentes. Para rodar:
  ```sh
  npm run tests
  ```

<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>

## Demonstração
Para disponibilização de uma URL de teste, foi utilizado do serviço da [Netlify](http://netlify.com/), onde foi configurada uma pipeline de deploy continuo da branch Main.

### URL de Demonstração
 [https://stoic-fermat-c73065.netlify.app/](https://stoic-fermat-c73065.netlify.app/)


<p align="right">(<a href="#gerenciador-de-jogadores">Voltar ao topo</a>)</p>
