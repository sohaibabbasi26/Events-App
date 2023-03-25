FROM node:16-alpine

WORKDIR /app

COPY package.json /app/ 

COPY ./ ./   

RUN npm install --force
RUN npm run build

EXPOSE 3000


CMD ["npm", "start"]