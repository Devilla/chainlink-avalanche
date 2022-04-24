const  { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Pricefeed", function () {
  it("Should return the new price once it's changed", async function () {
    const Pricefeed = await ethers.getContractFactory("PriceConsumerV3");
    const pricefeed = await Pricefeed.deploy();
    await pricefeed.deployed();

    const getLatestPrice = await pricefeed.getLatestPrice();
    // log getLatestPrice
    console.log("=====> getLatestPrice:", getLatestPrice);
    
    expect(getLatestPrice.toNumber()).to.be.equal(7251106226);
  });
});
