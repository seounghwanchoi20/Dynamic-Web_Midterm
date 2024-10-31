import styles from "../page.module.css";

export default function Pokemon({ Pokemontrait }) {
  return (
    <div key={Pokemontrait.id} className={styles.PokemonMatch}>
      <img
        src={Pokemontrait.sprites.front_default}
        alt={Pokemontrait.name}
        className={styles.PokemonImage}
      />
      <p className={styles.CongratsText}>
        🎉 Congratulations! You got {Pokemontrait.name}! 🎉
      </p>
    </div>
  );
}
