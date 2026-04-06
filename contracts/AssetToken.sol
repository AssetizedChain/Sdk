// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetToken is ERC721, Ownable {
    uint256 public tokenCounter;

    struct Asset {
        string name;
        string metadataURI;
        uint256 value;
    }

    mapping(uint256 => Asset) public assets;

    constructor() ERC721("Assetized RWA", "ARWA") {
        tokenCounter = 0;
    }

    function tokenizeAsset(
        address owner,
        string memory name,
        string memory metadataURI,
        uint256 value
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = tokenCounter;

        _safeMint(owner, tokenId);

        assets[tokenId] = Asset(name, metadataURI, value);

        tokenCounter++;

        return tokenId;
    }

    function getAsset(uint256 tokenId) public view returns (Asset memory) {
        return assets[tokenId];
    }
}
