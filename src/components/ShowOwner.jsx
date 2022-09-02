import React from "react";
async function showOwner() {
    let owner = await window.instance.owner();

    document.getElementById("owner").innerHTML ="Owner address is : " + owner;
}
export default function ShowOwner() {
    return (
    <>
        <br></br>
        <button type="button" onClick={showOwner} class="btn btn-outline-primary">Show Owner</button><br></br><br></br>
        <label id="owner"></label>
    </>
    );

}