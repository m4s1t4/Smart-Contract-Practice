const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const ethersContractFactory = await hre.ethers.getContractFactory("Ethers");
  const ethersContract = await ethersContractFactory.deploy();
  await ethersContract.deployed();

  console.log("Contract deployed to:", ethersContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  ethersCount = await ethersContract.getTotalEthers();

  let ethersTxn = await ethersContract.ethers();
  await ethersTxn.wait();

  ethersCount = await ethersContract.getTotalEthers();

  ethersTxn = await ethersContract.connect(randomPerson).ethers();
  await ethersTxn.wait();

  ethersCount = await ethersContract.getTotalEthers();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
