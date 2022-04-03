import { ICO, SpaceCoin, SpaceCoin__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
  const networkName = hre.network.name;
  let spaceCoin: SpaceCoin;
  let ico: ICO;
  let deployer: SignerWithAddress;

  if (networkName === "localhost") {
    [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const spaceCoinContract = (await ethers.getContractFactory("SpaceCoin")) as SpaceCoin__factory;
    const icoContract = await ethers.getContractFactory("ICO");
    spaceCoin = await spaceCoinContract.deploy(deployer.address);
    ico = await icoContract.deploy(spaceCoin.address, [deployer.address]);
    await spaceCoin.transfer(ico.address, ethers.utils.parseEther("150000")); // transfer 150000 supply to ico contract
    await spaceCoin.transfer(deployer.address, ethers.utils.parseEther("350000"));
    console.log("Spacecoin deployed to: ", spaceCoin.address);
    console.log("ICO deployed to: ", ico.address);
  }

  if (networkName === "rinkeby") {
    [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const spaceCoinContract = (await ethers.getContractFactory("SpaceCoin")) as SpaceCoin__factory;
    const icoContract = await ethers.getContractFactory("ICO");
    spaceCoin = await spaceCoinContract.deploy(deployer.address);
    ico = await icoContract.deploy(spaceCoin.address, [deployer.address]);
    await spaceCoin.transfer(ico.address, ethers.utils.parseEther("150000")); // transfer 150000 supply to ico contract
    await spaceCoin.transfer(deployer.address, ethers.utils.parseEther("350000")); // transfer remaining to treasury/deployer
    // TRANSFER OWNERSHIP TO GNOSIS MULTI-SIG
    await spaceCoin.transferOwnership("0xc20Dfc0eb8E64868c185FE1E6Bcc66Baf342898B");
    await ico.transferOwnership("0xc20Dfc0eb8E64868c185FE1E6Bcc66Baf342898B");
    console.log("Spacecoin deployed to: ", spaceCoin.address);
    console.log("ICO deployed to: ", ico.address);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
