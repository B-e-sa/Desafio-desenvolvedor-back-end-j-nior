# Desafio desenvolvedor back-end júnior

## Como rodar

*Opcional*
Você pode iniciar uma nova tabela do banco de dados<br>
rodando o arquivo docker (recomendado) no diretório root, com o comando:<br>
´´ docker compose up -d ´´
<br>
Utilize os comandos:
´´ npm install ´´
para instalar as dependências<br>

´´ npm run dev ´´
para iniciar o servidor e a conexão com o banco de dados.<br>
O banco relacional escolhido para aplicação foi o PostgreSQL e, <br> 
as informações de como ele foi configurado estão em ´´ \src\database\data-source.ts ´´.

## Requisições
A API recebe dois tipos de requisição, POST e GET.<br>

### POST
Um método POST para o endereço ´´ /api/v1/client ´´ envia para o servidor<br>
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

### GET
Um método GET para o endereço ´´ /api/v1/client ´´ trará uma resposta<br>
com todos os clientes presentes no banco de dados.
