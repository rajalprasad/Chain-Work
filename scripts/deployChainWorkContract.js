const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ChainWork = await hre.ethers.getContractFactory("ChainWork");
  const chainwork = await ChainWork.deploy();

  await chainwork.deployed();

  console.log("Chain-Work deployed to:", chainwork.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
