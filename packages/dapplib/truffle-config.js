require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift remember pizza mistake inner neck flock gas'; 
let testAccounts = [
"0xbf8731ee3e59f442144bba9e9a87431e67e2cae0db91dcf8273bafeb5e30ecd8",
"0x0b14a1e7afc6c94d3b20fbc6781efe729847d8c557ebef3b90fe89a0f74a3f4a",
"0x36a87f1f024ca63354842fb3d708d2514b36531964e6049575c84cdc457237bd",
"0x0f31efa9a85522830dcbbf66687d4cf31d9c07d526f315b44e23d0b3db56042d",
"0x448c6a4301f43b306e725ae1f27af8674beaf58dcd3b32416b853b18d941d8bc",
"0x59f2674257442eecc0a167721d3f19c789f2c6686daed2ee9277355eab6907b6",
"0xa9903e15fac77db1f026d187c5e08cdb115ec693843f75a7ccd10605e242d270",
"0xd1a5b66a3554fcb1eb1225a4ccee2ce808eb76151bb22df7b0b63e44cb3170de",
"0x1b1779d95febe1135d1f26ca0149d8f80ff20e6f9d3b24b42f88fff0b7e1faac",
"0x8a4f5c2a25a232e0e0df72624973e954d3b6c109237356ba52f862ba73d6c0d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


