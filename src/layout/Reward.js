import React, {useState, useTransition} from 'react';
import { Link } from 'react-router-dom';
import Web3 from "web3";
import { ethers } from 'ethers';

import LazyMinter from '../lib/LazyMint';

import { ConnectWallet } from '../components/connectWallet';
import { useWeb3React } from '@web3-react/core';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// const web3 = new Web3('https://goerli.infura.io/v3/af866b3a78ea49b3b95d7765f609e388');
// Create the Label React component here

import IconicNFT from '../contracts/IconicNFT.json';
import IconicReward from '../contracts/IconicReward.json';
import LuxuryNFT from '../contracts/LuxuryNFT.json';
import LuxuryReward from '../contracts/LuxuryReward.json';
// const web3 = new Web3('https://goerli.infura.io/v3/af866b3a78ea49b3b95d7765f609e388');
// Create the Label React component here

const IconicNFTAddress = "0x1bb3aca48868Af7F503A52aF56fcD93237e236a2";
const IconicRewardAddress = "0x0EA5882689dD29f61D8E406c166faF9E00D8D718";
const LuxuryNFTAddress = "0x940aC5602042C4074eDD3FF0d04b369B91BCfC8B";
const LuxuryRewardAddress = "0xC742f3ccdb522c07f5e10A1317dEebdD053fDfB4";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Reward() {
  const [isHovered, SetIsHovered] = useState(false);

  const { library } = useWeb3React();
  const [msgOpen, setMsgOpen] = React.useState(false);
  const [msgText, setMsgText] = React.useState('');
  const [msgType, setMsgType] = React.useState('success');

  const claimIconicRewards = async () => {

    if(!library || !library.provider) return;

    const web3 = new Web3(library.provider);
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];
    const lazymint = new web3.eth.Contract(IconicNFT.abi, IconicNFTAddress);
    const contract = new web3.eth.Contract(IconicReward.abi, IconicRewardAddress);

    console.log(contract);
    const counter = await lazymint.methods.getLastTokenId().call();
    const result = await contract.methods.claimRewards(currentAccount, counter).send({from: currentAccount});
    console.log(result);
    setMsgType('info');
    setMsgText(`You claimed ${result} eths`);
    setMsgOpen(true);
  }

  const claimLuxuryRewards = async () => {

    if(!library || !library.provider) return;
 
    const web3 = new Web3(library.provider);
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];
    const lazymint = new web3.eth.Contract(LuxuryNFT.abi, LuxuryNFTAddress);
    const contract = new web3.eth.Contract(LuxuryReward.abi, LuxuryRewardAddress);

    console.log(contract);
    const counter = await lazymint.methods.getLastTokenId().call();
    console.log(currentAccount, counter);
    const result = await contract.methods.claimRewards(currentAccount, counter).send({from: currentAccount})
                          .on('receipt', (receipt) => {
                            // Transaction receipt received
                            console.log('Receipt:', receipt);
                            // Check the status field of the receipt
                            if (receipt.status) {
                              // Transaction was successful
                              console.log('Transaction successful');
                            } else {
                              // Transaction failed
                              console.log('Transaction failed');
                            }
                          })
                          .on('error', (error) => {
                            // Error occurred during the transaction
                            console.error('Transaction error:', error);
                          });
    console.log(result);
    setMsgType('info');
    setMsgText(`You claimed ${result} eths`);
    setMsgOpen(true);
  }
  
  return (
     <div className='block w-full min-h-[100vh]'>
          <div
          onMouseEnter={()=>SetIsHovered(true)}
          onMouseLeave={()=>SetIsHovered(false)}
          className={'group z-10 absolute flex flex-col justify-between top-16 left-12 w-8 h-5 cursor-pointer transition-all duration-500 '+(isHovered?'opacity-0':'')}
          >
          <div className='w-8 h-[1.5px] bg-white group-hover:rotate-45 group-hover:translate-y-2 transition-all duration-300'></div>
          <div className='w-8 h-[1.5px] bg-white'></div>
          <div className='w-8 h-[2px] bg-white group-hover:-rotate-45 group-hover:-translate-y-2 transition-all duration-300'></div>
          </div>
          <div className={'bg-black w-full min-h-[100vh] flex items-center pt-20 flex-col transition-all duration-300 relative '}>
          <img className='mb-3' src="./static/icons/Lluxury-Libations-Logo-main.png" width="93" height="100"/>
          <img className='mb-3' src="./static/icons/revenue-and-shares-Header-Section-h2.png" width="443"/>
          <span className='mb-3 text-[18px] text-[#DBD6B7] font-sans uppercase font-semibold'> rewards paid every 30 days </span>

          <span className='mb-3 text-[18px] text-[#DBD6B7] font-sans uppercase font-semibold flex gap-10'> 
               {/* <div className='flex-col items-center justify-center text-center'>
                    <div className='text-[32px] h-10'> 46 </div>
                    <div className='text-[11px]'> Days </div>
               </div>
               <div className='flex-col items-center justify-center text-center'>
                    <div className='text-[32px] h-10'> 07 </div>
                    <div className='text-[11px]'> Hours </div>
               </div>
               <div className='flex-col items-center justify-center text-center'>
                    <div className='text-[32px] h-10'> 54 </div>
                    <div className='text-[11px]'> Minutes </div>
               </div>
               <div className='flex-col items-center justify-center text-center'>
                    <div className='text-[32px] h-10'> 22 </div>
                    <div className='text-[11px]'> Seconds </div>
               </div> */}
          </span>

          <img src="./static/icons/Devider.png" width="93" height="50"/>
          <div className='justify-center items-center lg:flex'>
          <div className='w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center'>
               <img src="./static/icons/Lluxury-Libations-Logo-main.png" width="120"/>
               <span className='mb-3 text-[32px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase tracking-wide'> ICONIC NFT </span>
               <img src="./static/icons/Devider.png" width="93" height="5"/>
               <span className='text-[60px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'> 25% </span>
               <span className='mb-3 text-[20px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#EBE6E7] font-sans uppercase'> Profit Share </span>
               <img src="./static/icons/Devider.png" width="93" height="5"/>
               <span className='mb-3 text-[12px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'> The profits payout from 
                         bottles sold divided by the number of NFTs minted. </span> 
               <div
               onClick={()=>claimIconicRewards()}
               className='my-5 cursor-pointer w-[200px] hover:shadow-[#5fff77]  font-bold text-[14px] tracking-widest h-[40px] border border-[#DBD6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#DBD6B7]'
               > 
               CLAIM REWARDS
               </div>
          </div>

          <div className='w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center'>
               
               <img className='mt-3' src="./static/icons/Devider.png" width="143" height="5"/>
               <img src="./static/icons/LL-logo-emplem.png" width="112"/>
               <img src="./static/icons/Devider.png" width="143" height="5"/>
               
          </div>

          <div className='w-[350px] p-[45px] flex flex-none justify-center items-center flex-col text-center'>
               <img src="./static/icons/Lluxury-Libations-Logo-main.png" width="120"/>
               <span className='mb-3 text-[32px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase tracking-wide'> 
                    Luxyury NFT </span>
               <img src="./static/icons/Devider.png" width="93" height="5"/>
               <span className='text-[60px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'> 15% </span>
               <span className='mb-3 text-[20px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#EBE6E7] font-sans uppercase'> Profit Share </span>
               <img src="./static/icons/Devider.png" width="93" height="5"/>
               <span className='mb-3 text-[12px] font-bold font-["Cinzel Decorative", Sans-serif] text-[#DBD6B7] font-sans uppercase'> The profits payout 
                         from bottles sold divided by the number of NFTs minted. </span> 
               <div
               onClick={()=>claimLuxuryRewards()}
               className='my-5 cursor-pointer w-[200px] hover:shadow-[#5fff77] font-bold text-[14px] tracking-widest h-[40px] border border-[#DBD6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#DBD6B7]'
               > 
               CLAIM REWARDS
               </div>
          </div>
          </div>

          LL-logo-emplem
     </div>
      {
        (<div className={'absolute top-0 left-0 w-full h-full transition-all duration-500 '+(isHovered?'bg-[rgba(60,60,60,0.9)] visible':'invisible')}></div>)
      }
      {
        (
          <div 
            onMouseEnter={()=>SetIsHovered(true)}
            onMouseLeave={()=>SetIsHovered(false)}
          >
            <div
              className={'absolute top-0 border-black/30 border-r-[200px] border-l-[160px] border-t-[100vh] border-r-transparent transition-all duration-300 '+(isHovered?'-left-0':'-left-[400px]')}>
                
            </div>
            <div className={'absolute block top-10 w-48 h-[calc(100vh - 40px)] transition-all duration-300 '+(isHovered?'left-10':'-left-[400px]')}>
              <img className='mb-3' src="./static/icons/Lluxury-Libations-Logo-main.png" width="120" height="120"/>
            </div>
            <div className={'absolute block top-[50%] h-[calc(50% - 40px)] transition-all duration-300 '+(isHovered?'left-5':'-left-[400px]')}>
               <Link to={"/mint"} className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48">
                 NFT&nbsp;MINT </Link> <br/><br/>
               <Link to="/reward" className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48">
                 REWARD </Link> <br/><br/>
               <Link to="/reward" className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48">
                 CAREERS </Link> <br/><br/>
               <Link to="/reward" className="text-[#DBD6B7] text-[16px] font-bold cursor-pointer transition-all duration-200 w-0 tracking-widest py-2 px-4 h-10 hover:bg-[rgba(60,60,60,0.9)] hover:w-48">
                 CONTACT </Link> <br/><br/>
            </div>
        </div>)
      }
    </div>
  );
}
export default Reward;