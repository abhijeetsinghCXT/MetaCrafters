/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftStorage = [];


function mintNFT (characterName, eyeHue, apparelType, extraFeatures) {
    const nft = { characterName, eyeHue, apparelType, extraFeatures };
    nftStorage.push(nft);
    console.log(`Minted: ${characterName}`);
}
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.



function listNFTs () {
    nftStorage.forEach(nft => console.log(nft));
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function getTotalSupply() {
    console.log(nftStorage.length);
}


// print the total number of NFTs we have minted to the console

// call your functions below this line

mintNFT('Alice', 'Green', 'T-Shirt', 'Silver Ring');
mintNFT('Bob', 'Blue', 'Hoodie', 'Gold Chain');
mintNFT('Charlie', 'Brown', 'Sweater', 'Bracelet');

// Minting at least three NFTs


// Displaying details of the NFTs
listNFTs();
getTotalSupply();

