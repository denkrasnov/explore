<script>
  import { activePokemonName } from './stores.js';

  export let pokemon;

  let pokemonHeight;
  let pokemonWeight;
  $: isActive = pokemonHeight && pokemonWeight && $activePokemonName === pokemon.name;
  
  const handleOnClick = async (url) =>{
      const response = await fetch(url);
      const pokemon = await response.json();

       pokemonHeight = pokemon.height;
       pokemonWeight = pokemon.weight;

       activePokemonName.update(() => pokemon.name)
    }
</script>

<style>
  li > div {
      color: tomato
  }
</style>

<li on:click={()=> handleOnClick(pokemon.url)}>
  {pokemon.name}
  {#if isActive}
  <div>
    Pokemon's height: {pokemonHeight}
  </div>
  <div>
    Pokemon's weight: {pokemonWeight}
  </div>
  {/if}
</li>