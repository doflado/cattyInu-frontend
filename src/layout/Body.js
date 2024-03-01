import NftMint from "./NftMint";

const Body = () => {
  return (
    <div className="flex px-[50px] xl:px-[200px] lg:py-[150px] py-[80px] justify-center flex-col gap-y-20 text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-x-20 items-center">
        <img src="./pic.png" width={500} height={500} />
        <div className="lg:w-[800px] flex flex-col gap-y-10">
          <div className="lg:text-[100px] text-[60px] font-semibold">Catty Inu</div>
          <div className="lg:w-[600px] lg:text-[43px] text-[30px] uppercase tracking-wider text-yellow-100">
            Catty Inu is sweeping the whole memecoins
          </div>
          <div className="flex gap-x-7">
               <a href="#" className="w-[150px] text-center px-5 py-2 font-semibold shadow-md shadow-gray-300 rounded-full bg-[#4157A4]">Telegram</a>
               <a href="#" className="w-[150px] text-center px-5 py-2 font-semibold shadow-md shadow-gray-300 rounded-full bg-[#4157A4]">Twitter</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="lg:text-[60px] text-[40px] font-bold text-center">About Catty Inu</div>
        <div className="lg:text-[40px] text-[20px] tracking-wider text-yellow-100">
          Catty Inu will be developing NFTs of puppies that introduce the
          concepts of growth and decay into the solidity smart contracts. The
          Catty inu NFTs will be custom made game assets where you will be able
          to interact with your pet in our metaverse.
        </div>
      </div>

      <div className="flex flex-col justify-center w-full">
        <div className="text-center text-[60px] font-bold">Mint NFTs</div>
        <div className="text-center text-[40px] text-yellow-100">
          {" "}
          ( Users can mint Nfts here )
        </div>
        <NftMint />
      </div>

      <div className="flex  flex-col lg:flex-row justify-between gap-x-20 items-center">
        <img src="./pic2.png" width={600} height={600} />
        <div className="lg:w-[800px] flex flex-col gap-y-10">
          <div className="lg:text-[35px] text-[28px] tracking-wider text-yellow-100">
            As a team, we hail from different verticals of the IT world, and
            together contribute strength in a diverse range of expertise and
            experience, including managing, navigating and operating blockchain
            technology and interpreting technical analysis. Our main aim is to
            provide a unique type of passive income to our loyal holders.
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="flex flex-col gap-y-10 bg-[#121D47] py-10 rounded-2xl">
        <div className="text-[70px] text-center font-bold">Roadmap</div>
        <div className="flex gap-x-[80px] flex-wrap justify-center gap-y-[50px]">
          <div className="w-[300px]">
            <div className="text-[45px] uppercase flex flex-col mb-5">Phase 1:</div>
            <div className="lg:text-[30px] text-[20px] tracking-wider text-yellow-100">
              Website build Social build Contract build NFTs relase Presale
              Pinksale Launch PancakeSwap First CEX
            </div>
          </div>
          <div className="w-[300px]">
            <div className="text-[45px] uppercase flex flex-col mb-5">Phase 2:</div>
            <div className="lg:text-[30px] text-[20px] tracking-wider text-yellow-100">
              Second CEX Launch NFT TofuNFT Certik Audit 2000 holders
              Coinmarketcap Coingecko
            </div>
          </div>
          <div className="w-[300px]">
            <div className="text-[45px] uppercase flex flex-col mb-5">Phase 3:</div>
            <div className="lg:text-[30px] text-[20px] tracking-wider text-yellow-100">
              5000 holders Third CEX Launch DAPP Launch Staking Pool Partnership
              with MM price
            </div>
          </div>
          <div className="w-[300px]">
            <div className="text-[45px] uppercase flex flex-col mb-5">Phase 4:</div>
            <div className="lg:text-[30px] text-[20px] tracking-wider text-yellow-100">
              BSCScan Logo update Telegram 20K+ members TOP MEME project
              partnership 10,000 Holders Banner at New York city
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 mb-40">
        <div className="text-[50px] lg:text-[70px] text-center font-bold">Partnership</div>
        <div className="flex gap-x-[80px] justify-center flex-wrap gap-y-10">
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./1.png" width={120} height={120} />
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./2.png" width={120} height={120} />
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./3.png" width={120} height={120} />
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./4.png" width={120} height={120} />
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./5.png" width={120} height={120} />
          <img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./6.png" width={120} height={120} />
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        <div className="lg:text-[70px] text-[50px] text-center font-bold">Follow US</div>
        <div className="flex gap-x-[80px] justify-center">
          <a href="#"><img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./x.png" width={100} height={100} /></a>
          <a href="#"><img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./telegram.png" width={100} height={100} /></a>
          <a href="#"><img className="rounded-full shadow-lg shadow-white bg-gray-300" src="./1.png" width={100} height={100} /></a>
        </div>
      </div>
    </div>
  );
};

export default Body;
