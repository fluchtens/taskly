FROM node:lts-alpine

RUN apk update

WORKDIR /app

COPY package.json package-lock.json .
RUN npm install
COPY . .

COPY nginx.conf /etc/nginx/http.d/default.conf

EXPOSE 4200

CMD ["npm", "run", "dev"]
