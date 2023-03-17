# Desafio desenvolvedor back-end júnior

## Como rodar

### *Opcional*<br>
Você pode iniciar uma nova tabela do banco de dados<br>
rodando o arquivo docker (recomendado) no diretório root, com o comando:<br>
`` docker compose up -d ``
<br>

### Utilize os comandos:

`` npm install ``<br>
Para instalar as dependências.<br>

`` npm run dev ``<br>
Para iniciar o servidor e a conexão com o banco de dados.<br>

`` npm run typeorm migration:run ``<br>
Para executar a migration *(opcional)*.

O banco relacional escolhido para aplicação foi o PostgreSQL e, <br> 
as informações de como ele foi configurado estão em `` .\src\database\data-source.ts ``.

## Requisições
A API recebe dois tipos de requisição, POST e GET.<br>
URL padrão: http://localhost:3000/api/v1/client<br>
URL de procura por precatório: http://localhost:3000/api/v1/client/precatory

### POST
O endereço `` /api/v1/client `` espera de um método POST<br>
os parâmetros de email, cpf, nome e numero celular de um formulário<br>
e os armazena no banco de dados. Por exemplo:

```json
{
    "email": "test@gmail.com",
    "cpf": "1111111111",
    "phone": "31991111111",
    "name": "besa"
}
```

As informações repetidas, nulas ou inválidas são tratadas pelo backend<br>
ou pelo próprio banco.

Exemplo de erro (campo repetido):

```json
{
    "error": {
        "message": "key already exists",
        "code": "23505",
        "detail": "Key (email)=(test@gmail.com) already exists.",
        "name": "QueryFailedError",
        "routine": "_bt_check_unique"
    },
}
```

Um método POST para o endereço `` /api/v1/client/precatory `` trará uma resposta<br>
com todos os precatorios feitos entre duas datas fornecidas. Exemplo:

```json
{
	"createdDate": "2023-03-14T08:23:24.714Z", 
	"finalDate": "2023-03-30T08:00:00.000Z"
}
```

retornará:

```json
{
  "id": 1,
  "name": "marcos",
  "email": "test@gmail.com",
  "cpf": "12345667821",
  "phone": "31998511111",
  "created_at": "2023-03-14T08:23:24.714Z"
}
```


### GET
Um método GET para o endereço `` /api/v1/client `` trará uma resposta<br>
com todos os clientes presentes no banco de dados. Exemplo:

```json
[
 {
  "id": 1,
  "name": "marcos",
  "email": "test@gmail.com",
  "cpf": "12345667821",
  "phone": "31998511111",
  "created_at": "2023-03-14T08:23:24.714Z"
 }
]
```
