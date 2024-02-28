import logo from "./logo.svg";
import "./App.css";

import NftMint from "./layout/NftMint";
import { ConnectWallet } from "./components/connectWallet";
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
            <ConnectWallet />
          </div>
          <Routes>
            <Route path="/" element={<NftMint />} />
          </Routes>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
