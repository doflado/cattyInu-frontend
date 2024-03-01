import {ConnectWallet} from "../components/connectWallet";

const Header = () => {
     return (
          <div className="flex lg:px-[150px] px-[50px] pt-5 justify-between">
               <div className="flex text-white items-center font-semibold text-[35px] font-medium gap-x-3">
                    <img src="./logo.png" width={80} height={80}/>   Catty Inu
               </div>   
               <ConnectWallet />      
          </div>
     );
}

export default Header;