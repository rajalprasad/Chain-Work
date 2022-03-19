const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Chain-Work", function () {
  it("Should return job description", async function () {
    const CW = await ethers.getContractFactory("ChainWork");
    const cw = await CW.deploy();
    await cw.deployed();

    const job1 = await cw.createWork(1, "Create NFT", 1);
    await job1.wait();
    const jobResult = await cw.getJobPost(1);
    const jd = (jobResult.jobDescription);
    expect(jd).to.equal("Create NFT");
  });
});