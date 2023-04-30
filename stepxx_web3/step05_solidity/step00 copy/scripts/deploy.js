"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    const Bank = await hardhat_1.ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    await bank.deployed();
    console.log(`Lock with ${await bank.Amount()}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
