FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY public /app/public
COPY package.json /app/package.json
COPY src /app/src
COPY .env /app
RUN npm install 
RUN npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]
