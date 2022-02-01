/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "A4EyEfv61x3agjnExZ990tGg0hX1tWSA";
const ROPSTEN_PRIVATE_KEY =
  "804163ab24d3a7fc26fee63c0b10dcfdc7bd5a9c698f0da5f6d662ab65f454be";
module.exports = {
  solidity: "0.5.16",

  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
