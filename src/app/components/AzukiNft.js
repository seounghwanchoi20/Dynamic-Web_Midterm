import styles from "../page.module.css";

export default function AzukiNft({ nfts }) {
  return (
    <div key={nfts.nft.identifier} className={styles.IndividualMain}>
      <h1>Your Azuki</h1>
      <img
        src={nfts.nft.image_url}
        alt={nfts.nft.name}
        className={styles.IndividualNft}
      />
      <div className={styles.TraitText}>
        {nfts.nft.traits.map((trait, index) => (
          <div key={index}>
            <p>
              <strong>Your</strong> {trait.trait_type} is {trait.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
