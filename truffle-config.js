const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    }
  },
  compilers:{
    solc:{
      version:"0.6.4",
      parser:"solcjs",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,   // Optimize for how many times you intend to run the code
        },
    }
  }
}
}
;
