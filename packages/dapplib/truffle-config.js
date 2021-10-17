require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pull install climb obscure side'; 
let testAccounts = [
"0xc8fb3b8caf598ca7297bcb5825248cbaab9e81276f583139b6fbbae5a215d816",
"0xaa161e3658a631e522cc6bce7d22c7d02b95fd6c4d20cff5c56a64927a1d002e",
"0xa392b1904a42eff65af2822c614ced78a3b1f3d0887fc57c1a37b16edd56ca74",
"0xc106aafeb6605364074150889bc226693e28be5c6ed1c7ee72a88f0464738610",
"0xf38f1ffcad7f57b695d2d651200a75b4923a0e4434b36db7df2426eff9ed6b1a",
"0x40c097e58a8cf15c839ca9d796c9ec0fa0b5e1c01f615421a88e71b7afe84385",
"0x68f8cd16fb3c2496b3fdea0aedd6cf0d80f07c44cc2e47976979f2010b97f043",
"0x1b2ff0056e926b840debbc64f799843341401af9e8408453fc7520d8f6c96ba1",
"0x57dd4ef8f0815e2395e80c42ac4eca36b9d0c0feadc5f94f7092028821b64fb4",
"0xe37db258e0626bca993e9fa7696607b581ab570c34b0aba245ce3065333abb36"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

