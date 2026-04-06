const hre = require("hardhat");

async function main() {
  const AssetToken = await hre.ethers.getContractFactory("AssetToken");
  const contract = await AssetToken.deploy();

  await contract.waitForDeployment();

  console.log("AssetToken deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
