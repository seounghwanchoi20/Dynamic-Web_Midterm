import { headers } from "next/headers";
import styles from "./page.module.css";
import AzukiList from "./components/AzukiList";

export default async function Home() {
  const azuki = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "5eabf9d405344b6b8b12b5fa5be2dc6d",
    },
  };

  const request = await fetch(
    "https://api.opensea.io/api/v2/collection/azuki/nfts",
    azuki
  );
  const nftdata = await request.json();

  return (
    <div className={styles.Homepage}>
      <main className={styles.Homemain}>
        <h1>Who do you want to be?</h1>
        <AzukiList nftdata={nftdata} />
      </main>
    </div>
  );
}
