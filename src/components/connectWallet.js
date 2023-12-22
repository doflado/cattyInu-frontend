import React from "react";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ConnectWallet = (props) => {
  const availableChainIDs = [1, 4];
  const { activate, deactivate } = useWeb3React();
  const { active, chainId, account, library } = useWeb3React();
  const Injected = new InjectedConnector();

  const [msgOpen, setMsgOpen] = React.useState(false);
  const [msgText, setMsgText] = React.useState("");
  const [msgType, setMsgType] = React.useState("success");

  const connectMetamask = () => {
    activate(Injected);
  };

  const disconnectMetamask = () => {
    deactivate(Injected);
  };

  React.useEffect(() => {
    if (active) {
      setMsgText("You connected to metamask");
      setMsgType("info");
      setMsgOpen(true);
      // if (chainId != 1) {
      //   setMsgText('You need to switch Ethereum main network')
      //   setMsgType('error')
      //   setMsgOpen(true)
      //   library.provider.request({
      //     method: 'wallet_switchEthereumChain',
      //     params: [{ chainId: '0x1' }]
      //   })
      //   .then(cb => {
      //     console.log(cb)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   });
      // }
    }
  }, [active, chainId, account]);

  return (
    <>
      {!active ? (
        <div
          onClick={() => connectMetamask()}
          className="my-5 relative cursor-pointer rounded-3xl lg:w-[175px] w-[50px] font-bold text-[14px] tracking-widest h-[50px] border border-[#aBa6B7] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#aBa6B7]"
        >
          <span className="lg:visible invisible absolute text-center flex justify-center items-center">
            <img src="/metaicon.png" width="30"></img> ConnectWallet
          </span>
          <span className="lg:invisible visible absolute">
            <img src="/metaicon.png" width="30"></img>
          </span>
        </div>
      ) : (
        <div
          onClick={() => disconnectMetamask()}
          className="my-5 relative cursor-pointer rounded-3xl lg:w-[175px] w-[50px] font-bold text-[14px] tracking-widest h-[50px] border border-[#03ff10] justify-center items-center flex text-[#DBD6B7] shadow-md shadow-[#4dff76]"
        >
          <span className="lg:visible invisible absolute flex  justify-center items-center">
            <img src="/metaicon.png" width="30"></img>DISCONNECT
          </span>
          <span className="lg:invisible visible absolute">
            <img src="/metaicon.png" width="30"></img>
          </span>
        </div>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
    </>
  );
};
