const hre = require('hardhat');

async function getBalances(address) {
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.formatEther(balanceBigInt);
}


async function consoleBalance(addresses) {
    let counter = 0;
    for (const address of addresses) {
        console.log(`Address ${counter} balance:`, await getBalances(address));
        counter++;
    }
}

async function getMemo(memos) {
    for (const memo of memos) {
        const timestamp = memo.timestamp;
        const name = memo.name;
        const from = memo.from;
        const message = memo.message;
        console.log(`At ${timestamp}, name ${name}, address ${from}, message ${message}`);
    }
}

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const Carbon = await hre.ethers.getContractFactory("Carbon");
    const contract = await Carbon.deploy();
    
    
    await contract.waitForDeployment();
    const contractAddress = await contract.getAddress(); 
    
    console.log("Address of contract", contractAddress);

    const addr = [owner.address, from1.address, from2.address,from3.address];
    console.log("Before buying credits");
    await consoleBalance(addr);

    const amount = { value: hre.ethers.parseEther("1") };
    await contract.connect(from1).buyCredits("from1", "Credit 1", amount);
    await contract.connect(from2).buyCredits("from2", "Credit 2", amount);
    await contract.connect(from3).buyCredits("from3", "Credit 3", amount);

    console.log("After buying credits");
    await consoleBalance(addr);

 const memos = await contract.getMemo()
 getMemo(memos)


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});




