import logo from "./logo.svg";
import "./App.css";

import NftMint from "./layout/NftMint";
import Reward from "./layout/Reward";
import { ConnectWallet } from "./components/connectWallet";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <div className="z-10 absolute right-5 top-8">
            <ConnectButton />
          </div>
          <Routes>
            <Route exact path="/mint" element={<NftMint />} />
            <Route path="/" element={<NftMint />} />
            <Route path="/reward" element={<Reward />} />
          </Routes>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
