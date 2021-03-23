require("ts-node/register");
module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: 'localhost',
            port: 9545,
            network_id: '*',
            gas: 8000000,
            gasPrice: 1000000000, // web3.eth.gasPrice
        },
        coverage: {
            host: 'localhost',
            port: 8555,
            network_id: '*',
            gas: 8000000,
            gasPrice: 1000000000, // web3.eth.gasPrice
        }
    },
    compilers: {
        solc: {
            version: '0.4.26',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1024,
                }
            }
        },
    },
    plugins: ["solidity-coverage", "@chainsafe/truffle-plugin-abigen"],
    mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions : {
            currency: 'USD',
            gasPrice: 10,
            onlyCalledMethods: true,
            showTimeSpent: true,
            excludeContracts: ['Migrations']
        }
    }
};