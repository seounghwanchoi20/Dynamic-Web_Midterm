import Link from "next/link";
import styles from "../page.module.css";

export default function AzukiList({ nftdata }) {
  return (
    <div className={styles.NFTlist}>
      {nftdata.nfts?.map((nft) => (
        <Link
          href={`/azuki/${nft.identifier}`}
          key={nft.identifier}
          className={styles.NFTitem}
        >
          <img
            key={nft.identifier}
            src={nft.image_url}
            alt={nft.name}
            className={styles.NFTimage}
          />
        </Link>
      ))}
    </div>
  );
}
