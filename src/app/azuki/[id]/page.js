import { headers } from "next/headers";
import styles from "../../page.module.css";
import AzukiNft from "../../components/AzukiNft";
import Pokemon from "../../components/Pokemon";
import NftPokemonDisplay from "../../components/NftPokemonDisplay";

export default async function ShowNFT({ params }) {
  const identifier = params.id;

  const azukiNFT = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "5eabf9d405344b6b8b12b5fa5be2dc6d",
    },
  };

  const requestNFT = await fetch(
    `https://api.opensea.io/api/v2/chain/ethereum/contract/0xed5af388653567af2f388e6224dc7c4b3241c544/nfts/${identifier}`,
    azukiNFT
  );
  const nfttrait = await requestNFT.json();

  return <NftPokemonDisplay nfttrait={nfttrait} identifier={identifier} />;
}
