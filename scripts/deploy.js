const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so takamanDevTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const takamanDevTokenContract = await ethers.getContractFactory(
      "TakamanDevToken"
  );

  // deploy the contract
  const deployedTakamanDevTokenContract = await takamanDevTokenContract.deploy(
      cryptoDevsNFTContract
  );

  await deployedTakamanDevTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
      "Takaman Dev Token Contract Address:",
      deployedTakamanDevTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
