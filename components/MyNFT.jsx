import { useNFT, useNFTMetadata } from '../node_modules/@zoralabs/nft-hooks'

export default function MyNFT() {
    const { data } = useNFT('0x8a9602B628Cea36f7b38EBBb7Cc7342cCa7eA9d6', '1')
  
    return (
      <div>
        <h3>{data.metadata.name}</h3>
        <p>{data.metadata.description}</p>
        <p>Owned by: {data.nft.owner.address}</p>
      </div>
    // <div>uwu</div>
    )
  }