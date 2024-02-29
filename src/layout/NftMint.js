import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import nftContractABI from "../contracts/CattyInu.json";
// const web3 = new Web3('https://goerli.infura.io/v3/af866b3a78ea49b3b95d7765f609e388');
// Create the Label{0x97e0566F4D780Cb81eFEDb07f9be49796F7F23f0}} here

const nftContractAddress = "0xc3a4dcf807e3aa288EeF55418239aEE9adcAc5D2";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const formatValue = (value) => {
  if(value < 10) return `0${value}`;
  return value;
}

const Info = ({title, value}) => {
  return (
    <div className="w-[200px] items-center px-4 text-white h-[70px] rounded-full border border-cyan-300 flex justify-between">
      <div className="pr-3 border-r">{title}</div>
      <div className="font-semibold text-[25px] pr-1">{value}</div>
    </div>
  )
}

const timer = 0;

function NftMint() {
  // const { library } = useAccount();
  const { library } = useWeb3React();
  console.log(library)
  const [msgOpen, setMsgOpen] = React.useState(false);
  const [msgText, setMsgText] = React.useState("");
  const [msgType, setMsgType] = React.useState("success");
  const [totalSupply, setTotalSupply] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  useEffect(()=>{
    getTotalSupply();
  },[library]);

  useEffect(()=>{
    setInterval(()=>{
      const currentTime = new Date();
      // Set the target time to 13:00 UTC on March 5th, 2024
      const targetTime = new Date("2024-03-05T13:00:00Z");

      // Calculate the difference in seconds
      if(targetTime > currentTime)
      {
        setHour(0); setDay(0); setMinute(0); setSecond(0); return;
      }
      const differenceInSeconds = Math.floor((currentTime - targetTime) / 1000);
      console.log(differenceInSeconds);
      setDay(Math.floor(differenceInSeconds / 3600 / 24));
      setHour(Math.floor(differenceInSeconds % (3600*24) / 3600));
      setMinute(Math.floor(differenceInSeconds % 3600 / 60));
      setSecond(differenceInSeconds % 60);
    }, 1000)
  }, []);

  const getTotalSupply = async () => {
    const web3 = new Web3(library.provider);
    const contract = new web3.eth.Contract(nftContractABI.abi, nftContractAddress);
    const total = parseInt(await contract.methods.totalSupply().call());
    setTotalSupply(total);
  }

  const mintNFT = async () => {
    if (!library || !library.provider) {
      setMsgType("error");
      setMsgText(`Connect wallet before mint NFT.`);
      setMsgOpen(true);
      return;
    }
      console.log("Started");

    const web3 = new Web3(library.provider);
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];

    const contract = new web3.eth.Contract(nftContractABI.abi, nftContractAddress);

    const index = parseInt(await contract.methods.totalSupply().call());

    const signer = library.getSigner();
    var price = Web3.utils.toWei("0.05", "ether");
    const result = await contract.methods
      .mint()
      .send({ value: price, from: currentAccount });
    setMsgType("success");
    setMsgText(`${index + 1} NFTs have already minted now`);
    setMsgOpen(true);
  };

  return (
    <div className="flex w-full items-center pt-[170px] gap-y-20 min-h-[100vh] bg-black flex-col">
      <div className="flex items-center flex-col gap-y-5">
        <div className="text-white font-extrabold text-[50px] lg:text-[70px] text-center"> COUNTDOWN TIMER</div>
        <div>
          <span className="text-white font-bold text-[25px]">start in: &nbsp; &nbsp;</span>
          <span className="text-gray-400 font-semibold text-[18px]">13:00 05/03/2024 (UTC)</span>
        </div>
        <div className="flex gap-x-3 items-center text-white"> <br/>
          <span className="p-4 rounded-3xl border-cyan-200 border text-white font-semibold text-[20px]">{formatValue(day)}</span><div className="hidden md:visible">Days</div> : &nbsp;&nbsp;
          <span className="p-4 rounded-3xl border-cyan-200 border text-white font-semibold text-[20px]">{formatValue(hour)}</span><div className="hidden md:visible">Hours</div> : &nbsp;&nbsp;
          <span className="p-4 rounded-3xl border-cyan-200 border text-white font-semibold text-[20px]">{formatValue(minute)}</span><div className="hidden md:visible">Minutes</div> : &nbsp;&nbsp;
          <span className="p-4 rounded-3xl border-cyan-200 border text-white font-semibold text-[20px]">{formatValue(second)}</span><div className="hidden md:visible">Seconds</div>  

        </div>
      </div>
      
      <div className="flex justify-center gap-x-5 flex-col md:flex-row gap-y-4">
        <Info title="Total Minted" value={totalSupply}/>
        <Info title="Total Nfts" value="150"/>
        <Info title="Total WhiteList" value="150"/>
      </div>

      

      <div
        onClick={() => mintNFT()}
        className="hover:scale-[1.02] my-5 cursor-pointer w-[200px] font-bold text-[16px] py-3 tracking-widest rounded-2xl border border-cyan-300 justify-center items-center flex text-[#DBD6B7] shadow-md shadow-cyan-700"
      >
        Mint NFT
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={msgOpen}
        autoHideDuration={6000}
        onClose={() => {
          setMsgOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setMsgOpen(false);
          }}
          severity={msgType}
          sx={{ width: "100%" }}
        >
          {msgText}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default NftMint;
