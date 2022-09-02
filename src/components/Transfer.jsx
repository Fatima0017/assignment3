import React from "react";
async function transfer() {
    let to = document.getElementById("addr").value;
    let amount = document.getElementById("tokens").value;

    let txHash = await window.instance.transfer(to, amount);
    txHash.wait();

    console.log("Transfer!");
}

function Transfer() {
    return (
        <>
            <h1>Transfer your Tokens here :)</h1><br></br>
            <div class="input-group input-group-sm mb-3" >
                <span class="input-group-text" id="inputGroup-sizing-sm">Enter recipient wallat address</span>
                <input type="text" id="addr" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Enter no. of tokens to transfer</span>
                <input type="numbers" id="token" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <button type="button" onClick={transfer} class="btn btn-outline-primary">Transfer Tokens</button><br></br><br></br>

        </>
    );

}
export default Transfer;