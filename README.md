# redis-http

simple health check endpoint over http for redis

use case scenario

aws target group health check only support http and http healthchecks protocols. This will allow you to bypass that

# redis-http install

docker pull simcoder/redis-http:latest

or clone this repo and run

docker build -t redis-http .