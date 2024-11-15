# Etapa de build para a aplicação React
FROM node:14-alpine AS build

# Definir diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Etapa para servir a aplicação com Nginx
FROM nginx:alpine

# Copiar a build da aplicação React para o diretório de configuração do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 3000 (garantindo que a porta correta será acessível)
EXPOSE 3000

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
