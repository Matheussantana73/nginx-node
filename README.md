# nginx-node

## Descrição

Colocar em prática a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela `people`.

O retorno da aplicação node.js para o nginx deverá ser:

\<h1>Full Cycle Rocks!\</h1>

\- Lista de nomes cadastrada no banco de dados.

A aplicação estará disponível na porta `8080`.

## Comando
- `docker-compose up -d`