const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const P2PServer = require('./p2p-server')

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2PServer(bc);

app.use(bodyParser.json());

app.get('/blocks', (request, response) => {
    response.json(bc.chain);
});

app.post('/mine', (request, response) => {
    const block = bc.addBlock(request.body.data);
    console.log(`New block added: ${block.toString()}`);

    p2pServer.syncChains();

    response.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
});

p2pServer.listen();