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
