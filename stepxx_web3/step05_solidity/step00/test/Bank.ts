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
