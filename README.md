# Agil Store

## Descrição

Agil Store é um projeto Node.js que utiliza Express como framework web. Esta aplicação fornece uma API RESTful para gerenciamento de produtos em uma loja online.

## Versão

1.0.0

## Instalação

Para instalar as dependências do projeto, execute:

```
npm install
```

## Scripts

- `dev`: Inicia o servidor de desenvolvimento usando nodemon.

```
npm run dev
```

## Dependências

- dotenv: ^16.4.7
- express: ^4.21.2

## Dependências de Desenvolvimento

- nodemon: ^3.1.9

## Estrutura do Projeto

```
agil-store/
│
├── src/
│ ├── index.js
│ ├── app.js
│ ├── endpoints/
│ │ ├── router.js
│ │ └── productsEndpoints.js
│ ├── controllers/
│ │ └── products/
│ │ ├── index.js
│ │ ├── createProducts.js
│ │ ├── deleteProducts.js
│ │ ├── getAllProducts.js
│ │ ├── getProductsById.js
│ │ └── updateProducts.js
│ └── database/
│ └── database.json
│
├── .env
├── package.json
└── README.md
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione a variável `PORT` no `.env` se desejar usar uma porta específica.

## Inicialização do Servidor

O servidor é inicializado no arquivo `src/index.js`. Ele utiliza a porta definida na variável de ambiente `PORT` ou 3000 como fallback.

## API Endpoints

### Produtos

- `GET /products`: Retorna a lista de todos os produtos
- `GET /products/:id`: Retorna os detalhes de um produto específico
- `POST /products`: Cria um novo produto
- `PATCH /products/:id`: Atualiza as informações de um produto específico
- `DELETE /products/:id`: Remove um produto específico

## Funcionalidades Detalhadas

### Listagem de Todos os Produtos (getAllProducts)

- **Endpoint**: `GET /products`
- **Resposta de Sucesso**:
  - Código: 200 OK
  - Conteúdo: Array com todos os produtos do inventário
- **Resposta quando não há produtos**:
  - Código: 404 Not Found
  - Conteúdo: Mensagem indicando que nenhum produto foi encontrado

### Obtenção de Produto por ID (getProductByID)

- **Endpoint**: `GET /products/:id`
- **Parâmetros de URL**:
  - `id`: ID único do produto a ser obtido
- **Resposta de Sucesso**:
  - Código: 200 OK
  - Conteúdo: Objeto do produto solicitado
- **Resposta quando o produto não é encontrado**:
  - Código: 404 Not Found
  - Conteúdo: Mensagem indicando que o produto não está cadastrado

### Criação de Produto (createProduct)

- **Endpoint**: `POST /products`
- **Corpo da Requisição**:

```
{
"productName": "Nome do Produto",
"category": "Categoria do Produto",
"inStock": 100,
"price": 19.99
}
```

- **Resposta de Sucesso**:
- Código: 201 Created
- Conteúdo: Objeto do produto criado, incluindo o ID gerado

### Atualização de Produto (updateProduct)

- **Endpoint**: `PATCH /products/:id`
- **Parâmetros de URL**:
- `id`: ID único do produto a ser atualizado
- **Corpo da Requisição**:

```
{
"inStock": 150,
"price": 24.99
}
```

Nota: Ambos os campos são opcionais. Apenas os campos fornecidos serão atualizados.

- **Validações**:
- `inStock` deve ser um número, se fornecido
- `price` deve ser um número, se fornecido
- **Resposta de Sucesso**:
- Código: 201 Created
- Conteúdo: Objeto do produto atualizado
- **Resposta de Erro**:
- Código: 404 Not Found
- Conteúdo: Mensagem indicando que o produto não está cadastrado
- Código: 500 Internal Server Error
- Conteúdo: Mensagem de erro do servidor

### Exclusão de Produto (deleteProduct)

- **Endpoint**: `DELETE /products/:id`
- **Parâmetros de URL**:
- `id`: ID único do produto a ser excluído
- **Resposta de Sucesso**:
- Código: 200 OK
- Conteúdo: Inventário atualizado após a exclusão
- **Resposta de Erro**:
- Código: 404 Not Found
- Conteúdo: Mensagem indicando que o produto não foi encontrado

## Armazenamento de Dados

O projeto utiliza um arquivo JSON (`src/database/database.json`) como banco de dados simplificado para armazenar informações dos produtos. Este arquivo é manipulado em todas as operações CRUD.

## Tratamento de Erros

- Erro 400: Campos obrigatórios faltando ou inválidos
- Erro 404: Produto não encontrado
- Erro 500: Erros internos do servidor

## Desenvolvimento

Para testar os endpoints da API, use ferramentas como Postman ou curl. Exemplos:

```
Listar todos os produtos
curl http://localhost:3000/products
Obter um produto específico por ID
curl http://localhost:3000/products/[ID_DO_PRODUTO]
Criar um novo produto
curl -X POST http://localhost:3000/products
-H "Content-Type: application/json"
-d '{"productName":"Novo Produto","category":"Eletrônicos","inStock":50,"price":99.99}'
Atualizar um produto
curl -X PATCH http://localhost:3000/products/[ID_DO_PRODUTO]
-H "Content-Type: application/json"
-d '{"inStock": 150, "price": 24.99}'
Excluir um produto
curl -X DELETE http://localhost:3000/products/[ID_DO_PRODUTO]
```

## Repositório

GitHub: https://github.com/uri-hub/agil-store.git

## Problemas e Sugestões

Reporte problemas em: https://github.com/uri-hub/agil-store/issues

## Licença

ISC

```

```
