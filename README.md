# 📘 Módulo TypeScript

Bem-vindo à branch **`typescript`**! Este diretório contém projetos avançados e exercícios focados no aprendizado e aplicação prática da linguagem **TypeScript**.

---

## 📂 Projetos Destacados

### 💳 `Typescript_byte_bank/`
Aplicação ByteBank refatorada para **TypeScript puro**:
- **Orientação a Objetos (POO)**: Encapsulamento, classes, métodos e modelos de dados.
- **Tipagem Estática & Interfaces**: Garantia de integridade com tipos customizados (`Transacao`, `GrupoTransacao`, `FormatoData`).
- **Decorators & Utilities**: Padrões de projeto, utilitários de formatação de moeda/data e manipulação do DOM fortemente tipada.

### 📊 `typescript-curso-3/`
Projeto completo de controle de negociações financeiras:
- **Arquitetura MVC**: Separação clara entre *Models* (`negociacao.ts`, `negociacoes.ts`), *Views* (`negociacoes-view.ts`, `mensagem-view.ts`) e *Controllers* (`negociacao-controller.ts`).
- **Decorators Personalizados**: Medição de tempo de execução, inspeção de parâmetros e validações em tempo de compilação.
- **Consumo de API Externalizada**: Integração com servidor backend Express (`servidor-api`) para buscar negociações do dia.

---

## 🚀 Como Executar os Projetos

### 1. ByteBank TypeScript
```bash
cd Typescript_byte_bank
npm install
npm start
```

### 2. Projeto Negociações (`typescript-curso-3`)
Para rodar a aplicação frontend e a API simultaneamente:

1. **Inicie a API**:
   ```bash
   cd typescript-curso-3/servidor-api
   npm install
   npm start
   ```

2. **Inicie o Frontend**:
   ```bash
   cd typescript-curso-3
   npm install
   npm start
   ```

---

## 🔀 Voltar para a Branch Principal

Para retornar à documentação principal:
```bash
git checkout main
```
