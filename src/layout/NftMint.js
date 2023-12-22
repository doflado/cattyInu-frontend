import React, { useState, useTransition } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import LazyMinter from "../lib/LazyMint";
import { ConnectWallet } from "../components/connectWallet";
import { useWeb3React } from "@web3-react/core";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import IconicNFT from "../contracts/IconicNFT.json";
import LuxuryNFT from "../contracts/LuxuryNFT.json";
import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
// const web3 = new Web3('https://goerli.infura.io/v3/af866b3a78ea49b3b95d7765f609e388');
// Create the Label{0x97e0566F4D780Cb81eFEDb07f9be49796F7F23f0}} here

const IconicNFTAddress = "0x1bb3aca48868Af7F503A52aF56fcD93237e236a2";
const LuxuryNFTAddress = "0x940aC5602042C4074eDD3FF0d04b369B91BCfC8B";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NftMint() {
  const [isHovered, SetIsHovered] = useState(false);
  // const { library } = useAccount();
  const { library } = useWeb3React();
  const [msgOpen, setMsgOpen] = React.useState(false);
  const [msgText, setMsgText] = React.useState("");
  const [msgType, setMsgType] = React.useState("success");

  const mintIconicNFT = async () => {
    if (!library || !library.provider) return;

    // account information
    const web3 = new Web3(library.provider);
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];

    const contract = new web3.eth.Contract(IconicNFT.abi, IconicNFTAddress);
    const cnt = 1;
    const index = parseInt(await contract.methods.getLastTokenId().call());

    const signer = library.getSigner();
    const lazyMinter = new LazyMinter({ contract, signer });
    var price = Web3.utils.toWei("0.06", "ether");
    console.log(signer);
    const vouchers = await lazyMinter.createVoucher(
      parseInt(index),
      "https://ipfs.io/ipfs/bafybeiepzg6e7oes2ifdgxmn6anepetmnqgiqh42tbjjnhv4ukx5ll73ga/2.json",
      price,
      cnt
    );
    // console.log(signature);
    const valueToSend = price * cnt;
    console.log(currentAccount, vouchers, cnt, valueToSend, currentAccount);
    const result = await contract.methods
      .redeem(currentAccount, vouchers, cnt)
      .send({ value: valueToSend, from: currentAccount });
    console.log(result);
    setMsgType("success");
    setMsgText(`${index + 1} Iconic NFTs have already minted now`);
    setMsgOpen(true);
  };

  const mintLuxyuryNFT = async () => {
    if (!library || !library.provider) return;
    console.log("Hello");
    const web3 = new Web3(library.provider);
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];

    const contract = new web3.eth.Contract(LuxuryNFT.abi, LuxuryNFTAddress);
    console.log(LuxuryNFTAddress);
    const cnt = 1;
    const index = parseInt(await contract.methods.getLastTokenId().call());

    console.log(index);

    const signer = library.getSigner();
    const lazyMinter = new LazyMinter({ contract, signer });
    var price = Web3.utils.toWei("0.006", "ether");
    console.log(signer);
    const vouchers = await lazyMinter.createVoucher(
      parseInt(index),
      "https://ipfs.io/ipfs/bafybeiepzg6e7oes2ifdgxmn6anepetmnqgiqh42tbjjnhv4ukx5ll73ga/1.json",
      price,
      cnt
    );
    // console.log(signature);
    const valueToSend = price * cnt;
    console.log(currentAccount, vouchers, cnt, valueToSend, currentAccount);
    const result = await contract.methods
      .redeem(currentAccount, vouchers, cnt)
      .send({ value: valueToSend, from: currentAccount });
    console.log(result);
    setMsgType("success");
    setMsgText(`${index + 1} Luxyury NFTs have already minted now`);
    setMsgOpen(true);
  };

  return (
    <div className="block w-full min-h-[100vh]">
      <div
        onMouseEnter={() => SetIsHovered(true)}
        onMouseLeave={() => SetIsHovered(false)}
        className={
          "group z-10 absolute flex flex-col justify-between top-16 left-12 w-8 h-5 cursor-pointer transition-all duration-500 " +
          (isHovered ? "opacity-0" : "")
        }
      >
        <div className="w-8 h-[1.5px] bg-white group-hover:rotate-45 group-hover:translate-y-2 transition-all duration-300"></div>
        <div className="w-8 h-[1.5px] bg-white"></div>
        <div className="w-8 h-[2px] bg-white group-hover:-rotate-45 group-hover:-translate-y-2 transition-all duration-300"></div>
      </div>
      <div
        className={
          "bg-black w-full min-h-[100vh] flex items-center pt-20 flex-col transition-all duration-300 relative "
        }
      >
        <img
          className="mb-3"
          src="./static/icons/Lluxury-Libations-Logo-main.png"
          width="93"
          height="100"
        />
        <img
          className="mb-3"
          src="./static/icons/revenue-and-shares-Header-Section-h2.png"
          width="443"
        />
        <span className="mb-3 text-[18px] text-[#DBD6B7] font-sans uppercase font-semibold">
          {" "}
          revenue shares NFT DROP{" "}
        </span>
        <img src="./static/icons/Devider.png" width="93" height="50" />
        <div className="justify-center items-center lg:flex">
          <div className="w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center">
            <img src="./static/icons/ICONIC-NFT-1.gif" width="220" />
            <span className='mb-3 text-[32px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase tracking-wide'>
              {" "}
              ICONIC NFT{" "}
            </span>
            <img src="./static/icons/Devider.png" width="93" height="5" />
            <span className='text-[60px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'>
              {" "}
              25%{" "}
            </span>
            <span className='mb-3 text-[20px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#EBE6E7] font-sans uppercase'>
              {" "}
              Profit Share{" "}
            </span>
            <img src="./static/icons/Devider.png" width="93" height="5" />
            <span className='mb-3 text-[12px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'>
              {" "}
              The profits payout from bottles sold divided by the number of NFTs
              minted.{" "}
            </span>
            <div
              onClick={() => mintIconicNFT()}
              className="my-5 cursor-pointer w-[200px] font-bold text-[14px] tracking-widest h-[35px] border border-[#DBD6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#DBD6B7]"
            >
              MINT ICONIC NFT
            </div>
          </div>

          <div className="w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center">
            <img src="./static/icons/LL-logo-emplem.png" width="112" />
            <img
              className="mt-3"
              src="./static/icons/Devider.png"
              width="93"
              height="5"
            />
            <Link
              to="/reward"
              className="my-5 cursor-pointer w-[200px] font-bold text-[14px] tracking-widest h-[35px] border border-[#DBD6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#DBD6B7]"
            >
              CLAIM REWARDS
            </Link>
            <img src="./static/icons/Devider.png" width="93" height="5" />
          </div>

          <div className="w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center">
            <img src="./static/icons/luxury-NFT.gif" width="220" />
            <span className='mb-3 text-[32px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase tracking-wide'>
              Luxyury NFT{" "}
            </span>
            <img src="./static/icons/Devider.png" width="93" height="5" />
            <span className='text-[60px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'>
              {" "}
              15%{" "}
            </span>
            <span className='mb-3 text-[20px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#EBE6E7] font-sans uppercase'>
              {" "}
              Profit Share{" "}
            </span>
            <img src="./static/icons/Devider.png" width="93" height="5" />
            <span className='mb-3 text-[12px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'>
              {" "}
              The profits payout from bottles sold divided by the number of NFTs
              minted.{" "}
            </span>
            <div
              onClick={() => mintLuxyuryNFT()}
              className="my-5 cursor-pointer w-[200px] font-bold text-[14px] tracking-widest h-[35px] border border-[#DBD6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#DBD6B7]"
            >
              MINT LUXYURY NFT
            </div>
          </div>
        </div>
        LL-logo-emplem
      </div>
      {
        <div
          className={
            "absolute top-0 left-0 w-full h-full transition-all duration-500 " +
            (isHovered ? "bg-[rgba(60,60,60,0.9)] visible" : "invisible")
          }
        ></div>
      }
      {
        <div
          onMouseEnter={() => SetIsHovered(true)}
          onMouseLeave={() => SetIsHovered(false)}
        >
          <div
            className={
              "absolute top-0 border-black/30 border-r-[200px] border-l-[160px] border-t-[100vh] border-r-transparent transition-all duration-300 " +
              (isHovered ? "-left-0" : "-left-[400px]")
            }
          ></div>
          <div
            className={
              "absolute block top-10 w-48 h-[calc(100vh - 40px)] transition-all duration-300 " +
              (isHovered ? "left-10" : "-left-[400px]")
            }
          >
            <img
              className="mb-3"
              src="./static/icons/Lluxury-Libations-Logo-main.png"
              width="120"
              height="120"
            />
          </div>
          <div
            className={
              "absolute block top-[50%] h-[calc(50% - 40px)] transition-all duration-300 " +
              (isHovered ? "left-5" : "-left-[400px]")
            }
          >
            <Link
              to={"/mint"}
              className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48"
            >
              NFT&nbsp;MINT{" "}
            </Link>{" "}
            <br />
            <br />
            <Link
              to="/reward"
              className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48"
            >
              REWARD{" "}
            </Link>{" "}
            <br />
            <br />
            <Link
              to="/reward"
              className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48"
            >
              CAREERS{" "}
            </Link>{" "}
            <br />
            <br />
            <Link
              to="/reward"
              className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48"
            >
              CONTACT{" "}
            </Link>{" "}
            <br />
            <br />
          </div>
        </div>
      }
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
