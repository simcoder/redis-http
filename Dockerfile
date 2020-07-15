FROM redis:alpine
COPY redis.conf /usr/local/etc/redis/redis.conf

EXPOSE 6379

RUN apk add --update nodejs npm
WORKDIR /app
COPY app.js .
COPY package.json .

RUN npm install && \
    npm install -g concurrently 

EXPOSE 3000

CMD concurrently "redis-server /usr/local/etc/redis/redis.conf" "sleep 5s; node app.js" 


