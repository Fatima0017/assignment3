import React from "react";
async function mint() {

    let recipient = document.getElementById("addr").value;
    let amount = document.getElementById("token").value;

    let txHash = await window.instance.mint(recipient, amount);
    txHash.wait();

    console.log("Minted!");
}
function Mint() {
    return (
        <>
            <h1>Minting Your Tokens here :) </h1><br></br>
            <div class="input-group input-group-sm mb-3" >
                <span class="input-group-text" id="inputGroup-sizing-sm">Enter wallat address</span>
                <input type="text" id="addr" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Enter no. of tokens to mint</span>
                <input type="numbers" id="token" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <button type="button" onClick={mint} class="btn btn-outline-primary">Mint Tokens</button><br></br><br></br>

        </>
    );

}
export default Mint;