async function main() {
  const [deployer] = await ethers.getSigners();

  const PancakePair = await ethers.getContractFactory("PancakePair");
  const pancakePair = await PancakePair.deploy();
  console.log("address:", pancakePair.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
