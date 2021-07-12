FROM node:slim

LABEL author="my.email.address@gmail.com"

WORKDIR /app

# copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install

CMD ["node", "index.js"]