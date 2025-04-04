# Projeto Docker com Node.js

Este é um projeto simples em Node.js com Express, containerizado com Docker para fins de aprendizado.

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

### 4. Acessar no navegador
[http://localhost:3000/get](http://localhost:3000/get)

---

Feito por Lucas Ventura
