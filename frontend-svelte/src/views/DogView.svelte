<script>
  import { fetchRandomDog } from '../services/api';
  export let onBack = () => {};

  let dogImagePromise = fetchRandomDog();

  function reloadDog() {
    dogImagePromise = fetchRandomDog();
  }
</script>

<div class="view-container">
  <button class="back-btn glass-panel" on:click={onBack}>← Volver</button>
  
  <div class="content glass-panel">
    <div class="header">
      <h2 class="title" style="margin-bottom: 0;">Dog API</h2>
      <p class="subtitle" style="margin-bottom: 1rem; margin-top: 0.5rem;">Temática: Animales</p>
    </div>

    <!-- Svelte promise handling is awesome! -->
    {#await dogImagePromise}
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Buscando un perrito...</p>
      </div>
    {:then imageUrl}
      <div class="result-state">
        <img src={imageUrl} alt="Un lindo perrito" class="dog-img" />
        <button class="reload-btn" on:click={reloadDog}>¡Otro perrito!</button>
      </div>
    {:catch error}
      <div class="error-state">
        <p>Hubo un error al cargar el perrito 😢</p>
        <button on:click={reloadDog}>Reintentar</button>
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

  .loading-state, .error-state, .result-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--glass-border);
    border-top-color: #fcd34d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .dog-img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    object-fit: cover;
  }

  .reload-btn {
    background: #fcd34d;
    color: #1e1b4b;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .reload-btn:hover {
    background: #fbbf24;
    transform: translateY(-2px);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
