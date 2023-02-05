# Projeto de backend: LaBook

> O intuito deste projeto é repoduzir uma API que se assemelha aos processos de uma rede social.

**Endpoints possiveis:**

- Buscar todos os usuários,
- Buscar todos os posts,
- Buscar um post pelo seu id,
- Buscar o feed trazendo todos os post dos amigos de um determinado usuário,
- Criar um novo usuário,
- Criar um novo post,
- Fazer uma nova amizade,
- Desfazer uma amizade

**Tecnologias usadas:**

- NodeJS,
- Typescript,
- Express,
- Knex,
- SQL
- UUID

**Instruções para rodar o projeto**

O arquivo *requests.rest*, presente na pasta raiz do projeto, contém todos os endpoints com url do deploy disponível online (Render)

Caso queira rodar o projeto localmente, as instruções são:

```
git clone https://github.com/future4code/Barros-labook3.git

cd Barros-labook3 -> para entrar na pasta raiz do projeto

npm install -> para instalar as dependências do projeto

criar um arquivo .env com as informações do seus banco de dados

npm run migrations -> para criar as tabelas no seu banco de dados

npm run dev -> para rodar o servidor
```

Instruções para preencher o arquivo dotenv:

criar um arquivo .env na pasta raiz com as seguintes variáveis:

        DB_HOST: ,
        DB_USER: ,
        DB_PASS: ,
        DB_NAME: ,

*Preencher as variáveis com as informações do seu banco de dados.*
