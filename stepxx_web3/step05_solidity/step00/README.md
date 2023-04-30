# Understanding Solidity and Solidity files

First of All you need to install solidity compiler.
```
Install npm install -g solc
```

Install solidity extension from your VS Code Extensions.

To create the hardhat project follow this https://hardhat.org/tutorial/creating-a-new-hardhat-project


Read page no 63 to 66 of SOLIDITY_PROGRAMMING_ESSENTIALS to unnderstand Pragma, Comments, Importing Solidity code and Contracts.

## Directory Structure

1. Contract directory contains Smart Contract files with .sol extension.
2. Script directory contains scripts, Typescript file which will deploy smart contract to blockchain.
3. Test directory cotains test scripts, use to test smart contract.

Open contracts folder, and rename Lock.sol file to Bank.sol. Remove all the code and paste bellow code.
```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Bank {

    function Amount() public pure returns (uint) {
        return 3000;
    }

}
```
2. Open deploy.ts file in scripts folder replace all the existing code with bellow code.
```
import { ethers } from "hardhat";

async function main() {

  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();

  await bank.deployed();

  console.log(
    `Lock with ${await bank.Amount()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

```
Above code is just deploying your contract on hardhat node, and calling Amount function which is return 3000.
To understand all about Smart contract Testing follow Step04Hardhat

3. Open Bank.ts file in test folder replace all the existing code with bellow code.

```
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployOneYearLockFixture() {

    const Bank = await ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();

    return { bank  };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { bank } = await loadFixture(deployOneYearLockFixture);

      expect(await bank.Amount()).to.equal(3000);
    });
  });
});
```
Above code is just trying to Test weather our Amount function of Bank contract is return 3000 or not.
To understand all about Smart contract Testing follow Step04Hardhat

