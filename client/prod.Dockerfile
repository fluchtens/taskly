FROM node:lts-alpine

RUN apk update && \
    apk add nginx

WORKDIR /app

COPY package.json package-lock.json .
RUN npm install
COPY . .

RUN npm run build

COPY nginx.conf /etc/nginx/http.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
