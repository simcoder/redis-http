# redis-http

simple health check endpoint over http for redis

use case scenario:

  aws target group health check only support http and https healthchecks protocols. This will allow you to bypass that.

# redis-http install

`docker run -p 3000:3000 simcoder/redis-http:latest`

navigate to localhost:3000/health

or clone this repo and run

`docker build -t redis-http . && docker run -p 3000:3000 redis-http`

navigate to localhost:3000/health

