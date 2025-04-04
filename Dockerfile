# Usa imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
