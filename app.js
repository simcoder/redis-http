const express = require('express');
const process = require("child_process");

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    const result = process.execSync("redis-cli ping").toString();
    return res.status(200).send({ status: result.includes("PONG") ? 'UP' : 'DOWN' });
});

app.listen(port, () => console.log(`server started at port ${port}`))