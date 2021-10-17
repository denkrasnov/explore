<script>
  import { onMount } from "svelte";
  import Pokemon from "./Pokemon.svelte"

    let pokemons =[];
    onMount(async ()=>{
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const json = await response.json();
      pokemons = json.results;
    })
</script>

<ul>
  {#each pokemons as pokemon}
  <Pokemon pokemon={pokemon}/>
  {/each}
</ul>