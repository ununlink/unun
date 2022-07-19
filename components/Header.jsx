import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Header() {
   return (
      <div className="conectar">
         <ConnectButton accountStatus="address" showBalance={false}  />
      </div>
   )
}