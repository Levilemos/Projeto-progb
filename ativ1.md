## 1. Quais tabelas foram definidas inicialmente?

- **User:** armazena os dados dos usuários da plataforma, como nome de usuário, e-mail, senha, biografia e data de cadastro.
- **Game:** armazena os jogos cadastrados, incluindo título, gênero, categoria, descrição e data de cadastro.
- **Library:** relaciona os usuários aos jogos que fazem parte de suas bibliotecas, permitindo registrar o status do jogo e se ele é favorito.
- **Review:** armazena as avaliações dos usuários para os jogos, incluindo a nota dada e a data da avaliação.
- **Comment:** armazena os comentários feitos pelos usuários sobre os jogos.

## 2. Foram utilizadas migrations? Se sim, quantas e qual a descrição de cada uma?

Sim. Foi utilizada **uma migration inicial**, chamada `initial`.

A migration `initial` é responsável por criar a estrutura inicial do banco de dados, incluindo as cinco tabelas definidas no projeto: `User`, `Game`, `Library`, `Review` e `Comment`, além dos seus respectivos campos, relacionamentos e restrições.

## 3. Qual é o caminho do arquivo que gera a seed do banco?

`/workspaces/nome-do-projeto/prisma/seed.ts`

## 4. Quais endpoints serão implementados inicialmente? Justifique.

- `GET /games` — lista os jogos cadastrados.
- `POST /games` — permite cadastrar um novo jogo.
- `GET /users` — lista os usuários cadastrados.
- `POST /users` — permite cadastrar um novo usuário.
- `POST /library` — adiciona um jogo à biblioteca de um usuário.
- `GET /users/:id/library` — consulta os jogos presentes na biblioteca de um determinado usuário.
- `POST /games/:id/reviews` — permite que um usuário faça uma avaliação de um jogo.
- `POST /games/:id/comments` — permite que um usuário faça um comentário sobre um jogo.

## 5. Está sendo utilizado algum framework para escrever os endpoints? Se sim, qual?

Sim. Está sendo utilizado o **Express**, um framework para Node.js, para a criação e organização dos endpoints da API.

Também está sendo utilizado o **Prisma** como ORM para realizar a comunicação entre a aplicação e o banco de dados SQLite.
