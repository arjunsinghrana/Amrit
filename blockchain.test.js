const Blockchain = require('./blockchain');

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('starts with genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    })
});