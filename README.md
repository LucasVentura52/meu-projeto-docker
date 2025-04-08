# Projeto Docker com Node.js

Este é um projeto simples em Node.js com Express Ele fornece uma API com rotas que retornam dados de pessoas.

## 🛠 Como rodar

### 1. Clonar o repositório
```bash
git clone https://github.com/LucasVentura52/meu-projeto-docker.git
cd meu-projeto-docker
```

### 2. Build da imagem
```bash
docker build -t meu-projeto-docker .
```

### 3. Rodar o container
```bash
docker run -p 3000:3000 meu-projeto-docker
```

### 4. Acessar no navegador ou via API

#### ➤ Listar todas as pessoas
[http://localhost:3000/pessoas](http://localhost:3000/pessoas)

**Exemplo de resposta:**
```json
[
  { "id": 1, "nome": "João", "idade": 30 },
  { "id": 2, "nome": "Maria", "idade": 25 },
  { "id": 3, "nome": "Carlos", "idade": 40 }
]
```

#### ➤ Buscar pessoa por ID
[http://localhost:3000/pessoas/1](http://localhost:3000/pessoas/1)

**Exemplo de resposta:**
```json
{ "id": 1, "nome": "João", "idade": 30 }
```

---

Feito por Lucas Ventura
