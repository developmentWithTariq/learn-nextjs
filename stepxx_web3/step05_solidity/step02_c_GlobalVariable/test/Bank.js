"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_network_helpers_1 = require("@nomicfoundation/hardhat-network-helpers");
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("Lock", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployOneYearLockFixture() {
        // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        // const ONE_GWEI = 1_000_000_000;
        // const lockedAmount = ONE_GWEI;
        // const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hardhat_1.ethers.getSigners();
        const Lock = await hardhat_1.ethers.getContractFactory("Lock");
        const lock = await Lock.deploy();
        return { lock, owner, otherAccount };
    }
    describe("Deployment", function () {
        it("Should set the right unlockTime", async function () {
            const { lock } = await (0, hardhat_network_helpers_1.loadFixture)(deployOneYearLockFixture);
            (0, chai_1.expect)(await lock.Amount()).to.equal(3000);
        });
    });
});
