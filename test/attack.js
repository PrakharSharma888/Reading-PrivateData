const { expect } = require('chai')
const { ethers } = require('hardhat')

describe("Attack", ()=>{
    it("Should be able to read the private values of username and password", async () => {

        const loginContract = await ethers.getContractFactory("Login");
        const username = ethers.utils.formatBytes32String("username1")
        const password = ethers.utils.formatBytes32String("password") // converting string to bytes32 to save space

        const deployedLoginContract = await loginContract.deploy(
            username,
            password
        )
        await deployedLoginContract.deployed()

        const slot0 = await ethers.provider.getStorageAt(
            deployedLoginContract.address,
            0
        )
        const slot1 = await ethers.provider.getStorageAt(
            deployedLoginContract.address,
            1
        )

        expect(ethers.utils.parseBytes32String(slot0)).to.equal("username1");
        expect(ethers.utils.parseBytes32String(slot1)).to.equal("password")
    })
})