import {ConnectWallet} from "../components/connectWallet";

const Header = () => {
     return (
          <div className="flex px-[50px] pt-5 justify-between">
               <div className="flex text-white items-center text-[35px] font-medium font-serif gap-x-3">
                    <img src="./logo.png" width={80} height={80}/>   Catty Inu
               </div>   
               <ConnectWallet />      
          </div>
     );
}

export default Header;