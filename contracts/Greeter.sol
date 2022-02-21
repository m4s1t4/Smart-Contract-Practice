//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Ethers  {
    uint256 totalEthers;

    function ethers() public {
        totalEthers += 1;
        console.log("%s Optained an ethers!", msg.sender);
    }
    function getTotalEthers() public view returns(uint256) {
        console.log("You have %d as total ethers", totalEthers);
        return totalEthers;
    }
}
