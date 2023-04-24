# Understanding Solidity and Solidity files
https://hardhat.org/tutorial/creating-a-new-hardhat-project
To create the hardhat project, First of All you need to install solidity compiler.

Install solidity extension from your VS Code Extensions.

## Directory Structure

1. Contract directory contains Smart Contract files with .sol extension.
2. Script directory contains scripts, Typescript file which will deploy smart contract to blockchain.
3. Test directory cotains test scripts, use to test smart contract.

go to contracts, and open Lock.sol file. Remove all the code and paste bellow code.
```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Lock {

    function Greet() public {
        return "Hello world";
    }

}
```
To understand **Pragma** and **commit** read Book solidity
