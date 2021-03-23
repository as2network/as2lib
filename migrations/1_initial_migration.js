const Migrations = artifacts.require('./Migrations.sol');
const Soliditemp = artifacts.require('./AS2.sol');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(AS2);
};
