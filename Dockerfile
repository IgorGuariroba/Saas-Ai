# Imagem base.
FROM node:18.17.1

# Diretório de trabalho.
WORKDIR /usr/src/app

# Atualização do npm para a última versão.
RUN npm install -g npm@latest

# Download e instalação do Stripe CLI
RUN curl -L -O https://github.com/stripe/stripe-cli/releases/download/v1.17.2/stripe_1.17.2_linux_arm64.tar.gz \
  && tar -xvf stripe_1.17.2_linux_arm64.tar.gz \
  && mv ./stripe /usr/local/bin

# Definição de usuário não-root.
USER node

# Copiando os arquivos desejados do seu projeto para o diretório atual no container.
COPY --chown=node:node . .

# Instalação de dependências
RUN npm install

# Expondo a porta necessário.
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]