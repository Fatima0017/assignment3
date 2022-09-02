import React from "react";
function Navbar(){
   return(
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <br></br>
    <a class="nav-link" href="/">ERC-20 Contract</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <a class="nav-link" href="/Mint">Mint Token</a>
       <a class="nav-link" href="/Transfer">Transfer Token</a>
       <a class="nav-link" href="/CheckBalance">Check my Balance</a>
       <a class="nav-link" href="/showOwner">Show Owner</a>
      </ul>
    </div>
  </div>
</nav>

  
   );

}
export default Navbar;