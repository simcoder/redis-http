const express = require('express');
const process = require("child_process");

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    const result = process.execSync("redis-cli ping").toString();
    return result.includes("PONG") ? res.status(200).send({ status:  'UP' }) : res.status(503).send({ status:  'DOWN' });
});

app.listen(port, () => console.log(`server started at port ${port}`))