
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying the contract with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    const ethersContractFactory = await hre.ethers.getContractFactory("Ethers");
    const ethersContract = await ethersContractFactory.deploy();
    await ethersContract.deployed();

    console.log("Ethers address: ", ethersContract.address);
};

const runMain = async () =>{
    try{
        await main();
        process.exit(0);
    }catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();


