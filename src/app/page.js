import styles from "./page.module.css";

export default async function Home() {
  const queryURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;



const request = await fetch(queryURL);
const pokemonData = await request.json();

console.log(pokemonData);

  return (
    <div className={styles.page} >
      <Header/>
      <main className={styles.main}>
        </main>
        </div>
  );
}