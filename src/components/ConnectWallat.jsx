import React from "react";

async function connectMetmask() {
    if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        document.getElementById("address").innerHTML = account;
    } else {
        document.getElementById("address").innerHTML = "Please install Metamask";
    }
}
function ConnectWallat() {
    return (
        <>
            <br></br>
            <h3>Welcome to ConnectWallat page</h3><br></br>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button" onClick={connectMetmask}>Connect with my wallat</button>
            </div>
            <br></br>
            <div>
                <p class="fs-4">Your Wallat "Address" is given below :</p>
                <p class="fs-4" id="address"></p>

            </div>
            <br></br>
        </>
    );

}
export default ConnectWallat;