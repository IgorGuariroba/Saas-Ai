# Imagem base.
FROM node:18.17.1

# Diretório de trabalho.
WORKDIR /usr/src/app

# Atualização do npm e instalação do apt-transport-https para a instalação do Stripe CLI.
RUN npm install -g npm@latest \
  && apt-get update \
  && apt-get install -y apt-transport-https

# Chave GPG e repositório do Stripe CLI.
RUN apt-key adv --keyserver hkp://pool.sks-keyservers.net --recv-keys 379CE192D401AB61 \
  && echo "deb https://dl.bintray.com/stripe/stripe-cli-deb stable main" | tee -a /etc/apt/sources.list

# Atualização da lista de pacotes e instalação do Stripe CLI.
RUN apt-get update \
  && apt-get install -y stripe

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