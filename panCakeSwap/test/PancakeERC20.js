const { expect } = require("chai");
const { ethers } = require("hardhat");

const TOTAL_SUPPLY = BigInt(10000e18);
const TEST_AMOUNT = BigInt(10e18);

const { solidity, MockProvider, deployContract } = require("ethereum-waffle");
const ERC20 = "../build/ERC20.json";

describe("PancakeERC20", async () => {
  let wallet;
  let other;
  let token;
  [wallet, other] = await ethers.getSigners();
  let provider = await ethers.getContractFactory("PancakeERC20");
  console.log(provider);
  token = await provider.deploy();
});
