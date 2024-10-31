"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import AzukiNft from "./AzukiNft";
import Pokemon from "./Pokemon";

export default function NftPokemonDisplay({ nfttrait, identifier }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const showPokemon = () => {
    const pokemonId = identifier - 9900;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        return response.json();
      })
      .then((Pokemoninfo) => {
        setPokemonData(Pokemoninfo);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  async function nameToColor(name) {
    // Hash the name using SHA-256
    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(name)
    );

    // Convert the hash to an array of bytes
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // Use the first 3 bytes for RGB values
    const r = hashArray[0];
    const g = hashArray[1];
    const b = hashArray[2];

    // Return the color as an RGB string
    return `rgb(${r}, ${g}, ${b})`;
  }

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  // Use an effect to set the background color when the component mounts
  useEffect(() => {
    nameToColor(nfttrait.nft.name).then((color) => setBackgroundColor(color));
  }, [nfttrait.nft.name]);

  return (
    <div className={styles.PokemonPage} style={{ backgroundColor }}>
      <main className={styles.PokemonMain}>
        <div className={styles.nftAndButtonContainer}>
          <AzukiNft nfts={nfttrait} />
          {!pokemonData && (
            <button onClick={showPokemon} className={styles.FetchButton}>
              It's time to get your pet
            </button>
          )}
        </div>
        <div id="pokemon-container" className={styles.PokemonContainer}>
          {pokemonData && <Pokemon Pokemontrait={pokemonData} />}
        </div>
        {error && <p>Error: {error}</p>}
      </main>
    </div>
  );
}
