# API Challange

Repositório contendo o código fonte do desafio de integração com a API de usuários https://jsonplaceholder.typicode.com/users.

## Rodando a aplicação com Node

Para rodar a aplicação diretamente, é necessário ter o Node instalado. O processo de instalação do node pode ser encontrado [aqui](https://nodejs.org/en/download/).

Após a instalação do node, basta rodar o comando

```shell
npm install
```

no Terminal/CMD/PowerShell, na raiz do projeto, para instalar as **dependências do projeto**. Logo em seguida, rode o comando

```shell
npm start
```

Em alguns momentos, a aplicação estará pronta para uso, acessível pela porta `3000`.

## Rodando a aplicação com Docker

Para rodar a aplicação usando Docker, basta baixar a imagem do projeto direto do Docker Hub rodando o comando

```shell
docker pull tavaresl1/api-challange
```

no Terminal/CMD/PowerShell.

Caso deseje gerar a imagem docker da aplicação diretamente em sua máquina, basta rodar o comando

```shell
docker build -t tavaresl1/api-challange .
```

no Terminal/CMD/PowerShell.

Após a imagem estar disponível em sua máquina, basta rodar o comando

```shell
docker run --name api-challange -p 8080:8080 -d --restart always tavaresl1/api-challange
```

## Rodando os testes

Para rodar os testes unitários da aplicação, basta rodar o comando 

```shell
npm test
```

no Terminal/CMD/PowerShell

## Endpoints da aplicação

A aplicação disponibiliza três endpoints, cada um referente a um item do desafio.

São eles:

- `GET: http://localhost:8080/user` <br>
  O Nome, email e a empresa em que trabalha (em ordem alfabética).

- `GET: http://localhost:8080/user/websites` <br>
  Os websites de todos os usuários

- `GET: http://localhost:8080/user/addresses/suites` <br>
  Mostrar todos os usuários que no endereço contem a palavra ```suite```