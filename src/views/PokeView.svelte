<script>
  import { fetchPokemon } from '../services/api';
  export let onBack = () => {};

  let searchOrigin = 'pikachu';
  let searchTerm = searchOrigin;
  let pokemonPromise = fetchPokemon(searchTerm);

  function search() {
    if (!searchOrigin.trim()) return;
    searchTerm = searchOrigin.toLowerCase().trim();
    pokemonPromise = fetchPokemon(searchTerm);
  }

  function randomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    searchOrigin = randomId.toString();
    search();
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') search();
  }
</script>

<div class="view-container">
  <button class="back-btn glass-panel" on:click={onBack}>← Volver</button>
  
  <div class="content glass-panel">
    <div class="header">
      <h2 class="title" style="margin-bottom: 0;">PokeAPI</h2>
      <p class="subtitle" style="margin-bottom: 1rem; margin-top: 0.5rem;">Temática: Pokedex / Búsqueda</p>
    </div>

    <div class="search-box glass-panel">
      <input 
        type="text" 
        bind:value={searchOrigin} 
        on:keydown={handleKeydown}
        placeholder="Nombre o ID del Pokémon (ej. charizard, 25)"
      />
      <button on:click={search}>Buscar</button>
      <button class="random-btn" on:click={randomPokemon} title="Pokémon Aleatorio">🎲</button>
    </div>

    {#await pokemonPromise}
      <div class="loading-state">
        <div class="spinner"></div>
      </div>
    {:then pokemon}
      {#if pokemon}
        <div class="pokemon-card glass-panel">
          <img src={pokemon.image} alt={pokemon.name} class="poke-img" />
          <h3 class="poke-name">
            <span class="poke-id">#{pokemon.id}</span> {pokemon.name}
          </h3>
          
          <div class="types">
            {#each pokemon.types as type}
              <span class="type-badge">{type}</span>
            {/each}
          </div>

          <div class="stats">
            {#each pokemon.stats as stat}
              <div class="stat-row">
                <span class="stat-name">{stat.name}</span>
                <div class="stat-bar-container">
                  <div class="stat-bar" style="width: {Math.min(stat.value, 100)}%"></div>
                </div>
                <span class="stat-value">{stat.value}</span>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <div class="error-state">
          <p>No se encontró un Pokémon con ese nombre.</p>
        </div>
      {/if}
    {:catch error}
      <div class="error-state">
        <p>Hubo un error de conexión con la PokeAPI.</p>
      </div>
    {/await}
  </div>
</div>

<style>
  .view-container {
    animation: slideIn 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-btn {
    align-self: flex-start;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.1);
  }

  .back-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }

  .content {
    padding: 3rem;
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  .search-box {
    display: flex;
    margin-bottom: 2rem;
    padding: 0.5rem;
    border-radius: 50px;
  }

  .search-box input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 1.1rem;
    padding: 0.5rem 1.5rem;
    font-family: var(--font-family);
  }

  .search-box button {
    background: #ef4444;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
  }

  .search-box button.random-btn {
    background: #f59e0b;
    margin-left: 0.5rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;
  }

  .search-box button:hover {
    background: #dc2626;
  }

  .search-box button.random-btn:hover {
    background: #d97706;
  }

  .loading-state, .error-state {
    margin-top: 2rem;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--glass-border);
    border-top-color: #ef4444;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  .pokemon-card {
    padding: 2rem;
    background: rgba(0,0,0,0.2);
  }

  .poke-img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5));
    animation: hoverImg 3s ease-in-out infinite;
  }

  .poke-name {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .poke-id {
    font-size: 1.2rem;
    color: var(--text-secondary);
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
  }

  .types {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .type-badge {
    background: rgba(255,255,255,0.1);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    text-transform: capitalize;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .stat-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-name {
    width: 80px;
    text-align: right;
    font-size: 0.85rem;
    text-transform: capitalize;
    color: var(--text-secondary);
  }

  .stat-bar-container {
    flex: 1;
    height: 8px;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    overflow: hidden;
  }

  .stat-bar {
    height: 100%;
    background: linear-gradient(90deg, #fcd34d, #ef4444);
    border-radius: 4px;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .stat-value {
    width: 30px;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes hoverImg {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
</style>
