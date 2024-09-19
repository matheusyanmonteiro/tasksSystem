# Sistema de Gerenciamento de Tarefas

## Descrição do Projeto

O **Sistema de Gerenciamento de Tarefas** é um aplicativo que permite aos usuários criar, editar e excluir tarefas de forma simples e eficiente. O sistema contará com autenticação de usuários, garantindo que cada usuário tenha acesso somente às suas próprias tarefas.

## Requisitos Funcionais

- **CRUD de Tarefas**: Permitir a criação, leitura, atualização e exclusão de tarefas.
- **Categorias**: Classificar tarefas em diferentes categorias (ex: trabalho, pessoal, estudos).
- **Prioridade**: Definir níveis de prioridade para as tarefas (alta, média, baixa).

## Requisitos Não Funcionais

- **Performance**: O sistema deve ser responsivo e suportar múltiplos usuários simultaneamente.
- **Segurança**: Implementar autenticação e proteção de dados do usuário.

## Primeiros Passos de Desenvolvimento

Para iniciar o desenvolvimento do projeto, utilizaremos as seguintes tecnologias:

- **Node.js 20** com **TypeScript**
- **Fastify** como servidor HTTP

### Configuração Inicial realizada para a criação do primeiro e segundo commit.

1. **Inicializar um novo projeto Node.js**:
   ``` npm init -y ```

2. **Instalar TypeScript e os tipos do Node**:
    ```npm install typescript @types/node -D ```

3. **Inicializar a configuração do TypeScript**:
    ```npx tsc --init```

4. **Inicializar fastify**: 
   ```npm install fastify```


## Como é a arquitetura do projeto? 

Para uma primeira visão a ideia é construir com uma arquitetura simples e facil, ainda não está analizado quais padrões serão utilizados neste projeto. 
```
/task-manager
├── src
|   ├── HTTP
│   ├── routes
│   ├── controllers
│   ├── models
│   └── services
├── tsconfig.json
└── package.json

```

## Próximos Passos 

1. Implementar o servidor Fastify: Configurar o servidor e as rotas básicas.

2. Criar o modelo de dados para tarefas: Definir como as tarefas serão armazenadas (banco de dados ou arquivo).

3. Implementar autenticação de usuários: Utilizar uma biblioteca como jsonwebtoken para gerenciar sessões.

## Conclusão

Este projeto do **Sistema de Gerenciamento de Tarefas** está atualmente em construção e evoluirá ao longo do tempo. O desenvolvimento será realizado de forma incremental, com cada nova funcionalidade sendo implementada e testada rigorosamente.

O versionamento será utilizado para documentar todas as alterações e melhorias feitas no sistema até a conclusão do projeto. Assim, será possível acompanhar o progresso e reverter mudanças, se necessário, garantindo a integridade do código.

Fique atento às atualizações e melhorias que virão, e sinta-se à vontade para contribuir ou sugerir ideias!
