import './App.css';
import { ethers } from "ethers";
import Navbar from './components/Navbar.jsx';
import Mint from './components/Mint.jsx';
import Transfer from './components/Transfer.jsx';
import ConnectWallat from './components/ConnectWallat.jsx';
import CheckBalane from './components/CheckBalance';
import ShowOwner from './components/ShowOwner';
const ContractAddress = "0x7909eF820F8b4DD89821239Dca79806B1B4D04A0";
let ABI = [
  "function mint(address recipient, uint amount) public",
  "function transfer(address to, uint amount) public",
  "function balances(address) public view returns(uint256)",
  "function owner() public view returns(address)",
];

let mnemonic =
  "return happy milk ability moment bench input alien arrive success ritual present";
let wallet = ethers.Wallet.fromMnemonic(mnemonic);
let provider = new ethers.providers.InfuraProvider(
  "rinkeby",
  "d45d013ff4d24c6f89aac01e98e07cf8"
);
wallet = wallet.connect(provider);

window.instance = new ethers.Contract(ContractAddress, ABI, wallet);

function App() {
  let compo;
  switch (window.location.pathname) {
    case "/":
      compo = <ConnectWallat></ConnectWallat>;
      break;
    case "/Mint":
      compo = <Mint></Mint>;
      break;
    case "/Transfer":
      compo = <Transfer></Transfer>;
      break;
    case "/CheckBalance":
      compo = <CheckBalane></CheckBalane>
      break;
    case "/showOwner":
      compo = <ShowOwner></ShowOwner>
      break;
    default:
      compo = "More features are comming soon stay tune :)!";
  }

  return (
    <div className="App">
      <h1>Welcome to My "ERC-20 contract" app</h1>
      <Navbar></Navbar>
      {compo}
    </div>
  );
}

export default App;
