# :construction: README em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
## Rodando a aplicação com Docker:
```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d

# É possível ver os logs da aplicação com `docker logs -n 20 -f <nome-do-container>`
docker logs -n 20 -f store_manager
```
## Rodando a aplicação localmente:
```bash
# Instale as dependências
npm install

# Inicie apenas o serviço `db` no compose
docker-compose up -d db

# Inicie a aplicação em modo de desenvolvimento
npm run dev:local
```
## Rotas:
### get
```bash
# Retorna todos os produtos
http://localhost:3001/products/

# Retorna o produto com id /:id
http://localhost:3001/products/:id

# Retorna todas as vendas
http://localhost:3001/sales

# Retorna a venda com o id /:id
http://localhost:3001/sales/:id
```

### post
```bash
# Cadastra novo produto
http://localhost:3001/products
req.body = { "name": "Produto" };

# Cadastra nova venda
http://localhost:3001/sales
req.body = [{ "productId": 1, "quantity": 5 }, { "productId": 2, "quantity": 1 }];
```

### put
```bash
# Atualiza o produto com o id entregue
http://localhost:3001/products/:id
req.body = { "name": "Essência de café" };
```
