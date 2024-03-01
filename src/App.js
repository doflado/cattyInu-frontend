import logo from "./logo.svg";
import "./App.css";

import NftMint from "./layout/NftMint";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Header from "./layout/Header";
import Body from "./layout/Body";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
          </Routes>
        </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
