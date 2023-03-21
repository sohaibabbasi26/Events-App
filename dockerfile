FROM node:18

WORKDIR /my-app

COPY package.json .

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]