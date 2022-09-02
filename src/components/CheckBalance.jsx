import React from "react";
async function getBalance() {
    let address = document.getElementById("addr").value;

    let balance = await window.instance.balances(address);

    document.getElementById("6").innerHTML ="Your wallat has "+ balance + ".";
}
export default function CheckBalane() {
    return (
        <>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Wallat address</label>
                <input type="text" id="addr" class="form-control" placeholder="0X12344.." /><br></br>
                <button type="button" onClick={getBalance} class="btn btn-outline-primary">Show Balance</button><br></br><br></br>
                <label id="6"></label>
            </div>
        
        </>
    );

}