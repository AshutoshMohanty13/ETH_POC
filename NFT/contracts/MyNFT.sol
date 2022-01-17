// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Ashutosh", "ASH") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment(); //Auto Increment the token IDs while minting multiple NFT tokens.
        //the increment() is coming from counter.sol file

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId); //_mint() is a part of ERC721 file.
        _setTokenURI(newItemId, tokenURI); //tokenURI conatins the link for the image to be uploaded.
        return newItemId;
    }
}
