import Head from 'next/head'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from '../components/Header';
import Link from 'next/link';
import { useAccount, useContract, useProvider, useContractWrite, useWaitForTransaction, useContractRead, etherscanBlockExplorers } from 'wagmi';
import * as ERC721_abi from "../ZoraNFTCreatorProxy-Hardhat/node_modules/@zoralabs/nft-drop-contracts/dist/artifacts/ERC721Drop.sol/ERC721Drop.json"
// import PostMintDialog from '../components/PostMintDialog';
import styles from '../styles/Home.module.css'

const heavenly = "#40bedc"


const Mint = () => {

   // get account hook
   const { data: account, isError: accountError, isLoading: accountLoading } = useAccount(); 
   const currentUserAddress = account ? account.address.toString() : ""

     // totalSupply read call
   const { data: totalSupplyData, isError: totalSupplyError, isLoading: totalSupplyLoading } = useContractRead(
      {
         addressOrName: "0x8B804054d3E8Ee30b2D26Df57D5e448510d14449",
         contractInterface: ERC721_abi.abi
      },      
      "totalSupply",
      {
         watch: true,
      },
      {
         onError(error) {
            console.log("error: ", error)
         },
         onSuccess(totalSupplyData) {
            console.log("totalSupply: ", totalSupplyData)
         },
      },   
   )   

   // mint call
   const mintPrice = "1000000000000000" // 0.001 eth

   const { data: holderMintData, isError: holderMintError, isLoading: holderMintLoading, status: holderMintStatus, write: holderMintWrite } = useContractWrite(
      {
         addressOrName: "0x8B804054d3E8Ee30b2D26Df57D5e448510d14449",
         contractInterface: ERC721_abi.abi
      },
      "purchase",
      {
         args: [
            "1" // quantity
         ],
         overrides: {
            value: mintPrice 
         },
         onError(error) {
            console.log("Error: ", error)
         }
      }
   )
   
   const { data: holderMintWaitData, isError: holderMintWaitError, isLoading: holderMintWaitLoading } = useWaitForTransaction({
      hash:  holderMintData?.hash,
      onSuccess(holderMintWaitData) {
         console.log("txn complete: ", holderMintWaitData)
         console.log("txn hash: ", holderMintWaitData.transactionHash)
      }
   })           


   return (
      <div>
         <Header />
         <main  className={styles.main}>
            <div>
               <div>
                  <div>
                     {`${10 - totalSupplyData} / 10 Remaining`}
                  </div>
                  <button
                     onClick={() => holderMintWrite()}
                  >                     
                     MINT
                  </button>
                  {/* <PostMintDialog 
                     holderTxnLoadingStatus={holderMintWaitLoading}
                     holderTxnSuccessStatus={holderMintStatus}
                     holderTxnHashLink={holderMintWaitData}
                     colorScheme={heavenly}
                  /> */}
                  { holderMintWaitLoading === true ? (
                     <div>           
                        {/* <img
                           width="20px" 
                           src="/SVG-Loaders-master/svg-loaders/tail-spin.svg"
                        /> */}
                        minting ...
                        <div>
                           Mint Price: 0.001 Ξ
                        </div>                        
                     </div>   
                     ) : (                  
                     <div>
                        <div>
                           Mint Price: 0.001 Ξ
                        </div>
                     </div>                                          
                  )}                         
                  <Link href="/">
                     <a>
                        ← BACK TO HOME
                     </a>
                  </Link>                          
               </div>          
            </div>
         </main>
      </div>
   )
}

export default Mint;



// 0x8B804054d3E8Ee30b2D26Df57D5e448510d14449